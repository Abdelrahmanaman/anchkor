ALTER TABLE "comment" DROP CONSTRAINT "comment_parent_id_comment_id_fk";
--> statement-breakpoint
ALTER TABLE "comment" ADD CONSTRAINT "comment_parent_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."comment"("id") ON DELETE cascade ON UPDATE no action;