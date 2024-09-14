CREATE TABLE IF NOT EXISTS "wallet"
(
    id         UUID PRIMARY KEY,
    user_id    UUID                     NOT NULL UNIQUE REFERENCES "user" (id) ON DELETE CASCADE,
    balance    DECIMAL(15, 2)           NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE "wallet" IS 'Table to store wallet information';
