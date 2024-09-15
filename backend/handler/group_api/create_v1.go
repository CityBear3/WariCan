package group_api

import (
	"context"
	"log"

	"connectrpc.com/connect"
	"github.com/CityBear3/WariCan/internal/app_service/group_app_service"
	"github.com/CityBear3/WariCan/internal/core/app_context"
	"github.com/CityBear3/WariCan/internal/infrastructure/connectrpc"
	group "github.com/CityBear3/WariCan/protobuf/group"
)

func (h Handler) CreateV1(ctx context.Context, req *connect.Request[group.GroupCreateV1_Request]) (*connect.Response[group.GroupCreateV1_Response], error) {
	actx, err := app_context.GetAppContext(ctx)
	if err != nil {
		log.Printf("failed to get app context: %v\n", err)
		return nil, connectrpc.CreateErrorResponse(err)
	}

	var memberIDs []string
	for _, m := range req.Msg.Members {
		memberIDs = append(memberIDs, m.UserId)
	}

	createGroupRequest := group_app_service.CreateGroupRequest{
		OwnerID:     actx.UserID,
		Name:        req.Msg.Name,
		Description: req.Msg.Description,
		MemberIDs:   memberIDs,
	}

	result, err := h.groupAppService.CreateGroup(ctx, actx, createGroupRequest)
	if err != nil {
		log.Printf("failed to create group: %v\n", err)
		return nil, connectrpc.CreateErrorResponse(err)
	}

	var members []*group.GroupCreateV1_Member
	for _, m := range result.Members() {
		members = append(members, &group.GroupCreateV1_Member{
			UserId: m.String(),
		})
	}

	return connect.NewResponse(&group.GroupCreateV1_Response{
		GroupId:     result.Id().String(),
		Name:        result.Name().String(),
		Description: result.Description().String(),
		OwnerId:     result.OwnerID().String(),
		Members:     members,
	}), nil
}
