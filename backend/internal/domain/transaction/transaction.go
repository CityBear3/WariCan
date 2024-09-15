package transaction

import (
	"context"

	"github.com/jackc/pgx/v5"
)

type Connection interface {
	BeginTransaction(ctx context.Context, f func(ctx context.Context, tx Transaction) error) error
	BeginROTransaction(ctx context.Context, f func(ctx context.Context, tx Transaction) error) error
}

type Transaction = pgx.Tx
