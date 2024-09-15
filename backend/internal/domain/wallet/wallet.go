package wallet

import "github.com/CityBear3/WariCan/internal/domain/user"

type Wallet struct {
	id      ID
	userID  user.ID
	balance *Balance
}

func Of(id ID, userID user.ID, balance *Balance) *Wallet {
	return &Wallet{
		id:      id,
		userID:  userID,
		balance: balance,
	}
}

func (w *Wallet) Id() ID {
	return w.id
}

func (w *Wallet) UserID() user.ID {
	return w.userID
}

func (w *Wallet) Balance() *Balance {
	return w.balance
}

func NewWallet(id ID, userID user.ID, amount float64) (*Wallet, error) {
	walletBalance, err := NewBalance(amount)
	if err != nil {
		return nil, err
	}

	return &Wallet{
		id:      id,
		userID:  userID,
		balance: walletBalance,
	}, nil
}

func (w *Wallet) Deposit(amount float64) (*Wallet, error) {
	newBalance, err := w.balance.Add(amount)
	if err != nil {
		return nil, err
	}

	return Of(w.id, w.userID, newBalance), nil
}
