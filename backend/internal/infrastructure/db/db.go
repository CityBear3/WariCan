package db

import (
	"context"

	"github.com/CityBear3/WariCan/internal/domain/transaction"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Connection struct {
	conn *pgxpool.Pool
}

func NewConnection(ctx context.Context, source string) *Connection {
	config, err := pgxpool.ParseConfig(source)
	if err != nil {
		panic(err)
	}

	pool, err := pgxpool.NewWithConfig(ctx, config)
	if err != nil {
		panic(err)
	}

	if err := pool.Ping(ctx); err != nil {
		panic(err)
	}

	return &Connection{conn: pool}
}

func (c Connection) Conn() *pgxpool.Pool {
	return c.conn
}

func (c Connection) BeginTransaction(ctx context.Context, f func(ctx context.Context, tx transaction.Transaction) error) error {
	tx, err := c.conn.Begin(ctx)
	if err != nil {
		return err
	}

	if err := f(ctx, tx); err != nil {
		if rbErr := tx.Rollback(ctx); rbErr != nil {
			return rbErr
		}
		return err
	}

	return tx.Commit(ctx)
}

func (c Connection) BeginROTransaction(ctx context.Context, f func(ctx context.Context, tx transaction.Transaction) error) error {
	tx, err := c.conn.BeginTx(ctx, pgx.TxOptions{IsoLevel: pgx.RepeatableRead})
	if err != nil {
		return err
	}

	if err := f(ctx, tx); err != nil {
		if rbErr := tx.Rollback(ctx); rbErr != nil {
			return rbErr
		}
		return err
	}

	return tx.Commit(ctx)
}
