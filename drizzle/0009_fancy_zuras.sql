CREATE INDEX "account_user_id_idx" ON "account" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "account_provider_id_idx" ON "account" USING btree ("provider_id");--> statement-breakpoint
CREATE INDEX "comment_feedback_id_idx" ON "comment" USING btree ("feedback_id");--> statement-breakpoint
CREATE INDEX "comment_user_id_idx" ON "comment" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "comment_created_at_idx" ON "comment" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "comment_feedback_created_idx" ON "comment" USING btree ("feedback_id","created_at");--> statement-breakpoint
CREATE INDEX "feedback_workspace_id_idx" ON "feedback" USING btree ("workspace_id");--> statement-breakpoint
CREATE INDEX "feedback_user_id_idx" ON "feedback" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "feedback_status_idx" ON "feedback" USING btree ("status");--> statement-breakpoint
CREATE INDEX "feedback_created_at_idx" ON "feedback" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "feedback_likes_count_idx" ON "feedback" USING btree ("likes_count");--> statement-breakpoint
CREATE INDEX "feedback_workspace_status_idx" ON "feedback" USING btree ("workspace_id","status");--> statement-breakpoint
CREATE INDEX "feedback_workspace_created_idx" ON "feedback" USING btree ("workspace_id","created_at");--> statement-breakpoint
CREATE INDEX "invitation_organization_id_idx" ON "invitation" USING btree ("organization_id");--> statement-breakpoint
CREATE INDEX "invitation_email_idx" ON "invitation" USING btree ("email");--> statement-breakpoint
CREATE INDEX "invitation_status_idx" ON "invitation" USING btree ("status");--> statement-breakpoint
CREATE INDEX "invitation_expires_at_idx" ON "invitation" USING btree ("expires_at");--> statement-breakpoint
CREATE INDEX "jwks_created_at_idx" ON "jwks" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "like_feedback_id_idx" ON "like" USING btree ("feedback_id");--> statement-breakpoint
CREATE INDEX "like_user_id_idx" ON "like" USING btree ("user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "member_org_user_idx" ON "member" USING btree ("organization_id","user_id");--> statement-breakpoint
CREATE INDEX "member_organization_id_idx" ON "member" USING btree ("organization_id");--> statement-breakpoint
CREATE INDEX "member_user_id_idx" ON "member" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "member_role_idx" ON "member" USING btree ("role");--> statement-breakpoint
CREATE INDEX "organization_name_idx" ON "organization" USING btree ("name");--> statement-breakpoint
CREATE INDEX "organization_created_at_idx" ON "organization" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "session_user_id_idx" ON "session" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "session_active_org_idx" ON "session" USING btree ("active_organization_id");--> statement-breakpoint
CREATE INDEX "session_expires_at_idx" ON "session" USING btree ("expires_at");--> statement-breakpoint
CREATE INDEX "user_email_idx" ON "user" USING btree ("email");--> statement-breakpoint
CREATE INDEX "user_created_at_idx" ON "user" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "verification_identifier_idx" ON "verification" USING btree ("identifier");--> statement-breakpoint
CREATE INDEX "verification_expires_at_idx" ON "verification" USING btree ("expires_at");--> statement-breakpoint
CREATE UNIQUE INDEX "workspace_org_name_idx" ON "workspace" USING btree ("organization_id","name");--> statement-breakpoint
CREATE UNIQUE INDEX "workspace_domain_idx" ON "workspace" USING btree ("domain");--> statement-breakpoint
CREATE UNIQUE INDEX "workspace_url_idx" ON "workspace" USING btree ("workspace_url");--> statement-breakpoint
CREATE INDEX "workspace_organization_id_idx" ON "workspace" USING btree ("organization_id");--> statement-breakpoint
CREATE INDEX "workspace_name_idx" ON "workspace" USING btree ("name");--> statement-breakpoint
CREATE INDEX "workspace_created_at_idx" ON "workspace" USING btree ("created_at");