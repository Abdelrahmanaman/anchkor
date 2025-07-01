ALTER TABLE "feedback" ALTER COLUMN "status" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "feedback" ALTER COLUMN "status" SET DEFAULT 'pending'::text;--> statement-breakpoint
DROP TYPE "public"."status";--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('pending', 'reviewing', 'planned', 'in-progress', 'completed', 'closed');--> statement-breakpoint
ALTER TABLE "feedback" ALTER COLUMN "status" SET DEFAULT 'pending'::"public"."status";--> statement-breakpoint
ALTER TABLE "feedback" ALTER COLUMN "status" SET DATA TYPE "public"."status" USING "status"::"public"."status";--> statement-breakpoint
ALTER TABLE "feedback" ADD COLUMN "type" text NOT NULL;