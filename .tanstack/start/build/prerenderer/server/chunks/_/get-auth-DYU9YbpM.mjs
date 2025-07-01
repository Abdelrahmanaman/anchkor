import { c as createServerRpc, d as createServerFn, e as getWebRequest, f as auth } from './ssr.mjs';
import { redirect } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/router-core/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tiny-warning/dist/tiny-warning.cjs.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tiny-invariant/dist/esm/tiny-invariant.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/store/dist/server.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/refs/dist/index.js';
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

const getSession_createServerFn_handler = createServerRpc("src_lib_get-auth_ts--getSession_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return getSession.__executeServer(opts, signal);
});
const getUserAuth_createServerFn_handler = createServerRpc("src_lib_get-auth_ts--getUserAuth_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return getUserAuth.__executeServer(opts, signal);
});
const getSession = createServerFn({
  method: "GET"
}).handler(getSession_createServerFn_handler, async () => {
  const request = getWebRequest();
  if (!request) {
    throw redirect({
      to: "/login"
    });
  }
  const session = await auth.api.getSession({
    headers: request.headers
  });
  if (!(session == null ? void 0 : session.user)) {
    throw redirect({
      to: "/login"
    });
  }
  return session.user;
});
const getUserAuth = createServerFn({
  method: "GET"
}).handler(getUserAuth_createServerFn_handler, async () => {
  const request = getWebRequest();
  if (!request) {
    throw redirect({
      to: "/login"
    });
  }
  const userSession = auth.api.getSession({
    headers: request.headers
  });
  const userToken = auth.api.getToken({
    headers: request.headers
  });
  const [sessionResult, tokenResult] = await Promise.all([tryCatch(userSession), tryCatch(userToken)]);
  const session = sessionResult.data;
  const token = tokenResult.data;
  return {
    jwt: token == null ? void 0 : token.token,
    user: session == null ? void 0 : session.user
  };
});
async function tryCatch(promise) {
  try {
    const data = await promise;
    return {
      data,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
}

export { getSession_createServerFn_handler, getUserAuth_createServerFn_handler };
//# sourceMappingURL=get-auth-DYU9YbpM.mjs.map
