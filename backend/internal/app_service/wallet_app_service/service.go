package wallet_app_service

import (
	"github.com/CityBear3/WariCan/internal/domain/transaction"
	"github.com/CityBear3/WariCan/internal/domain/wallet"
)

type Service struct {
	connection     transaction.Connection
	walletRepoFunc wallet.RepoFunc
}

func NewService(connection transaction.Connection, walletRepoFunc wallet.RepoFunc) *Service {
	return &Service{
		connection:     connection,
		walletRepoFunc: walletRepoFunc,
	}
}
