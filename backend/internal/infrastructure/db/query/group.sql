-- name: GetGroupByID :many
-- :param groupID uuid
SELECT DISTINCT g.id,
                g.name,
                g.description,
                g.owner_id,
                gm.user_id
FROM "group" AS g
         JOIN "group_member" AS gm ON gm.group_id = g.id
WHERE g.id = $1;

-- name: CreateGroup :exec
INSERT INTO "group" ("id", "name", "description", "owner_id", "created_at")
VALUES ($1, $2, $3, $4, $5);

-- name: CreateGroupMember :copyfrom
INSERT INTO "group_member" (id, group_id, user_id, created_at)
VALUES ($1, $2, $3, $4);

