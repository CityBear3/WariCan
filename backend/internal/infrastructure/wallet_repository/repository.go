package wallet_repository

import (
	"context"
	"strconv"

	"github.com/CityBear3/WariCan/internal/core/app_context"
	"github.com/CityBear3/WariCan/internal/domain/transaction"
	"github.com/CityBear3/WariCan/internal/domain/user"
	"github.com/CityBear3/WariCan/internal/domain/wallet"
	"github.com/CityBear3/WariCan/internal/infrastructure/db/dao"
)

func NewUserRepoFunc() wallet.RepoFunc {
	return wallet.RepoFunc{
		New: func(ctx context.Context, actx app_context.AppContext, tx transaction.Transaction) wallet.Repository {
			queries := dao.Queries{}
			return Repository{
				queries: queries.WithTx(tx),
			}
		},
	}
}

type Repository struct {
	queries *dao.Queries
}

func (r Repository) GetByUserID(ctx context.Context, actx app_context.AppContext, userID user.ID) (*wallet.Wallet, error) {
	result, err := r.queries.GetWalletByUserID(ctx, userID.UUID()); 
	if( err!= nil) {
		return nil, err
	}

	amount, err := strconv.ParseFloat(result.Balance, 64)
	if err != nil {
		return nil, err
	}

	return wallet.NewWallet(wallet.ID(result.ID), user.ID(result.UserID), amount)
}

func (r Repository) UpdateBalance(ctx context.Context, actx app_context.AppContext, w *wallet.Wallet) error {
	if err := r.queries.UpdateWalletBalance(ctx, dao.UpdateWalletBalanceParams{
		UserID:  w.UserID().UUID(),
		Balance: strconv.FormatFloat(w.Balance().GetAmount(), 'f', 2, 64),
	}); err != nil {
		return err
	}

	return nil
}
