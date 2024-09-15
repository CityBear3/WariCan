package group

import (
	"slices"

	"github.com/CityBear3/WariCan/internal/domain/user"
	"github.com/google/uuid"
)

type Group struct {
	id          ID
	name        Name
	description Description
	ownerID     user.ID
	members     []user.ID
}

func NewGroup(id ID, name, description string, ownerID user.ID, memberIDs []string) (*Group, error) {
	groupName, err := NewName(name)
	if err != nil {
		return nil, err
	}

	groupDescription, err := NewDescription(description)
	if err != nil {
		return nil, err
	}

	var groupMemberIDs []user.ID
	for _, memberID := range memberIDs {
		parse, err := uuid.Parse(memberID)
		if err != nil {
			return nil, err
		}

		groupMemberID := user.NewUserID(parse)

		groupMemberIDs = append(groupMemberIDs, groupMemberID)
	}

	return &Group{
		id:          id,
		name:        groupName,
		description: groupDescription,
		ownerID:     ownerID,
		members:     groupMemberIDs,
	}, nil
}

func Of(id ID, name Name, description Description, ownerID user.ID, members []user.ID) *Group {
	return &Group{
		id:          id,
		name:        name,
		description: description,
		ownerID:     ownerID,
		members:     members,
	}
}

func (g *Group) AddMember(userID user.ID) *Group {
	newMembers := g.members
	if !slices.Contains(g.members, userID) {
		newMembers = append(g.members, userID)
	}

	return Of(g.id, g.name, g.description, g.ownerID, newMembers)
}

func (g *Group) Id() ID {
	return g.id
}

func (g *Group) Name() Name {
	return g.name
}

func (g *Group) Description() Description {
	return g.description
}

func (g *Group) OwnerID() user.ID {
	return g.ownerID
}

func (g *Group) Members() []user.ID {
	return g.members
}
