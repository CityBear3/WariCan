package group

import "github.com/google/uuid"

type ID uuid.UUID

func NewGroupID(id uuid.UUID) ID {
	return ID(id)
}

func (id ID) String() string {
	return uuid.UUID(id).String()
}

func (id ID) UUID() uuid.UUID {
	return uuid.UUID(id)
}
