package user

import (
	"errors"
	"net/mail"
)

var (
	ErrInvalidEmail = errors.New("invalid email. please provide a valid email address")
)

type Email *mail.Address

func NewEmail(email string) (Email, error) {
	address, err := mail.ParseAddress(email)
	if err != nil {
		return nil, ErrInvalidEmail
	}

	return address, nil
}
