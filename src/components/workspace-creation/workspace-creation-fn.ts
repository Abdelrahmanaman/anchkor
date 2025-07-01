import { createServerFn } from "@tanstack/solid-start";
import * as cheerio from "cheerio";
import { nanoid } from "nanoid";
import { Resend } from "resend";
import { renderToString } from "solid-js/web";
import { db } from "~/db/db";
import { workspace } from "~/db/schema";
import { CollaborationInvite } from "../email/collaboration-invite";
import { workspaceSchema } from "./use-create-workspace";
export const getWebsiteData = createServerFn({ method: "GET" })
	.validator(
		({
			domain,
		}: {
			domain: string;
		}) => {
			return {
				domain,
			};
		},
	)
	.handler(async ({ data }) => {
		const baseUrl = `https://${data.domain}`;

		const response = await fetch(baseUrl, {
			headers: {
				"User-Agent":
					"Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
			},
			redirect: "follow", // Follow redirects
			signal: AbortSignal.timeout(7000), // Timeout after 7 seconds
		});

		if (!response.ok) {
			throw new Error(
				`Failed to fetch URL: ${response.statusText} (${response.status})`,
			);
		}

		const html = await response.text(); // Get the HTML content as text
		const $ = cheerio.load(html); // Load the HTML into Cheerio

		const title =
			$('meta[property="og:title"]').attr("content") || // Open Graph Title
			$("title").text() || // Fallback to HTML Title tag
			"No title found";

		const description =
			$('meta[property="og:description"]').attr("content") || // Open Graph Description
			$('meta[name="description"]').attr("content") || // Standard Description meta tag
			"No description found";

		let logoUrl: string | null = null;

		// Get the raw href value
		const rawLogoUrl =
			$('link[rel="apple-touch-icon"]').attr("href") || // High-res icon for Apple devices
			$('link[rel="icon"]').attr("href") || // Standard favicon
			$('link[rel="shortcut icon"]').attr("href") || // Older favicon standard
			null;

		// Convert relative URLs to absolute URLs
		if (rawLogoUrl) {
			if (
				rawLogoUrl.startsWith("http://") ||
				rawLogoUrl.startsWith("https://")
			) {
				// Already absolute URL
				logoUrl = rawLogoUrl;
			} else if (rawLogoUrl.startsWith("//")) {
				// Protocol-relative URL
				logoUrl = `https:${rawLogoUrl}`;
			} else if (rawLogoUrl.startsWith("/")) {
				// Root-relative URL
				logoUrl = `https://${data.domain}${rawLogoUrl}`;
			} else {
				// Relative URL (though uncommon for favicons)
				logoUrl = `https://${data.domain}/${rawLogoUrl}`;
			}
		}

		return {
			title,
			description,
			logoUrl,
		};
	});

export const findWorkspaceUrl = createServerFn({ method: "GET" })
	.validator(
		({
			url,
		}: {
			url: unknown;
		}) => {
			if (typeof url !== "string") {
				throw new Error("Invalid url");
			}
			return {
				url,
			};
		},
	)
	.handler(async ({ data }) => {
		const workspaceUrl = `${data.url}.anchkor.com`;
		const workspace = await db.query.workspace.findFirst({
			where: (workspace, { eq }) => eq(workspace.workspaceUrl, workspaceUrl),
		});

		return !!workspace;
	});

const resend = new Resend(process.env.RESEND_API_KEY as string);
export const addCollaborator = createServerFn({ method: "GET" })
	.validator(
		({
			email,
		}: {
			email: string;
		}) => {
			return {
				email,
			};
		},
	)
	.handler(async ({ data: { email } }) => {
		const html = renderToString(() =>
			CollaborationInvite({
				firstName: "John",
				inviterName: "John",
				projectName: "John",
				token: "John",
			}),
		);

		const { data, error } = await resend.emails.send({
			from: "Anchkor <noreplay@abourka.com>",
			to: [email],
			subject: "You have been invited to join a workspace",
			html,
		});
		if (error) {
			throw error.message;
		}
		return data;
	});

export const createWorkspace = createServerFn({ method: "POST" })
	.validator(({ data, orgId }) => {
		const workspaceData = workspaceSchema.assert(data);
	if (typeof orgId !== "string") {
		throw new Error("Organization ID is required");
	}
		return {
			workspaceData,
			orgId,
		};
	})
	.handler(async ({ data: { workspaceData, orgId } }) => {
		const id = nanoid();
		const [insertedWorkspace] = await db
			.insert(workspace)
			.values([
				{
					id,
					domain: workspaceData.domain,
					name: workspaceData.name,
					organizationId: orgId,
					workspaceUrl: workspaceData.workspaceUrl,
					logo: workspaceData.logo,
				},
			])
			.returning();

		if (!insertedWorkspace) {
			throw new Error("Insert failed, no row returned");
		}

		return { success: true };
	});
