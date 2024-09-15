package group_app_service

import (
	"context"

	"github.com/CityBear3/WariCan/internal/core/app_context"
	"github.com/CityBear3/WariCan/internal/domain/group"
	"github.com/CityBear3/WariCan/internal/domain/transaction"
	"github.com/CityBear3/WariCan/internal/domain/user"
	"github.com/google/uuid"
)

type (
	CreateGroupRequest struct {
		OwnerID     user.ID
		Name        string
		Description string
		MemberIDs   []string
	}
)

func (s *Service) CreateGroup(ctx context.Context, actx app_context.AppContext, req CreateGroupRequest) (*group.Group, error) {
	creatingGroup, err := group.NewGroup(
		group.NewGroupID(uuid.New()),
		req.Name,
		req.Description,
		req.OwnerID,
		req.MemberIDs,
	)

	if err != nil {
		return nil, err
	}

	if err := s.connection.BeginTransaction(ctx, func(ctx context.Context, tx transaction.Transaction) error {
		repo := s.groupRepoFunc.New(ctx, actx, tx)
		if err := repo.Create(ctx, actx, creatingGroup); err != nil {
			return err
		}

		return nil
	}); err != nil {
		return nil, err
	}

	return creatingGroup, nil
}
