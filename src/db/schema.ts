import { relations } from "drizzle-orm";
import { boolean, integer, jsonb, numeric, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	emailVerified: boolean("email_verified")
		.$defaultFn(() => false)
		.notNull(),
	image: text("image"),
	createdAt: timestamp("created_at")
		.$defaultFn(() => /* @__PURE__ */ new Date())
		.notNull(),
	updatedAt: timestamp("updated_at")
		.$defaultFn(() => /* @__PURE__ */ new Date())
		.notNull(),
});

export const session = pgTable("session", {
	id: text("id").primaryKey(),
	expiresAt: timestamp("expires_at").notNull(),
	token: text("token").notNull().unique(),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	activeOrganizationId: text("active_organization_id"),
});

export const account = pgTable("account", {
	id: text("id").primaryKey(),
	accountId: text("account_id").notNull(),
	providerId: text("provider_id").notNull(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	accessToken: text("access_token"),
	refreshToken: text("refresh_token"),
	idToken: text("id_token"),
	accessTokenExpiresAt: timestamp("access_token_expires_at"),
	refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
	scope: text("scope"),
	password: text("password"),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
	id: text("id").primaryKey(),
	identifier: text("identifier").notNull(),
	value: text("value").notNull(),
	expiresAt: timestamp("expires_at").notNull(),
	createdAt: timestamp("created_at").$defaultFn(
		() => /* @__PURE__ */ new Date(),
	),
	updatedAt: timestamp("updated_at").$defaultFn(
		() => /* @__PURE__ */ new Date(),
	),
});

export const organization = pgTable("organization", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	slug: text("slug").unique(),
	logo: text("logo"),
	createdAt: timestamp("created_at").notNull(),
	metadata: text("metadata"),
});

export const member = pgTable("member", {
	id: text("id").primaryKey(),
	organizationId: text("organization_id")
		.notNull()
		.references(() => organization.id, { onDelete: "cascade" }),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	role: text("role").default("member").notNull(),
	createdAt: timestamp("created_at").notNull(),
});

export const invitation = pgTable("invitation", {
	id: text("id").primaryKey(),
	organizationId: text("organization_id")
		.notNull()
		.references(() => organization.id, { onDelete: "cascade" }),
	email: text("email").notNull(),
	role: text("role"),
	status: text("status").default("pending").notNull(),
	expiresAt: timestamp("expires_at").notNull(),
	inviterId: text("inviter_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
});

export const jwks = pgTable("jwks", {
	id: text("id").primaryKey(),
	publicKey: text("public_key").notNull(),
	privateKey: text("private_key").notNull(),
	createdAt: timestamp("created_at").notNull(),
});

// OMS-Specific Tables
export const store = pgTable("store", {
	id: text("id").primaryKey(),
	organizationId: text("organization_id")
		.notNull()
		.references(() => organization.id, { onDelete: "cascade" }),
	name: text("name").notNull(),
	platform: text("platform")
		.notNull()
		.$type<"shopify" | "woocommerce" | "custom">(),
	apiKey: text("api_key"), // Encrypt in production
	apiSecret: text("api_secret"), // Encrypt in production
	storeUrl: text("store_url").notNull(),
	createdAt: timestamp("created_at")
		.$defaultFn(() => new Date())
		.notNull(),
	updatedAt: timestamp("updated_at")
		.$defaultFn(() => new Date())
		.notNull(),
});

export const product = pgTable("product", {
	id: text("id").primaryKey(),
	storeId: text("store_id")
		.notNull()
		.references(() => store.id, { onDelete: "cascade" }),
	name: text("name").notNull(),
	sku: text("sku").notNull().unique(),
	price: numeric("price", { precision: 10, scale: 2 }).notNull(),
	weight: numeric("weight", { precision: 10, scale: 2 }),
	dimensions: jsonb("dimensions"),
	hsCode: text("hs_code"),
	createdAt: timestamp("created_at")
		.$defaultFn(() => new Date())
		.notNull(),
	updatedAt: timestamp("updated_at")
		.$defaultFn(() => new Date())
		.notNull(),
});

export const order = pgTable("order", {
	id: text("id").primaryKey(),
	storeId: text("store_id")
		.notNull()
		.references(() => store.id, { onDelete: "cascade" }),
	customerId: text("customer_id").references(() => user.id),
	orderNumber: text("order_number").notNull().unique(),
	status: text("status")
		.notNull()
		.$type<
			| "pending"
			| "unfulfilled"
			| "fulfilled"
			| "shipped"
			| "delivered"
			| "cancelled"
		>(),
	totalAmount: numeric("total_amount", { precision: 10, scale: 2 }).notNull(),
	shippingAddress: jsonb("shipping_address").notNull(),
	billingAddress: jsonb("billing_address"),
	createdAt: timestamp("created_at")
		.$defaultFn(() => new Date())
		.notNull(),
	updatedAt: timestamp("updated_at")
		.$defaultFn(() => new Date())
		.notNull(),
});

export const orderItem = pgTable("order_item", {
	id: text("id").primaryKey(),
	orderId: text("order_id")
		.notNull()
		.references(() => order.id, { onDelete: "cascade" }),
	productId: text("product_id")
		.notNull()
		.references(() => product.id, { onDelete: "restrict" }),
	quantity: integer("quantity").notNull(),
	unitPrice: numeric("unit_price", { precision: 10, scale: 2 }).notNull(),
	subtotal: numeric("subtotal", { precision: 10, scale: 2 }).notNull(),
	createdAt: timestamp("created_at")
		.$defaultFn(() => new Date())
		.notNull(),
	updatedAt: timestamp("updated_at")
		.$defaultFn(() => new Date())
		.notNull(),
});

export const carrier = pgTable("carrier", {
	id: text("id").primaryKey(),
	organizationId: text("organization_id").references(() => organization.id, {
		onDelete: "cascade",
	}),
	name: text("name").notNull(),
	apiKey: text("api_key"), // Encrypt in production
	createdAt: timestamp("created_at")
		.$defaultFn(() => new Date())
		.notNull(),
	updatedAt: timestamp("updated_at")
		.$defaultFn(() => new Date())
		.notNull(),
});

export const carrierService = pgTable("carrier_service", {
	id: text("id").primaryKey(),
	carrierId: text("carrier_id")
		.notNull()
		.references(() => carrier.id, { onDelete: "cascade" }),
	name: text("name").notNull(),
	code: text("code").notNull(),
	createdAt: timestamp("created_at")
		.$defaultFn(() => new Date())
		.notNull(),
	updatedAt: timestamp("updated_at")
		.$defaultFn(() => new Date())
		.notNull(),
});

export const shippingRate = pgTable("shipping_rate", {
	id: text("id").primaryKey(),
	orderId: text("order_id")
		.notNull()
		.references(() => order.id, { onDelete: "cascade" }),
	carrierId: text("carrier_id")
		.notNull()
		.references(() => carrier.id, { onDelete: "restrict" }),
	carrierServiceId: text("carrier_service_id")
		.notNull()
		.references(() => carrierService.id, { onDelete: "restrict" }),
	rate: numeric("rate", { precision: 10, scale: 2 }).notNull(),
	estimatedDelivery: timestamp("estimated_delivery"),
	createdAt: timestamp("created_at")
		.$defaultFn(() => new Date())
		.notNull(),
	updatedAt: timestamp("updated_at")
		.$defaultFn(() => new Date())
		.notNull(),
});

export const shipment = pgTable("shipment", {
	id: text("id").primaryKey(),
	orderId: text("order_id")
		.notNull()
		.references(() => order.id, { onDelete: "cascade" }),
	carrierId: text("carrier_id")
		.notNull()
		.references(() => carrier.id, { onDelete: "restrict" }),
	carrierServiceId: text("carrier_service_id")
		.notNull()
		.references(() => carrierService.id, { onDelete: "restrict" }),
	trackingNumber: text("tracking_number").notNull().unique(),
	labelUrl: text("label_url"),
	rate: numeric("rate", { precision: 10, scale: 2 }).notNull(),
	createdAt: timestamp("created_at")
		.$defaultFn(() => new Date())
		.notNull(),
	updatedAt: timestamp("updated_at")
		.$defaultFn(() => new Date())
		.notNull(),
});

export const dutyTaxCalculation = pgTable("duty_tax_calculation", {
	id: text("id").primaryKey(),
	orderId: text("order_id")
		.notNull()
		.references(() => order.id, { onDelete: "cascade" }),
	dutyAmount: numeric("duty_amount", { precision: 10, scale: 2 }).notNull(),
	taxAmount: numeric("tax_amount", { precision: 10, scale: 2 }).notNull(),
	countryCode: text("country_code").notNull(),
	calculationDetails: jsonb("calculation_details"),
	createdAt: timestamp("created_at")
		.$defaultFn(() => new Date())
		.notNull(),
	updatedAt: timestamp("updated_at")
		.$defaultFn(() => new Date())
		.notNull(),
});

// Relations
export const organizationRelations = relations(organization, ({ many }) => ({
	members: many(member),
	stores: many(store),
	carriers: many(carrier),
}));

export const memberRelations = relations(member, ({ one }) => ({
	organization: one(organization, {
		fields: [member.organizationId],
		references: [organization.id],
	}),
	user: one(user, { fields: [member.userId], references: [user.id] }),
}));

export const storeRelations = relations(store, ({ one, many }) => ({
	organization: one(organization, {
		fields: [store.organizationId],
		references: [organization.id],
	}),
	products: many(product),
	orders: many(order),
}));

export const productRelations = relations(product, ({ one, many }) => ({
	store: one(store, { fields: [product.storeId], references: [store.id] }),
	orderItems: many(orderItem),
}));

export const orderRelations = relations(order, ({ one, many }) => ({
	store: one(store, { fields: [order.storeId], references: [store.id] }),
	customer: one(user, { fields: [order.customerId], references: [user.id] }),
	orderItems: many(orderItem),
	shippingRates: many(shippingRate),
	shipments: many(shipment),
	dutyTaxCalculations: many(dutyTaxCalculation),
}));

export const orderItemRelations = relations(orderItem, ({ one }) => ({
	order: one(order, { fields: [orderItem.orderId], references: [order.id] }),
	product: one(product, {
		fields: [orderItem.productId],
		references: [product.id],
	}),
}));

export const carrierRelations = relations(carrier, ({ one, many }) => ({
	organization: one(organization, {
		fields: [carrier.organizationId],
		references: [organization.id],
	}),
	carrierServices: many(carrierService),
	shippingRates: many(shippingRate),
	shipments: many(shipment),
}));

export const carrierServiceRelations = relations(
	carrierService,
	({ one, many }) => ({
		carrier: one(carrier, {
			fields: [carrierService.carrierId],
			references: [carrier.id],
		}),
		shippingRates: many(shippingRate),
		shipments: many(shipment),
	}),
);

export const shippingRateRelations = relations(shippingRate, ({ one }) => ({
	order: one(order, { fields: [shippingRate.orderId], references: [order.id] }),
	carrier: one(carrier, {
		fields: [shippingRate.carrierId],
		references: [carrier.id],
	}),
	carrierService: one(carrierService, {
		fields: [shippingRate.carrierServiceId],
		references: [carrierService.id],
	}),
}));

export const shipmentRelations = relations(shipment, ({ one }) => ({
	order: one(order, { fields: [shipment.orderId], references: [order.id] }),
	carrier: one(carrier, {
		fields: [shipment.carrierId],
		references: [carrier.id],
	}),
	carrierService: one(carrierService, {
		fields: [shipment.carrierServiceId],
		references: [carrierService.id],
	}),
}));

export const dutyTaxCalculationRelations = relations(
	dutyTaxCalculation,
	({ one }) => ({
		order: one(order, {
			fields: [dutyTaxCalculation.orderId],
			references: [order.id],
		}),
	}),
);
