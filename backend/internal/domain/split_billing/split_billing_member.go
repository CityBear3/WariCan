package split_billing

import "github.com/CityBear3/WariCan/internal/domain/user"

type SplitBillingMember struct {
	userID user.ID
	amount *Amount
	isPaid bool
}

func (s *SplitBillingMember) UserID() user.ID {
	return s.userID
}

func (s *SplitBillingMember) Amount() *Amount {
	return s.amount
}

func (s *SplitBillingMember) IsPaid() bool {
	return s.isPaid
}
