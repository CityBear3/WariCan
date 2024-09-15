// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: connection.sql

package dao

import (
	"context"

	uuid "github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

const getConnectedUsersByUserID = `-- name: GetConnectedUsersByUserID :many
SELECT DISTINCT u.id,
                u.uid,
                u.email,
                u.first_name,
                u.last_name,
                up.tags,
                up.image_url
FROM "group_member" AS gm
         JOIN (SELECT gm2.group_id
               FROM "group_member" AS gm2
               WHERE gm2.user_id = $1) AS gm3 ON gm.group_id = gm3.group_id
         JOIN "user" AS u ON gm.user_id = u.id
         JOIN "user_profile" AS up ON u.id = up.user_id
`

type GetConnectedUsersByUserIDRow struct {
	ID        uuid.UUID   `json:"id"`
	Uid       uuid.UUID   `json:"uid"`
	Email     string      `json:"email"`
	FirstName string      `json:"first_name"`
	LastName  string      `json:"last_name"`
	Tags      pgtype.Text `json:"tags"`
	ImageUrl  pgtype.Text `json:"image_url"`
}

// :param userID uuid
func (q *Queries) GetConnectedUsersByUserID(ctx context.Context, userID uuid.UUID) ([]GetConnectedUsersByUserIDRow, error) {
	rows, err := q.db.Query(ctx, getConnectedUsersByUserID, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetConnectedUsersByUserIDRow{}
	for rows.Next() {
		var i GetConnectedUsersByUserIDRow
		if err := rows.Scan(
			&i.ID,
			&i.Uid,
			&i.Email,
			&i.FirstName,
			&i.LastName,
			&i.Tags,
			&i.ImageUrl,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}
