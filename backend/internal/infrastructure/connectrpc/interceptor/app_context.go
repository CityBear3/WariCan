package interceptor

import (
	"context"
	"errors"
	"time"

	"connectrpc.com/connect"
	"github.com/CityBear3/WariCan/internal/core/app_context"
	"github.com/CityBear3/WariCan/internal/domain/user"
	"github.com/CityBear3/WariCan/internal/infrastructure/connectrpc"
	"github.com/google/uuid"
)

const IdempotencyKeyHeader = "X-Idempotency-Key"
const UserIDContextKey = "UserID"

type AppContextInterceptor struct{}

func NewAppContextInterceptor() AppContextInterceptor {
	return AppContextInterceptor{}
}

func (a AppContextInterceptor) WrapUnary(next connect.UnaryFunc) connect.UnaryFunc {
	return func(ctx context.Context, req connect.AnyRequest) (connect.AnyResponse, error) {
		if req.Spec().IsClient {
			return next(ctx, req)
		}

		userID, err := parseUserID(ctx.Value(UserIDContextKey).(string))
		if err != nil {
			return nil, errors.New("failed to parse user id")
		}

		actx, err := createAppContext(req.Header().Get(
			IdempotencyKeyHeader),
			userID,
		)
		if err != nil {
			return nil, connectrpc.CreateErrorResponse(err)
		}
		ctx = context.WithValue(ctx, app_context.AppContextKey, actx)

		return next(ctx, req)
	}
}

func (a AppContextInterceptor) WrapStreamingClient(next connect.StreamingClientFunc) connect.StreamingClientFunc {
	return func(ctx context.Context, spec connect.Spec) connect.StreamingClientConn {
		return next(ctx, spec)
	}
}

func (a AppContextInterceptor) WrapStreamingHandler(next connect.StreamingHandlerFunc) connect.StreamingHandlerFunc {
	return func(ctx context.Context, conn connect.StreamingHandlerConn) error {
		userID, err := parseUserID(conn.RequestHeader().Get(UserIDContextKey))
		if err != nil {
			return errors.New("failed to parse user id")
		}

		actx, err := createAppContext(
			conn.RequestHeader().Get(IdempotencyKeyHeader),
			userID,
		)

		if err != nil {
			return connectrpc.CreateErrorResponse(err)
		}

		ctx = context.WithValue(ctx, app_context.AppContextKey, actx)
		return next(ctx, conn)
	}
}

func createAppContext(idempotencyKeyStr string, userID user.ID) (app_context.AppContext, error) {
	idempotencyKey, err := uuid.Parse(idempotencyKeyStr)
	if err != nil {
		return app_context.AppContext{}, errors.New("invalid idempotency key")
	}

	actx := app_context.NewAppContext(idempotencyKey, uuid.New(), userID, time.Now().UTC())

	return actx, nil
}

func parseUserID(userIDStr string) (user.ID, error) {
	parse, err := uuid.Parse(userIDStr)
	if err != nil {
		return user.ID{}, err
	}

	return user.NewUserID(parse), nil
}
