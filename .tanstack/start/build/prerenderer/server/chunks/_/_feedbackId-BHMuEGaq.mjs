import { ssr, ssrHydrationKey, escape, createComponent } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { createQuery } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/solid.js';
import { createEffect, For } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardFooter } from './card-Ci6yuNpI.mjs';
import { useZero } from './zero-app-DmbvaHgN.mjs';
import { d as Route2 } from './ssr.mjs';
import './cn-H80jjgLf.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/clsx/dist/clsx.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
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

var _tmpl$ = ["<section", ' class="h-full w-full pt-3">', "</section>"];
const SplitComponent = function RouteComponent() {
  const params = Route2.useParams();
  const z = useZero();
  const [feedback, ss] = createQuery(() => z().query.feedback.where("id", "=", params().feedbackId).related("user"));
  createEffect(() => {
    if (ss().type === "unknown") return;
    if (ss().type === "complete") console.log(feedback());
  });
  console.log("yeye", feedback());
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(For, {
    get each() {
      return feedback();
    },
    children: (feedback2) => createComponent(Card, {
      get children() {
        return [createComponent(CardHeader, {
          get children() {
            return createComponent(CardTitle, {
              get children() {
                return feedback2.title;
              }
            });
          }
        }), createComponent(CardContent, {
          get children() {
            return feedback2.message;
          }
        }), createComponent(CardFooter, {
          children: "hello world "
        })];
      }
    })
  })));
};

export { SplitComponent as component };
//# sourceMappingURL=_feedbackId-BHMuEGaq.mjs.map
