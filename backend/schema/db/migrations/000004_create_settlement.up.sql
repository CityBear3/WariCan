CREATE TABLE IF NOT EXISTS "settlement"
(
    id               UUID PRIMARY KEY,
    from_user_id     UUID                     NOT NULL REFERENCES "user" (id) ON DELETE CASCADE,
    to_user_id       UUID                     NOT NULL REFERENCES "user" (id) ON DELETE CASCADE,
    split_billing_id UUID                     NOT NULL REFERENCES "split_billing" (id) ON DELETE CASCADE,
    amount           INT                      NOT NULL,
    created_at       TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE "settlement" IS 'Table to store settlement information';

CREATE TABLE IF NOT EXISTS "settlement_status"
(
    id            UUID PRIMARY KEY,
    settlement_id UUID NOT NULL REFERENCES "settlement" (id) ON DELETE CASCADE,
    status        VARCHAR(20) NOT NULL,
    created_at    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (settlement_id, status)
);

COMMENT ON TABLE "settlement_status" IS 'Table to store settlement status information';