ALTER TABLE "feedback" ADD COLUMN "tags" jsonb DEFAULT '[]'::jsonb;--> statement-breakpoint
ALTER TABLE "feedback" ADD COLUMN "test" text[] DEFAULT '{}';