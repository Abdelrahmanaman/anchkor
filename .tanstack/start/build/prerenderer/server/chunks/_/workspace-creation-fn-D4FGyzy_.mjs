import * as cheerio from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cheerio/dist/esm/index.js';
import { nanoid } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/nanoid/index.js';
import { Resend } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/resend/dist/index.mjs';
import { renderToString } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { g as createServerRpc, i as createServerFn, l as db, w as workspace } from './ssr.mjs';
import { C as CollaborationInvite, w as workspaceSchema } from './use-create-workspace-CO31sMVw.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tiny-warning/dist/tiny-warning.cjs.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tiny-invariant/dist/esm/tiny-invariant.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/store/dist/server.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/refs/dist/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/router-core/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/jsesc/jsesc.js';
import 'node:async_hooks';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/h3/dist/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/adapters/drizzle-adapter/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/plugins/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/drizzle-orm/postgres-js/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/drizzle-orm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/drizzle-orm/pg-core/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/arktype/out/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/zero/src/pg.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/jose/dist/node/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/postgres/src/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/zero.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/history/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/isbot/index.mjs';
import 'node:stream/web';
import './auth-client-BR_qw2T0.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/form-core/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/client/plugins/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/client/solid/index.mjs';

const getWebsiteData_createServerFn_handler = createServerRpc("src_components_workspace-creation_workspace-creation-fn_ts--getWebsiteData_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return getWebsiteData.__executeServer(opts, signal);
});
const findWorkspaceUrl_createServerFn_handler = createServerRpc("src_components_workspace-creation_workspace-creation-fn_ts--findWorkspaceUrl_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return findWorkspaceUrl.__executeServer(opts, signal);
});
const resend = new Resend(process.env.RESEND_API_KEY);
const addCollaborator_createServerFn_handler = createServerRpc("src_components_workspace-creation_workspace-creation-fn_ts--addCollaborator_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return addCollaborator.__executeServer(opts, signal);
});
const createWorkspace_createServerFn_handler = createServerRpc("src_components_workspace-creation_workspace-creation-fn_ts--createWorkspace_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return createWorkspace.__executeServer(opts, signal);
});
const getWebsiteData = createServerFn({
  method: "GET"
}).validator(({
  domain
}) => {
  return {
    domain
  };
}).handler(getWebsiteData_createServerFn_handler, async ({
  data
}) => {
  const baseUrl = `https://${data.domain}`;
  const response = await fetch(baseUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
    },
    redirect: "follow",
    // Follow redirects
    signal: AbortSignal.timeout(7e3)
    // Timeout after 7 seconds
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch URL: ${response.statusText} (${response.status})`);
  }
  const html = await response.text();
  const $ = cheerio.load(html);
  const title = $('meta[property="og:title"]').attr("content") || // Open Graph Title
  $("title").text() || // Fallback to HTML Title tag
  "No title found";
  const description = $('meta[property="og:description"]').attr("content") || // Open Graph Description
  $('meta[name="description"]').attr("content") || // Standard Description meta tag
  "No description found";
  let logoUrl = null;
  const rawLogoUrl = $('link[rel="apple-touch-icon"]').attr("href") || // High-res icon for Apple devices
  $('link[rel="icon"]').attr("href") || // Standard favicon
  $('link[rel="shortcut icon"]').attr("href") || // Older favicon standard
  null;
  if (rawLogoUrl) {
    if (rawLogoUrl.startsWith("http://") || rawLogoUrl.startsWith("https://")) {
      logoUrl = rawLogoUrl;
    } else if (rawLogoUrl.startsWith("//")) {
      logoUrl = `https:${rawLogoUrl}`;
    } else if (rawLogoUrl.startsWith("/")) {
      logoUrl = `https://${data.domain}${rawLogoUrl}`;
    } else {
      logoUrl = `https://${data.domain}/${rawLogoUrl}`;
    }
  }
  return {
    title,
    description,
    logoUrl
  };
});
const findWorkspaceUrl = createServerFn({
  method: "GET"
}).validator(({
  url
}) => {
  if (typeof url !== "string") {
    throw new Error("Invalid url");
  }
  return {
    url
  };
}).handler(findWorkspaceUrl_createServerFn_handler, async ({
  data
}) => {
  const workspaceUrl = `${data.url}.anchkor.com`;
  const workspace2 = await db.query.workspace.findFirst({
    where: (workspace3, {
      eq
    }) => eq(workspace3.workspaceUrl, workspaceUrl)
  });
  return !!workspace2;
});
const addCollaborator = createServerFn({
  method: "GET"
}).validator(({
  email
}) => {
  return {
    email
  };
}).handler(addCollaborator_createServerFn_handler, async ({
  data: {
    email
  }
}) => {
  const html = renderToString(() => CollaborationInvite({
    firstName: "John",
    inviterName: "John",
    projectName: "John",
    token: "John"
  }));
  const {
    data,
    error
  } = await resend.emails.send({
    from: "Anchkor <noreplay@abourka.com>",
    to: [email],
    subject: "You have been invited to join a workspace",
    html
  });
  if (error) {
    throw error.message;
  }
  return data;
});
const createWorkspace = createServerFn({
  method: "POST"
}).validator(({
  data,
  orgId
}) => {
  const workspaceData = workspaceSchema.assert(data);
  if (typeof orgId !== "string") {
    throw new Error("Organization ID is required");
  }
  return {
    workspaceData,
    orgId
  };
}).handler(createWorkspace_createServerFn_handler, async ({
  data: {
    workspaceData,
    orgId
  }
}) => {
  const id = nanoid();
  const [insertedWorkspace] = await db.insert(workspace).values([{
    id,
    domain: workspaceData.domain,
    name: workspaceData.name,
    organizationId: orgId,
    workspaceUrl: workspaceData.workspaceUrl,
    logo: workspaceData.logo
  }]).returning();
  if (!insertedWorkspace) {
    throw new Error("Insert failed, no row returned");
  }
  return {
    success: true
  };
});

export { addCollaborator_createServerFn_handler, createWorkspace_createServerFn_handler, findWorkspaceUrl_createServerFn_handler, getWebsiteData_createServerFn_handler };
//# sourceMappingURL=workspace-creation-fn-D4FGyzy_.mjs.map
