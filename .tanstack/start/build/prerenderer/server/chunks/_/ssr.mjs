import * as Solid$1 from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { createComponent, Dynamic, mergeProps, ssr, ssrHydrationKey, escape, isServer, ssrAttribute, NoHydration, HydrationScript, Hydration, ssrElement, useAssets, spread } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import * as Solid from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { onCleanup, createResource, createContext, Show, mergeProps as mergeProps$1, createMemo, createSignal, createEffect, sharedConfig, onMount, createUniqueId, useContext, createRenderEffect } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import warning from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tiny-warning/dist/tiny-warning.cjs.js';
import invariant from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tiny-invariant/dist/esm/tiny-invariant.js';
import { createStore, reconcile } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/store/dist/server.js';
import { mergeRefs } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/refs/dist/index.js';
import { rootRouteId, functionalUpdate, isNotFound, preloadWarning, exactPathTest, removeTrailingSlash, deepEqual, pick, isRedirect, createControlledPromise, getLocationChangeInfo, defaultGetScrollRestorationKey, restoreScroll, storageKey, BaseRoute, redirect, BaseRootRoute, trimPathLeft, joinPaths, trimPathRight, handleHashScroll, trimPath, processRouteTree, isResolvedRedirect, getMatchedRoutes, RouterCore } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/router-core/dist/esm/index.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { defineEventHandler as defineEventHandler$1, H3Event, toWebRequest, getCookie as getCookie$1, getResponseStatus as getResponseStatus$1, getResponseHeaders as getResponseHeaders$1 } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/h3/dist/index.mjs';
import { betterAuth } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/index.mjs';
import { drizzleAdapter } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/adapters/drizzle-adapter/index.mjs';
import { organization as organization$1, jwt } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/plugins/index.mjs';
import { drizzle } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/drizzle-orm/postgres-js/index.js';
import { relations } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/drizzle-orm/index.js';
import { pgTable, timestamp, text, uniqueIndex, index, pgEnum, boolean, integer, jsonb } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/drizzle-orm/pg-core/index.js';
import { tsrSerializer, mergeHeaders, json } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/router-core/dist/esm/ssr/client.js';
import { type } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/arktype/out/index.js';
import { PushProcessor, ZQLDatabase, PostgresJSConnection } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/zero/src/pg.js';
import * as jose from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/jose/dist/node/esm/index.js';
import postgres from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/postgres/src/index.js';
import { querify, definePermissions, ANYONE_CAN } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/zero.js';
import { customAlphabet } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/nanoid/index.js';
import { createMemoryHistory } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/history/dist/esm/index.js';
import { defineHandlerCallback, transformReadableStreamWithRouter, attachRouterServerSsrUtils, dehydrateRouter } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/router-core/dist/esm/ssr/server.js';
import { isbot } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/isbot/index.mjs';

var _tmpl$$9 = ["<div", ' style="', '"><div style="', '"><strong style="', '">Something went wrong!</strong><button style="', '">', '</button></div><div style="', '"></div><!--$-->', "<!--/--></div>"], _tmpl$2$2 = ["<div", '><pre style="', '">', "</pre></div>"], _tmpl$3 = ["<code", ">", "</code>"];
function CatchBoundary(props) {
  return createComponent(Solid.ErrorBoundary, {
    fallback: (error, reset) => {
      var _a;
      (_a = props.onCatch) == null ? void 0 : _a.call(props, error);
      Solid.createEffect(Solid.on([props.getResetKey], () => reset(), {
        defer: true
      }));
      return createComponent(Dynamic, {
        get component() {
          return props.errorComponent ?? ErrorComponent;
        },
        error,
        reset
      });
    },
    get children() {
      return props.children;
    }
  });
}
function ErrorComponent({
  error
}) {
  const [show, setShow] = Solid.createSignal("prerender" !== "production");
  return ssr(_tmpl$$9, ssrHydrationKey(), "padding:.5rem;max-width:100%", "display:flex;align-items:center;gap:.5rem", "font-size:1rem", "appearance:none;font-size:.6em;border:1px solid currentColor;padding:.1rem .2rem;font-weight:bold;border-radius:.25rem", show() ? "Hide Error" : "Show Error", "height:.25rem", show() ? ssr(_tmpl$2$2, ssrHydrationKey(), "font-size:.7em;border:1px solid red;border-radius:.25rem;padding:.3rem;color:red;overflow:auto", error.message ? ssr(_tmpl$3, ssrHydrationKey(), escape(error.message)) : escape(null)) : escape(null));
}
function ClientOnly(props) {
  return useHydrated() ? props.children : props.fallback;
}
function useHydrated() {
  const [hydrated, setHydrated] = Solid.createSignal(!isServer);
  if (!isServer) {
    Solid.createEffect(() => {
      setHydrated(true);
    });
  }
  return hydrated;
}
function useStore(store, selector = (d) => d) {
  const [slice, setSlice] = createStore({
    value: selector(store.state)
  });
  const unsub = store.subscribe(() => {
    const newValue = selector(store.state);
    setSlice("value", reconcile(newValue));
  });
  onCleanup(() => {
    unsub();
  });
  return () => slice.value;
}
const routerContext = Solid.createContext(null);
function getRouterContext() {
  if (typeof document === "undefined") {
    return routerContext;
  }
  if (window.__TSR_ROUTER_CONTEXT__) {
    return window.__TSR_ROUTER_CONTEXT__;
  }
  window.__TSR_ROUTER_CONTEXT__ = routerContext;
  return routerContext;
}
function useRouter(opts) {
  const value = Solid.useContext(getRouterContext());
  warning(!(((opts == null ? void 0 : opts.warn) ?? true) && !value), "useRouter must be used inside a <RouterProvider> component!");
  return value;
}
function useRouterState(opts) {
  const contextRouter = useRouter({
    warn: (opts == null ? void 0 : opts.router) === void 0
  });
  const router = (opts == null ? void 0 : opts.router) || contextRouter;
  return useStore(router.__store, (state) => {
    if (opts == null ? void 0 : opts.select) return opts.select(state);
    return state;
  });
}
const usePrevious = (fn) => {
  return Solid.createMemo((prev = {
    current: null,
    previous: null
  }) => {
    const current = fn();
    if (prev.current !== current) {
      prev.previous = prev.current;
      prev.current = current;
    }
    return prev;
  });
};
function useIntersectionObserver(ref, callback, intersectionObserverOptions = {}, options = {}) {
  const isIntersectionObserverAvailable = typeof IntersectionObserver === "function";
  let observerRef = null;
  Solid.createEffect(() => {
    const r = ref();
    if (!r || !isIntersectionObserverAvailable || options.disabled) {
      return;
    }
    observerRef = new IntersectionObserver(([entry]) => {
      callback(entry);
    }, intersectionObserverOptions);
    observerRef.observe(r);
    Solid.onCleanup(() => {
      observerRef == null ? void 0 : observerRef.disconnect();
    });
  });
  return () => observerRef;
}
const matchContext = Solid.createContext(() => void 0);
const dummyMatchContext = Solid.createContext(() => void 0);
function useMatch(opts) {
  const nearestMatchId = Solid.useContext(opts.from ? dummyMatchContext : matchContext);
  const matchSelection = useRouterState({
    select: (state) => {
      const match = state.matches.find((d) => opts.from ? opts.from === d.routeId : d.id === nearestMatchId());
      invariant(!((opts.shouldThrow ?? true) && !match), `Could not find ${opts.from ? `an active match from "${opts.from}"` : "a nearest match!"}`);
      if (match === void 0) {
        return void 0;
      }
      return opts.select ? opts.select(match) : match;
    }
  });
  return matchSelection;
}
function useLinkProps(options) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = Solid.createSignal(false);
  let hasRenderFetched = false;
  const [local, rest] = Solid.splitProps(Solid.mergeProps({
    activeProps: () => ({
      class: "active"
    }),
    inactiveProps: () => ({})
  }, options), ["activeProps", "inactiveProps", "activeOptions", "to", "preload", "preloadDelay", "hashScrollIntoView", "replace", "startTransition", "resetScroll", "viewTransition", "target", "disabled", "style", "class", "onClick", "onFocus", "onMouseEnter", "onMouseLeave", "onMouseOver", "onMouseOut", "onTouchStart", "ignoreBlocker"]);
  const [_, propsSafeToSpread] = Solid.splitProps(rest, ["params", "search", "hash", "state", "mask", "reloadDocument", "unsafeRelative"]);
  const type2 = () => {
    try {
      new URL(`${local.to}`);
      return "external";
    } catch {
    }
    return "internal";
  };
  const currentSearch = useRouterState({
    select: (s) => s.location.searchStr
  });
  const from = useMatch({
    strict: false,
    select: (match) => options.from ?? match.fullPath
  });
  const _options = () => ({
    ...options,
    from: from()
  });
  const next = Solid.createMemo(() => {
    currentSearch();
    return router.buildLocation(_options());
  });
  const preload = Solid.createMemo(() => {
    if (_options().reloadDocument) {
      return false;
    }
    return local.preload ?? router.options.defaultPreload;
  });
  const preloadDelay = () => local.preloadDelay ?? router.options.defaultPreloadDelay ?? 0;
  const isActive = useRouterState({
    select: (s) => {
      var _a, _b, _c, _d, _e, _f, _g;
      if ((_a = local.activeOptions) == null ? void 0 : _a.exact) {
        const testExact = exactPathTest(s.location.pathname, next().pathname, router.basepath);
        if (!testExact) {
          return false;
        }
      } else {
        const currentPathSplit = removeTrailingSlash(s.location.pathname, router.basepath).split("/");
        const nextPathSplit = (_c = removeTrailingSlash((_b = next()) == null ? void 0 : _b.pathname, router.basepath)) == null ? void 0 : _c.split("/");
        const pathIsFuzzyEqual = nextPathSplit == null ? void 0 : nextPathSplit.every((d, i) => d === currentPathSplit[i]);
        if (!pathIsFuzzyEqual) {
          return false;
        }
      }
      if (((_d = local.activeOptions) == null ? void 0 : _d.includeSearch) ?? true) {
        const searchTest = deepEqual(s.location.search, next().search, {
          partial: !((_e = local.activeOptions) == null ? void 0 : _e.exact),
          ignoreUndefined: !((_f = local.activeOptions) == null ? void 0 : _f.explicitUndefined)
        });
        if (!searchTest) {
          return false;
        }
      }
      if ((_g = local.activeOptions) == null ? void 0 : _g.includeHash) {
        return s.location.hash === next().hash;
      }
      return true;
    }
  });
  const doPreload = () => router.preloadRoute(_options()).catch((err) => {
    console.warn(err);
    console.warn(preloadWarning);
  });
  const preloadViewportIoCallback = (entry) => {
    if (entry == null ? void 0 : entry.isIntersecting) {
      doPreload();
    }
  };
  const [ref, setRef] = Solid.createSignal(null);
  useIntersectionObserver(ref, preloadViewportIoCallback, {
    rootMargin: "100px"
  }, {
    disabled: !!local.disabled || !(preload() === "viewport")
  });
  Solid.createEffect(() => {
    if (hasRenderFetched) {
      return;
    }
    if (!local.disabled && preload() === "render") {
      doPreload();
      hasRenderFetched = true;
    }
  });
  if (type2() === "external") {
    return Solid.mergeProps(propsSafeToSpread, {
      ref,
      get type() {
        return type2();
      },
      get href() {
        return local.to;
      }
    }, Solid.splitProps(local, ["target", "disabled", "style", "class", "onClick", "onFocus", "onMouseEnter", "onMouseLeave", "onMouseOut", "onMouseOver", "onTouchStart"])[0]);
  }
  const handleClick = (e) => {
    if (!local.disabled && !isCtrlEvent(e) && !e.defaultPrevented && (!local.target || local.target === "_self") && e.button === 0) {
      e.preventDefault();
      setIsTransitioning(true);
      const unsub = router.subscribe("onResolved", () => {
        unsub();
        setIsTransitioning(false);
      });
      return router.navigate({
        ..._options(),
        replace: local.replace,
        resetScroll: local.resetScroll,
        hashScrollIntoView: local.hashScrollIntoView,
        startTransition: local.startTransition,
        viewTransition: local.viewTransition,
        ignoreBlocker: local.ignoreBlocker
      });
    }
  };
  const handleFocus = (_2) => {
    if (local.disabled) return;
    if (preload()) {
      doPreload();
    }
  };
  const handleTouchStart = handleFocus;
  const handleEnter = (e) => {
    if (local.disabled) return;
    const eventTarget = e.target || {};
    if (preload()) {
      if (eventTarget.preloadTimeout) {
        return;
      }
      eventTarget.preloadTimeout = setTimeout(() => {
        eventTarget.preloadTimeout = null;
        doPreload();
      }, preloadDelay());
    }
  };
  const handleLeave = (e) => {
    if (local.disabled) return;
    const eventTarget = e.target || {};
    if (eventTarget.preloadTimeout) {
      clearTimeout(eventTarget.preloadTimeout);
      eventTarget.preloadTimeout = null;
    }
  };
  function callHandler(event, handler) {
    if (handler) {
      if (typeof handler === "function") {
        handler(event);
      } else {
        handler[0](handler[1], event);
      }
    }
    return event.defaultPrevented;
  }
  function composeEventHandlers(handlers) {
    return (event) => {
      for (const handler of handlers) {
        callHandler(event, handler);
      }
    };
  }
  const resolvedActiveProps = () => isActive() ? functionalUpdate(local.activeProps, {}) ?? {} : {};
  const resolvedInactiveProps = () => isActive() ? {} : functionalUpdate(local.inactiveProps, {});
  const resolvedClassName = () => [local.class, resolvedActiveProps().class, resolvedInactiveProps().class].filter(Boolean).join(" ");
  const resolvedStyle = () => ({
    ...local.style,
    ...resolvedActiveProps().style,
    ...resolvedInactiveProps().style
  });
  const href = Solid.createMemo(() => {
    const nextLocation = next();
    const maskedLocation = nextLocation == null ? void 0 : nextLocation.maskedLocation;
    return _options().disabled ? void 0 : maskedLocation ? router.history.createHref(maskedLocation.href) : router.history.createHref(nextLocation == null ? void 0 : nextLocation.href);
  });
  return Solid.mergeProps(propsSafeToSpread, resolvedActiveProps, resolvedInactiveProps, () => {
    return {
      href: href(),
      ref: mergeRefs(setRef, _options().ref),
      onClick: composeEventHandlers([local.onClick, handleClick]),
      onFocus: composeEventHandlers([local.onFocus, handleFocus]),
      onMouseEnter: composeEventHandlers([local.onMouseEnter, handleEnter]),
      onMouseOver: composeEventHandlers([local.onMouseOver, handleEnter]),
      onMouseLeave: composeEventHandlers([local.onMouseLeave, handleLeave]),
      onMouseOut: composeEventHandlers([local.onMouseOut, handleLeave]),
      onTouchStart: composeEventHandlers([local.onTouchStart, handleTouchStart]),
      disabled: !!local.disabled,
      target: local.target,
      ...Object.keys(resolvedStyle).length && {
        style: resolvedStyle
      },
      ...resolvedClassName() && {
        class: resolvedClassName()
      },
      ...local.disabled && {
        role: "link",
        "aria-disabled": true
      },
      ...isActive() && {
        "data-status": "active",
        "aria-current": "page"
      },
      ...isTransitioning() && {
        "data-transitioning": "transitioning"
      }
    };
  });
}
const Link = (props) => {
  const [local, rest] = Solid.splitProps(props, ["_asChild", "children"]);
  const [_, linkProps] = Solid.splitProps(useLinkProps(rest), ["type"]);
  const children = Solid.createMemo(() => {
    const ch = local.children;
    if (typeof ch === "function") {
      return ch({
        get isActive() {
          return linkProps["data-status"] === "active";
        },
        isTransitioning: false
      });
    }
    return ch;
  });
  return createComponent(Dynamic, mergeProps({
    get component() {
      return local._asChild ? local._asChild : "a";
    }
  }, linkProps, {
    get children() {
      return children();
    }
  }));
};
function isCtrlEvent(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function useLoaderData(opts) {
  return useMatch({
    from: opts.from,
    strict: opts.strict,
    select: (s) => {
      return opts.select ? opts.select(s.loaderData) : s.loaderData;
    }
  });
}
function useLoaderDeps(opts) {
  const {
    select,
    ...rest
  } = opts;
  return useMatch({
    ...rest,
    select: (s) => {
      return select ? select(s.loaderDeps) : s.loaderDeps;
    }
  });
}
function useParams(opts) {
  return useMatch({
    from: opts.from,
    strict: opts.strict,
    shouldThrow: opts.shouldThrow,
    select: (match) => {
      return opts.select ? opts.select(match.params) : match.params;
    }
  });
}
function useSearch(opts) {
  return useMatch({
    from: opts.from,
    strict: opts.strict,
    shouldThrow: opts.shouldThrow,
    select: (match) => {
      return opts.select ? opts.select(match.search) : match.search;
    }
  });
}
function useNavigate(_defaultOpts) {
  const {
    navigate,
    state
  } = useRouter();
  const matchIndex = useMatch({
    strict: false,
    select: (match) => match.index
  });
  return (options) => {
    return navigate({
      ...options,
      from: options.from ?? (_defaultOpts == null ? void 0 : _defaultOpts.from) ?? state.matches[matchIndex()].fullPath
    });
  };
}
let Route$8 = class Route extends BaseRoute {
  /**
   * @deprecated Use the `createRoute` function instead.
   */
  constructor(options) {
    super(options);
    this.useMatch = (opts) => {
      return useMatch({
        select: opts == null ? void 0 : opts.select,
        from: this.id
      });
    };
    this.useRouteContext = (opts) => {
      return useMatch({
        ...opts,
        from: this.id,
        select: (d) => (opts == null ? void 0 : opts.select) ? opts.select(d.context) : d.context
      });
    };
    this.useSearch = (opts) => {
      return useSearch({
        select: opts == null ? void 0 : opts.select,
        from: this.id
      });
    };
    this.useParams = (opts) => {
      return useParams({
        select: opts == null ? void 0 : opts.select,
        from: this.id
      });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({
        ...opts,
        from: this.id
      });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({
        ...opts,
        from: this.id
      });
    };
    this.useNavigate = () => {
      return useNavigate({
        from: this.fullPath
      });
    };
    this.Link = (props) => {
      const _self$ = this;
      return createComponent(Link, mergeProps({
        get from() {
          return _self$.fullPath;
        }
      }, props));
    };
  }
};
function createRoute(options) {
  return new Route$8(options);
}
class RootRoute extends BaseRootRoute {
  /**
   * @deprecated `RootRoute` is now an internal implementation detail. Use `createRootRoute()` instead.
   */
  constructor(options) {
    super(options);
    this.useMatch = (opts) => {
      return useMatch({
        select: opts == null ? void 0 : opts.select,
        from: this.id
      });
    };
    this.useRouteContext = (opts) => {
      return useMatch({
        ...opts,
        from: this.id,
        select: (d) => (opts == null ? void 0 : opts.select) ? opts.select(d.context) : d.context
      });
    };
    this.useSearch = (opts) => {
      return useSearch({
        select: opts == null ? void 0 : opts.select,
        from: this.id
      });
    };
    this.useParams = (opts) => {
      return useParams({
        select: opts == null ? void 0 : opts.select,
        from: this.id
      });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({
        ...opts,
        from: this.id
      });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({
        ...opts,
        from: this.id
      });
    };
    this.useNavigate = () => {
      return useNavigate({
        from: this.fullPath
      });
    };
    this.Link = (props) => {
      const _self$2 = this;
      return createComponent(Link, mergeProps({
        get from() {
          return _self$2.fullPath;
        }
      }, props));
    };
  }
}
function createRootRoute(options) {
  return new RootRoute(options);
}
function createFileRoute(path) {
  if (typeof path === "object") {
    return new FileRoute(path, {
      silent: true
    }).createRoute(path);
  }
  return new FileRoute(path, {
    silent: true
  }).createRoute;
}
class FileRoute {
  constructor(path, _opts) {
    this.path = path;
    this.createRoute = (options) => {
      warning(this.silent, "FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead.");
      const route = createRoute(options);
      route.isRoot = false;
      return route;
    };
    this.silent = _opts == null ? void 0 : _opts.silent;
  }
}
class LazyRoute {
  constructor(opts) {
    this.useMatch = (opts2) => {
      return useMatch({
        select: opts2 == null ? void 0 : opts2.select,
        from: this.options.id
      });
    };
    this.useRouteContext = (opts2) => {
      return useMatch({
        from: this.options.id,
        select: (d) => (opts2 == null ? void 0 : opts2.select) ? opts2.select(d.context) : d.context
      });
    };
    this.useSearch = (opts2) => {
      return useSearch({
        select: opts2 == null ? void 0 : opts2.select,
        from: this.options.id
      });
    };
    this.useParams = (opts2) => {
      return useParams({
        select: opts2 == null ? void 0 : opts2.select,
        from: this.options.id
      });
    };
    this.useLoaderDeps = (opts2) => {
      return useLoaderDeps({ ...opts2, from: this.options.id });
    };
    this.useLoaderData = (opts2) => {
      return useLoaderData({ ...opts2, from: this.options.id });
    };
    this.useNavigate = () => {
      const router = useRouter();
      return useNavigate({ from: router.routesById[this.options.id].fullPath });
    };
    this.options = opts;
  }
}
function createLazyFileRoute(id) {
  if (typeof id === "object") {
    return new LazyRoute(id);
  }
  return (opts) => new LazyRoute({ id, ...opts });
}
var _tmpl$$8 = ["<p", ">Not Found</p>"];
function CatchNotFound(props) {
  const resetKey = useRouterState({
    select: (s) => `not-found-${s.location.pathname}-${s.status}`
  });
  return createComponent(CatchBoundary, {
    getResetKey: () => resetKey(),
    onCatch: (error) => {
      var _a;
      if (isNotFound(error)) {
        (_a = props.onCatch) == null ? void 0 : _a.call(props, error);
      } else {
        throw error;
      }
    },
    errorComponent: ({
      error
    }) => {
      var _a;
      if (isNotFound(error)) {
        return (_a = props.fallback) == null ? void 0 : _a.call(props, error);
      } else {
        throw error;
      }
    },
    get children() {
      return props.children;
    }
  });
}
function DefaultGlobalNotFound() {
  return ssr(_tmpl$$8, ssrHydrationKey());
}
function SafeFragment(props) {
  return props.children;
}
function renderRouteNotFound(router, route, data) {
  if (!route.options.notFoundComponent) {
    if (router.options.defaultNotFoundComponent) {
      return createComponent(router.options.defaultNotFoundComponent, {
        data
      });
    }
    return createComponent(DefaultGlobalNotFound, {});
  }
  return createComponent(route.options.notFoundComponent, {
    data
  });
}
var _tmpl$$7 = ["<script", ' class="tsr-once">', "<\/script>"];
function ScriptOnce({
  children,
  log
}) {
  if (typeof document !== "undefined") {
    return null;
  }
  return ssr(_tmpl$$7, ssrHydrationKey(), [children, "", 'if (typeof __TSR_SSR__ !== "undefined") __TSR_SSR__.cleanScripts()'].filter(Boolean).join("\n"));
}
function ScrollRestoration() {
  const router = useRouter();
  const getKey = router.options.getScrollRestorationKey || defaultGetScrollRestorationKey;
  const userKey = getKey(router.latestLocation);
  const resolvedKey = userKey !== defaultGetScrollRestorationKey(router.latestLocation) ? userKey : null;
  if (!router.isScrollRestoring || !router.isServer) {
    return null;
  }
  return createComponent(ScriptOnce, {
    get children() {
      return `(${restoreScroll.toString()})(${JSON.stringify(storageKey)},${JSON.stringify(resolvedKey)}, undefined, true)`;
    },
    log: false
  });
}
const Match = (props) => {
  const router = useRouter();
  const routeId = useRouterState({
    select: (s) => {
      var _a;
      return (_a = s.matches.find((d) => d.id === props.matchId)) == null ? void 0 : _a.routeId;
    }
  });
  invariant(routeId, `Could not find routeId for matchId "${props.matchId}". Please file an issue!`);
  const route = () => router.routesById[routeId()];
  const PendingComponent = () => route().options.pendingComponent ?? router.options.defaultPendingComponent;
  const routeErrorComponent = () => route().options.errorComponent ?? router.options.defaultErrorComponent;
  const routeOnCatch = () => route().options.onCatch ?? router.options.defaultOnCatch;
  const routeNotFoundComponent = () => {
    var _a;
    return route().isRoot ? (
      // If it's the root route, use the globalNotFound option, with fallback to the notFoundRoute's component
      route().options.notFoundComponent ?? ((_a = router.options.notFoundRoute) == null ? void 0 : _a.options.component)
    ) : route().options.notFoundComponent;
  };
  const ResolvedSuspenseBoundary = () => {
    var _a;
    return (
      // If we're on the root route, allow forcefully wrapping in suspense
      (!route().isRoot || route().options.wrapInSuspense) && (route().options.wrapInSuspense ?? PendingComponent() ?? ((_a = route().options.errorComponent) == null ? void 0 : _a.preload)) ? Solid.Suspense : SafeFragment
    );
  };
  const ResolvedCatchBoundary = () => routeErrorComponent() ? CatchBoundary : SafeFragment;
  const ResolvedNotFoundBoundary = () => routeNotFoundComponent() ? CatchNotFound : SafeFragment;
  const resetKey = useRouterState({
    select: (s) => s.loadedAt
  });
  const parentRouteId = useRouterState({
    select: (s) => {
      var _a;
      const index2 = s.matches.findIndex((d) => d.id === props.matchId);
      return (_a = s.matches[index2 - 1]) == null ? void 0 : _a.routeId;
    }
  });
  const ShellComponent = route().isRoot ? route().options.shellComponent ?? SafeFragment : SafeFragment;
  return createComponent(ShellComponent, {
    get children() {
      return [createComponent(matchContext.Provider, {
        value: () => props.matchId,
        get children() {
          return createComponent(Dynamic, {
            get component() {
              return ResolvedSuspenseBoundary();
            },
            get fallback() {
              return createComponent(Dynamic, {
                get component() {
                  return PendingComponent();
                }
              });
            },
            get children() {
              return createComponent(Dynamic, {
                get component() {
                  return ResolvedCatchBoundary();
                },
                getResetKey: () => resetKey(),
                get errorComponent() {
                  return routeErrorComponent() || ErrorComponent;
                },
                onCatch: (error) => {
                  var _a;
                  if (isNotFound(error)) throw error;
                  warning(false, `Error in route match: ${props.matchId}`);
                  (_a = routeOnCatch()) == null ? void 0 : _a(error);
                },
                get children() {
                  return createComponent(Dynamic, {
                    get component() {
                      return ResolvedNotFoundBoundary();
                    },
                    fallback: (error) => {
                      if (!routeNotFoundComponent() || error.routeId && error.routeId !== routeId || !error.routeId && !route().isRoot) throw error;
                      return createComponent(Dynamic, mergeProps({
                        get component() {
                          return routeNotFoundComponent();
                        }
                      }, error));
                    },
                    get children() {
                      return createComponent(MatchInner, {
                        get matchId() {
                          return props.matchId;
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      }), parentRouteId() === rootRouteId ? [createComponent(OnRendered, {}), createComponent(ScrollRestoration, {})] : null];
    }
  });
};
function OnRendered() {
  const router = useRouter();
  const location = useRouterState({
    select: (s) => {
      var _a;
      return (_a = s.resolvedLocation) == null ? void 0 : _a.state.__TSR_key;
    }
  });
  Solid.createEffect(Solid.on([location], () => {
    router.emit({
      type: "onRendered",
      ...getLocationChangeInfo(router.state)
    });
  }));
  return null;
}
const MatchInner = (props) => {
  const router = useRouter();
  const matchState = useRouterState({
    select: (s) => {
      const matchIndex = s.matches.findIndex((d) => d.id === props.matchId);
      const match2 = s.matches[matchIndex];
      const routeId = match2.routeId;
      const remountFn = router.routesById[routeId].options.remountDeps ?? router.options.defaultRemountDeps;
      const remountDeps = remountFn == null ? void 0 : remountFn({
        routeId,
        loaderDeps: match2.loaderDeps,
        params: match2._strictParams,
        search: match2._strictSearch
      });
      const key = remountDeps ? JSON.stringify(remountDeps) : void 0;
      return {
        key,
        routeId,
        match: pick(match2, ["id", "status", "error"])
      };
    }
  });
  const route = () => router.routesById[matchState().routeId];
  const match = () => matchState().match;
  const out = () => {
    const Comp = route().options.component ?? router.options.defaultComponent;
    if (Comp) {
      return createComponent(Comp, {});
    }
    return createComponent(Outlet, {});
  };
  return createComponent(Solid.Switch, {
    get children() {
      return [createComponent(Solid.Match, {
        get when() {
          return match().status === "notFound";
        },
        children: (_) => {
          invariant(isNotFound(match().error), "Expected a notFound error");
          return renderRouteNotFound(router, route(), match().error);
        }
      }), createComponent(Solid.Match, {
        get when() {
          return match().status === "redirected";
        },
        children: (_) => {
          invariant(isRedirect(match().error), "Expected a redirect error");
          const [loaderResult] = Solid.createResource(async () => {
            var _a;
            await new Promise((r) => setTimeout(r, 0));
            return (_a = router.getMatch(match().id)) == null ? void 0 : _a.loadPromise;
          });
          return loaderResult();
        }
      }), createComponent(Solid.Match, {
        get when() {
          return match().status === "error";
        },
        children: (_) => {
          if (router.isServer) {
            const RouteErrorComponent = (route().options.errorComponent ?? router.options.defaultErrorComponent) || ErrorComponent;
            return createComponent(RouteErrorComponent, {
              get error() {
                return match().error;
              },
              info: {
                componentStack: ""
              }
            });
          }
          throw match().error;
        }
      }), createComponent(Solid.Match, {
        get when() {
          return match().status === "pending";
        },
        children: (_) => {
          var _a;
          const pendingMinMs = route().options.pendingMinMs ?? router.options.defaultPendingMinMs;
          if (pendingMinMs && !((_a = router.getMatch(match().id)) == null ? void 0 : _a.minPendingPromise)) {
            if (!router.isServer) {
              const minPendingPromise = createControlledPromise();
              Promise.resolve().then(() => {
                router.updateMatch(match().id, (prev) => ({
                  ...prev,
                  minPendingPromise
                }));
              });
              setTimeout(() => {
                minPendingPromise.resolve();
                router.updateMatch(match().id, (prev) => ({
                  ...prev,
                  minPendingPromise: void 0
                }));
              }, pendingMinMs);
            }
          }
          const [loaderResult] = Solid.createResource(async () => {
            var _a2;
            await new Promise((r) => setTimeout(r, 0));
            return (_a2 = router.getMatch(match().id)) == null ? void 0 : _a2.loadPromise;
          });
          return loaderResult();
        }
      }), createComponent(Solid.Match, {
        get when() {
          return match().status === "success";
        },
        get children() {
          return out();
        }
      })];
    }
  });
};
const Outlet = () => {
  const router = useRouter();
  const matchId = Solid.useContext(matchContext);
  const routeId = useRouterState({
    select: (s) => {
      var _a;
      return (_a = s.matches.find((d) => d.id === matchId())) == null ? void 0 : _a.routeId;
    }
  });
  const route = () => router.routesById[routeId()];
  const parentGlobalNotFound = useRouterState({
    select: (s) => {
      const matches = s.matches;
      const parentMatch = matches.find((d) => d.id === matchId());
      invariant(parentMatch, `Could not find parent match for matchId "${matchId()}"`);
      return parentMatch.globalNotFound;
    }
  });
  const childMatchId = useRouterState({
    select: (s) => {
      var _a;
      const matches = s.matches;
      const index2 = matches.findIndex((d) => d.id === matchId());
      const v = (_a = matches[index2 + 1]) == null ? void 0 : _a.id;
      return v;
    }
  });
  return createComponent(Solid.Switch, {
    get children() {
      return [createComponent(Solid.Match, {
        get when() {
          return router.isShell;
        },
        get children() {
          return createComponent(Solid.Suspense, {
            get fallback() {
              return createComponent(Dynamic, {
                get component() {
                  return router.options.defaultPendingComponent;
                }
              });
            },
            get children() {
              return createComponent(ErrorComponent, {
                error: new Error("ShellBoundaryError")
              });
            }
          });
        }
      }), createComponent(Solid.Match, {
        get when() {
          return parentGlobalNotFound();
        },
        get children() {
          return renderRouteNotFound(router, route(), void 0);
        }
      }), createComponent(Solid.Match, {
        get when() {
          return childMatchId();
        },
        children: (matchId2) => {
          return createComponent(Solid.Show, {
            get when() {
              return matchId2() === rootRouteId;
            },
            get fallback() {
              return createComponent(Match, {
                get matchId() {
                  return matchId2();
                }
              });
            },
            get children() {
              return createComponent(Solid.Suspense, {
                get fallback() {
                  return createComponent(Dynamic, {
                    get component() {
                      return router.options.defaultPendingComponent;
                    }
                  });
                },
                get children() {
                  return createComponent(Match, {
                    get matchId() {
                      return matchId2();
                    }
                  });
                }
              });
            }
          });
        }
      })];
    }
  });
};
function isModuleNotFoundError(error) {
  return typeof (error == null ? void 0 : error.message) === "string" && /Failed to fetch dynamically imported module/.test(error.message);
}
function lazyRouteComponent(importer, exportName, ssr2) {
  let loadPromise;
  let comp;
  let error;
  const load = () => {
    if (typeof document === "undefined" && (ssr2 == null ? void 0 : ssr2()) === false) {
      comp = () => null;
      return Promise.resolve(comp);
    }
    if (!loadPromise) {
      loadPromise = importer().then((res) => {
        loadPromise = void 0;
        comp = res[exportName];
        return comp;
      }).catch((err) => {
        error = err;
      });
    }
    return loadPromise;
  };
  const lazyComp = function Lazy(props) {
    if (error) {
      if (isModuleNotFoundError(error)) ;
      throw error;
    }
    if (!comp) {
      const [compResource] = createResource(load, {
        initialValue: comp,
        ssrLoadFrom: "initial"
      });
      return compResource();
    }
    if ((ssr2 == null ? void 0 : ssr2()) === false) {
      return createComponent(ClientOnly, {
        get fallback() {
          return createComponent(Outlet, {});
        },
        get children() {
          return createComponent(Dynamic, mergeProps({
            component: comp
          }, props));
        }
      });
    }
    return createComponent(Dynamic, mergeProps({
      component: comp
    }, props));
  };
  lazyComp.preload = load;
  return lazyComp;
}
function Transitioner() {
  const router = useRouter();
  let mountLoadForRouter = {
    router,
    mounted: false
  };
  const isLoading = useRouterState({
    select: ({
      isLoading: isLoading2
    }) => isLoading2
  });
  const [isTransitioning, setIsTransitioning] = Solid.createSignal(false);
  const hasPendingMatches = useRouterState({
    select: (s) => s.matches.some((d) => d.status === "pending")
  });
  const previousIsLoading = usePrevious(isLoading);
  const isAnyPending = () => isLoading() || isTransitioning() || hasPendingMatches();
  const previousIsAnyPending = usePrevious(isAnyPending);
  const isPagePending = () => isLoading() || hasPendingMatches();
  const previousIsPagePending = usePrevious(isPagePending);
  if (!router.isServer) {
    router.startTransition = async (fn) => {
      setIsTransitioning(true);
      await fn();
      setIsTransitioning(false);
    };
  }
  Solid.onMount(() => {
    const unsub = router.history.subscribe(router.load);
    const nextLocation = router.buildLocation({
      to: router.latestLocation.pathname,
      search: true,
      params: true,
      hash: true,
      state: true,
      _includeValidateSearch: true
    });
    if (trimPathRight(router.latestLocation.href) !== trimPathRight(nextLocation.href)) {
      router.commitLocation({
        ...nextLocation,
        replace: true
      });
    }
    Solid.onCleanup(() => {
      unsub();
    });
  });
  Solid.createRenderEffect(() => {
    Solid.untrack(() => {
      if (mountLoadForRouter.router === router && mountLoadForRouter.mounted) {
        return;
      }
      mountLoadForRouter = {
        router,
        mounted: true
      };
      const tryLoad = async () => {
        try {
          await router.load();
        } catch (err) {
          console.error(err);
        }
      };
      tryLoad();
    });
  });
  Solid.createRenderEffect(Solid.on([previousIsLoading, isLoading], ([previousIsLoading2, isLoading2]) => {
    if (previousIsLoading2.previous && !isLoading2) {
      router.emit({
        type: "onLoad",
        ...getLocationChangeInfo(router.state)
      });
    }
  }));
  Solid.createRenderEffect(Solid.on([isPagePending, previousIsPagePending], ([isPagePending2, previousIsPagePending2]) => {
    if (previousIsPagePending2.previous && !isPagePending2) {
      router.emit({
        type: "onBeforeRouteMount",
        ...getLocationChangeInfo(router.state)
      });
    }
  }));
  Solid.createRenderEffect(Solid.on([isAnyPending, previousIsAnyPending], ([isAnyPending2, previousIsAnyPending2]) => {
    if (previousIsAnyPending2.previous && !isAnyPending2) {
      router.emit({
        type: "onResolved",
        ...getLocationChangeInfo(router.state)
      });
      router.__store.setState((s) => ({
        ...s,
        status: "idle",
        resolvedLocation: s.location
      }));
      handleHashScroll(router);
    }
  }));
  return null;
}
function Matches() {
  const router = useRouter();
  const pendingElement = router.options.defaultPendingComponent ? createComponent(router.options.defaultPendingComponent, {}) : null;
  const ResolvedSuspense = router.isServer || typeof document !== "undefined" && router.clientSsr ? SafeFragment : Solid.Suspense;
  const inner = createComponent(ResolvedSuspense, {
    fallback: pendingElement,
    get children() {
      return [createComponent(Transitioner, {}), createComponent(MatchesInner, {})];
    }
  });
  return router.options.InnerWrap ? createComponent(router.options.InnerWrap, {
    children: inner
  }) : inner;
}
function MatchesInner() {
  const matchId = useRouterState({
    select: (s) => {
      var _a;
      return (_a = s.matches[0]) == null ? void 0 : _a.id;
    }
  });
  const resetKey = useRouterState({
    select: (s) => s.loadedAt
  });
  return createComponent(matchContext.Provider, {
    value: matchId,
    get children() {
      return createComponent(CatchBoundary, {
        getResetKey: () => resetKey(),
        errorComponent: ErrorComponent,
        onCatch: (error) => {
          warning(false, `The following error wasn't caught by any route! At the very least, consider setting an 'errorComponent' in your RootRoute!`);
          warning(false, error.message || error.toString());
        },
        get children() {
          return matchId() ? createComponent(Match, {
            get matchId() {
              return matchId();
            }
          }) : null;
        }
      });
    }
  });
}
const createRouter$1 = (options) => {
  return new Router(options);
};
class Router extends RouterCore {
  constructor(options) {
    super(options);
  }
}
if (typeof globalThis !== "undefined") {
  globalThis.createFileRoute = createFileRoute;
  globalThis.createLazyFileRoute = createLazyFileRoute;
}
function RouterContextProvider({
  router,
  children,
  ...rest
}) {
  router.update({
    ...router.options,
    ...rest,
    context: {
      ...router.options.context,
      ...rest.context
    }
  });
  const routerContext2 = getRouterContext();
  const provider = createComponent(routerContext2.Provider, {
    value: router,
    get children() {
      return children();
    }
  });
  if (router.options.Wrap) {
    return createComponent(router.options.Wrap, {
      children: provider
    });
  }
  return provider;
}
function RouterProvider({
  router,
  ...rest
}) {
  return createComponent(RouterContextProvider, mergeProps({
    router
  }, rest, {
    children: () => createComponent(Matches, {})
  }));
}
const MetaContext = createContext();
const cascadingTags = ["title", "meta"];
const titleTagProperties = [];
const metaTagProperties = (
  // https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element
  ["name", "http-equiv", "content", "charset", "media"].concat(["property"])
);
const getTagKey = (tag, properties) => {
  const tagProps = Object.fromEntries(Object.entries(tag.props).filter(([k]) => properties.includes(k)).sort());
  if (Object.hasOwn(tagProps, "name") || Object.hasOwn(tagProps, "property")) {
    tagProps.name = tagProps.name || tagProps.property;
    delete tagProps.property;
  }
  return tag.tag + JSON.stringify(tagProps);
};
function initClientProvider() {
  if (!sharedConfig.context) {
    const ssrTags = document.head.querySelectorAll(`[data-sm]`);
    Array.prototype.forEach.call(ssrTags, (ssrTag) => ssrTag.parentNode.removeChild(ssrTag));
  }
  const cascadedTagInstances = /* @__PURE__ */ new Map();
  function getElement(tag) {
    if (tag.ref) {
      return tag.ref;
    }
    let el = document.querySelector(`[data-sm="${tag.id}"]`);
    if (el) {
      if (el.tagName.toLowerCase() !== tag.tag) {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
        el = document.createElement(tag.tag);
      }
      el.removeAttribute("data-sm");
    } else {
      el = document.createElement(tag.tag);
    }
    return el;
  }
  return {
    addTag(tag) {
      if (cascadingTags.indexOf(tag.tag) !== -1) {
        const properties = tag.tag === "title" ? titleTagProperties : metaTagProperties;
        const tagKey = getTagKey(tag, properties);
        if (!cascadedTagInstances.has(tagKey)) {
          cascadedTagInstances.set(tagKey, []);
        }
        let instances = cascadedTagInstances.get(tagKey);
        let index2 = instances.length;
        instances = [...instances, tag];
        cascadedTagInstances.set(tagKey, instances);
        let element2 = getElement(tag);
        tag.ref = element2;
        spread(element2, tag.props);
        let lastVisited = null;
        for (var i = index2 - 1; i >= 0; i--) {
          if (instances[i] != null) {
            lastVisited = instances[i];
            break;
          }
        }
        if (element2.parentNode != document.head) {
          document.head.appendChild(element2);
        }
        if (lastVisited && lastVisited.ref && lastVisited.ref.parentNode) {
          document.head.removeChild(lastVisited.ref);
        }
        return index2;
      }
      let element = getElement(tag);
      tag.ref = element;
      spread(element, tag.props);
      if (element.parentNode != document.head) {
        document.head.appendChild(element);
      }
      return -1;
    },
    removeTag(tag, index2) {
      const properties = tag.tag === "title" ? titleTagProperties : metaTagProperties;
      const tagKey = getTagKey(tag, properties);
      if (tag.ref) {
        const t = cascadedTagInstances.get(tagKey);
        if (t) {
          if (tag.ref.parentNode) {
            tag.ref.parentNode.removeChild(tag.ref);
            for (let i = index2 - 1; i >= 0; i--) {
              if (t[i] != null) {
                document.head.appendChild(t[i].ref);
              }
            }
          }
          t[index2] = null;
          cascadedTagInstances.set(tagKey, t);
        } else {
          if (tag.ref.parentNode) {
            tag.ref.parentNode.removeChild(tag.ref);
          }
        }
      }
    }
  };
}
function initServerProvider() {
  const tags = [];
  useAssets(() => ssr(renderTags(tags)));
  return {
    addTag(tagDesc) {
      if (cascadingTags.indexOf(tagDesc.tag) !== -1) {
        const properties = tagDesc.tag === "title" ? titleTagProperties : metaTagProperties;
        const tagDescKey = getTagKey(tagDesc, properties);
        const index2 = tags.findIndex((prev) => prev.tag === tagDesc.tag && getTagKey(prev, properties) === tagDescKey);
        if (index2 !== -1) {
          tags.splice(index2, 1);
        }
      }
      tags.push(tagDesc);
      return tags.length;
    },
    removeTag(tag, index2) {
    }
  };
}
const MetaProvider = (props) => {
  const actions = !isServer ? initClientProvider() : initServerProvider();
  return createComponent(MetaContext.Provider, {
    value: actions,
    get children() {
      return props.children;
    }
  });
};
const MetaTag = (tag, props, setting) => {
  useHead({
    tag,
    props,
    setting,
    id: createUniqueId(),
    get name() {
      return props.name || props.property;
    }
  });
  return null;
};
function useHead(tagDesc) {
  const c = useContext(MetaContext);
  if (!c) throw new Error("<MetaProvider /> should be in the tree");
  createRenderEffect(() => {
    const index2 = c.addTag(tagDesc);
    onCleanup(() => c.removeTag(tagDesc, index2));
  });
}
function renderTags(tags) {
  return tags.map((tag) => {
    var _a, _b;
    const keys = Object.keys(tag.props);
    const props = keys.map((k) => k === "children" ? "" : ` ${k}="${// @ts-expect-error
    escape(tag.props[k], true)}"`).join("");
    let children = tag.props.children;
    if (Array.isArray(children)) {
      children = children.join("");
    }
    if ((_a = tag.setting) == null ? void 0 : _a.close) {
      return `<${tag.tag} data-sm="${tag.id}"${props}>${// @ts-expect-error
      ((_b = tag.setting) == null ? void 0 : _b.escape) ? escape(children) : children || ""}</${tag.tag}>`;
    }
    return `<${tag.tag} data-sm="${tag.id}"${props}/>`;
  }).join("");
}
const Title = (props) => MetaTag("title", props, {
  escape: true,
  close: true
});
const Style = (props) => MetaTag("style", props, {
  close: true
});
const Meta = (props) => MetaTag("meta", props);
function Asset({
  tag,
  attrs,
  children
}) {
  switch (tag) {
    case "title":
      return createComponent(Title, mergeProps(attrs, {
        children
      }));
    case "meta":
      return createComponent(Meta, attrs);
    case "link":
      return ssrElement("link", attrs, void 0, true);
    case "style":
      return createComponent(Style, mergeProps(attrs, {
        innerHTML: children
      }));
    case "script":
      return createComponent(Script, {
        attrs,
        children
      });
    default:
      return null;
  }
}
function Script({
  attrs,
  children
}) {
  onMount(() => {
    if (attrs == null ? void 0 : attrs.src) {
      const script = document.createElement("script");
      for (const [key, value] of Object.entries(attrs)) {
        if (value !== void 0 && value !== false) {
          script.setAttribute(key, typeof value === "boolean" ? "" : String(value));
        }
      }
      document.head.appendChild(script);
      onCleanup(() => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    } else if (typeof children === "string") {
      const script = document.createElement("script");
      script.textContent = children;
      if (attrs) {
        for (const [key, value] of Object.entries(attrs)) {
          if (value !== void 0 && value !== false) {
            script.setAttribute(key, typeof value === "boolean" ? "" : String(value));
          }
        }
      }
      document.head.appendChild(script);
      onCleanup(() => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    }
  });
  if ((attrs == null ? void 0 : attrs.src) && typeof attrs.src === "string") {
    return ssrElement("script", attrs, void 0, true);
  }
  if (typeof children === "string") {
    return ssrElement("script", mergeProps(attrs, {
      innerHTML: children
    }), void 0, true);
  }
  return null;
}
const useTags = () => {
  const router = useRouter();
  const routeMeta = useRouterState({
    select: (state) => {
      return state.matches.map((match) => match.meta).filter(Boolean);
    }
  });
  const meta = Solid.createMemo(() => {
    const resultMeta = [];
    const metaByAttribute = {};
    let title;
    [...routeMeta()].reverse().forEach((metas) => {
      [...metas].reverse().forEach((m) => {
        if (!m) return;
        if (m.title) {
          if (!title) {
            title = {
              tag: "title",
              children: m.title
            };
          }
        } else {
          const attribute = m.name ?? m.property;
          if (attribute) {
            if (metaByAttribute[attribute]) {
              return;
            } else {
              metaByAttribute[attribute] = true;
            }
          }
          resultMeta.push({
            tag: "meta",
            attrs: {
              ...m
            }
          });
        }
      });
    });
    if (title) {
      resultMeta.push(title);
    }
    resultMeta.reverse();
    return resultMeta;
  });
  const links = useRouterState({
    select: (state) => {
      var _a;
      const constructed = state.matches.map((match) => match.links).filter(Boolean).flat(1).map((link) => ({
        tag: "link",
        attrs: {
          ...link
        }
      }));
      const manifest = (_a = router.ssr) == null ? void 0 : _a.manifest;
      const assets = state.matches.map((match) => {
        var _a2;
        return ((_a2 = manifest == null ? void 0 : manifest.routes[match.routeId]) == null ? void 0 : _a2.assets) ?? [];
      }).filter(Boolean).flat(1).filter((asset) => asset.tag === "link").map((asset) => ({
        tag: "link",
        attrs: asset.attrs
      }));
      return [...constructed, ...assets];
    }
  });
  const preloadMeta = useRouterState({
    select: (state) => {
      const preloadMeta2 = [];
      state.matches.map((match) => router.looseRoutesById[match.routeId]).forEach((route) => {
        var _a, _b, _c, _d;
        return (_d = (_c = (_b = (_a = router.ssr) == null ? void 0 : _a.manifest) == null ? void 0 : _b.routes[route.id]) == null ? void 0 : _c.preloads) == null ? void 0 : _d.filter(Boolean).forEach((preload) => {
          preloadMeta2.push({
            tag: "link",
            attrs: {
              rel: "modulepreload",
              href: preload
            }
          });
        });
      });
      return preloadMeta2;
    }
  });
  const headScripts = useRouterState({
    select: (state) => state.matches.map((match) => match.headScripts).flat(1).filter(Boolean).map(({
      children,
      ...script
    }) => ({
      tag: "script",
      attrs: {
        ...script
      },
      children
    }))
  });
  return () => uniqBy([...meta(), ...preloadMeta(), ...links(), ...headScripts()], (d) => {
    return JSON.stringify(d);
  });
};
function HeadContent() {
  const tags = useTags();
  return createComponent(MetaProvider, {
    get children() {
      return tags().map((tag) => createComponent(Asset, tag));
    }
  });
}
function uniqBy(arr, fn) {
  const seen = /* @__PURE__ */ new Set();
  return arr.filter((item) => {
    const key = fn(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}
const Scripts = () => {
  const router = useRouter();
  const assetScripts = useRouterState({
    select: (state) => {
      var _a;
      const assetScripts2 = [];
      const manifest = (_a = router.ssr) == null ? void 0 : _a.manifest;
      if (!manifest) {
        return [];
      }
      state.matches.map((match) => router.looseRoutesById[match.routeId]).forEach((route) => {
        var _a2, _b;
        return (_b = (_a2 = manifest.routes[route.id]) == null ? void 0 : _a2.assets) == null ? void 0 : _b.filter((d) => d.tag === "script").forEach((asset) => {
          assetScripts2.push({
            tag: "script",
            attrs: asset.attrs,
            children: asset.children
          });
        });
      });
      return assetScripts2;
    }
  });
  const scripts = useRouterState({
    select: (state) => ({
      scripts: state.matches.map((match) => match.scripts).flat(1).filter(Boolean).map(({
        children,
        ...script
      }) => ({
        tag: "script",
        attrs: {
          ...script
        },
        children
      }))
    })
  });
  const allScripts = [...scripts().scripts, ...assetScripts()];
  return allScripts.map((asset, i) => createComponent(Asset, asset));
};
var _tmpl$$6 = ["<head>", "</head>"], _tmpl$2$1 = ["<html>", "<body>", "</body></html>"];
function ServerHeadContent() {
  const tags = useTags();
  useAssets(() => {
    return createComponent(MetaProvider, {
      get children() {
        return tags().map((tag) => createComponent(Asset, tag));
      }
    });
  });
  return null;
}
const docType = ssr("<!DOCTYPE html>");
function StartServer(props) {
  return createComponent(NoHydration, {
    get children() {
      return [docType, ssr(_tmpl$2$1, createComponent(NoHydration, {
        get children() {
          return ssr(_tmpl$$6, escape(createComponent(HydrationScript, {})));
        }
      }), escape(createComponent(Hydration, {
        get children() {
          return createComponent(RouterProvider, {
            get router() {
              return props.router;
            },
            InnerWrap: (props2) => createComponent(NoHydration, {
              get children() {
                return createComponent(MetaProvider, {
                  get children() {
                    return [createComponent(ServerHeadContent, {}), createComponent(Hydration, {
                      get children() {
                        return props2.children;
                      }
                    }), createComponent(Scripts, {})];
                  }
                });
              }
            })
          });
        }
      })))];
    }
  });
}
const globalMiddleware = [];
function createServerFn(options, __opts) {
  const resolvedOptions = __opts || options || {};
  if (typeof resolvedOptions.method === "undefined") {
    resolvedOptions.method = "GET";
  }
  return {
    options: resolvedOptions,
    middleware: (middleware) => {
      return createServerFn(void 0, Object.assign(resolvedOptions, {
        middleware
      }));
    },
    validator: (validator) => {
      return createServerFn(void 0, Object.assign(resolvedOptions, {
        validator
      }));
    },
    type: (type2) => {
      return createServerFn(void 0, Object.assign(resolvedOptions, {
        type: type2
      }));
    },
    handler: (...args) => {
      const [extractedFn, serverFn] = args;
      Object.assign(resolvedOptions, {
        ...extractedFn,
        extractedFn,
        serverFn
      });
      const resolvedMiddleware = [...resolvedOptions.middleware || [], serverFnBaseToMiddleware(resolvedOptions)];
      return Object.assign(async (opts) => {
        return executeMiddleware$1(resolvedMiddleware, "client", {
          ...extractedFn,
          ...resolvedOptions,
          data: opts == null ? void 0 : opts.data,
          headers: opts == null ? void 0 : opts.headers,
          signal: opts == null ? void 0 : opts.signal,
          context: {}
        }).then((d) => {
          if (resolvedOptions.response === "full") {
            return d;
          }
          if (d.error) throw d.error;
          return d.result;
        });
      }, {
        // This copies over the URL, function ID
        ...extractedFn,
        // The extracted function on the server-side calls
        // this function
        __executeServer: async (opts_, signal) => {
          const opts = opts_ instanceof FormData ? extractFormDataContext(opts_) : opts_;
          opts.type = typeof resolvedOptions.type === "function" ? resolvedOptions.type(opts) : resolvedOptions.type;
          const ctx = {
            ...extractedFn,
            ...opts,
            signal
          };
          const run = () => executeMiddleware$1(resolvedMiddleware, "server", ctx).then((d) => ({
            // Only send the result and sendContext back to the client
            result: d.result,
            error: d.error,
            context: d.sendContext
          }));
          if (ctx.type === "static") {
            let response;
            if (serverFnStaticCache == null ? void 0 : serverFnStaticCache.getItem) {
              response = await serverFnStaticCache.getItem(ctx);
            }
            if (!response) {
              response = await run().then((d) => {
                return {
                  ctx: d,
                  error: null
                };
              }).catch((e) => {
                return {
                  ctx: void 0,
                  error: e
                };
              });
              if (serverFnStaticCache == null ? void 0 : serverFnStaticCache.setItem) {
                await serverFnStaticCache.setItem(ctx, response);
              }
            }
            invariant(response, "No response from both server and static cache!");
            if (response.error) {
              throw response.error;
            }
            return response.ctx;
          }
          return run();
        }
      });
    }
  };
}
async function executeMiddleware$1(middlewares, env, opts) {
  const flattenedMiddlewares = flattenMiddlewares([...globalMiddleware, ...middlewares]);
  const next = async (ctx) => {
    const nextMiddleware = flattenedMiddlewares.shift();
    if (!nextMiddleware) {
      return ctx;
    }
    if (nextMiddleware.options.validator && (env === "client" ? nextMiddleware.options.validateClient : true)) {
      ctx.data = await execValidator(nextMiddleware.options.validator, ctx.data);
    }
    const middlewareFn = env === "client" ? nextMiddleware.options.client : nextMiddleware.options.server;
    if (middlewareFn) {
      return applyMiddleware(middlewareFn, ctx, async (newCtx) => {
        return next(newCtx).catch((error) => {
          if (isRedirect(error) || isNotFound(error)) {
            return {
              ...newCtx,
              error
            };
          }
          throw error;
        });
      });
    }
    return next(ctx);
  };
  return next({
    ...opts,
    headers: opts.headers || {},
    sendContext: opts.sendContext || {},
    context: opts.context || {}
  });
}
let serverFnStaticCache;
function setServerFnStaticCache(cache) {
  const previousCache = serverFnStaticCache;
  serverFnStaticCache = typeof cache === "function" ? cache() : cache;
  return () => {
    serverFnStaticCache = previousCache;
  };
}
function createServerFnStaticCache(serverFnStaticCache2) {
  return serverFnStaticCache2;
}
async function sha1Hash(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-1", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}
setServerFnStaticCache(() => {
  const getStaticCacheUrl = async (options, hash) => {
    const filename = await sha1Hash(`${options.functionId}__${hash}`);
    return `/__tsr/staticServerFnCache/${filename}.json`;
  };
  const jsonToFilenameSafeString = (json2) => {
    const sortedKeysReplacer = (key, value) => value && typeof value === "object" && !Array.isArray(value) ? Object.keys(value).sort().reduce((acc, curr) => {
      acc[curr] = value[curr];
      return acc;
    }, {}) : value;
    const jsonString = JSON.stringify(json2 ?? "", sortedKeysReplacer);
    return jsonString.replace(/[/\\?%*:|"<>]/g, "-").replace(/\s+/g, "_");
  };
  const staticClientCache = typeof document !== "undefined" ? /* @__PURE__ */ new Map() : null;
  return createServerFnStaticCache({
    getItem: async (ctx) => {
      if (typeof document === "undefined") {
        const hash = jsonToFilenameSafeString(ctx.data);
        const url = await getStaticCacheUrl(ctx, hash);
        const publicUrl = "/home/abourka/Desktop/Projects/anchkor/.output/public";
        const {
          promises: fs
        } = await import('node:fs');
        const path = await import('node:path');
        const filePath = path.join(publicUrl, url);
        const [cachedResult, readError] = await fs.readFile(filePath, "utf-8").then((c) => [tsrSerializer.parse(c), null]).catch((e) => [null, e]);
        if (readError && readError.code !== "ENOENT") {
          throw readError;
        }
        return cachedResult;
      }
      return void 0;
    },
    setItem: async (ctx, response) => {
      const {
        promises: fs
      } = await import('node:fs');
      const path = await import('node:path');
      const hash = jsonToFilenameSafeString(ctx.data);
      const url = await getStaticCacheUrl(ctx, hash);
      const publicUrl = "/home/abourka/Desktop/Projects/anchkor/.output/public";
      const filePath = path.join(publicUrl, url);
      await fs.mkdir(path.dirname(filePath), {
        recursive: true
      });
      await fs.writeFile(filePath, tsrSerializer.stringify(response));
    },
    fetchItem: async (ctx) => {
      const hash = jsonToFilenameSafeString(ctx.data);
      const url = await getStaticCacheUrl(ctx, hash);
      let result = staticClientCache == null ? void 0 : staticClientCache.get(url);
      if (!result) {
        result = await fetch(url, {
          method: "GET"
        }).then((r) => r.text()).then((d) => tsrSerializer.parse(d));
        staticClientCache == null ? void 0 : staticClientCache.set(url, result);
      }
      return result;
    }
  });
});
function extractFormDataContext(formData) {
  const serializedContext = formData.get("__TSR_CONTEXT");
  formData.delete("__TSR_CONTEXT");
  if (typeof serializedContext !== "string") {
    return {
      context: {},
      data: formData
    };
  }
  try {
    const context = tsrSerializer.parse(serializedContext);
    return {
      context,
      data: formData
    };
  } catch {
    return {
      data: formData
    };
  }
}
function flattenMiddlewares(middlewares) {
  const seen = /* @__PURE__ */ new Set();
  const flattened = [];
  const recurse = (middleware) => {
    middleware.forEach((m) => {
      if (m.options.middleware) {
        recurse(m.options.middleware);
      }
      if (!seen.has(m)) {
        seen.add(m);
        flattened.push(m);
      }
    });
  };
  recurse(middlewares);
  return flattened;
}
const applyMiddleware = async (middlewareFn, ctx, nextFn) => {
  return middlewareFn({
    ...ctx,
    next: async (userCtx = {}) => {
      return nextFn({
        ...ctx,
        ...userCtx,
        context: {
          ...ctx.context,
          ...userCtx.context
        },
        sendContext: {
          ...ctx.sendContext,
          ...userCtx.sendContext ?? {}
        },
        headers: mergeHeaders(ctx.headers, userCtx.headers),
        result: userCtx.result !== void 0 ? userCtx.result : ctx.response === "raw" ? userCtx : ctx.result,
        error: userCtx.error ?? ctx.error
      });
    }
  });
};
function execValidator(validator, input) {
  if (validator == null) return {};
  if ("~standard" in validator) {
    const result = validator["~standard"].validate(input);
    if (result instanceof Promise) throw new Error("Async validation not supported");
    if (result.issues) throw new Error(JSON.stringify(result.issues, void 0, 2));
    return result.value;
  }
  if ("parse" in validator) {
    return validator.parse(input);
  }
  if (typeof validator === "function") {
    return validator(input);
  }
  throw new Error("Invalid validator type!");
}
function serverFnBaseToMiddleware(options) {
  return {
    _types: void 0,
    options: {
      validator: options.validator,
      validateClient: options.validateClient,
      client: async ({
        next,
        sendContext,
        ...ctx
      }) => {
        var _a;
        const payload = {
          ...ctx,
          // switch the sendContext over to context
          context: sendContext,
          type: typeof ctx.type === "function" ? ctx.type(ctx) : ctx.type
        };
        if (ctx.type === "static" && "prerender" === "production") ;
        const res = await ((_a = options.extractedFn) == null ? void 0 : _a.call(options, payload));
        return next(res);
      },
      server: async ({
        next,
        ...ctx
      }) => {
        var _a;
        const result = await ((_a = options.serverFn) == null ? void 0 : _a.call(options, ctx));
        return next({
          ...ctx,
          result
        });
      }
    }
  };
}
const eventStorage = new AsyncLocalStorage();
function defineEventHandler(handler) {
  return defineEventHandler$1((event) => {
    return runWithEvent(event, () => handler(event));
  });
}
async function runWithEvent(event, fn) {
  return eventStorage.run(event, fn);
}
function getEvent() {
  const event = eventStorage.getStore();
  if (!event) {
    throw new Error(
      `No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`
    );
  }
  return event;
}
const HTTPEventSymbol = Symbol("$HTTPEvent");
function isEvent(obj) {
  return typeof obj === "object" && (obj instanceof H3Event || (obj == null ? void 0 : obj[HTTPEventSymbol]) instanceof H3Event || (obj == null ? void 0 : obj.__is_event__) === true);
}
function createWrapperFunction(h3Function) {
  return function(...args) {
    const event = args[0];
    if (!isEvent(event)) {
      args.unshift(getEvent());
    } else {
      args[0] = event instanceof H3Event || event.__is_event__ ? event : event[HTTPEventSymbol];
    }
    return h3Function(...args);
  };
}
const getResponseStatus = createWrapperFunction(getResponseStatus$1);
const getResponseHeaders = createWrapperFunction(getResponseHeaders$1);
const getCookie = createWrapperFunction(getCookie$1);
const getWebRequest = createWrapperFunction(toWebRequest);
function requestHandler(handler) {
  return handler;
}
const VIRTUAL_MODULES = {
  routeTree: "tanstack-start-route-tree:v",
  startManifest: "tanstack-start-manifest:v",
  serverFnManifest: "tanstack-start-server-fn-manifest:v"
};
async function loadVirtualModule(id) {
  switch (id) {
    case VIRTUAL_MODULES.routeTree:
      return await Promise.resolve().then(() => routeTree_gen);
    case VIRTUAL_MODULES.startManifest:
      return await import('./_tanstack-start-manifest_v-B6iNsj8X.mjs');
    case VIRTUAL_MODULES.serverFnManifest:
      return await import('./_tanstack-start-server-fn-manifest_v-LAt_vZ3f.mjs');
    default:
      throw new Error(`Unknown virtual module: ${id}`);
  }
}
async function getStartManifest(opts) {
  const { tsrStartManifest } = await loadVirtualModule(
    VIRTUAL_MODULES.startManifest
  );
  const startManifest = tsrStartManifest();
  const rootRoute = startManifest.routes[rootRouteId] = startManifest.routes[rootRouteId] || {};
  rootRoute.assets = rootRoute.assets || [];
  let script = `import('${startManifest.clientEntry}')`;
  rootRoute.assets.push({
    tag: "script",
    attrs: {
      type: "module",
      suppressHydrationWarning: true,
      async: true
    },
    children: script
  });
  const manifest = {
    ...startManifest,
    routes: Object.fromEntries(
      Object.entries(startManifest.routes).map(([k, v]) => {
        const { preloads, assets } = v;
        return [
          k,
          {
            preloads,
            assets
          }
        ];
      })
    )
  };
  return manifest;
}
function sanitizeBase$1(base) {
  return base.replace(/^\/|\/$/g, "");
}
const handleServerAction = async ({
  request
}) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const abort = () => controller.abort();
  request.signal.addEventListener("abort", abort);
  const method = request.method;
  const url = new URL(request.url, "http://localhost:3000");
  const regex = new RegExp(`${sanitizeBase$1("/_serverFn")}/([^/?#]+)`);
  const match = url.pathname.match(regex);
  const serverFnId = match ? match[1] : null;
  const search = Object.fromEntries(url.searchParams.entries());
  const isCreateServerFn = "createServerFn" in search;
  const isRaw = "raw" in search;
  if (typeof serverFnId !== "string") {
    throw new Error("Invalid server action param for serverFnId: " + serverFnId);
  }
  const {
    default: serverFnManifest
  } = await loadVirtualModule(VIRTUAL_MODULES.serverFnManifest);
  const serverFnInfo = serverFnManifest[serverFnId];
  if (!serverFnInfo) {
    console.info("serverFnManifest", serverFnManifest);
    throw new Error("Server function info not found for " + serverFnId);
  }
  const fnModule = await serverFnInfo.importer();
  if (!fnModule) {
    console.info("serverFnInfo", serverFnInfo);
    throw new Error("Server function module not resolved for " + serverFnId);
  }
  const action = fnModule[serverFnInfo.functionName];
  if (!action) {
    console.info("serverFnInfo", serverFnInfo);
    console.info("fnModule", fnModule);
    throw new Error(`Server function module export not resolved for serverFn ID: ${serverFnId}`);
  }
  const formDataContentTypes = ["multipart/form-data", "application/x-www-form-urlencoded"];
  const response = await (async () => {
    try {
      let result = await (async () => {
        if (request.headers.get("Content-Type") && formDataContentTypes.some((type2) => {
          var _a;
          return (_a = request.headers.get("Content-Type")) == null ? void 0 : _a.includes(type2);
        })) {
          invariant(method.toLowerCase() !== "get", "GET requests with FormData payloads are not supported");
          return await action(await request.formData(), signal);
        }
        if (method.toLowerCase() === "get") {
          let payload2 = search;
          if (isCreateServerFn) {
            payload2 = search.payload;
          }
          payload2 = payload2 ? tsrSerializer.parse(payload2) : payload2;
          return await action(payload2, signal);
        }
        const jsonPayloadAsString = await request.text();
        const payload = tsrSerializer.parse(jsonPayloadAsString);
        if (isCreateServerFn) {
          return await action(payload, signal);
        }
        return await action(...payload, signal);
      })();
      if (result.result instanceof Response) {
        return result.result;
      }
      if (!isCreateServerFn) {
        result = result.result;
        if (result instanceof Response) {
          return result;
        }
      }
      if (isNotFound(result)) {
        return isNotFoundResponse(result);
      }
      return new Response(result !== void 0 ? tsrSerializer.stringify(result) : void 0, {
        status: getResponseStatus(getEvent()),
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      if (error instanceof Response) {
        return error;
      }
      if (isNotFound(error)) {
        return isNotFoundResponse(error);
      }
      console.info();
      console.info("Server Fn Error!");
      console.info();
      console.error(error);
      console.info();
      return new Response(tsrSerializer.stringify(error), {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  })();
  request.signal.removeEventListener("abort", abort);
  if (isRaw) {
    return response;
  }
  return response;
};
function isNotFoundResponse(error) {
  const {
    headers,
    ...rest
  } = error;
  return new Response(JSON.stringify(rest), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      ...headers || {}
    }
  });
}
function getStartResponseHeaders(opts) {
  const headers = mergeHeaders(
    getResponseHeaders(),
    {
      "Content-Type": "text/html; charset=UTF-8"
    },
    ...opts.router.state.matches.map((match) => {
      return match.headers;
    })
  );
  return headers;
}
function createStartHandler({
  createRouter: createRouter2
}) {
  let routeTreeModule = null;
  let startRoutesManifest = null;
  let processedServerRouteTree = void 0;
  return (cb) => {
    const originalFetch = globalThis.fetch;
    const startRequestResolver = async ({ request }) => {
      globalThis.fetch = async function(input, init) {
        function resolve(url2, requestOptions) {
          const fetchRequest = new Request(url2, requestOptions);
          return startRequestResolver({ request: fetchRequest });
        }
        function getOrigin() {
          return request.headers.get("Origin") || request.headers.get("Referer") || "http://localhost";
        }
        if (typeof input === "string" && input.startsWith("/")) {
          const url2 = new URL(input, getOrigin());
          return resolve(url2, init);
        } else if (typeof input === "object" && "url" in input && typeof input.url === "string" && input.url.startsWith("/")) {
          const url2 = new URL(input.url, getOrigin());
          return resolve(url2, init);
        }
        return originalFetch(input, init);
      };
      const url = new URL(request.url);
      const href = url.href.replace(url.origin, "");
      const APP_BASE = "/";
      const router = createRouter2();
      const history = createMemoryHistory({
        initialEntries: [href]
      });
      router.update({
        history
      });
      const response = await (async () => {
        try {
          if (false) ;
          const serverFnBase = joinPaths([
            APP_BASE,
            trimPath("/_serverFn"),
            "/"
          ]);
          if (href.startsWith(serverFnBase)) {
            return await handleServerAction({ request });
          }
          if (routeTreeModule === null) {
            try {
              routeTreeModule = await loadVirtualModule(
                VIRTUAL_MODULES.routeTree
              );
              if (routeTreeModule.serverRouteTree) {
                processedServerRouteTree = processRouteTree({
                  routeTree: routeTreeModule.serverRouteTree,
                  initRoute: (route, i) => {
                    route.init({
                      originalIndex: i
                    });
                  }
                });
              }
            } catch (e) {
              console.log(e);
            }
          }
          async function executeRouter() {
            const requestAcceptHeader = request.headers.get("Accept") || "*/*";
            const splitRequestAcceptHeader = requestAcceptHeader.split(",");
            const supportedMimeTypes = ["*/*", "text/html"];
            const isRouterAcceptSupported = supportedMimeTypes.some(
              (mimeType) => splitRequestAcceptHeader.some(
                (acceptedMimeType) => acceptedMimeType.trim().startsWith(mimeType)
              )
            );
            if (!isRouterAcceptSupported) {
              return json(
                {
                  error: "Only HTML requests are supported here"
                },
                {
                  status: 500
                }
              );
            }
            if (startRoutesManifest === null) {
              startRoutesManifest = await getStartManifest({
                basePath: APP_BASE
              });
            }
            attachRouterServerSsrUtils(router, startRoutesManifest);
            await router.load();
            if (router.state.redirect) {
              return router.state.redirect;
            }
            dehydrateRouter(router);
            const responseHeaders = getStartResponseHeaders({ router });
            const response2 = await cb({
              request,
              router,
              responseHeaders
            });
            return response2;
          }
          if (processedServerRouteTree) {
            const [_matchedRoutes, response2] = await handleServerRoutes({
              processedServerRouteTree,
              router,
              request,
              basePath: APP_BASE,
              executeRouter
            });
            if (response2) return response2;
          }
          const routerResponse = await executeRouter();
          return routerResponse;
        } catch (err) {
          if (err instanceof Response) {
            return err;
          }
          throw err;
        }
      })();
      if (isRedirect(response)) {
        if (isResolvedRedirect(response)) {
          if (request.headers.get("x-tsr-redirect") === "manual") {
            return json(
              {
                ...response.options,
                isSerializedRedirect: true
              },
              {
                headers: response.headers
              }
            );
          }
          return response;
        }
        if (response.options.to && typeof response.options.to === "string" && !response.options.to.startsWith("/")) {
          throw new Error(
            `Server side redirects must use absolute paths via the 'href' or 'to' options. Received: ${JSON.stringify(response.options)}`
          );
        }
        if (["params", "search", "hash"].some(
          (d) => typeof response.options[d] === "function"
        )) {
          throw new Error(
            `Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(
              response.options
            ).filter((d) => typeof response.options[d] === "function").map((d) => `"${d}"`).join(", ")}`
          );
        }
        const redirect2 = router.resolveRedirect(response);
        if (request.headers.get("x-tsr-redirect") === "manual") {
          return json(
            {
              ...response.options,
              isSerializedRedirect: true
            },
            {
              headers: response.headers
            }
          );
        }
        return redirect2;
      }
      return response;
    };
    return requestHandler(startRequestResolver);
  };
}
async function handleServerRoutes(opts) {
  var _a, _b;
  const url = new URL(opts.request.url);
  const pathname = url.pathname;
  const serverTreeResult = getMatchedRoutes({
    pathname,
    basepath: opts.basePath,
    caseSensitive: true,
    routesByPath: opts.processedServerRouteTree.routesByPath,
    routesById: opts.processedServerRouteTree.routesById,
    flatRoutes: opts.processedServerRouteTree.flatRoutes
  });
  const routeTreeResult = opts.router.getMatchedRoutes(pathname, void 0);
  let response;
  let matchedRoutes = [];
  matchedRoutes = serverTreeResult.matchedRoutes;
  if (routeTreeResult.foundRoute) {
    if (serverTreeResult.matchedRoutes.length < routeTreeResult.matchedRoutes.length) {
      const closestCommon = [...routeTreeResult.matchedRoutes].reverse().find((r) => {
        return opts.processedServerRouteTree.routesById[r.id] !== void 0;
      });
      if (closestCommon) {
        let routeId = closestCommon.id;
        matchedRoutes = [];
        do {
          const route = opts.processedServerRouteTree.routesById[routeId];
          if (!route) {
            break;
          }
          matchedRoutes.push(route);
          routeId = (_a = route.parentRoute) == null ? void 0 : _a.id;
        } while (routeId);
        matchedRoutes.reverse();
      }
    }
  }
  if (matchedRoutes.length) {
    const middlewares = flattenMiddlewares(
      matchedRoutes.flatMap((r) => r.options.middleware).filter(Boolean)
    ).map((d) => d.options.server);
    if ((_b = serverTreeResult.foundRoute) == null ? void 0 : _b.options.methods) {
      const method = Object.keys(
        serverTreeResult.foundRoute.options.methods
      ).find(
        (method2) => method2.toLowerCase() === opts.request.method.toLowerCase()
      );
      if (method) {
        const handler = serverTreeResult.foundRoute.options.methods[method];
        if (handler) {
          if (typeof handler === "function") {
            middlewares.push(handlerToMiddleware(handler));
          } else {
            if (handler._options.middlewares && handler._options.middlewares.length) {
              middlewares.push(
                ...flattenMiddlewares(handler._options.middlewares).map(
                  (d) => d.options.server
                )
              );
            }
            if (handler._options.handler) {
              middlewares.push(handlerToMiddleware(handler._options.handler));
            }
          }
        }
      }
    }
    middlewares.push(handlerToMiddleware(opts.executeRouter));
    const ctx = await executeMiddleware(middlewares, {
      request: opts.request,
      context: {},
      params: serverTreeResult.routeParams,
      pathname
    });
    response = ctx.response;
  }
  return [matchedRoutes, response];
}
function handlerToMiddleware(handler) {
  return async ({ next: _next, ...rest }) => {
    const response = await handler(rest);
    if (response) {
      return { response };
    }
    return _next(rest);
  };
}
function executeMiddleware(middlewares, ctx) {
  let index2 = -1;
  const next = async (ctx2) => {
    index2++;
    const middleware = middlewares[index2];
    if (!middleware) return ctx2;
    const result = await middleware({
      ...ctx2,
      // Allow the middleware to call the next middleware in the chain
      next: async (nextCtx) => {
        const nextResult = await next({ ...ctx2, ...nextCtx });
        return Object.assign(ctx2, handleCtxResult(nextResult));
      }
      // Allow the middleware result to extend the return context
    }).catch((err) => {
      if (isSpecialResponse(err)) {
        return {
          response: err
        };
      }
      throw err;
    });
    return Object.assign(ctx2, handleCtxResult(result));
  };
  return handleCtxResult(next(ctx));
}
function handleCtxResult(result) {
  if (isSpecialResponse(result)) {
    return {
      response: result
    };
  }
  return result;
}
function isSpecialResponse(err) {
  return isResponse(err) || isRedirect(err);
}
function isResponse(response) {
  return response instanceof Response;
}
function createServerFileRoute(_) {
  return createServerRoute();
}
function createServerRoute(__, __opts) {
  const options = __opts || {};
  const route = {
    isRoot: false,
    path: "",
    id: "",
    fullPath: "",
    to: "",
    options,
    parentRoute: void 0,
    _types: {},
    // children: undefined as TChildren,
    middleware: (middlewares) => createServerRoute(void 0, {
      ...options,
      middleware: middlewares
    }),
    methods: (methodsOrGetMethods) => {
      const methods = (() => {
        if (typeof methodsOrGetMethods === "function") {
          return methodsOrGetMethods(createMethodBuilder());
        }
        return methodsOrGetMethods;
      })();
      return createServerRoute(void 0, {
        ...__opts,
        methods
      });
    },
    update: (opts) => createServerRoute(void 0, {
      ...options,
      ...opts
    }),
    init: (opts) => {
      var _a;
      options.originalIndex = opts.originalIndex;
      const isRoot = !options.path && !options.id;
      route.parentRoute = (_a = options.getParentRoute) == null ? void 0 : _a.call(options);
      if (isRoot) {
        route.path = rootRouteId;
      } else if (!route.parentRoute) {
        throw new Error(`Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a ServerRoute instance.`);
      }
      let path = isRoot ? rootRouteId : options.path;
      if (path && path !== "/") {
        path = trimPathLeft(path);
      }
      const customId = options.id || path;
      let id = isRoot ? rootRouteId : joinPaths([route.parentRoute.id === rootRouteId ? "" : route.parentRoute.id, customId]);
      if (path === rootRouteId) {
        path = "/";
      }
      if (id !== rootRouteId) {
        id = joinPaths(["/", id]);
      }
      const fullPath = id === rootRouteId ? "/" : joinPaths([route.parentRoute.fullPath, path]);
      route.path = path;
      route.id = id;
      route.fullPath = fullPath;
      route.to = fullPath;
      route.isRoot = isRoot;
    },
    _addFileChildren: (children) => {
      if (Array.isArray(children)) {
        route.children = children;
      }
      if (typeof children === "object" && children !== null) {
        route.children = Object.values(children);
      }
      return route;
    },
    _addFileTypes: () => route
  };
  return route;
}
const createServerRootRoute = createServerRoute;
const createMethodBuilder = (__opts) => {
  return {
    _options: __opts || {},
    _types: {},
    middleware: (middlewares) => createMethodBuilder({
      ...__opts,
      middlewares
    }),
    handler: (handler) => createMethodBuilder({
      ...__opts,
      handler
    })
  };
};
const renderRouterToStream = async ({
  request,
  router,
  responseHeaders,
  children
}) => {
  const {
    writable,
    readable
  } = new TransformStream();
  const stream = Solid$1.renderToStream(children);
  if (isbot(request.headers.get("User-Agent"))) {
    await stream;
  }
  stream.pipeTo(writable);
  const responseStream = transformReadableStreamWithRouter(router, readable);
  return new Response(responseStream, {
    status: router.state.statusCode,
    headers: responseHeaders
  });
};
const defaultStreamHandler = defineHandlerCallback(async ({
  request,
  router,
  responseHeaders
}) => await renderRouterToStream({
  request,
  router,
  responseHeaders,
  children: () => createComponent(StartServer, {
    router
  })
}));
var _tmpl$$5 = ["<div", ' class="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-4"><!--$-->', '<!--/--><div class="flex flex-wrap items-center gap-2"><button type="button" class="rounded bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700">Try Again</button><!--$-->', "<!--/--></div></div>"];
function DefaultCatchBoundary({
  error
}) {
  useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId
  });
  console.error("DefaultCatchBoundary Error:", error);
  return ssr(_tmpl$$5, ssrHydrationKey(), escape(createComponent(ErrorComponent, {
    error
  })), escape(createComponent(Show, {
    get when() {
      return isRoot();
    },
    get fallback() {
      return createComponent(Link, {
        to: "/",
        "class": "rounded bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700",
        onClick: (e) => {
          e.preventDefault();
          window.history.back();
        },
        children: "Go Back"
      });
    },
    get children() {
      return createComponent(Link, {
        to: "/",
        "class": "rounded bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700",
        children: "Home"
      });
    }
  })));
}
var _tmpl$$4 = ["<div", ' class="space-y-2 p-2"><div class="text-gray-600 dark:text-gray-400">', '</div><p class="flex flex-wrap items-center gap-2"><button type="button" class="rounded bg-emerald-500 px-2 py-1 font-black text-sm text-white uppercase">Go back</button><!--$-->', "<!--/--></p></div>"], _tmpl$2 = ["<p", ">The page you are looking for does not exist.</p>"];
function NotFound({
  children
}) {
  return ssr(_tmpl$$4, ssrHydrationKey(), escape(children) || _tmpl$2[0] + ssrHydrationKey() + _tmpl$2[1], escape(createComponent(Link, {
    to: "/",
    "class": "rounded bg-cyan-600 px-2 py-1 font-black text-sm text-white uppercase",
    children: "Start Over"
  })));
}
function sanitizeBase(base) {
  return base.replace(/^\/|\/$/g, "");
}
const createServerRpc = (functionId, serverBase, splitImportFn) => {
  invariant(
    splitImportFn,
    "🚨splitImportFn required for the server functions server runtime, but was not provided."
  );
  const url = `/${sanitizeBase(serverBase)}/${functionId}`;
  return Object.assign(splitImportFn, {
    url,
    functionId
  });
};
var _tmpl$$3 = ["<script", ' id="kb-color-mode-script"', ">", "<\/script>"];
var ColorModeContext = createContext();
var COLOR_MODE_STORAGE_KEY = "kb-color-mode";
function createLocalStorageManager(key) {
  return {
    ssr: false,
    type: "localStorage",
    get: (fallback) => {
      if (isServer) {
        return fallback;
      }
      let value;
      try {
        value = localStorage.getItem(key);
      } catch (_) {
      }
      return value ?? fallback;
    },
    set: (value) => {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
      }
    }
  };
}
var localStorageManager = createLocalStorageManager(COLOR_MODE_STORAGE_KEY);
function parseCookie(cookie, key) {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
  return match == null ? void 0 : match[2];
}
function createCookieStorageManager(key, cookie) {
  return {
    ssr: !!cookie,
    type: "cookie",
    get: (fallback) => {
      if (cookie) {
        return parseCookie(cookie, key) ?? fallback;
      }
      if (isServer) {
        return fallback;
      }
      return parseCookie(document.cookie, key) ?? fallback;
    },
    set: (value) => {
      document.cookie = `${key}=${value}; max-age=31536000; path=/`;
    }
  };
}
function cookieStorageManagerSSR(cookie) {
  return createCookieStorageManager(COLOR_MODE_STORAGE_KEY, cookie);
}
var FALLBACK_COLOR_MODE_VALUE = "system";
function query() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function preventTransition() {
  const css = document.createElement("style");
  css.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"));
  document.head.appendChild(css);
  return () => {
    (() => window.getComputedStyle(document.body))();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.head.removeChild(css);
      });
    });
  };
}
function setColorModeDataset(value, shouldPreventTransition = true) {
  const cleanup = shouldPreventTransition ? preventTransition() : void 0;
  document.documentElement.dataset.kbTheme = value;
  document.documentElement.style.colorScheme = value;
  cleanup == null ? void 0 : cleanup();
}
function getSystemColorMode(fallback) {
  const isDark = query().matches ?? fallback === "dark";
  return isDark ? "dark" : "light";
}
function getInitialColorMode(manager) {
  const fallback = "light";
  const initialColorMode = manager.get(fallback) ?? fallback;
  if (initialColorMode === "system") {
    return isServer ? fallback : getSystemColorMode();
  }
  return initialColorMode;
}
function addColorModeListener(fn) {
  const mql = query();
  const listener = (e) => {
    fn(e.matches ? "dark" : "light");
  };
  mql.addEventListener("change", listener);
  return () => {
    mql.removeEventListener("change", listener);
  };
}
function ColorModeProvider(props) {
  const fallbackColorMode = () => props.initialColorMode ?? FALLBACK_COLOR_MODE_VALUE;
  const colorModeManager = () => props.storageManager ?? localStorageManager;
  let colorModeListenerCleanupFn;
  const [colorMode, rawSetColorMode] = createSignal(getInitialColorMode(colorModeManager()));
  const applyColorMode = (value) => {
    rawSetColorMode(value);
    setColorModeDataset(value, props.disableTransitionOnChange);
  };
  const setColorMode = (value) => {
    if (colorModeListenerCleanupFn) {
      colorModeListenerCleanupFn();
      colorModeListenerCleanupFn = void 0;
    }
    const isSystem = value === "system";
    if (isSystem) {
      colorModeListenerCleanupFn = addColorModeListener(applyColorMode);
    }
    applyColorMode(isSystem ? getSystemColorMode() : value);
    colorModeManager().set(value);
  };
  const toggleColorMode = () => {
    setColorMode(colorMode() === "dark" ? "light" : "dark");
  };
  createEffect(() => {
    setColorMode(colorModeManager().get() ?? fallbackColorMode());
  });
  onCleanup(() => {
    colorModeListenerCleanupFn == null ? void 0 : colorModeListenerCleanupFn();
  });
  const context = {
    colorMode,
    setColorMode,
    toggleColorMode
  };
  return createComponent(ColorModeContext.Provider, {
    value: context,
    get children() {
      return props.children;
    }
  });
}
var VALID_VALUES = /* @__PURE__ */ new Set(["light", "dark", "system"]);
function normalize(initialColorMode) {
  if (!VALID_VALUES.has(initialColorMode)) {
    return FALLBACK_COLOR_MODE_VALUE;
  }
  return initialColorMode;
}
function ColorModeScript(props) {
  const mergedProps = mergeProps$1({
    initialColorMode: FALLBACK_COLOR_MODE_VALUE,
    storageType: "localStorage",
    storageKey: COLOR_MODE_STORAGE_KEY
  }, props);
  const scriptSrc = createMemo(() => {
    const init = normalize(mergedProps.initialColorMode);
    const cookieScript = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,s=e==="dark";return d.style.colorScheme=e,d.dataset.kbTheme=e,o},u=a,h="${init}",r="${mergedProps.storageKey}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`;
    const localStorageScript = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,i=r==="dark";return o.style.colorScheme=r,o.dataset.kbTheme=r,c},n=a,m="${init}",e="${mergedProps.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`;
    const fn = mergedProps.storageType === "cookie" ? cookieScript : localStorageScript;
    return `!${fn}`.trim();
  });
  return ssr(_tmpl$$3, ssrHydrationKey(), ssrAttribute("nonce", escape(mergedProps.nonce, true), false), scriptSrc());
}
const TanStackRouterDevtools = function() {
  return null;
} ;
const appCss = "/assets/app-0a4gda_d.css";
const seo = ({
  title,
  description,
  keywords,
  image
}) => {
  const tags = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: "@tannerlinsley" },
    { name: "twitter:site", content: "@tannerlinsley" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    ...image ? [
      { name: "twitter:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "og:image", content: image }
    ] : []
  ];
  return tags;
};
var _tmpl$ = ["<main", ' class="h-dvh bg-background text-foreground">', "</main>"];
const Route$7 = createRootRoute({
  head: () => ({
    meta: [{
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, ...seo({
      title: "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",
      description: "TanStack Start is a type-safe, client-first, full-stack React framework. "
    })],
    links: [{
      rel: "stylesheet",
      href: appCss
    }, {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    }, {
      rel: "manifest",
      href: "/site.webmanifest",
      color: "#fffff"
    }, {
      rel: "icon",
      href: "/favicon.ico"
    }]
  }),
  errorComponent: (props) => {
    return createComponent(RootDocument, {
      get children() {
        return createComponent(DefaultCatchBoundary, props);
      }
    });
  },
  notFoundComponent: () => createComponent(NotFound, {}),
  component: RootComponent
});
function RootComponent() {
  return createComponent(RootDocument, {
    get children() {
      return createComponent(Outlet, {});
    }
  });
}
const getServerCookies_1 = createServerRpc("src_routes_root_tsx--getServerCookies_1", "/_serverFn", function() {
  const colorMode = getCookie("kb-color-mode");
  return colorMode ? `kb-color-mode=${colorMode}` : "";
});
const getServerCookies = getServerCookies_1;
function RootDocument({
  children
}) {
  const storageManager = cookieStorageManagerSSR(isServer ? getServerCookies() : document.cookie);
  return [createComponent(HeadContent, {}), createComponent(ColorModeScript, {
    get storageType() {
      return storageManager.type;
    }
  }), createComponent(ColorModeProvider, {
    storageManager,
    get children() {
      return ssr(_tmpl$, ssrHydrationKey(), escape(children));
    }
  }), createComponent(TanStackRouterDevtools, {
    position: "bottom-right"
  }), createComponent(Scripts, {})];
}
const user = pgTable(
  "user",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("email_verified").$defaultFn(() => false).notNull(),
    image: text("image"),
    createdAt: timestamp("created_at").$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
    updatedAt: timestamp("updated_at").$defaultFn(() => /* @__PURE__ */ new Date()).notNull()
  },
  (table) => [
    index("user_email_idx").on(table.email),
    index("user_created_at_idx").on(table.createdAt)
  ]
);
const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    activeOrganizationId: text("active_organization_id")
  },
  (table) => [
    index("session_user_id_idx").on(table.userId),
    index("session_active_org_idx").on(table.activeOrganizationId),
    index("session_expires_at_idx").on(table.expiresAt)
  ]
);
const organization = pgTable(
  "organization",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").unique(),
    logo: text("logo"),
    createdAt: timestamp("created_at").notNull(),
    metadata: text("metadata")
  },
  (table) => [
    index("organization_name_idx").on(table.name),
    index("organization_created_at_idx").on(table.createdAt)
  ]
);
const team = pgTable(
  "team",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    organizationId: text("organization_id").notNull().references(() => organization.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at")
  },
  (table) => [
    index("team_organization_id_idx").on(table.organizationId),
    index("team_name_idx").on(table.name),
    index("team_created_at_idx").on(table.createdAt)
  ]
);
const member = pgTable(
  "member",
  {
    id: text("id").primaryKey(),
    organizationId: text("organization_id").notNull().references(() => organization.id, { onDelete: "cascade" }),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    role: text("role").default("member").notNull(),
    teamId: text("team_id").references(() => team.id, { onDelete: "cascade" }),
    // Updated to reference team table
    createdAt: timestamp("created_at").notNull()
  },
  (table) => [
    uniqueIndex("member_org_user_idx").on(table.organizationId, table.userId),
    index("member_organization_id_idx").on(table.organizationId),
    index("member_user_id_idx").on(table.userId),
    index("member_role_idx").on(table.role),
    index("member_team_id_idx").on(table.teamId)
    // Added index for teamId
  ]
);
const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull()
  },
  (table) => [
    index("account_user_id_idx").on(table.userId),
    index("account_provider_id_idx").on(table.providerId)
  ]
);
const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").$defaultFn(() => /* @__PURE__ */ new Date()),
    updatedAt: timestamp("updated_at").$defaultFn(() => /* @__PURE__ */ new Date())
  },
  (table) => [
    index("verification_identifier_idx").on(table.identifier),
    index("verification_expires_at_idx").on(table.expiresAt)
  ]
);
const invitation = pgTable(
  "invitation",
  {
    id: text("id").primaryKey(),
    organizationId: text("organization_id").notNull().references(() => organization.id, { onDelete: "cascade" }),
    email: text("email").notNull(),
    role: text("role"),
    teamId: text("team_id").references(() => team.id, { onDelete: "cascade" }),
    // Updated to reference team table
    status: text("status").default("pending").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    inviterId: text("inviter_id").notNull().references(() => user.id, { onDelete: "cascade" })
  },
  (table) => [
    index("invitation_organization_id_idx").on(table.organizationId),
    index("invitation_email_idx").on(table.email),
    index("invitation_status_idx").on(table.status),
    index("invitation_expires_at_idx").on(table.expiresAt),
    index("invitation_team_id_idx").on(table.teamId)
    // Added index for teamId
  ]
);
const jwks = pgTable(
  "jwks",
  {
    id: text("id").primaryKey(),
    publicKey: text("public_key").notNull(),
    privateKey: text("private_key").notNull(),
    createdAt: timestamp("created_at").notNull()
  },
  (table) => [index("jwks_created_at_idx").on(table.createdAt)]
);
const workspace = pgTable(
  "workspace",
  {
    id: text("id").primaryKey(),
    organizationId: text("organization_id").notNull().references(() => organization.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    domain: text("domain").notNull(),
    workspaceUrl: text("workspace_url").notNull(),
    logo: text("logo"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
  },
  (table) => [
    uniqueIndex("workspace_org_name_idx").on(table.organizationId, table.name),
    uniqueIndex("workspace_domain_idx").on(table.domain),
    uniqueIndex("workspace_url_idx").on(table.workspaceUrl),
    index("workspace_organization_id_idx").on(table.organizationId),
    index("workspace_name_idx").on(table.name),
    index("workspace_created_at_idx").on(table.createdAt)
  ]
);
const statusEnum = pgEnum("status", [
  "pending",
  "reviewing",
  "planned",
  "in-progress",
  "completed",
  "closed"
]);
const feedback = pgTable(
  "feedback",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").references(() => user.id, { onDelete: "cascade" }),
    workspaceId: text("workspace_id").notNull().references(() => workspace.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    message: text("message").notNull(),
    type: text("type").notNull(),
    tags: jsonb("tags").$type().default([]),
    likesCount: integer("likes_count").default(0).notNull(),
    commentsCount: integer("comments_count").default(0).notNull(),
    status: statusEnum("status").default("pending").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
  },
  (table) => [
    index("feedback_workspace_id_idx").on(table.workspaceId),
    index("feedback_user_id_idx").on(table.userId),
    index("feedback_status_idx").on(table.status),
    index("feedback_created_at_idx").on(table.createdAt),
    index("feedback_likes_count_idx").on(table.likesCount),
    index("feedback_workspace_status_idx").on(table.workspaceId, table.status),
    index("feedback_workspace_created_idx").on(
      table.workspaceId,
      table.createdAt
    )
  ]
);
const comment = pgTable(
  "comment",
  {
    id: text("id").primaryKey(),
    feedbackId: text("feedback_id").notNull().references(() => feedback.id, { onDelete: "cascade" }),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    message: text("message").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
  },
  (table) => [
    index("comment_feedback_id_idx").on(table.feedbackId),
    index("comment_user_id_idx").on(table.userId),
    index("comment_created_at_idx").on(table.createdAt),
    index("comment_feedback_created_idx").on(table.feedbackId, table.createdAt)
  ]
);
const like = pgTable(
  "like",
  {
    id: text("id").primaryKey(),
    feedbackId: text("feedback_id").notNull().references(() => feedback.id, { onDelete: "cascade" }),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
  },
  (table) => [
    uniqueIndex("like_feedback_user_idx").on(table.feedbackId, table.userId),
    index("like_feedback_id_idx").on(table.feedbackId),
    index("like_user_id_idx").on(table.userId)
  ]
);
const organizationRelations = relations(organization, ({ many }) => ({
  members: many(member),
  workspaces: many(workspace)
}));
const memberRelations = relations(member, ({ one }) => ({
  organization: one(organization, {
    fields: [member.organizationId],
    references: [organization.id]
  })
}));
const workspaceRelations = relations(workspace, ({ one, many }) => ({
  organization: one(organization, {
    fields: [workspace.organizationId],
    references: [organization.id]
  }),
  feedback: many(feedback)
}));
const feedbackRelations = relations(feedback, ({ one, many }) => ({
  user: one(user, {
    fields: [feedback.userId],
    references: [user.id]
  }),
  workspace: one(workspace, {
    fields: [feedback.workspaceId],
    references: [workspace.id]
  }),
  comments: many(comment),
  likes: many(like)
}));
const commentRelations = relations(comment, ({ one }) => ({
  feedback: one(feedback, {
    fields: [comment.feedbackId],
    references: [feedback.id]
  }),
  user: one(user, {
    fields: [comment.userId],
    references: [user.id]
  })
}));
const likeRelations = relations(like, ({ one }) => ({
  feedback: one(feedback, {
    fields: [like.feedbackId],
    references: [feedback.id]
  })
}));
const schema$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  account,
  comment,
  commentRelations,
  feedback,
  feedbackRelations,
  invitation,
  jwks,
  like,
  likeRelations,
  member,
  memberRelations,
  organization,
  organizationRelations,
  session,
  statusEnum,
  team,
  user,
  verification,
  workspace,
  workspaceRelations
}, Symbol.toStringTag, { value: "Module" }));
const db = drizzle(process.env.DATABASE_URL, { schema: schema$1 });
const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema$1
  }),
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    google: {
      clientId: process.env.VITE_GOOGLE_CLIENT_ID,
      clientSecret: process.env.VITE_GOOGLE_CLIENT_SECRET
    }
  },
  account: {
    accountLinking: {
      enabled: true
    }
  },
  plugins: [
    organization$1({
      teams: {
        enabled: true
      }
    }),
    jwt({
      jwt: {
        expirationTime: "1d"
      }
    })
  ]
});
const getSession_createServerFn_handler = createServerRpc("src_lib_get-auth_ts--getSession_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return getSession.__executeServer(opts, signal);
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
  const session2 = await auth.api.getSession({
    headers: request.headers
  });
  if (!(session2 == null ? void 0 : session2.user)) {
    throw redirect({
      to: "/login"
    });
  }
  return session2.user;
});
const getUserAuth_createServerFn_handler = createServerRpc("src_lib_get-auth_ts--getUserAuth_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return getUserAuth.__executeServer(opts, signal);
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
  const session2 = sessionResult.data;
  const token = tokenResult.data;
  return {
    jwt: token == null ? void 0 : token.token,
    user: session2 == null ? void 0 : session2.user
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
const $$splitComponentImporter$6 = () => import('./_layout-Ekhg8C3F.mjs');
const Route$6 = createFileRoute("/_layout")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component", () => Route$6.ssr),
  loader: async () => {
    const {
      jwt: jwt2,
      user: user2
    } = await getUserAuth();
    if (!user2 || !jwt2) {
      throw redirect({
        to: "/login"
      });
    }
    return {
      jwt: jwt2,
      user: user2
    };
  },
  staleTime: Number.POSITIVE_INFINITY
});
const $$splitComponentImporter$5 = () => import('./index-1I_SGVx1.mjs');
const Route$5 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component", () => Route$5.ssr)
});
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
    where: (workspace2, {
      ilike
    }) => ilike(workspace2.id, workspaceId)
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
function enumerateStrings(values) {
  return values.map((v) => `"${v}"`).join("|");
}
const status = type(
  "('pending'|'reviewing'|'planned'|'in-progress'|'completed'|'closed')[]"
);
enumerateStrings(["low", "medium", "high"]);
enumerateStrings([
  "bug",
  "feature",
  "improvement",
  "other"
]);
enumerateStrings(["asc", "desc"]);
const searchParamsSchema = type({
  "search?": "string",
  "creator?": "string",
  "assignee?": "string",
  "status?": type(status),
  "tags?": "('security'|'performance'|'usability'|'design'|'code-quality'|'other')[]",
  "type?": "('bug'|'feature'|'improvement'|'other')[]",
  "order?": "'newest'|'oldest'|'hot'"
});
const $$splitComponentImporter$4 = () => import('./_workspaceId-HCugdsGQ.mjs');
const Route$4 = createFileRoute("/_layout/$workspaceId")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component", () => Route$4.ssr),
  validateSearch: searchParamsSchema,
  beforeLoad: async ({
    params
  }) => {
    const validWorkspace = await getWorkspace({
      data: {
        workspaceId: params.workspaceId
      }
    });
    if (!validWorkspace.success) {
      throw NotFound;
    }
    return {
      currentWorkspace: validWorkspace.data
    };
  }
  // loader: async () => {
  // 	const { jwt, user } = await getUserAuth();
  // 	if (!user || !jwt) {
  // 		throw redirect({ to: "/login" });
  // 	}
  // 	return { jwt, user };
  // },
});
const $$splitComponentImporter$3 = () => import('./register-G7g8k6wC.mjs');
const Route$3 = createFileRoute("/(auth)/register")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component", () => Route$3.ssr)
});
const $$splitComponentImporter$2 = () => import('./login-B8UxDhMP.mjs');
const Route$2 = createFileRoute("/(auth)/login")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component", () => Route$2.ssr)
});
const $$splitComponentImporter$1 = () => import('./index-B_pe-Rp1.mjs');
const Route$1 = createFileRoute("/_layout/$workspaceId/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component", () => Route$1.ssr),
  validateSearch: searchParamsSchema
  // beforeLoad: async ({ params }) => {
  // 	const validWorkspace = await getWorkspace({
  // 		data: {
  // 			workspaceId: params.workspaceId,
  // 		},
  // 	});
  // 	if (!validWorkspace.success) {
  // 		throw notFound();
  // 	}
  // 	return {
  // 		currentWorkspace: validWorkspace.data,
  // 	};
  // },
  // loader: async () => {
  // 	const { jwt, user } = await getUserAuth();
  // 	if (!user || !jwt) {
  // 		throw redirect({ to: "/login" });
  // 	}
  // 	return { jwt, user };
  // },
});
const $$splitComponentImporter = () => import('./_feedbackId-BYrGMwWO.mjs');
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
    where: (feedback2, {
      eq
    }) => eq(feedback2.id, feedbackId),
    with: {
      likes: true
    }
  });
  return d;
});
const Route2 = createFileRoute("/_layout/$workspaceId/$feedbackId")({
  component: lazyRouteComponent($$splitComponentImporter, "component", () => Route2.ssr)
});
const schema = {
  tables: {
    comment: {
      name: "comment",
      columns: {
        id: {
          type: "string",
          optional: false,
          customType: null
        },
        feedbackId: {
          type: "string",
          optional: false,
          customType: null,
          serverName: "feedback_id"
        },
        userId: {
          type: "string",
          optional: false,
          customType: null,
          serverName: "user_id"
        },
        message: {
          type: "string",
          optional: false,
          customType: null
        },
        createdAt: {
          type: "number",
          optional: true,
          customType: null,
          serverName: "created_at"
        },
        updatedAt: {
          type: "number",
          optional: true,
          customType: null,
          serverName: "updated_at"
        }
      },
      primaryKey: ["id"]
    },
    feedback: {
      name: "feedback",
      columns: {
        id: {
          type: "string",
          optional: false,
          customType: null
        },
        userId: {
          type: "string",
          optional: true,
          customType: null,
          serverName: "user_id"
        },
        workspaceId: {
          type: "string",
          optional: false,
          customType: null,
          serverName: "workspace_id"
        },
        title: {
          type: "string",
          optional: false,
          customType: null
        },
        message: {
          type: "string",
          optional: false,
          customType: null
        },
        type: {
          type: "string",
          optional: false,
          customType: null
        },
        tags: {
          type: "json",
          optional: true,
          customType: null
        },
        likesCount: {
          type: "number",
          optional: true,
          customType: null,
          serverName: "likes_count"
        },
        commentsCount: {
          type: "number",
          optional: true,
          customType: null,
          serverName: "comments_count"
        },
        status: {
          type: "string",
          optional: true,
          customType: null
        },
        createdAt: {
          type: "number",
          optional: true,
          customType: null,
          serverName: "created_at"
        },
        updatedAt: {
          type: "number",
          optional: true,
          customType: null,
          serverName: "updated_at"
        }
      },
      primaryKey: ["id"]
    },
    like: {
      name: "like",
      columns: {
        id: {
          type: "string",
          optional: false,
          customType: null
        },
        feedbackId: {
          type: "string",
          optional: false,
          customType: null,
          serverName: "feedback_id"
        },
        userId: {
          type: "string",
          optional: false,
          customType: null,
          serverName: "user_id"
        },
        createdAt: {
          type: "number",
          optional: true,
          customType: null,
          serverName: "created_at"
        },
        updatedAt: {
          type: "number",
          optional: true,
          customType: null,
          serverName: "updated_at"
        }
      },
      primaryKey: ["id"]
    },
    member: {
      name: "member",
      columns: {
        id: {
          type: "string",
          optional: false,
          customType: null
        },
        organizationId: {
          type: "string",
          optional: false,
          customType: null,
          serverName: "organization_id"
        },
        userId: {
          type: "string",
          optional: false,
          customType: null,
          serverName: "user_id"
        },
        role: {
          type: "string",
          optional: true,
          customType: null
        },
        teamId: {
          type: "string",
          optional: true,
          customType: null,
          serverName: "team_id"
        },
        createdAt: {
          type: "number",
          optional: false,
          customType: null,
          serverName: "created_at"
        }
      },
      primaryKey: ["id"]
    },
    organization: {
      name: "organization",
      columns: {
        id: {
          type: "string",
          optional: false,
          customType: null
        },
        name: {
          type: "string",
          optional: false,
          customType: null
        },
        slug: {
          type: "string",
          optional: true,
          customType: null
        },
        logo: {
          type: "string",
          optional: true,
          customType: null
        },
        createdAt: {
          type: "number",
          optional: false,
          customType: null,
          serverName: "created_at"
        },
        metadata: {
          type: "string",
          optional: true,
          customType: null
        }
      },
      primaryKey: ["id"]
    },
    team: {
      name: "team",
      columns: {
        id: {
          type: "string",
          optional: false,
          customType: null
        },
        name: {
          type: "string",
          optional: false,
          customType: null
        },
        organizationId: {
          type: "string",
          optional: false,
          customType: null,
          serverName: "organization_id"
        },
        createdAt: {
          type: "number",
          optional: false,
          customType: null,
          serverName: "created_at"
        },
        updatedAt: {
          type: "number",
          optional: true,
          customType: null,
          serverName: "updated_at"
        }
      },
      primaryKey: ["id"]
    },
    user: {
      name: "user",
      columns: {
        id: {
          type: "string",
          optional: false,
          customType: null
        },
        name: {
          type: "string",
          optional: false,
          customType: null
        },
        email: {
          type: "string",
          optional: false,
          customType: null
        },
        emailVerified: {
          type: "boolean",
          optional: false,
          customType: null,
          serverName: "email_verified"
        },
        image: {
          type: "string",
          optional: true,
          customType: null
        },
        createdAt: {
          type: "number",
          optional: false,
          customType: null,
          serverName: "created_at"
        },
        updatedAt: {
          type: "number",
          optional: false,
          customType: null,
          serverName: "updated_at"
        }
      },
      primaryKey: ["id"]
    },
    workspace: {
      name: "workspace",
      columns: {
        id: {
          type: "string",
          optional: false,
          customType: null
        },
        organizationId: {
          type: "string",
          optional: false,
          customType: null,
          serverName: "organization_id"
        },
        name: {
          type: "string",
          optional: false,
          customType: null
        },
        domain: {
          type: "string",
          optional: false,
          customType: null
        },
        workspaceUrl: {
          type: "string",
          optional: false,
          customType: null,
          serverName: "workspace_url"
        },
        logo: {
          type: "string",
          optional: true,
          customType: null
        },
        createdAt: {
          type: "number",
          optional: true,
          customType: null,
          serverName: "created_at"
        },
        updatedAt: {
          type: "number",
          optional: true,
          customType: null,
          serverName: "updated_at"
        }
      },
      primaryKey: ["id"]
    }
  },
  relationships: {
    workspace: {
      member: [
        {
          sourceField: ["organizationId"],
          destField: ["id"],
          destSchema: "organization",
          cardinality: "many"
        },
        {
          sourceField: ["id"],
          destField: ["organizationId"],
          destSchema: "member",
          cardinality: "many"
        }
      ],
      organization: [
        {
          sourceField: ["organizationId"],
          destField: ["id"],
          destSchema: "organization",
          cardinality: "one"
        }
      ],
      feedback: [
        {
          sourceField: ["id"],
          destField: ["workspaceId"],
          destSchema: "feedback",
          cardinality: "many"
        }
      ]
    },
    member: {
      user: [
        {
          sourceField: ["id"],
          destField: ["id"],
          destSchema: "member",
          cardinality: "many"
        },
        {
          sourceField: ["userId"],
          destField: ["id"],
          destSchema: "user",
          cardinality: "many"
        }
      ],
      organization: [
        {
          sourceField: ["organizationId"],
          destField: ["id"],
          destSchema: "organization",
          cardinality: "one"
        }
      ]
    },
    comment: {
      feedback: [
        {
          sourceField: ["feedbackId"],
          destField: ["id"],
          destSchema: "feedback",
          cardinality: "one"
        }
      ],
      user: [
        {
          sourceField: ["userId"],
          destField: ["id"],
          destSchema: "user",
          cardinality: "one"
        }
      ]
    },
    feedback: {
      user: [
        {
          sourceField: ["userId"],
          destField: ["id"],
          destSchema: "user",
          cardinality: "one"
        }
      ],
      workspace: [
        {
          sourceField: ["workspaceId"],
          destField: ["id"],
          destSchema: "workspace",
          cardinality: "one"
        }
      ],
      comments: [
        {
          sourceField: ["id"],
          destField: ["feedbackId"],
          destSchema: "comment",
          cardinality: "many"
        }
      ],
      likes: [
        {
          sourceField: ["id"],
          destField: ["feedbackId"],
          destSchema: "like",
          cardinality: "many"
        }
      ]
    },
    like: {
      feedback: [
        {
          sourceField: ["feedbackId"],
          destField: ["id"],
          destSchema: "feedback",
          cardinality: "one"
        }
      ]
    },
    organization: {
      members: [
        {
          sourceField: ["id"],
          destField: ["organizationId"],
          destSchema: "member",
          cardinality: "many"
        }
      ],
      workspaces: [
        {
          sourceField: ["id"],
          destField: ["organizationId"],
          destSchema: "workspace",
          cardinality: "many"
        }
      ]
    }
  }
};
querify(schema);
definePermissions(schema, () => {
  return {
    // User permissions
    user: {
      row: {
        // Anyone can read user profiles
        select: ANYONE_CAN
        // Users can only update their own profile
      }
    },
    // Organization permissions
    organization: {
      row: {
        // Anyone can create an organization
        insert: ANYONE_CAN,
        // Can view organizations
        select: ANYONE_CAN,
        // Only org admins can update/delete
        update: {
          preMutation: ANYONE_CAN,
          postMutation: ANYONE_CAN
        },
        delete: ANYONE_CAN
      }
    },
    // Organization members permissions
    member: {
      row: {
        // Can view members
        select: ANYONE_CAN,
        // Only org admins can manage members
        insert: ANYONE_CAN,
        update: {
          preMutation: ANYONE_CAN,
          postMutation: ANYONE_CAN
        },
        delete: ANYONE_CAN
      }
    },
    comment: {
      row: {
        // Can view comments
        select: ANYONE_CAN,
        // Only org admins can manage comments
        insert: ANYONE_CAN,
        update: {
          preMutation: ANYONE_CAN,
          postMutation: ANYONE_CAN
        },
        delete: ANYONE_CAN
      }
    },
    workspace: {
      row: {
        // Can view comments
        select: ANYONE_CAN,
        // Only org admins can manage comments
        insert: ANYONE_CAN,
        update: {
          preMutation: ANYONE_CAN,
          postMutation: ANYONE_CAN
        },
        delete: ANYONE_CAN
      }
    },
    feedback: {
      row: {
        // Can view comments
        select: ANYONE_CAN,
        // Only org admins can manage comments
        insert: ANYONE_CAN,
        update: {
          preMutation: ANYONE_CAN,
          postMutation: ANYONE_CAN
        },
        delete: ANYONE_CAN
      }
    },
    like: {
      row: {
        // Can view comments
        select: ANYONE_CAN,
        // Only org admins can manage comments
        insert: ANYONE_CAN,
        update: {
          preMutation: ANYONE_CAN,
          postMutation: ANYONE_CAN
        },
        delete: ANYONE_CAN
      }
    },
    team: {
      row: {
        // Can view comments
        select: ANYONE_CAN,
        // Only org admins can manage comments
        insert: ANYONE_CAN,
        update: {
          preMutation: ANYONE_CAN,
          postMutation: ANYONE_CAN
        },
        delete: ANYONE_CAN
      }
    }
  };
});
function createMutators({
  authData
}) {
  return {
    // feedback: {
    // 	create: async (tx: Transaction<Schema>, feedback: Feedback) => {
    // 		if (!authData) throw new Error("Not authenticated");
    // 		try {
    // 			await tx.mutate.feedback.insert(feedback);
    // 		} catch (err) {
    // 			console.error("error adding feedback", err);
    // 			throw err;
    // 		}
    // 	},
    // },
    workspace: {
      create: async (tx, workspace2) => {
        if (!authData) throw new Error("Not authenticated");
        const id = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 21)();
        try {
          await tx.mutate.workspace.insert({
            id,
            name: workspace2.name,
            domain: workspace2.domain,
            organizationId: "MR7wSx5lyqDCeMc96f1ovf0ZUw62cEL1",
            workspaceUrl: workspace2.workspaceUrl,
            logo: workspace2.logo,
            createdAt: Date.now(),
            updatedAt: Date.now()
          });
        } catch (err) {
          console.error("error adding workspace", err);
          throw err;
        }
      }
    },
    feedback: {
      create: async (tx, feedback2) => {
        if (!authData) throw new Error("Not authenticated");
        const id = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 21)();
        try {
          await tx.mutate.feedback.insert({
            id,
            workspaceId: feedback2.workspaceId,
            userId: authData,
            title: feedback2.title,
            message: feedback2.message,
            status: feedback2.status,
            type: feedback2.type,
            tags: feedback2.tags
          });
        } catch (err) {
          console.error("error adding feedback", err);
          throw err;
        }
      }
    },
    like: {
      add: async (tx, feedbackId) => {
        if (!authData) throw new Error("Not authenticated");
        const id = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 21)();
        const existingLike = await tx.query.like.where("feedbackId", "=", feedbackId).where("userId", "=", authData).one();
        if (existingLike) throw new Error("Like already exists");
        await tx.mutate.like.insert({
          id,
          feedbackId,
          userId: authData
        });
      },
      remove: async (tx, { likeId }) => {
        if (!authData) throw new Error("Not authenticated");
        await tx.mutate.like.delete({ id: likeId });
      }
    },
    comment: {
      add: async (tx, { feedbackId, message }) => {
        if (!authData) throw new Error("Not authenticated");
        const id = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 21)();
        await tx.mutate.comment.insert({
          id,
          feedbackId,
          userId: authData,
          message
        });
      }
    }
  };
}
const pgURL = process.env.DATABASE_URL;
const processor = new PushProcessor(new ZQLDatabase(new PostgresJSConnection(postgres(pgURL)), schema));
const ServerRoute$1 = createServerFileRoute().methods({
  POST: async ({
    request
  }) => {
    const userID = await getUserID(request);
    if (typeof userID === "object") {
      return userID;
    }
    try {
      const result = await processor.process(createMutators({
        authData: userID ? userID : void 0
      }), request);
      return json(result);
    } catch (err) {
      return json({
        error: "Invalid token"
      }, {
        status: 401
      });
    }
  }
});
async function getUserID(request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    return void 0;
  }
  const prefix = "Bearer ";
  if (!authHeader.startsWith(prefix)) {
    return json({
      error: "Missing or invalid authorization header"
    }, {
      status: 401
    });
  }
  const token = authHeader.slice(prefix.length);
  const jwks2 = jose.createRemoteJWKSet(new URL("/api/auth/jwks", request.url));
  const {
    payload
  } = await jose.jwtVerify(token, jwks2);
  return payload.sub;
}
const ServerRoute = createServerFileRoute().methods({
  GET: ({
    request
  }) => {
    return auth.handler(request);
  },
  POST: ({
    request
  }) => {
    return auth.handler(request);
  }
});
const rootServerRouteImport = createServerRootRoute();
const LayoutRoute = Route$6.update({
  id: "/_layout",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const LayoutWorkspaceIdRoute = Route$4.update({
  id: "/$workspaceId",
  path: "/$workspaceId",
  getParentRoute: () => LayoutRoute
});
const authRegisterRoute = Route$3.update({
  id: "/(auth)/register",
  path: "/register",
  getParentRoute: () => Route$7
});
const authLoginRoute = Route$2.update({
  id: "/(auth)/login",
  path: "/login",
  getParentRoute: () => Route$7
});
const LayoutWorkspaceIdIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => LayoutWorkspaceIdRoute
});
const LayoutWorkspaceIdFeedbackIdRoute = Route2.update({
  id: "/$feedbackId",
  path: "/$feedbackId",
  getParentRoute: () => LayoutWorkspaceIdRoute
});
const ApiPushServerRoute = ServerRoute$1.update({
  id: "/api/push",
  path: "/api/push",
  getParentRoute: () => rootServerRouteImport
});
const ApiAuthSplatServerRoute = ServerRoute.update({
  id: "/api/auth/$",
  path: "/api/auth/$",
  getParentRoute: () => rootServerRouteImport
});
const LayoutWorkspaceIdRouteChildren = {
  LayoutWorkspaceIdFeedbackIdRoute,
  LayoutWorkspaceIdIndexRoute
};
const LayoutWorkspaceIdRouteWithChildren = LayoutWorkspaceIdRoute._addFileChildren(LayoutWorkspaceIdRouteChildren);
const LayoutRouteChildren = {
  LayoutWorkspaceIdRoute: LayoutWorkspaceIdRouteWithChildren
};
const LayoutRouteWithChildren = LayoutRoute._addFileChildren(LayoutRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  LayoutRoute: LayoutRouteWithChildren,
  authLoginRoute,
  authRegisterRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const rootServerRouteChildren = {
  ApiPushServerRoute,
  ApiAuthSplatServerRoute
};
const serverRouteTree = rootServerRouteImport._addFileChildren(rootServerRouteChildren)._addFileTypes();
const routeTree_gen = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  routeTree,
  serverRouteTree
}, Symbol.toStringTag, { value: "Module" }));
function createRouter() {
  const router = createRouter$1({
    routeTree,
    defaultPreload: "intent",
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => createComponent(NotFound, {}),
    scrollRestoration: true
  });
  return router;
}
const serverEntry$1 = createStartHandler({
  createRouter
})(defaultStreamHandler);
const serverEntry = defineEventHandler(function(event) {
  const request = toWebRequest(event);
  return serverEntry$1({
    request
  });
});

export { Link as L, Outlet as O, Route$1 as R, useParams as a, useNavigate as b, useSearch as c, Route2 as d, serverEntry as default, createServerRpc as e, createServerFn as f, db as g, getCookie as h, createFileRoute as i, useLoaderData as j, createMutators as k, getWebRequest as l, auth as m, useStore as n, schema as s, useMatch as u, workspace as w };
//# sourceMappingURL=ssr.mjs.map
