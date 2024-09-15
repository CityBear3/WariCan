package group

import "github.com/google/uuid"

type ID uuid.UUID

func NewGroupID(id uuid.UUID) ID {
	return ID(id)
}
