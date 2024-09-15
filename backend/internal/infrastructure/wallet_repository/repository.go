package wallet_repository

import (
	"context"
	"strconv"

	"github.com/CityBear3/WariCan/internal/core/app_context"
	"github.com/CityBear3/WariCan/internal/domain/transaction"
	"github.com/CityBear3/WariCan/internal/domain/user"
	"github.com/CityBear3/WariCan/internal/domain/wallet"
	"github.com/CityBear3/WariCan/internal/infrastructure/db/dao"
	"github.com/jackc/pgx/v5/pgtype"
)

func NewUserRepoFunc() wallet.RepoFunc {
	return wallet.RepoFunc{
		New: func(ctx context.Context, actx app_context.AppContext, tx transaction.Transaction) wallet.Repository {
			return Repository{
				queries: dao.New(tx),
			}
		},
	}
}

type Repository struct {
	queries *dao.Queries
}

func (r Repository) GetByUserID(ctx context.Context, actx app_context.AppContext, userID user.ID) (*wallet.Wallet, error) {
	result, err := r.queries.GetWalletByUserID(ctx, userID.UUID())
	if err != nil {
		return nil, err
	}

	value, err := result.Balance.Float64Value()
	if err != nil {
		return nil, err
	}

	amount := value.Float64

	return wallet.NewWallet(wallet.ID(result.ID), user.ID(result.UserID), amount)
}

func (r Repository) UpdateBalance(ctx context.Context, actx app_context.AppContext, w *wallet.Wallet) error {
	balance := strconv.FormatFloat(w.Balance().GetAmount(), 'f', 2, 64)

	var numeric pgtype.Numeric
	if err := numeric.Scan(balance); err != nil {
		return err
	}

	if err := r.queries.UpdateWalletBalance(ctx, dao.UpdateWalletBalanceParams{
		UserID:  w.UserID().UUID(),
		Balance: numeric,
	}); err != nil {
		return err
	}

	return nil
}
