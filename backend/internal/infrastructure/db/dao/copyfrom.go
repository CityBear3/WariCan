// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: copyfrom.go

package dao

import (
	"context"
)

// iteratorForCreateGroupMember implements pgx.CopyFromSource.
type iteratorForCreateGroupMember struct {
	rows                 []CreateGroupMemberParams
	skippedFirstNextCall bool
}

func (r *iteratorForCreateGroupMember) Next() bool {
	if len(r.rows) == 0 {
		return false
	}
	if !r.skippedFirstNextCall {
		r.skippedFirstNextCall = true
		return true
	}
	r.rows = r.rows[1:]
	return len(r.rows) > 0
}

func (r iteratorForCreateGroupMember) Values() ([]interface{}, error) {
	return []interface{}{
		r.rows[0].ID,
		r.rows[0].GroupID,
		r.rows[0].UserID,
		r.rows[0].CreatedAt,
	}, nil
}

func (r iteratorForCreateGroupMember) Err() error {
	return nil
}

func (q *Queries) CreateGroupMember(ctx context.Context, arg []CreateGroupMemberParams) (int64, error) {
	return q.db.CopyFrom(ctx, []string{"group_member"}, []string{"id", "group_id", "user_id", "created_at"}, &iteratorForCreateGroupMember{rows: arg})
}
