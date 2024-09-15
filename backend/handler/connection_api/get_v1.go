package connection_api

import (
	"context"
	"errors"
	"log"

	"connectrpc.com/connect"
	"github.com/CityBear3/WariCan/internal/core/app_context"
	"github.com/CityBear3/WariCan/internal/domain/transaction"
	"github.com/CityBear3/WariCan/internal/infrastructure/db/dao"
	common "github.com/CityBear3/WariCan/protobuf/common"
	connection "github.com/CityBear3/WariCan/protobuf/connection"
	"google.golang.org/protobuf/types/known/emptypb"
)

func (h Handler) GetV1(ctx context.Context, req *connect.Request[emptypb.Empty]) (*connect.Response[connection.ConnectionGetV1_Response], error) {
	actx, err := app_context.GetAppContext(ctx)
	if err != nil {
		log.Printf("failed to get app context: %v\n", err)
		return nil, connect.NewError(connect.CodeInternal, err)
	}

	var connectedUsers []*common.UserModel
	if err := h.connection.BeginROTransaction(ctx, func(ctx context.Context, tx transaction.Transaction) error {
		queries := dao.New(tx)
		userIDRows, err := queries.GetConnectedUsersByUserID(ctx, actx.UserID.UUID())
		if err != nil {
			log.Printf("failed to get connected users by user id: %v\n", err)
			return connect.NewError(connect.CodeInternal, errors.New("failed to get connected users by user id"))
		}

		for _, u := range userIDRows {
			connectedUsers = append(connectedUsers, &common.UserModel{
				Id:        u.ID.String(),
				FirstName: u.FirstName,
				LastName:  u.LastName,
				Email:     u.Email,
				Tag:       u.Tags.String,
				ImageUrl:  u.ImageUrl.String,
			})
		}

		return nil
	}); err != nil {
		return nil, err
	}

	return connect.NewResponse(&connection.ConnectionGetV1_Response{
		ConnectedUsers: connectedUsers,
	}), nil
}
