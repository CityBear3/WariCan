package wallet

import (
	"errors"
)

var (
	ErrNegativeBalance  = errors.New("balance must be non-negative")
	ErrOverflowBalance  = errors.New("balance must be less than 10,000,000")
	ErrAmountToAdd      = errors.New("amount to add must be non-negative")
	ErrAmountToSubtract = errors.New("amount to subtract must be non-negative")
)

// Balance represents the amount of money in the wallet
type Balance struct {
	amount float64
}

// NewBalance creates a new Balance after validation
func NewBalance(amount float64) (*Balance, error) {
	if amount < 0 {
		return nil, ErrNegativeBalance
	}

	if amount > 10000000 {
		return nil, ErrOverflowBalance
	}

	return &Balance{amount: amount}, nil
}

// Add adds the given amount to the Balance and returns a new Balance
func (b *Balance) Add(amount float64) (*Balance, error) {
	if amount < 0 {
		return nil, ErrAmountToAdd
	}
	return NewBalance(b.amount + amount)
}

// Subtract subtracts the given amount from the Balance and returns a new Balance
func (b *Balance) Subtract(amount float64) (*Balance, error) {
	if amount < 0 {
		return nil, ErrAmountToSubtract
	}

	return NewBalance(b.amount - amount)
}

// GetAmount returns the current amount
func (b *Balance) GetAmount() float64 {
	return b.amount
}
