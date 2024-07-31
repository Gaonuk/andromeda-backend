CREATE TABLE IF NOT EXISTS "delegation" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_address" text NOT NULL,
	"session_address" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "quest" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"condition" jsonb NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"points" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
