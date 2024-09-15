CREATE TABLE IF NOT EXISTS "group_member"
(
    id         UUID PRIMARY KEY,
    group_id   UUID                     NOT NULL REFERENCES "group" (id),
    user_id    UUID                     NOT NULL REFERENCES "user" (id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (group_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_group_member_group_id ON "group_member" (group_id);
CREATE INDEX IF NOT EXISTS idx_group_member_user_id ON "group_member" (user_id);

COMMENT ON TABLE "group_member" IS 'group_member';