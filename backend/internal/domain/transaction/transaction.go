package transaction

import (
	"context"
	"database/sql"
)

type Connection interface {
	BeginTransaction(ctx context.Context, f func(ctx context.Context, tx Transaction) error) error
	BeginROTransaction(ctx context.Context, f func(ctx context.Context, tx Transaction) error) error
}

type Transaction = *sql.Tx
