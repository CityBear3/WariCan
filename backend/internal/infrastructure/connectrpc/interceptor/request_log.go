package interceptor

import (
	"context"
	"log"

	"connectrpc.com/connect"
)

type RequestLogInterceptor struct{}

func NewRequestLogInterceptor() *RequestLogInterceptor {
	return &RequestLogInterceptor{}
}

func (r RequestLogInterceptor) WrapUnary(next connect.UnaryFunc) connect.UnaryFunc {
	return func(ctx context.Context, req connect.AnyRequest) (connect.AnyResponse, error) {
		if req.Spec().IsClient {
			return next(ctx, req)
		}

		log.Printf("Request Procedure: %v", req.Spec().Procedure)

		return next(ctx, req)
	}
}

func (r RequestLogInterceptor) WrapStreamingClient(next connect.StreamingClientFunc) connect.StreamingClientFunc {
	return func(ctx context.Context, spec connect.Spec) connect.StreamingClientConn {
		return next(ctx, spec)
	}
}

func (r RequestLogInterceptor) WrapStreamingHandler(next connect.StreamingHandlerFunc) connect.StreamingHandlerFunc {
	return func(ctx context.Context, conn connect.StreamingHandlerConn) error {
		log.Printf("Request Procedure: %v", conn.Spec().Procedure)

		return next(ctx, conn)
	}
}
