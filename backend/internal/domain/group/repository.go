package group

import (
	"context"

	"github.com/CityBear3/WariCan/internal/core/app_context"
	"github.com/CityBear3/WariCan/internal/domain/transaction"
)

type Repository interface {
	Create(ctx context.Context, actx app_context.AppContext, group *Group) error
}

type RepoFunc struct {
	New func(ctx context.Context, actx app_context.AppContext, tx transaction.Transaction) Repository
}
