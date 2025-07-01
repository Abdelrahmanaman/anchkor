import { ssr, ssrHydrationKey, escape, createComponent } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { e as createServerRpc, f as createServerFn, h as db, i as createFileRoute } from './ssr.mjs';
import { F as FeedbackCard } from './feedback-card-D8u6DB4h.mjs';
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
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/nanoid/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/history/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/isbot/index.mjs';
import 'node:stream/web';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/solid.js';
import './card-l2fL6499.mjs';
import './cn-Z8LgDN0F.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/clsx/dist/clsx.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import './zero-app-DbTpjO0h.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cva/dist/index.mjs';

var _tmpl$ = ["<section", ' class="h-full w-full pt-3">', "</section>"];
const getd_createServerFn_handler = createServerRpc("src_routes_layout_workspaceId_feedbackId_tsx--getd_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return getd.__executeServer(opts, signal);
});
const getd = createServerFn({
  method: "GET"
}).validator((feedbackId) => {
  return {
    feedbackId
  };
}).handler(getd_createServerFn_handler, async ({
  data: {
    feedbackId
  }
}) => {
  const d = await db.query.feedback.findFirst({
    where: (feedback, {
      eq
    }) => eq(feedback.id, feedbackId),
    with: {
      likes: true
    }
  });
  return d;
});
const Route = createFileRoute("/_layout/$workspaceId/$feedbackId")({
  component: RouteComponent,
  beforeLoad: async ({
    params: {
      feedbackId
    }
  }) => {
    const d = await getd({
      data: feedbackId
    });
    console.log("workdf", d);
  }
});
function RouteComponent() {
  Route.useParams();
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(FeedbackCard, {})));
}

export { getd_createServerFn_handler };
//# sourceMappingURL=_feedbackId-BMimhnY2.mjs.map
