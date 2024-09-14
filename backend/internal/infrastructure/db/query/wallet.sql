-- name: GetWalletByUserID :one
-- :param userID uuid
SELECT id,
       user_id,
       balance,
       created_at,
       updated_at
FROM wallet
WHERE user_id = $1;

-- name: UpdateWalletBalance :exec
-- :param userID uuid
-- :param balance decimal
UPDATE wallet
SET balance = $2
WHERE user_id = $1
RETURNING *;