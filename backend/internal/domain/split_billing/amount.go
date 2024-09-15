package split_billing

import "errors"

type Amount struct {
	value int
}

var ErrInvalidAmount = errors.New("invalid amount")

func NewAmount(value int) (*Amount, error) {
	if value < 0 {
		return nil, ErrInvalidAmount
	}

	return &Amount{value: value}, nil
}

func (a *Amount) Value() int {
	return a.value
}
