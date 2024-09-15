package group_api

import (
	"github.com/CityBear3/WariCan/internal/app_service/group_app_service"
	"github.com/CityBear3/WariCan/internal/domain/transaction"
)

type Handler struct {
	connection      transaction.Connection
	groupAppService *group_app_service.Service
}

func NewHandler(connection transaction.Connection, groupAppService *group_app_service.Service) *Handler {
	return &Handler{
		connection:      connection,
		groupAppService: groupAppService,
	}
}
