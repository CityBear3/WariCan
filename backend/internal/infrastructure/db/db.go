package db

import (
	"context"
	"database/sql"

	"github.com/CityBear3/WariCan/internal/domain/transaction"

	_ "github.com/lib/pq"
)

type Connection struct {
	conn *sql.DB
}

func NewConnection(source string) *Connection {
	db, err := sql.Open("postgres", source)
	if err != nil {
		panic(err)
	}

	return &Connection{conn: db}
}

func (c Connection) BeginTransaction(ctx context.Context, f func(ctx context.Context, tx transaction.Transaction) error) error {
	tx, err := c.conn.BeginTx(ctx, nil)
	if err != nil {
		return err
	}

	if err := f(ctx, tx); err != nil {
		if rbErr := tx.Rollback(); rbErr != nil {
			return rbErr
		}
		return err
	}

	return tx.Commit()
}

func (c Connection) BeginROTransaction(ctx context.Context, f func(ctx context.Context, tx transaction.Transaction) error) error {
	opts := &sql.TxOptions{
		ReadOnly: true,
	}

	tx, err := c.conn.BeginTx(ctx, opts)
	if err != nil {
		return err
	}

	if err := f(ctx, tx); err != nil {
		if rbErr := tx.Rollback(); rbErr != nil {
			return rbErr
		}
		return err
	}

	return tx.Commit()
}
