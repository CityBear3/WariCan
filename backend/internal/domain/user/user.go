package user

type User struct {
	id      ID
	name    *Name
	email   Email
	profile *Profile
}

func (u *User) ID() ID {
	return u.id
}

func (u *User) Name() *Name {
	return u.name
}

func (u *User) Email() Email {
	return u.email
}

func (u *User) Profile() *Profile {
	return u.profile
}

func NewUser(id ID, firstName, lastName, email, tag, image string) (*User, error) {
	userName, err := NewName(firstName, lastName)
	if err != nil {
		return nil, err
	}

	userEmail, err := NewEmail(email)
	if err != nil {
		return nil, err
	}

	userProfile, err := NewProfile(tag, image)
	if err != nil {
		return nil, err
	}

	return &User{
		id:      id,
		name:    userName,
		email:   userEmail,
		profile: userProfile,
	}, nil
}
