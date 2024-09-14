CREATE TABLE IF NOT EXISTS "user"
(
    id         UUID PRIMARY KEY,
    uid        UUID                     NOT NULL UNIQUE,
    email      TEXT                     NOT NULL UNIQUE,
    first_name VARCHAR(255)             NOT NULL,
    last_name  VARCHAR(255)             NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE "user" IS 'User table';

CREATE TABLE IF NOT EXISTS user_profile
(
    id         UUID PRIMARY KEY,
    user_id    UUID                     NOT NULL UNIQUE REFERENCES "user" (id) ON DELETE CASCADE,
    tags       TEXT,
    image_url  TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE user_profile IS 'User profile table';