import { createServerFn } from "@tanstack/solid-start";
import * as cheerio from "cheerio";

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
