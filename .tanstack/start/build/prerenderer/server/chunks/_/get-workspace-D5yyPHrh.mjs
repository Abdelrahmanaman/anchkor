import { c as createServerRpc, d as createServerFn, h as db } from './ssr.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
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
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/drizzle-orm/pg-core/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/history/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/isbot/index.mjs';
import 'node:stream/web';

const getWorkspace_createServerFn_handler = createServerRpc("src_actions_get-workspace_tsx--getWorkspace_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return getWorkspace.__executeServer(opts, signal);
});
const getWorkspace = createServerFn({
  method: "GET"
}).validator(({
  workspaceId
}) => {
  if (typeof workspaceId !== "string") {
    throw new Error("Invalid workspace ID");
  }
  return {
    workspaceId
  };
}).handler(getWorkspace_createServerFn_handler, async ({
  data: {
    workspaceId
  }
}) => {
  const data = await db.query.workspace.findFirst({
    where: (workspace, {
      eq
    }) => eq(workspace.id, workspaceId)
  });
  if (!data) {
    return {
      success: false,
      message: "Workspace not found"
    };
  }
  return {
    success: true,
    message: "Workspace found",
    data
  };
});

export { getWorkspace_createServerFn_handler };
//# sourceMappingURL=get-workspace-D5yyPHrh.mjs.map
