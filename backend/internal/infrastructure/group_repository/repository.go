package group_repository

import (
	"context"

	"github.com/CityBear3/WariCan/internal/core/app_context"
	"github.com/CityBear3/WariCan/internal/domain/group"
	"github.com/CityBear3/WariCan/internal/domain/transaction"
	"github.com/CityBear3/WariCan/internal/infrastructure/db/dao"
	"github.com/jackc/pgx/v5/pgtype"
)

func NewGroupRepository() group.RepoFunc {
	return group.RepoFunc{
		New: func(ctx context.Context, actx app_context.AppContext, tx transaction.Transaction) group.Repository {
			return Repository{
				queries: dao.New(tx),
			}
		},
	}
}

type Repository struct {
	queries *dao.Queries
}

func (r Repository) Create(ctx context.Context, actx app_context.AppContext, creatingGroup *group.Group) error {
	params := dao.CreateGroupParams{
		ID:          creatingGroup.Id().UUID(),
		Name:        creatingGroup.Name().String(),
		Description: creatingGroup.Description().String(),
		OwnerID:     creatingGroup.OwnerID().UUID(),
		CreatedAt: pgtype.Timestamptz{
			Time: actx.CurrentTime,
		},
	}

	return r.queries.CreateGroup(ctx, params)
}
