package connection_api

import (
	"github.com/CityBear3/WariCan/internal/domain/transaction"
)

type Handler struct {
	connection transaction.Connection
}

func NewHandler(connection transaction.Connection) *Handler {
	return &Handler{
		connection: connection,
	}
}
