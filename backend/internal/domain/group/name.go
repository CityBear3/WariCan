package group

import "errors"

var (
	ErrInvalidName       = errors.New("invalid name")
	ErrInvalidNameLength = errors.New("invalid name length")
)

type Name string

func NewName(name string) (Name, error) {
	if name == "" {
		return "", ErrInvalidName
	}

	if len(name) > 20 {
		return "", ErrInvalidNameLength
	}

	return Name(name), nil
}

func (n Name) String() string {
	return string(n)
}
