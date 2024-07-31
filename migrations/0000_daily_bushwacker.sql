CREATE TABLE IF NOT EXISTS "transaction" (
	"id" serial PRIMARY KEY NOT NULL,
	"function_name" text NOT NULL,
	"args" text[] NOT NULL,
	"wallet" text NOT NULL,
	"timestamp" text NOT NULL,
	"hash" text NOT NULL
);
