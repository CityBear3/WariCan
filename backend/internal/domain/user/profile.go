package user

import (
	"errors"
	"net/url"
)

var ErrInvalidTag = errors.New("invalid tag. required tag length is less than 300")

type (
	Profile struct {
		tag      Tag
		imageURL ImageURL
	}

	Tag      string
	ImageURL *url.URL
)

func (p *Profile) Tag() Tag {
	return p.tag
}

func (p *Profile) ImageURL() ImageURL {
	return p.imageURL
}

func NewTag(t string) (Tag, error) {
	if len(t) == 0 || len(t) > 300 {
		return "", ErrInvalidTag
	}
	return Tag(t), nil
}

func (t Tag) String() string {
	return string(t)
}

func NewProfile(rowTag, image string) (*Profile, error) {
	tag, err := NewTag(rowTag)
	if err != nil {
		return nil, err
	}

	imageURL, err := url.Parse(image)
	if err != nil {
		return nil, err
	}

	return &Profile{
		tag:      tag,
		imageURL: imageURL,
	}, nil
}
