package wallet_api

import (
	"github.com/CityBear3/WariCan/internal/app_service/wallet_app_service"
)

type Handler struct {
	walletAppService *wallet_app_service.Service
}

func NewHandler(walletAppService *wallet_app_service.Service) *Handler {
	return &Handler{
		walletAppService: walletAppService,
	}
}
