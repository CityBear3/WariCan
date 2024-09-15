TRUNCATE TABLE "user" CASCADE;

INSERT INTO "user" (
  id
  , "uid"
  , email
  , first_name
  , last_name
) VALUES (
  'CF290BEE-9EB4-4E28-BEA9-C8C3B37CB621'
  , 'EBC4725A-BC7D-47D2-B7EF-0446B0BEE6B3'
  , 'mishima@example.com'
  , '恵子'
  , '三島'
), (
  '45E144DC-15A3-4F9F-8A6C-FD3F27B297B1'
  , 'FFE71704-1E91-46CF-BCC8-0DD210762493'
  , 'tomoaki@example.com'
  , '智昭'
  , '三島'
), (
  '02E7AA00-3057-462A-98F6-0B076638BC25'
  , '1E7878FF-17E2-4A4E-8EF9-BFAAA235229A'
  , 'teruyuki@example.com'
  , '照之'
  , '大河'
);

TRUNCATE TABLE "user_profile" CASCADE;

INSERT INTO "user_profile" (
  id
  , user_id
  , tags
  , image_url
) VALUES (
  '66F42768-E201-4581-8494-82DFBED2F4FA'
  , 'CF290BEE-9EB4-4E28-BEA9-C8C3B37CB621'
  , '#カフェ巡り' || CHR(13) || '#ボーリング'
  , '/sample_profile.png'
);

TRUNCATE TABLE "wallet" CASCADE;

INSERT INTO "wallet" (
  id
  , user_id
  , balance
) VALUES (
  '3444F58B-C55D-446C-AF12-A5F25E91EDC9'
  , 'CF290BEE-9EB4-4E28-BEA9-C8C3B37CB621'
  , 50000
);
