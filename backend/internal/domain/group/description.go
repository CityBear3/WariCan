package group

import "errors"

var (
	ErrInvalidDescriptionLength = errors.New("invalid description length")
)

type Description string

func NewDescription(description string) (Description, error) {
	if len(description) > 140 {
		return "", ErrInvalidDescriptionLength
	}

	return Description(description), nil
}

func (d Description) String() string {
	return string(d)
}
