ALTER TABLE "comment" DROP CONSTRAINT "comment_parent_id_fk";
--> statement-breakpoint
DROP INDEX "comment_parent_id_idx";--> statement-breakpoint
ALTER TABLE "comment" DROP COLUMN "parent_id";