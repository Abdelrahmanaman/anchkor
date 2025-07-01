import { type } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/arktype/out/index.js';
import { createSignal } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { c as createForm, o as organization } from './auth-client-uPljF2Jv.mjs';
import * as cheerio from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cheerio/dist/esm/index.js';
import { nanoid } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/nanoid/index.js';
import { Resend } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/resend/dist/index.mjs';
import { renderToString, ssr, ssrHydrationKey, createComponent, NoHydration, escape, ssrAttribute } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { h as createServerFn, f as createServerRpc, i as db, w as workspace } from './ssr.mjs';

var _tmpl$ = ['<head><meta charset="utf-8"><title>Join <!--$-->', "<!--/--> on Anchkor!</title></head>"], _tmpl$2 = ["<html", ' lang="en">', '<body style="', '"><div style="', '"><div style="', '">Join <!--$-->', '<!--/--> on Anchkor!</div><div style="', '"><p style="', '">Hi <!--$-->', '<!--/-->,</p><p style="', '"><span style="', '">', '</span> has invited you to collaborate on <span style="', '">', '</span> with <span style="', '">Anchkor</span>!</p></div><div style="', '"><p style="', '">Join the team to start working together on exciting ideas, share resources, and bring <!--$-->', "<!--/--> to life.</p><a", ' style="', '">Accept Invitation</a></div><div style="', '"><p style="', '">Or copy and paste this link into your browser:</p><a', ' style="', '">', '</a></div><hr style="', '"><div style="', '"><p style="', '">Questions? Contact us at <a href="mailto:support@anchkor.com" style="', '">support@anchkor.com</a></p><p style="', '">\xA9 2024 Anchkor. All rights reserved.</p></div></div></body></html>'];
const BASE_URL = "https://anchkor.com";
function CollaborationInvite({
  firstName = "there",
  inviterName = "there",
  projectName = "there",
  token = "there"
}) {
  const inviteLink = `${BASE_URL}/accept-invite?token=${token}`;
  return ssr(_tmpl$2, ssrHydrationKey(), createComponent(NoHydration, {
    get children() {
      return ssr(_tmpl$, escape(projectName));
    }
  }), "margin:0;padding:0;background-color:#ffffff;font-family:sans-serif", "margin:40px auto;width:465px;border:1px solid #eaeaea;border-radius:4px;padding:20px", "display:none;max-height:0;overflow:hidden", escape(projectName), "margin-top:32px;text-align:center", "font-size:18px;font-weight:600;color:#000000;line-height:24px;margin-bottom:16px", escape(firstName.charAt(0).toUpperCase()) + escape(firstName.slice(1)), "font-size:14px;color:#333333;line-height:24px;margin-bottom:24px", "font-weight:700", escape(inviterName), "font-weight:700", escape(projectName), "font-weight:700", "margin-bottom:32px;text-align:center", "font-size:14px;color:#333333;line-height:24px;margin-bottom:24px", escape(projectName), ssrAttribute("href", escape(inviteLink, true), false), "display:inline-block;padding:12px 24px;background-color:#2754C5;color:#ffffff;font-size:14px;font-weight:500;text-decoration:none;border-radius:4px", "margin-bottom:24px;text-align:center", "font-size:12px;color:#666666;line-height:20px;margin-bottom:8px", ssrAttribute("href", escape(inviteLink, true), false), "font-size:12px;color:#2754C5;text-decoration:underline;word-break:break-all", escape(inviteLink), "border:1px solid #eaeaea;margin:26px 0", "text-align:center", "font-size:12px;color:#666666;line-height:20px;margin-bottom:8px", "color:#2754C5;text-decoration:underline", "font-size:12px;color:#666666;line-height:20px");
}
const getWebsiteData_createServerFn_handler = createServerRpc("src_components_workspace-creation_workspace-creation-fn_ts--getWebsiteData_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return getWebsiteData.__executeServer(opts, signal);
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
const findWorkspaceUrl_createServerFn_handler = createServerRpc("src_components_workspace-creation_workspace-creation-fn_ts--findWorkspaceUrl_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return findWorkspaceUrl.__executeServer(opts, signal);
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
const resend = new Resend(process.env.RESEND_API_KEY);
const addCollaborator_createServerFn_handler = createServerRpc("src_components_workspace-creation_workspace-creation-fn_ts--addCollaborator_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return addCollaborator.__executeServer(opts, signal);
});
const addCollaborator = createServerFn({
  method: "GET"
}).validator(({
  email: email2
}) => {
  return {
    email: email2
  };
}).handler(addCollaborator_createServerFn_handler, async ({
  data: {
    email: email2
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
    to: [email2],
    subject: "You have been invited to join a workspace",
    html
  });
  if (error) {
    throw error.message;
  }
  return data;
});
const createWorkspace_createServerFn_handler = createServerRpc("src_components_workspace-creation_workspace-creation-fn_ts--createWorkspace_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return createWorkspace.__executeServer(opts, signal);
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
const workspaceSchema = type({
  domain: type("string").configure({
    message: "Please enter a valid website URL."
  }),
  name: type("string>3").configure({
    message: "Please enter a valid name."
  }),
  logo: "string",
  title: "string",
  description: "string",
  workspaceUrl: "string"
});
const email = type({
  email: type("string.email").configure({
    message: "Please enter a valid email."
  })
});
function useCreateWorkspace() {
  const [step, setStep] = createSignal(1);
  const [prevStep, setPrevStep] = createSignal(1);
  function direction() {
    return step() > prevStep() ? "forward" : "backward";
  }
  const createWorkspaceForm = createForm(() => ({
    defaultValues: {
      domain: "",
      name: "",
      logo: "",
      title: "",
      description: "",
      workspaceUrl: ""
    },
    onSubmit: async ({ value }) => {
      var _a;
      const org = await organization.create({
        name: value.name,
        slug: value.name
      });
      const orgId = (_a = org.data) == null ? void 0 : _a.id;
      if (!orgId) {
        throw new Error("Organization ID is required");
      }
      const res = await createWorkspace({ data: { data: value, orgId } });
      const { success } = res;
      if (success) {
        createWorkspaceForm.reset();
        setStep(3);
      }
    },
    validators: {
      onMount: workspaceSchema
    }
  }));
  return {
    createWorkspaceForm,
    step,
    prevStep,
    setPrevStep,
    setStep,
    direction
  };
}

export { CollaborationInvite as C, addCollaborator as a, email as e, findWorkspaceUrl as f, getWebsiteData as g, useCreateWorkspace as u, workspaceSchema as w };
//# sourceMappingURL=use-create-workspace-CJCSZ5rg.mjs.map
