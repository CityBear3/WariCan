package user

import "github.com/google/uuid"

type ID uuid.UUID

func NewUserID(id uuid.UUID) ID {
	return ID(id)
}

func (id ID) UUID() uuid.UUID {
	return uuid.UUID(id)
}

func (id ID) String() string {
	return uuid.UUID(id).String()
}
