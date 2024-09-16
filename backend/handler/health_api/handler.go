package health_api

import (
	"context"

	"connectrpc.com/connect"
	health "github.com/CityBear3/WariCan/protobuf/health"
	"google.golang.org/protobuf/types/known/emptypb"
)

type Handler struct{}

func NewHandler() *Handler {
	return &Handler{}
}

func (h Handler) Check(ctx context.Context, c *connect.Request[emptypb.Empty]) (*connect.Response[health.HealthCheckResponse], error) {
	return connect.NewResponse(&health.HealthCheckResponse{
		Status: health.HealthCheckResponse_SERVING,
	}), nil
}
