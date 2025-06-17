CREATE TABLE "feedback" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"workspace_id" text NOT NULL,
	"title" text NOT NULL,
	"message" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "workspace" (
	"id" text PRIMARY KEY NOT NULL,
	"organization_id" text NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
DROP TABLE "carrier" CASCADE;--> statement-breakpoint
DROP TABLE "carrier_service" CASCADE;--> statement-breakpoint
DROP TABLE "duty_tax_calculation" CASCADE;--> statement-breakpoint
DROP TABLE "order" CASCADE;--> statement-breakpoint
DROP TABLE "order_item" CASCADE;--> statement-breakpoint
DROP TABLE "product" CASCADE;--> statement-breakpoint
DROP TABLE "shipment" CASCADE;--> statement-breakpoint
DROP TABLE "shipping_rate" CASCADE;--> statement-breakpoint
DROP TABLE "store" CASCADE;--> statement-breakpoint
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_workspace_id_workspace_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "public"."workspace"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workspace" ADD CONSTRAINT "workspace_organization_id_organization_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON DELETE cascade ON UPDATE no action;