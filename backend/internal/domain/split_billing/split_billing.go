package split_billing

import (
	"github.com/CityBear3/WariCan/internal/domain/group"
	"github.com/CityBear3/WariCan/internal/domain/user"
)

type SplitBillingType string

const (
	EqualSplit SplitBillingType = "EQUAL_SPLIT"
)

type SplitBillingStatus string

const (
	Active SplitBillingStatus = "ACTIVE"
	Closed SplitBillingStatus = "CLOSED"
)

type SplitBilling struct {
	id                 ID
	name               Name
	groupID            group.ID
	amount             *SplitBillingAmount
	advancePayerID     user.ID
	splitBillingType   SplitBillingType
	SplitBillingStatus SplitBillingStatus
}

func (s *SplitBilling) Id() ID {
	return s.id
}

func (s *SplitBilling) Name() Name {
	return s.name
}

func (s *SplitBilling) GroupID() group.ID {
	return s.groupID
}

func (s *SplitBilling) Amount() *SplitBillingAmount {
	return s.amount
}

func (s *SplitBilling) AdvancePayerID() user.ID {
	return s.advancePayerID
}

func (s *SplitBilling) SplitBillingType() SplitBillingType {
	return s.splitBillingType
}
