package user

import "errors"

var (
	ErrInvalidName       = errors.New("invalid name. required first name or last name")
	ErrInvalidNameLength = errors.New("invalid name length. required name length is less than 100")
)

type Name struct {
	firstName string
	lastName  string
}

func (n *Name) FirstName() string {
	return n.firstName
}

func (n *Name) LastName() string {
	return n.lastName
}

func NewName(firstName, lastName string) (*Name, error) {
	if firstName == "" && lastName == "" {
		return nil, ErrInvalidName
	}

	if len(firstName) > 100 {
		return nil, ErrInvalidNameLength
	}

	if len(lastName) > 100 {
		return nil, ErrInvalidNameLength
	}

	return &Name{
		firstName: firstName,
	}, nil
}
