package wallet

import "github.com/google/uuid"

type ID uuid.UUID

func NewWalletID(id uuid.UUID) ID {
	return ID(id)
}
