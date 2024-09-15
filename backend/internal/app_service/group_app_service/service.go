package group_app_service

import (
	"github.com/CityBear3/WariCan/internal/domain/group"
	"github.com/CityBear3/WariCan/internal/domain/transaction"
)

type Service struct {
	connection    transaction.Connection
	groupRepoFunc group.RepoFunc
}

func NewService(connection transaction.Connection, groupRepoFunc group.RepoFunc) *Service {
	return &Service{
		connection:    connection,
		groupRepoFunc: groupRepoFunc,
	}
}
