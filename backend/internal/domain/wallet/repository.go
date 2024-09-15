package wallet

import (
	"context"
	"github.com/CityBear3/WariCan/internal/core/app_context"
	"github.com/CityBear3/WariCan/internal/domain/transaction"
	"github.com/CityBear3/WariCan/internal/domain/user"
)

type Repository interface {
	GetByUserID(ctx context.Context, actx app_context.AppContext, userID user.ID) (*Wallet, error)
	UpdateBalance(ctx context.Context, actx app_context.AppContext, wallet *Wallet) error
}

type RepoFunc struct {
	New func(ctx context.Context, actx app_context.AppContext, tx transaction.Transaction) Repository
}
