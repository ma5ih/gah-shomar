CREATE TABLE IF NOT EXISTS "users" ("id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),"username" varchar(64) NOT NULL,"normalized_username" varchar(64) NOT NULL,"password_hash" text NOT NULL,"created_at" timestamptz NOT NULL DEFAULT now(),"updated_at" timestamptz NOT NULL DEFAULT now());
CREATE UNIQUE INDEX IF NOT EXISTS "users_normalized_username_unique" ON "users" ("normalized_username");

CREATE TABLE IF NOT EXISTS "sessions" ("id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),"user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,"token_hash" text NOT NULL,"created_at" timestamptz NOT NULL DEFAULT now(),"last_seen_at" timestamptz NOT NULL DEFAULT now(),"revoked_at" timestamptz);
CREATE UNIQUE INDEX IF NOT EXISTS "sessions_token_hash_unique" ON "sessions" ("token_hash");
CREATE INDEX IF NOT EXISTS "sessions_user_idx" ON "sessions" ("user_id");

CREATE TABLE IF NOT EXISTS "personal_people" ("id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),"owner_user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,"name" varchar(160) NOT NULL,"created_at" timestamptz NOT NULL DEFAULT now(),"updated_at" timestamptz NOT NULL DEFAULT now());
CREATE INDEX IF NOT EXISTS "personal_people_owner_idx" ON "personal_people" ("owner_user_id");

CREATE TABLE IF NOT EXISTS "personal_events" ("id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),"owner_user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,"type" varchar(32) NOT NULL,"title" varchar(200) NOT NULL,"year" integer NOT NULL,"month" integer NOT NULL,"day" integer NOT NULL,"recurrence" jsonb,"personal_person_id" uuid REFERENCES "personal_people"("id") ON DELETE SET NULL,"notes" text,"created_at" timestamptz NOT NULL DEFAULT now(),"updated_at" timestamptz NOT NULL DEFAULT now());
CREATE INDEX IF NOT EXISTS "personal_events_owner_date_idx" ON "personal_events" ("owner_user_id","year","month","day");

CREATE TABLE IF NOT EXISTS "memories" ("id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),"owner_user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,"year" integer NOT NULL,"month" integer NOT NULL,"day" integer NOT NULL,"title" varchar(200),"text" text NOT NULL,"tags" text[] NOT NULL DEFAULT '{}',"media_ids" text[] NOT NULL DEFAULT '{}',"person_ids" text[] NOT NULL DEFAULT '{}',"event_ids" text[] NOT NULL DEFAULT '{}',"personal_event_ids" text[] NOT NULL DEFAULT '{}',"created_at" timestamptz NOT NULL DEFAULT now(),"updated_at" timestamptz NOT NULL DEFAULT now());
CREATE INDEX IF NOT EXISTS "memories_owner_date_idx" ON "memories" ("owner_user_id","year","month","day");
