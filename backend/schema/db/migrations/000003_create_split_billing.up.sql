CREATE TABLE IF NOT EXISTS "split_billing"
(
    id                 UUID PRIMARY KEY,
    group_id           UUID                     NOT NULL REFERENCES "group" (id) ON DELETE CASCADE,
    name               TEXT                     NOT NULL,
    amount             INT                      NOT NULL,
    advance_payer_id   UUID                     NOT NULL REFERENCES "user" (id),
    split_billing_type VARCHAR(20)              NOT NULL,
    created_at         TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE "split_billing" IS 'Table to store split billing information';

CREATE TABLE IF NOT EXISTS "split_billing_status"
(
    id               UUID PRIMARY KEY,
    split_billing_id UUID                     NOT NULL REFERENCES "split_billing" (id) ON DELETE CASCADE,
    status           VARCHAR(20)              NOT NULL,
    created_at       TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at       TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    UNIQUE (split_billing_id, status)
);

COMMENT ON TABLE "split_billing_status" IS 'Table to store split billing status information';