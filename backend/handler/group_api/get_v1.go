package group_api

import (
	"context"
	"errors"
	"log"

	"connectrpc.com/connect"
	"github.com/CityBear3/WariCan/internal/domain/transaction"
	"github.com/CityBear3/WariCan/internal/infrastructure/db/dao"
	commonModel "github.com/CityBear3/WariCan/protobuf/common"
	group "github.com/CityBear3/WariCan/protobuf/group"
	"github.com/google/uuid"
)

func (h Handler) GetV1(
	ctx context.Context,
	req *connect.Request[group.GroupGetV1_Request],
) (*connect.Response[group.GroupGetV1_Response], error) {
	var groupRows []dao.GetGroupByIDRow
	var splitBillingRows []dao.GetSplitBillingByGroupIDRow
	if err := h.connection.BeginROTransaction(ctx, func(ctx context.Context, tx transaction.Transaction) error {
		queries := dao.New(tx)

		groupID, err := uuid.Parse(req.Msg.GroupId)
		if err != nil {
			return err
		}

		groupRows, err = queries.GetGroupByID(ctx, groupID)
		if err != nil {
			return err
		}

		if len(groupRows) == 0 {
			return connect.NewError(connect.CodeNotFound, errors.New("group not found"))
		}

		splitBillingRows, err = queries.GetSplitBillingByGroupID(ctx, groupID)
		if err != nil {
			return err
		}

		return nil
	}); err != nil {
		log.Println("failed to begin transaction")
		return nil, err
	}

	var members []*group.GroupGetV1_Member
	for _, g := range groupRows {
		members = append(members, &group.GroupGetV1_Member{
			UserId: g.UserID.String(),
		})
	}

	var splitBillings []*commonModel.SplitBillingModel
	for _, s := range splitBillingRows {
		splitBillings = append(splitBillings, &commonModel.SplitBillingModel{
			Id:               s.ID.String(),
			Name:             s.Name,
			GroupId:          s.GroupID.String(),
			AdvancePayerId:   s.AdvancePayerID.String(),
			Amount:           int64(s.Amount),
			SplitBillingType: s.SplitBillingType,
			Status:           s.Status,
		})
	}

	return connect.NewResponse(&group.GroupGetV1_Response{
		GroupId:       groupRows[0].ID.String(),
		Name:          groupRows[0].Name,
		Description:   groupRows[0].Description,
		OwnerId:       groupRows[0].OwnerID.String(),
		Members:       members,
		SplitBillings: splitBillings,
	}), nil
}
