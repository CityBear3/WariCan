-- name: GetUserByUID :one
-- :param uid uuid
SELECT distinct *
FROM "user"
WHERE "uid" = $1;
