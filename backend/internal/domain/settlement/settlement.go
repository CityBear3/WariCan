package settlement

import (
	"github.com/CityBear3/WariCan/internal/domain/split_billing"
	"github.com/CityBear3/WariCan/internal/domain/user"
	"github.com/google/uuid"
)

type ID uuid.UUID

func NewSettlementID(id uuid.UUID) ID {
	return ID(id)
}

type SettlementStatus string

const (
	SettlementStatusPending SettlementStatus = "PENDING"
	SettlementStatusDone    SettlementStatus = "PAID"
)

type Settlement struct {
	id             ID
	fromUserID     user.ID
	toUserID       user.ID
	splitBillingID split_billing.ID
	amount         int
	status         SettlementStatus
}

func (s Settlement) Done() Settlement {
	return Settlement{
		id:              s.id,
		advancedPayerID: s.advancedPayerID,
		payerID:         s.payerID,
		splitBillingID:  s.splitBillingID,
		amount:          s.amount,
		status:          SettlementStatusDone,
	}
}
