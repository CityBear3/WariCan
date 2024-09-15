package interceptor

import (
	"context"
	"errors"
	"log"
	"strings"

	"connectrpc.com/connect"
	"firebase.google.com/go/v4/auth"
	"github.com/CityBear3/WariCan/internal/domain/user"
	"github.com/CityBear3/WariCan/internal/infrastructure/db"
	"github.com/CityBear3/WariCan/internal/infrastructure/db/dao"
	"github.com/google/uuid"
)

const XDevelopmentUserHeader = "X-Development-User"
const AuthorizationHeader = "Authorization"

type AuthenticationInterceptor struct {
	authClient    *auth.Client
	dbConn        *db.Connection
	isDevelopment bool
}

func NewAuthenticationInterceptor(
	authClient *auth.Client,
	dbConn *db.Connection,
	isDevelopment bool,
) AuthenticationInterceptor {
	return AuthenticationInterceptor{
		authClient:    authClient,
		dbConn:        dbConn,
		isDevelopment: isDevelopment,
	}
}

func (a AuthenticationInterceptor) WrapUnary(next connect.UnaryFunc) connect.UnaryFunc {
	return func(ctx context.Context, req connect.AnyRequest) (connect.AnyResponse, error) {
		if a.isDevelopment {
			userID := req.Header().Get(XDevelopmentUserHeader)
			parse, err := uuid.Parse(userID)
			if err == nil {
				return next(
					context.WithValue(ctx, UserIDContextKey, user.ID(parse)),
					req,
				)
			}
		}

		userID, err := authenticate(ctx, a.authClient, req.Header().Get(AuthorizationHeader), dao.New(a.dbConn.Conn()))
		if err != nil {
			log.Printf("failed to authenticate: %v\n", err)
			return nil, connect.NewError(connect.CodeUnauthenticated, err)
		}

		return next(context.WithValue(ctx, UserIDContextKey, userID), req)
	}
}

func (a AuthenticationInterceptor) WrapStreamingClient(next connect.StreamingClientFunc) connect.StreamingClientFunc {
	return func(ctx context.Context, spec connect.Spec) connect.StreamingClientConn {
		return next(ctx, spec)
	}
}

func (a AuthenticationInterceptor) WrapStreamingHandler(next connect.StreamingHandlerFunc) connect.StreamingHandlerFunc {
	return func(ctx context.Context, conn connect.StreamingHandlerConn) error {
		if a.isDevelopment {
			userID := conn.RequestHeader().Get(XDevelopmentUserHeader)
			parse, err := uuid.Parse(userID)
			if err == nil {
				return next(
					context.WithValue(ctx, UserIDContextKey, user.ID(parse)),
					conn,
				)
			}
		}

		userID, err := authenticate(
			ctx, a.authClient, conn.RequestHeader().Get(AuthorizationHeader), dao.New(a.dbConn.Conn()),
		)
		if err != nil {
			log.Printf("failed to authenticate: %v\n", err)
			return connect.NewError(connect.CodeUnauthenticated, err)
		}

		return next(context.WithValue(ctx, UserIDContextKey, userID), conn)
	}
}

func authenticate(ctx context.Context, authClient *auth.Client, token string, queries *dao.Queries) (user.ID, error) {
	token, ok := strings.CutPrefix("Bearer ", token)
	if !ok {
		return user.ID{}, errors.New("unauthenticated. invalid token")
	}

	idToken, err := authClient.VerifyIDTokenAndCheckRevoked(ctx, token)
	if err != nil {
		log.Printf("failed to verify id token: %v\n", err)
		return user.ID{}, errors.New("unauthenticated. invalid token")
	}

	uid, err := uuid.Parse(idToken.UID)
	if err != nil {
		log.Printf("failed to parse user id: %v\n", err)
		return user.ID{}, errors.New("unauthenticated. failed to parse user id")
	}

	userRow, err := queries.GetUserByUID(ctx, uid)
	if err != nil {
		log.Printf("failed to get user by uid: %v\n", err)
		return user.ID{}, errors.New("unauthenticated. user not found")
	}

	return user.NewUserID(userRow.ID), nil
}
