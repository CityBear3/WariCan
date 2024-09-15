package split_billing

import "github.com/google/uuid"

type ID uuid.UUID

func NewSplitBillingID(id uuid.UUID) ID {
	return ID(id)
}
