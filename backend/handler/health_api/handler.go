package health_api

import (
	"context"
	"time"

	"connectrpc.com/connect"
	health "github.com/CityBear3/WariCan/protobuf/health"
)

type Handler struct{}

func (h Handler) Check(ctx context.Context, c *connect.Request[health.HealthCheckRequest]) (*connect.Response[health.HealthCheckResponse], error) {
	time.Sleep(3 * time.Second)
	return connect.NewResponse(&health.HealthCheckResponse{
		Status: health.HealthCheckResponse_SERVING,
	}), nil
}

func (h Handler) Watch(ctx context.Context, c *connect.Request[health.HealthCheckRequest], c2 *connect.ServerStream[health.HealthCheckResponse]) error {
	time.Sleep(3 * time.Second)
	if err := c2.Send(&health.HealthCheckResponse{
		Status: health.HealthCheckResponse_SERVING,
	}); err != nil {
		return err
	}

	return nil
}

func NewHandler() *Handler {
	return &Handler{}
}
