import { c as createServerRpc, g as getCookie } from './ssr.mjs';
import 'solid-js/web';
import 'solid-js';
import 'tiny-warning';
import 'tiny-invariant';
import 'solid-js/store';
import '@solid-primitives/refs';
import '@tanstack/router-core';
import 'jsesc';
import 'node:async_hooks';
import '@tanstack/history';
import 'isbot';
import 'node:stream/web';

const getServerCookies_1 = createServerRpc("src_routes_root_tsx--getServerCookies_1", "/_serverFn", function() {
  const colorMode = getCookie("kb-color-mode");
  return colorMode ? `kb-color-mode=${colorMode}` : "";
});

export { getServerCookies_1 };
//# sourceMappingURL=__root-spo_pRef.mjs.map
