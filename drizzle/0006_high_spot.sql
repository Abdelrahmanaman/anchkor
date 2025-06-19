ALTER TABLE "workspace" ADD COLUMN "domain" text NOT NULL;--> statement-breakpoint
ALTER TABLE "feedback" DROP COLUMN "tags";--> statement-breakpoint
ALTER TABLE "workspace" DROP COLUMN "website_url";