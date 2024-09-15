package interceptor

import (
	"connectrpc.com/connect"
	"context"
	"errors"
	"github.com/CityBear3/WariCan/internal/core/app_context"
	"github.com/CityBear3/WariCan/internal/domain/user"
	"github.com/CityBear3/WariCan/internal/infrastructure/connectrpc"
	"github.com/google/uuid"
	"time"
)

const IdempotencyKeyHeader = "X-Idempotency-Key"

type AppContextInterceptor struct{}

func NewAppContextInterceptor() AppContextInterceptor {
	return AppContextInterceptor{}
}

func (a AppContextInterceptor) WrapUnary(next connect.UnaryFunc) connect.UnaryFunc {
	// TODO: get idempotency key from db and check if it has been processed before
	return func(ctx context.Context, req connect.AnyRequest) (connect.AnyResponse, error) {
		if req.Spec().IsClient {
			return next(ctx, req)
		}

		// TODO: get user id from context
		actx, err := createAppContext(req.Header().Get(
			IdempotencyKeyHeader),
			uuid.MustParse("CF290BEE-9EB4-4E28-BEA9-C8C3B37CB621"),
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
	// TODO: get idempotency key from db and check if it has been processed before
	return func(ctx context.Context, conn connect.StreamingHandlerConn) error {
		// TODO: get user id from context
		actx, err := createAppContext(
			conn.RequestHeader().Get(IdempotencyKeyHeader),
			uuid.MustParse("CF290BEE-9EB4-4E28-BEA9-C8C3B37CB621"),
		)
		if err != nil {
			return connectrpc.CreateErrorResponse(err)
		}

		ctx = context.WithValue(ctx, app_context.AppContextKey, actx)
		return next(ctx, conn)
	}
}

func createAppContext(idempotencyKeyStr string, userID uuid.UUID) (app_context.AppContext, error) {
	idempotencyKey, err := uuid.Parse(idempotencyKeyStr)
	if err != nil {
		return app_context.AppContext{}, errors.New("invalid idempotency key")
	}

	actx := app_context.NewAppContext(idempotencyKey, uuid.New(), user.NewUserID(userID), time.Now().UTC())

	return actx, nil
}
