-- name: GetSplitBillingByGroupID :many
-- :param groupID uuid
SELECT DISTINCT *
FROM "split_billing" AS sb
         JOIN (SELECT sbs.status,
                      sbs.split_billing_id
               FROM "split_billing_status" AS sbs
               WHERE sbs.split_billing_id = sb.id
               ORDER BY sbs.created_at DESC
               LIMIT 1) AS sbs2 ON sb.id = sbs2.split_billing_id
WHERE sb.group_id = $1;