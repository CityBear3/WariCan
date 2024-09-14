CREATE TABLE IF NOT EXISTS "group"
(
    id          UUID PRIMARY KEY,
    name        TEXT                     NOT NULL,
    description TEXT                     NOT NULL,
    created_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE "group" IS 'A group of users that split bills';