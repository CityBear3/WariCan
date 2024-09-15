package wallet_app_service

import (
	"context"

	"github.com/CityBear3/WariCan/internal/core/app_context"
	"github.com/CityBear3/WariCan/internal/domain/transaction"
	"github.com/CityBear3/WariCan/internal/domain/user"
	"github.com/CityBear3/WariCan/internal/domain/wallet"
)

type (
	FindRequest struct {
		UserID user.ID
	}
)

func (s *Service) Find(ctx context.Context, actx app_context.AppContext, req FindRequest) (*wallet.Wallet, error) {
	var userWallet *wallet.Wallet
	if err := s.connection.BeginROTransaction(ctx, func(ctx context.Context, tx transaction.Transaction) error {
		repo := s.walletRepoFunc.New(ctx, actx, tx)
		w, err := repo.GetByUserID(ctx, actx, req.UserID)
		if err != nil {
			return err
		}
		userWallet = w

		return nil
	}); err != nil {
		return nil, err
	}

	return userWallet, nil
}