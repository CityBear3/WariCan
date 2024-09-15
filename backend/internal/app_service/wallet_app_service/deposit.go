package wallet_app_service

import (
	"context"

	"github.com/CityBear3/WariCan/internal/core/app_context"
	"github.com/CityBear3/WariCan/internal/domain/transaction"
	"github.com/CityBear3/WariCan/internal/domain/user"
	"github.com/CityBear3/WariCan/internal/domain/wallet"
)

type (
	DepositRequest struct {
		UserID user.ID
		Amount float64
	}
)

func (s *Service) Deposit(ctx context.Context, actx app_context.AppContext, req DepositRequest) (*wallet.Wallet, error) {
	var userWallet *wallet.Wallet
	if err := s.connection.BeginTransaction(ctx, func(ctx context.Context, tx transaction.Transaction) error {
		repo := s.walletRepoFunc.New(ctx, actx, tx)
		userWallet, err := repo.GetByUserID(ctx, actx, req.UserID)
		if err != nil {
			return err
		}

		userWallet, err = userWallet.Deposit(req.Amount)
		if err != nil {
			return err
		}

		if err := repo.UpdateBalance(ctx, actx, userWallet); err != nil {
			return err
		}

		return nil
	}); err != nil {
		return nil, err
	}

	return userWallet, nil
}
