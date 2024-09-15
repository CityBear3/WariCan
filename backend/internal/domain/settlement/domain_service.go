package settlement

import "github.com/CityBear3/WariCan/internal/domain/wallet"

type DomainService struct {
}

func (d *DomainService) PaySettlement(
	settlement *Settlement,
	advancedPayerWallet *wallet.Wallet,
	payerWallet *wallet.Wallet,
) (*Settlement, error) {
	//if err := wallet.DomainService{}.Transfer(settlement.Amount(), advancedPayerWallet, payerWallet); err != nil {
	//	return nil, err
	//}
	//
	//return Settlement{
	//	id:              settlement.ID(),
	//	advancedPayerID: settlement.AdvancedPayerID(),
	//	payerID:         settlement.PayerID(),
	//	splitBillingID:  settlement.SplitBillingID(),
	//	amount:          settlement.Amount(),
	//	status:          SettlementStatusDone,
	//}, nil
	return nil, nil
}
