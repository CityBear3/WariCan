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
	"google.golang.org/protobuf/types/known/emptypb"
)

func (h Handler) GetV1(ctx context.Context, c *connect.Request[emptypb.Empty]) (*connect.Response[walletApi.WalletGetV1_Response], error) {
	actx, err := app_context.GetAppContext(ctx)
	if err != nil {
		log.Printf("failed to get app context: %v\n", err)
		return nil, connectrpc.CreateErrorResponse(err)
	}

	result, err := h.walletAppService.Find(ctx, actx, wallet_app_service.FindRequest{
		UserID: actx.UserID,
	})
	if err != nil {
		log.Println("failed to get wallet: ", err)
		return nil, connectrpc.CreateErrorResponse(err)
	}

	return connect.NewResponse(&walletApi.WalletGetV1_Response{
		Wallet: &commonApiModel.WalletModel{
			Balance: &commonApiModel.WalletModel_Balance{
				Amount: result.Balance().GetAmount(),
			},
		},
	}), nil
}
