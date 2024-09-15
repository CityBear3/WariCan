package group

import (
	"github.com/CityBear3/WariCan/internal/domain/split_billing"
	"github.com/CityBear3/WariCan/internal/domain/user"
	"slices"
)

type Group struct {
	id            ID
	name          Name
	description   *Description
	members       []user.ID
	splitBillings []split_billing.SplitBilling
}

func Of(id ID, name Name, description *Description, members []user.ID, splitBillings []split_billing.SplitBilling) *Group {
	return &Group{
		id:            id,
		name:          name,
		description:   description,
		members:       members,
		splitBillings: splitBillings,
	}
}

func (g *Group) AddMember(userID user.ID) *Group {
	newMembers := g.members
	if !slices.Contains(g.members, userID) {
		newMembers = append(g.members, userID)
	}

	return Of(g.id, g.name, g.description, newMembers, g.splitBillings)
}

func (g *Group) Id() ID {
	return g.id
}

func (g *Group) Name() Name {
	return g.name
}

func (g *Group) Description() *Description {
	return g.description
}

func (g *Group) Members() []user.ID {
	return g.members
}

func (g *Group) SplitBillings() []split_billing.SplitBilling {
	return g.splitBillings
}
