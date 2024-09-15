-- name: GetConnectedUsersByUserID :many
-- :param userID uuid
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
         JOIN "user_profile" AS up ON u.id = up.user_id;