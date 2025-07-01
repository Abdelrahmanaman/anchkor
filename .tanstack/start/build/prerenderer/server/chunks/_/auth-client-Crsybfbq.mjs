import { createComponent, mergeProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { FormApi, functionalUpdate, FieldApi } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/form-core/dist/esm/index.js';
import { onMount, createComputed, createComponent as createComponent$1, onCleanup, createSignal } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { i as useStore } from './ssr.mjs';
import { jwtClient, organizationClient } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/client/plugins/index.mjs';
import { createAuthClient } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/client/solid/index.mjs';

function makeFieldReactive(fieldApi) {
  const [field, setField] = createSignal(fieldApi, {
    equals: false
  });
  const unsubscribeStore = fieldApi.store.subscribe(() => setField(fieldApi));
  onCleanup(unsubscribeStore);
  return field;
}
function createField(opts) {
  const options = opts();
  const api = new FieldApi(options);
  const extendedApi = api;
  extendedApi.Field = Field;
  let mounted = false;
  onMount(() => {
    const cleanupFn = api.mount();
    mounted = true;
    onCleanup(() => {
      cleanupFn();
      mounted = false;
    });
  });
  createComputed(() => {
    if (!mounted) return;
    api.update(opts());
  });
  return makeFieldReactive(extendedApi);
}
function Field(props) {
  const fieldApi = createField(() => {
    const {
      children,
      ...fieldOptions
    } = props;
    return fieldOptions;
  });
  return createComponent$1(() => props.children(fieldApi), {});
}
function createForm(opts) {
  const options = opts == null ? void 0 : opts();
  const api = new FormApi(options);
  const extendedApi = api;
  extendedApi.Field = (props) => createComponent(Field, mergeProps(props, {
    form: api
  }));
  extendedApi.createField = (props) => createField(() => {
    return {
      ...props(),
      form: api
    };
  });
  extendedApi.useStore = (selector) => useStore(api.store, selector);
  extendedApi.Subscribe = (props) => functionalUpdate(props.children, useStore(api.store, props.selector));
  onMount(api.mount);
  createComputed(() => api.update(opts == null ? void 0 : opts()));
  return extendedApi;
}
const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [jwtClient(), organizationClient()]
});
const {
  signIn,
  signOut,
  signUp,
  getAccessToken,
  useSession,
  token,
  organization
} = authClient;

export { signIn as a, createForm as c, organization as o, signUp as s };
//# sourceMappingURL=auth-client-Crsybfbq.mjs.map
