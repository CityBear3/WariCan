package split_billing

import "errors"

type SplitBillingAmount struct {
	value int
}

var (
	ErrInvalidSplitBillingAmount = errors.New("invalid split billing amount")
	ErrInvalidNumberOfMembers    = errors.New("invalid number of members")
)

func NewSplitBillingAmount(value int) (*SplitBillingAmount, error) {
	if value <= 0 || value > 1000000 {
		return nil, ErrInvalidSplitBillingAmount
	}

	return &SplitBillingAmount{value: value}, nil
}

func (a *SplitBillingAmount) Value() int {
	return a.value
}

func (a *SplitBillingAmount) Split(numberOfMembers int) (*Amount, error) {
	if numberOfMembers <= 0 {
		return nil, ErrInvalidNumberOfMembers
	}

	amountPerMember := a.value / numberOfMembers

	return NewAmount(amountPerMember)
}
