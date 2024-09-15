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
  , 'tomoaki@example.com'
  , '智昭'
  , '三島'
), (
  '45E144DC-15A3-4F9F-8A6C-FD3F27B297B1'
  , 'FFE71704-1E91-46CF-BCC8-0DD210762493'
  , 'teruyuki@example.com'
  , '照之'
  , '大河'
), (
  '02E7AA00-3057-462A-98F6-0B076638BC25'
  , '1E7878FF-17E2-4A4E-8EF9-BFAAA235229A'
  , 'kentaro@example.com'
  , '健太郎'
  , '小島'
), (
  '52422CF3-9887-4154-B637-2FF5BF78F67A'
  , 'C7F48151-30AF-4339-BE5E-BCDF95AA81B1'
  , 'yumi@example.com'
  , '由美'
  , '細川'
), (
  'BA93CD20-AE88-4F30-A81F-051B7E9A3E73'
  , '3F3951E3-C1B8-4231-ACA1-BAD6734E07D3'
  , 'misaki@example.com'
  , '美咲'
  , '城島'
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
), (
  '45E144DC-15A3-4F9F-8A6C-FD3F27B297B1'
  , '45E144DC-15A3-4F9F-8A6C-FD3F27B297B1'
  , '#カフェ巡り' || CHR(13) || '#ボーリング'
  , '/sample_profile.png'
), (
  '02E7AA00-3057-462A-98F6-0B076638BC25'
  , '02E7AA00-3057-462A-98F6-0B076638BC25'
  , '#カフェ巡り' || CHR(13) || '#ボーリング'
  , '/sample_profile.png'
), (
  '52422CF3-9887-4154-B637-2FF5BF78F67A'
  , '52422CF3-9887-4154-B637-2FF5BF78F67A'
  , '#カフェ巡り' || CHR(13) || '#ボーリング'
  , '/sample_profile.png'
), (
  'BA93CD20-AE88-4F30-A81F-051B7E9A3E73'
  , 'BA93CD20-AE88-4F30-A81F-051B7E9A3E73'
  , '#カフェ巡り' || CHR(13) || '#ボーリング'
  , '/sample_profile.png'
);

TRUNCATE TABLE "group" CASCADE;

INSERT INTO "group" (
  id
  , name
  , description
  , owner_id
) VALUES (
  '66F42768-E201-4581-8494-82DFBED2F4FA'
  , '四国旅行'
  , '劇団ロッソの四国旅行　〜高松〜'
  , 'CF290BEE-9EB4-4E28-BEA9-C8C3B37CB621'
);

INSERT INTO "group_member" (
  id
  , group_id
  , user_id
) VALUES (
  'C14AF76D-B2AC-447E-80EF-404450209E81'
  , '66F42768-E201-4581-8494-82DFBED2F4FA'
  , 'CF290BEE-9EB4-4E28-BEA9-C8C3B37CB621'
), (
  '45E144DC-15A3-4F9F-8A6C-FD3F27B297B1'
  , '66F42768-E201-4581-8494-82DFBED2F4FA'
  , '45E144DC-15A3-4F9F-8A6C-FD3F27B297B1'
), (
  '02E7AA00-3057-462A-98F6-0B076638BC25'
  , '66F42768-E201-4581-8494-82DFBED2F4FA'
  , '02E7AA00-3057-462A-98F6-0B076638BC25'
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
