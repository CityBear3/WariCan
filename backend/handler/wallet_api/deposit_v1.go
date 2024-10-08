package wallet_api

import (
	"context"
	"log"

	"connectrpc.com/connect"
	"github.com/CityBear3/WariCan/internal/app_service/wallet_app_service"
	"github.com/CityBear3/WariCan/internal/core/app_context"
	"github.com/CityBear3/WariCan/internal/infrastructure/connectrpc"
	commonApiModel "github.com/CityBear3/WariCan/protobuf/common"
	walletApi "github.com/CityBear3/WariCan/protobuf/wallet"
)

func (h Handler) DepositV1(ctx context.Context, c *connect.Request[walletApi.WalletDepositV1_Request]) (*connect.Response[walletApi.WalletDepositV1_Response], error) {
	actx, err := app_context.GetAppContext(ctx)
	if err != nil {
		log.Printf("failed to get app context: %v\n", err)
		return nil, connectrpc.CreateErrorResponse(err)
	}

	result, err := h.walletAppService.Deposit(ctx, actx, wallet_app_service.DepositRequest{
		UserID: actx.UserID,
		Amount: c.Msg.Amount,
	})
	if err != nil {
		log.Println("failed to deposit: ", err)
		return nil, connectrpc.CreateErrorResponse(err)
	}

	return connect.NewResponse(&walletApi.WalletDepositV1_Response{
		Wallet: &commonApiModel.WalletModel{
			Balance: &commonApiModel.WalletModel_Balance{
				Amount: result.Balance().GetAmount(),
			},
		},
	}), nil
}
