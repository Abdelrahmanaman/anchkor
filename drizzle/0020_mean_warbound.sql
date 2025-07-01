ALTER TABLE "like" ALTER COLUMN "feedback_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "like" ADD COLUMN "comment_id" text;--> statement-breakpoint
ALTER TABLE "like" ADD CONSTRAINT "like_comment_id_comment_id_fk" FOREIGN KEY ("comment_id") REFERENCES "public"."comment"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "like_comment_user_idx" ON "like" USING btree ("comment_id","user_id");--> statement-breakpoint
CREATE INDEX "like_comment_id_idx" ON "like" USING btree ("comment_id");