import { createComponent } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { createZero } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/solid.js';
import { e as useLoaderData, f as createMutators, s as schema } from './ssr.mjs';
import { useContext, createContext, createMemo } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
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

const Context = createContext();
function ZeroContext(props) {
  const loaderData = useLoaderData({
    from: "/_layout"
  });
  console.log(loaderData());
  const z = createMemo(() => {
    return createZero({
      userID: "842qmTSaa84zx8J9MlOBBbcDiS8DfSIM",
      auth: async (error) => {
        return "eyJhbGciOiJFZERTQSIsImtpZCI6IkNDQkZQY3lsNFZYT3VVRXprNDhaOGU0cGhpc29pOUpYIn0.eyJuYW1lIjoiQWJkZWxyYWhtYW4gQm91cmthIiwiZW1haWwiOiJhYm91cmthQGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOmZhbHNlLCJpbWFnZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyNS0wNi0xMVQyMjoxODo1MS45NzFaIiwidXBkYXRlZEF0IjoiMjAyNS0wNi0xMVQyMjoxODo1MS45NzFaIiwiaWQiOiI4NDJxbVRTYWE4NHp4OEo5TWxPQkJiY0RpUzhEZlNJTSIsImlhdCI6MTc1MTExMjYxOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiZXhwIjoxNzUxMTk5MDE5LCJzdWIiOiI4NDJxbVRTYWE4NHp4OEo5TWxPQkJiY0RpUzhEZlNJTSJ9.vpgFIO_P2PZYsKpB5MVIsdIOpmfOkVlqe3MZHlULmBoZbIoHFBJEE2KASNXRMUAfFwmJBNO_7g82qbjk302ABw";
      },
      server: "http://localhost:4848",
      schema,
      kvStore: "idb",
      mutators: createMutators({
        authData: "842qmTSaa84zx8J9MlOBBbcDiS8DfSIM"
      }),
      logLevel: "info"
    });
  });
  return createComponent(Context.Provider, {
    value: z,
    get children() {
      return props.children;
    }
  });
}
function useZero() {
  const z = useContext(Context);
  return z;
}

export { ZeroContext as default, useZero };
//# sourceMappingURL=zero-app-DmbvaHgN.mjs.map
