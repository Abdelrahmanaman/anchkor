import * as Solid$1 from 'solid-js/web';
import { ssr, createComponent, mergeProps, Dynamic, ssrHydrationKey, escape, isServer, ssrElement, spread, useAssets, NoHydration, HydrationScript, Hydration } from 'solid-js/web';
import * as Solid from 'solid-js';
import { createContext, createResource, Show, createSignal, createEffect, onCleanup, For, sharedConfig, createUniqueId, useContext, createRenderEffect } from 'solid-js';
import warning from 'tiny-warning';
import invariant from 'tiny-invariant';
import { createStore, reconcile } from 'solid-js/store';
import { mergeRefs } from '@solid-primitives/refs';
import { BaseRootRoute, rootRouteId, BaseRoute, functionalUpdate, isNotFound, preloadWarning, isRedirect, createControlledPromise, getLocationChangeInfo, defaultGetScrollRestorationKey, restoreScroll, storageKey, pick, exactPathTest, removeTrailingSlash, deepEqual, joinPaths, trimPath, isResolvedRedirect, processRouteTree, getMatchedRoutes, isPlainObject, TSR_DEFERRED_PROMISE, RouterCore, trimPathRight, handleHashScroll, isPlainArray, defer } from '@tanstack/router-core';
import jsesc from 'jsesc';
import { AsyncLocalStorage } from 'node:async_hooks';
import { createMemoryHistory } from '@tanstack/history';
import { isbot } from 'isbot';
import { ReadableStream as ReadableStream$1 } from 'node:stream/web';

function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

function splitSetCookieString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitSetCookieString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}
function toWebRequest(event) {
  return event.web?.request || new Request(getRequestURL(event), {
    // @ts-ignore Undici option
    duplex: "half",
    method: event.method,
    headers: event.headers,
    body: getRequestWebStream(event)
  });
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function parseCookies(event) {
  return parse(event.node.req.headers.cookie || "");
}
function getCookie$1(event, name) {
  return parseCookies(event)[name];
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function getResponseStatus$1(event) {
  return event.node.res.statusCode;
}
function getResponseHeaders$1(event) {
  return event.node.res.getHeaders();
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    // Hooks
    __publicField(this, "_onBeforeResponseCalled");
    __publicField(this, "_onAfterResponseCalled");
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler$1(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}

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
  const [show, setShow] = Solid.createSignal("production" !== "production");
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
const matchContext = Solid.createContext(() => void 0);
const dummyMatchContext = Solid.createContext(() => void 0);
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
      const index = s.matches.findIndex((d) => d.id === props.matchId);
      return (_a = s.matches[index - 1]) == null ? void 0 : _a.routeId;
    }
  });
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
};
function OnRendered() {
  const router = useRouter();
  const location = useRouterState({
    select: (s) => {
      var _a;
      return (_a = s.resolvedLocation) == null ? void 0 : _a.state.key;
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
      const index = matches.findIndex((d) => d.id === matchId());
      const v = (_a = matches[index + 1]) == null ? void 0 : _a.id;
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
function useMatches(opts) {
  return useRouterState({
    select: (state) => {
      const matches = state.matches;
      return (opts == null ? void 0 : opts.select) ? opts.select(matches) : matches;
    }
  });
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
  }, options), ["activeProps", "inactiveProps", "activeOptions", "to", "preload", "preloadDelay", "hashScrollIntoView", "replace", "startTransition", "resetScroll", "viewTransition", "children", "target", "disabled", "style", "class", "onClick", "onFocus", "onMouseEnter", "onMouseLeave", "onMouseOver", "onMouseOut", "onTouchStart", "ignoreBlocker"]);
  const [_, propsSafeToSpread] = Solid.splitProps(rest, ["params", "search", "hash", "state", "mask", "reloadDocument"]);
  const type = () => {
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
  const from = useMatches({
    select: (matches) => {
      var _a;
      return options.from ?? ((_a = matches[matches.length - 1]) == null ? void 0 : _a.fullPath);
    }
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
  if (type() === "external") {
    return Solid.mergeProps(propsSafeToSpread, {
      ref,
      get type() {
        return type();
      },
      get href() {
        return local.to;
      }
    }, Solid.splitProps(local, ["children", "target", "disabled", "style", "class", "onClick", "onFocus", "onMouseEnter", "onMouseLeave", "onMouseOut", "onMouseOver", "onTouchStart"])[0]);
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
  const [local, rest] = Solid.splitProps(props, ["_asChild"]);
  const [_, linkProps] = Solid.splitProps(useLinkProps(rest), ["type", "children"]);
  const children = () => typeof rest.children === "function" ? rest.children({
    get isActive() {
      return linkProps["data-status"] === "active";
    }
  }) : rest.children;
  return createComponent(Dynamic, mergeProps({
    get component() {
      return local._asChild ? local._asChild : "a";
    }
  }, linkProps, {
    children
  }));
};
function isCtrlEvent(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
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
    navigate
  } = useRouter();
  return (options) => {
    return navigate({
      from: _defaultOpts == null ? void 0 : _defaultOpts.from,
      ...options
    });
  };
}
let Route$2 = class Route extends BaseRoute {
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
  return new Route$2(options);
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
        let index = instances.length;
        instances = [...instances, tag];
        cascadedTagInstances.set(tagKey, instances);
        let element2 = getElement(tag);
        tag.ref = element2;
        spread(element2, tag.props);
        let lastVisited = null;
        for (var i = index - 1; i >= 0; i--) {
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
        return index;
      }
      let element = getElement(tag);
      tag.ref = element;
      spread(element, tag.props);
      if (element.parentNode != document.head) {
        document.head.appendChild(element);
      }
      return -1;
    },
    removeTag(tag, index) {
      const properties = tag.tag === "title" ? titleTagProperties : metaTagProperties;
      const tagKey = getTagKey(tag, properties);
      if (tag.ref) {
        const t = cascadedTagInstances.get(tagKey);
        if (t) {
          if (tag.ref.parentNode) {
            tag.ref.parentNode.removeChild(tag.ref);
            for (let i = index - 1; i >= 0; i--) {
              if (t[i] != null) {
                document.head.appendChild(t[i].ref);
              }
            }
          }
          t[index] = null;
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
        const index = tags.findIndex((prev) => prev.tag === tagDesc.tag && getTagKey(prev, properties) === tagDescKey);
        if (index !== -1) {
          tags.splice(index, 1);
        }
      }
      tags.push(tagDesc);
      return tags.length;
    },
    removeTag(tag, index) {
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
    const index = c.addTag(tagDesc);
    onCleanup(() => c.removeTag(tagDesc, index));
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
      if (attrs && attrs.src) {
        return ssrElement("script", attrs, void 0, true);
      }
      if (typeof children === "string") return ssrElement("script", mergeProps(attrs, {
        innerHTML: children
      }), void 0, true);
      return null;
    default:
      return null;
  }
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
function transformReadableStreamWithRouter(router, routerStream) {
  return transformStreamWithRouter(router, routerStream);
}
const patternBodyStart = /(<body)/;
const patternBodyEnd = /(<\/body>)/;
const patternHtmlEnd = /(<\/html>)/;
const patternHeadStart = /(<head.*?>)/;
const patternClosingTag = /(<\/[a-zA-Z][\w:.-]*?>)/g;
const textDecoder = new TextDecoder();
function createPassthrough() {
  let controller;
  const encoder = new TextEncoder();
  const stream = new ReadableStream$1({
    start(c) {
      controller = c;
    }
  });
  const res = {
    stream,
    write: (chunk) => {
      controller.enqueue(encoder.encode(chunk));
    },
    end: (chunk) => {
      if (chunk) {
        controller.enqueue(encoder.encode(chunk));
      }
      controller.close();
      res.destroyed = true;
    },
    destroy: (error) => {
      controller.error(error);
    },
    destroyed: false
  };
  return res;
}
async function readStream(stream, opts) {
  var _a, _b, _c;
  try {
    const reader = stream.getReader();
    let chunk;
    while (!(chunk = await reader.read()).done) {
      (_a = opts.onData) == null ? void 0 : _a.call(opts, chunk);
    }
    (_b = opts.onEnd) == null ? void 0 : _b.call(opts);
  } catch (error) {
    (_c = opts.onError) == null ? void 0 : _c.call(opts, error);
  }
}
function transformStreamWithRouter(router, appStream) {
  const finalPassThrough = createPassthrough();
  let isAppRendering = true;
  let routerStreamBuffer = "";
  let pendingClosingTags = "";
  let bodyStarted = false;
  let headStarted = false;
  let leftover = "";
  let leftoverHtml = "";
  function getBufferedRouterStream() {
    const html = routerStreamBuffer;
    routerStreamBuffer = "";
    return html;
  }
  function decodeChunk(chunk) {
    if (chunk instanceof Uint8Array) {
      return textDecoder.decode(chunk);
    }
    return String(chunk);
  }
  const injectedHtmlDonePromise = createControlledPromise();
  let processingCount = 0;
  router.serverSsr.injectedHtml.forEach((promise) => {
    handleInjectedHtml(promise);
  });
  const stopListeningToInjectedHtml = router.subscribe(
    "onInjectedHtml",
    (e) => {
      handleInjectedHtml(e.promise);
    }
  );
  function handleInjectedHtml(promise) {
    processingCount++;
    promise.then((html) => {
      if (!bodyStarted) {
        routerStreamBuffer += html;
      } else {
        finalPassThrough.write(html);
      }
    }).catch(injectedHtmlDonePromise.reject).finally(() => {
      processingCount--;
      if (!isAppRendering && processingCount === 0) {
        stopListeningToInjectedHtml();
        injectedHtmlDonePromise.resolve();
      }
    });
  }
  injectedHtmlDonePromise.then(() => {
    const finalHtml = leftoverHtml + getBufferedRouterStream() + pendingClosingTags;
    finalPassThrough.end(finalHtml);
  }).catch((err) => {
    console.error("Error reading routerStream:", err);
    finalPassThrough.destroy(err);
  });
  readStream(appStream, {
    onData: (chunk) => {
      const text = decodeChunk(chunk.value);
      let chunkString = leftover + text;
      const bodyEndMatch = chunkString.match(patternBodyEnd);
      const htmlEndMatch = chunkString.match(patternHtmlEnd);
      if (!bodyStarted) {
        const bodyStartMatch = chunkString.match(patternBodyStart);
        if (bodyStartMatch) {
          bodyStarted = true;
        }
      }
      if (!headStarted) {
        const headStartMatch = chunkString.match(patternHeadStart);
        if (headStartMatch) {
          headStarted = true;
          const index = headStartMatch.index;
          const headTag = headStartMatch[0];
          const remaining = chunkString.slice(index + headTag.length);
          finalPassThrough.write(
            chunkString.slice(0, index) + headTag + getBufferedRouterStream()
          );
          chunkString = remaining;
        }
      }
      if (!bodyStarted) {
        finalPassThrough.write(chunkString);
        leftover = "";
        return;
      }
      if (bodyEndMatch && htmlEndMatch && bodyEndMatch.index < htmlEndMatch.index) {
        const bodyEndIndex = bodyEndMatch.index;
        pendingClosingTags = chunkString.slice(bodyEndIndex);
        finalPassThrough.write(
          chunkString.slice(0, bodyEndIndex) + getBufferedRouterStream()
        );
        leftover = "";
        return;
      }
      let result;
      let lastIndex = 0;
      while ((result = patternClosingTag.exec(chunkString)) !== null) {
        lastIndex = result.index + result[0].length;
      }
      if (lastIndex > 0) {
        const processed = chunkString.slice(0, lastIndex) + getBufferedRouterStream() + leftoverHtml;
        finalPassThrough.write(processed);
        leftover = chunkString.slice(lastIndex);
      } else {
        leftover = chunkString;
        leftoverHtml += getBufferedRouterStream();
      }
    },
    onEnd: () => {
      isAppRendering = false;
      if (processingCount === 0) {
        injectedHtmlDonePromise.resolve();
      }
    },
    onError: (error) => {
      console.error("Error reading appStream:", error);
      finalPassThrough.destroy(error);
    }
  });
  return finalPassThrough.stream;
}
function toHeadersInstance(init) {
  if (init instanceof Headers) {
    return new Headers(init);
  } else if (Array.isArray(init)) {
    return new Headers(init);
  } else if (typeof init === "object") {
    return new Headers(init);
  } else {
    return new Headers();
  }
}
function mergeHeaders(...headers) {
  return headers.reduce((acc, header) => {
    const headersInstance = toHeadersInstance(header);
    for (const [key, value] of headersInstance.entries()) {
      if (key === "set-cookie") {
        const splitCookies = splitSetCookieString(value);
        splitCookies.forEach((cookie) => acc.append("set-cookie", cookie));
      } else {
        acc.set(key, value);
      }
    }
    return acc;
  }, new Headers());
}
const startSerializer = {
  stringify: (value) => JSON.stringify(value, function replacer(key, val) {
    const ogVal = this[key];
    const serializer = serializers.find((t) => t.stringifyCondition(ogVal));
    if (serializer) {
      return serializer.stringify(ogVal);
    }
    return val;
  }),
  parse: (value) => JSON.parse(value, function parser(key, val) {
    const ogVal = this[key];
    if (isPlainObject(ogVal)) {
      const serializer = serializers.find((t) => t.parseCondition(ogVal));
      if (serializer) {
        return serializer.parse(ogVal);
      }
    }
    return val;
  }),
  encode: (value) => {
    if (Array.isArray(value)) {
      return value.map((v) => startSerializer.encode(v));
    }
    if (isPlainObject(value)) {
      return Object.fromEntries(
        Object.entries(value).map(([key, v]) => [
          key,
          startSerializer.encode(v)
        ])
      );
    }
    const serializer = serializers.find((t) => t.stringifyCondition(value));
    if (serializer) {
      return serializer.stringify(value);
    }
    return value;
  },
  decode: (value) => {
    if (isPlainObject(value)) {
      const serializer = serializers.find((t) => t.parseCondition(value));
      if (serializer) {
        return serializer.parse(value);
      }
    }
    if (Array.isArray(value)) {
      return value.map((v) => startSerializer.decode(v));
    }
    if (isPlainObject(value)) {
      return Object.fromEntries(
        Object.entries(value).map(([key, v]) => [
          key,
          startSerializer.decode(v)
        ])
      );
    }
    return value;
  }
};
const createSerializer = (key, check, toValue, fromValue) => ({
  key,
  stringifyCondition: check,
  stringify: (value) => ({ [`$${key}`]: toValue(value) }),
  parseCondition: (value) => Object.hasOwn(value, `$${key}`),
  parse: (value) => fromValue(value[`$${key}`])
});
const serializers = [
  createSerializer(
    // Key
    "undefined",
    // Check
    (v) => v === void 0,
    // To
    () => 0,
    // From
    () => void 0
  ),
  createSerializer(
    // Key
    "date",
    // Check
    (v) => v instanceof Date,
    // To
    (v) => v.toISOString(),
    // From
    (v) => new Date(v)
  ),
  createSerializer(
    // Key
    "error",
    // Check
    (v) => v instanceof Error,
    // To
    (v) => ({
      ...v,
      message: v.message,
      stack: void 0,
      cause: v.cause
    }),
    // From
    (v) => Object.assign(new Error(v.message), v)
  ),
  createSerializer(
    // Key
    "formData",
    // Check
    (v) => v instanceof FormData,
    // To
    (v) => {
      const entries = {};
      v.forEach((value, key) => {
        const entry = entries[key];
        if (entry !== void 0) {
          if (Array.isArray(entry)) {
            entry.push(value);
          } else {
            entries[key] = [entry, value];
          }
        } else {
          entries[key] = value;
        }
      });
      return entries;
    },
    // From
    (v) => {
      const formData = new FormData();
      Object.entries(v).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(key, val));
        } else {
          formData.append(key, value);
        }
      });
      return formData;
    }
  ),
  createSerializer(
    // Key
    "bigint",
    // Check
    (v) => typeof v === "bigint",
    // To
    (v) => v.toString(),
    // From
    (v) => BigInt(v)
  )
];
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
function json(payload, init) {
  return new Response(JSON.stringify(payload), {
    ...init,
    headers: mergeHeaders(
      { "content-type": "application/json" },
      init == null ? void 0 : init.headers
    )
  });
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
function requestHandler(handler) {
  return handler;
}
const minifiedTsrBootStrapScript = 'const __TSR_SSR__={matches:[],streamedValues:{},initMatch:o=>(__TSR_SSR__.matches.push(o),o.extracted?.forEach(l=>{if(l.type==="stream"){let r;l.value=new ReadableStream({start(e){r={enqueue:t=>{try{e.enqueue(t)}catch{}},close:()=>{try{e.close()}catch{}}}}}),l.value.controller=r}else{let r,e;l.value=new Promise((t,a)=>{e=a,r=t}),l.value.reject=e,l.value.resolve=r}}),!0),resolvePromise:({matchId:o,id:l,promiseState:r})=>{const e=__TSR_SSR__.matches.find(t=>t.id===o);if(e){const t=e.extracted?.[l];if(t&&t.type==="promise"&&t.value&&r.status==="success")return t.value.resolve(r.data),!0}return!1},injectChunk:({matchId:o,id:l,chunk:r})=>{const e=__TSR_SSR__.matches.find(t=>t.id===o);if(e){const t=e.extracted?.[l];if(t&&t.type==="stream"&&t.value?.controller)return t.value.controller.enqueue(new TextEncoder().encode(r.toString())),!0}return!1},closeStream:({matchId:o,id:l})=>{const r=__TSR_SSR__.matches.find(e=>e.id===o);if(r){const e=r.extracted?.[l];if(e&&e.type==="stream"&&e.value?.controller)return e.value.controller.close(),!0}return!1},cleanScripts:()=>{document.querySelectorAll(".tsr-once").forEach(o=>{o.remove()})}};window.__TSR_SSR__=__TSR_SSR__;\n';
function attachRouterServerSsrUtils(router, manifest) {
  router.ssr = {
    manifest,
    serializer: startSerializer
  };
  router.serverSsr = {
    injectedHtml: [],
    streamedKeys: /* @__PURE__ */ new Set(),
    injectHtml: (getHtml) => {
      const promise = Promise.resolve().then(getHtml);
      router.serverSsr.injectedHtml.push(promise);
      router.emit({
        type: "onInjectedHtml",
        promise
      });
      return promise.then(() => {
      });
    },
    injectScript: (getScript, opts) => {
      return router.serverSsr.injectHtml(async () => {
        const script = await getScript();
        return `<script class='tsr-once'>${script}${""}; if (typeof __TSR_SSR__ !== 'undefined') __TSR_SSR__.cleanScripts()<\/script>`;
      });
    },
    streamValue: (key, value) => {
      warning(
        !router.serverSsr.streamedKeys.has(key),
        "Key has already been streamed: " + key
      );
      router.serverSsr.streamedKeys.add(key);
      router.serverSsr.injectScript(
        () => `__TSR_SSR__.streamedValues['${key}'] = { value: ${jsesc(
          router.ssr.serializer.stringify(value),
          {
            isScriptContext: true,
            wrap: true,
            json: true
          }
        )}}`
      );
    },
    onMatchSettled
  };
  router.serverSsr.injectScript(() => minifiedTsrBootStrapScript, {
    logScript: false
  });
}
function dehydrateRouter(router) {
  var _a, _b, _c;
  const dehydratedRouter = {
    manifest: router.ssr.manifest,
    dehydratedData: (_b = (_a = router.options).dehydrate) == null ? void 0 : _b.call(_a),
    lastMatchId: ((_c = router.state.matches[router.state.matches.length - 1]) == null ? void 0 : _c.id) || ""
  };
  router.serverSsr.injectScript(
    () => `__TSR_SSR__.dehydrated = ${jsesc(
      router.ssr.serializer.stringify(dehydratedRouter),
      {
        isScriptContext: true,
        wrap: true,
        json: true
      }
    )}`
  );
}
function extractAsyncLoaderData(loaderData, ctx) {
  const extracted = [];
  const replaced = replaceBy(loaderData, (value, path) => {
    if (value instanceof ReadableStream) {
      const [copy1, copy2] = value.tee();
      const entry = {
        type: "stream",
        path,
        id: extracted.length,
        matchIndex: ctx.match.index,
        stream: copy2
      };
      extracted.push(entry);
      return copy1;
    } else if (value instanceof Promise) {
      const deferredPromise = defer(value);
      const entry = {
        type: "promise",
        path,
        id: extracted.length,
        matchIndex: ctx.match.index,
        promise: deferredPromise
      };
      extracted.push(entry);
    }
    return value;
  });
  return { replaced, extracted };
}
function onMatchSettled(opts) {
  const { router, match } = opts;
  let extracted = void 0;
  let serializedLoaderData = void 0;
  if (match.loaderData !== void 0) {
    const result = extractAsyncLoaderData(match.loaderData, {
      match
    });
    match.loaderData = result.replaced;
    extracted = result.extracted;
    serializedLoaderData = extracted.reduce(
      (acc, entry) => {
        return deepImmutableSetByPath(acc, ["temp", ...entry.path], void 0);
      },
      { temp: result.replaced }
    ).temp;
  }
  const initCode = `__TSR_SSR__.initMatch(${jsesc(
    {
      id: match.id,
      __beforeLoadContext: router.ssr.serializer.stringify(
        match.__beforeLoadContext
      ),
      loaderData: router.ssr.serializer.stringify(serializedLoaderData),
      error: router.ssr.serializer.stringify(match.error),
      extracted: extracted == null ? void 0 : extracted.map((entry) => pick(entry, ["type", "path"])),
      updatedAt: match.updatedAt,
      status: match.status
    },
    {
      isScriptContext: true,
      wrap: true,
      json: true
    }
  )})`;
  router.serverSsr.injectScript(() => initCode);
  if (extracted) {
    extracted.forEach((entry) => {
      if (entry.type === "promise") return injectPromise(entry);
      return injectStream(entry);
    });
  }
  function injectPromise(entry) {
    router.serverSsr.injectScript(async () => {
      await entry.promise;
      return `__TSR_SSR__.resolvePromise(${jsesc(
        {
          matchId: match.id,
          id: entry.id,
          promiseState: entry.promise[TSR_DEFERRED_PROMISE]
        },
        {
          isScriptContext: true,
          wrap: true,
          json: true
        }
      )})`;
    });
  }
  function injectStream(entry) {
    router.serverSsr.injectHtml(async () => {
      try {
        const reader = entry.stream.getReader();
        let chunk = null;
        while (!(chunk = await reader.read()).done) {
          if (chunk.value) {
            const code = `__TSR_SSR__.injectChunk(${jsesc(
              {
                matchId: match.id,
                id: entry.id,
                chunk: chunk.value
              },
              {
                isScriptContext: true,
                wrap: true,
                json: true
              }
            )})`;
            router.serverSsr.injectScript(() => code);
          }
        }
        router.serverSsr.injectScript(
          () => `__TSR_SSR__.closeStream(${jsesc(
            {
              matchId: match.id,
              id: entry.id
            },
            {
              isScriptContext: true,
              wrap: true,
              json: true
            }
          )})`
        );
      } catch (err) {
        console.error("stream read error", err);
      }
      return "";
    });
  }
}
function deepImmutableSetByPath(obj, path, value) {
  if (path.length === 0) {
    return value;
  }
  const [key, ...rest] = path;
  if (Array.isArray(obj)) {
    return obj.map((item, i) => {
      if (i === Number(key)) {
        return deepImmutableSetByPath(item, rest, value);
      }
      return item;
    });
  }
  if (isPlainObject(obj)) {
    return {
      ...obj,
      [key]: deepImmutableSetByPath(obj[key], rest, value)
    };
  }
  return obj;
}
function replaceBy(obj, cb, path = []) {
  if (isPlainArray(obj)) {
    return obj.map((value, i) => replaceBy(value, cb, [...path, `${i}`]));
  }
  if (isPlainObject(obj)) {
    const newObj2 = {};
    for (const key in obj) {
      newObj2[key] = replaceBy(obj[key], cb, [...path, key]);
    }
    return newObj2;
  }
  const newObj = cb(obj, path);
  if (newObj !== obj) {
    return newObj;
  }
  return obj;
}
async function getStartManifest(opts) {
  const { tsrStartManifest } = await import('./_tanstack-start-router-manifest_v-DlT4_tu0.mjs');
  const startManifest = tsrStartManifest();
  const rootRoute = startManifest.routes[rootRouteId] = startManifest.routes[rootRouteId] || {};
  rootRoute.assets = rootRoute.assets || [];
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
  } = await import(
    // @ts-expect-error
    './_tanstack-start-server-fn-manifest_v-D1EubrHv.mjs'
  );
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
        if (request.headers.get("Content-Type") && formDataContentTypes.some((type) => {
          var _a;
          return (_a = request.headers.get("Content-Type")) == null ? void 0 : _a.includes(type);
        })) {
          invariant(method.toLowerCase() !== "get", "GET requests with FormData payloads are not supported");
          return await action(await request.formData(), signal);
        }
        if (method.toLowerCase() === "get") {
          let payload2 = search;
          if (isCreateServerFn) {
            payload2 = search.payload;
          }
          payload2 = payload2 ? startSerializer.parse(payload2) : payload2;
          return await action(payload2, signal);
        }
        const jsonPayloadAsString = await request.text();
        const payload = startSerializer.parse(jsonPayloadAsString);
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
      return new Response(result !== void 0 ? startSerializer.stringify(result) : void 0, {
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
      return new Response(startSerializer.stringify(error), {
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
  let headers = mergeHeaders(
    getResponseHeaders(),
    {
      "Content-Type": "text/html; charset=UTF-8"
    },
    ...opts.router.state.matches.map((match) => {
      return match.headers;
    })
  );
  const { redirect } = opts.router.state;
  if (redirect) {
    headers = mergeHeaders(headers, redirect.headers);
  }
  return headers;
}
function createStartHandler({
  createRouter: createRouter2
}) {
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
      const history = createMemoryHistory({
        initialEntries: [href]
      });
      const APP_BASE = "/";
      const router = createRouter2();
      const startRoutesManifest = await getStartManifest();
      attachRouterServerSsrUtils(router, startRoutesManifest);
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
          const serverRouteTreeModule = await (async () => {
            try {
              return await import(
                // @ts-expect-error
                './routeTree.gen-C6MhkdQX.mjs'
              );
            } catch (e) {
              console.log(e);
              return void 0;
            }
          })();
          if (serverRouteTreeModule) {
            const [_matchedRoutes, response3] = await handleServerRoutes({
              routeTree: serverRouteTreeModule.routeTree,
              request,
              basePath: APP_BASE
            });
            if (response3) return response3;
          }
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
          await router.load();
          if (router.state.redirect) return router.state.redirect;
          dehydrateRouter(router);
          const responseHeaders = getStartResponseHeaders({ router });
          const response2 = await cb({
            request,
            router,
            responseHeaders
          });
          return response2;
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
        const redirect = router.resolveRedirect(response);
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
        return redirect;
      }
      return response;
    };
    return requestHandler(startRequestResolver);
  };
}
async function handleServerRoutes({
  routeTree: routeTree2,
  request,
  basePath
}) {
  const { flatRoutes, routesById, routesByPath } = processRouteTree({
    routeTree: routeTree2,
    initRoute: (route, i) => {
      route.init({
        originalIndex: i
      });
    }
  });
  const url = new URL(request.url);
  const pathname = url.pathname;
  const history = createMemoryHistory({
    initialEntries: [pathname]
  });
  const { matchedRoutes, foundRoute, routeParams } = getMatchedRoutes({
    pathname: history.location.pathname,
    basepath: basePath,
    caseSensitive: true,
    routesByPath,
    routesById,
    flatRoutes
  });
  let response;
  if (foundRoute && foundRoute.id !== rootRouteId) {
    const method = Object.keys(foundRoute.options.methods).find(
      (method2) => method2.toLowerCase() === request.method.toLowerCase()
    );
    if (method) {
      const handler = foundRoute.options.methods[method];
      if (handler) {
        const middlewares = flattenMiddlewares(
          matchedRoutes.flatMap((r) => r.options.middleware).filter(Boolean)
        ).map((d) => d.options.server);
        middlewares.push(handlerToMiddleware(handler));
        const ctx = await executeMiddleware(middlewares, {
          request,
          context: {},
          params: routeParams,
          pathname: history.location.pathname
        });
        response = ctx.response;
      }
    }
  }
  return [matchedRoutes, response];
}
function handlerToMiddleware(handler) {
  return async ({ next: _next, ...rest }) => ({
    response: await handler(rest)
  });
}
function executeMiddleware(middlewares, ctx) {
  let index = -1;
  const next = async (ctx2) => {
    index++;
    const middleware = middlewares[index];
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
function defineHandlerCallback(handler) {
  return handler;
}
const defaultStreamHandler = defineHandlerCallback(async ({
  request,
  router,
  responseHeaders
}) => {
  const {
    writable,
    readable
  } = new TransformStream();
  const stream = Solid$1.renderToStream(() => createComponent(StartServer, {
    router
  }));
  if (isbot(request.headers.get("User-Agent"))) {
    await stream;
  }
  stream.pipeTo(writable);
  const responseStream = transformReadableStreamWithRouter(router, readable);
  return new Response(responseStream, {
    status: router.state.statusCode,
    headers: responseHeaders
  });
});
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
const appCss = "/assets/app-CGV8CqZW.css";
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
const TanStackRouterDevtools = function() {
  return null;
} ;
var _tmpl$$1 = ["<header", ' class="border-b px-4 md:px-6"><div class="flex h-16 items-center justify-between gap-4"><div class="flex items-center gap-2"><div class="flex items-center gap-6"><!--$-->', "<!--/--><!--$-->", '<!--/--></div></div><div class="flex items-center gap-2"><button type="button" class="text-sm">', '</button><button type="button" class="text-sm">', "</button></div></div></header>"];
const navItems = [{
  name: "Dashboard",
  href: "/"
}, {
  name: "Orders",
  href: "/orders"
}, {
  name: "Products",
  href: "/products"
}, {
  name: "Customers",
  href: "/customers"
}];
function Header() {
  return ssr(_tmpl$$1, ssrHydrationKey(), escape(createComponent(Link, {
    to: "/",
    "class": "text-primary hover:text-primary/90",
    children: "Anchkor"
  })), escape(createComponent(For, {
    each: navItems,
    children: (item) => createComponent(Link, {
      get to() {
        return item.href;
      },
      "class": "inline-flex items-center border-transparent border-b-2 px-1 pt-1 font-medium text-gray-500 text-sm hover:border-gray-300 hover:text-gray-700",
      get children() {
        return item.name;
      }
    })
  })), escape(createComponent(Link, {
    to: "/",
    children: "Sign In"
  })), escape(createComponent(Link, {
    to: "/",
    children: "Get Started"
  })));
}
var _tmpl$ = ["<main", ' class="min-h-dvh bg-background text-foreground"><!--$-->', "<!--/--><!--$-->", "<!--/--></main>"];
const Route$1 = createRootRoute({
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
  return [createComponent(HeadContent, {}), createComponent(ColorModeProvider, {
    storageManager,
    get children() {
      return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Header, {})), escape(children));
    }
  }), createComponent(TanStackRouterDevtools, {
    position: "bottom-right"
  }), createComponent(Scripts, {})];
}
const $$splitComponentImporter = () => import('./index-xWxJBLuU.mjs');
const Route2 = createFileRoute({
  component: lazyRouteComponent($$splitComponentImporter, "component", () => Route2.ssr)
});
const IndexRoute = Route2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
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

export { createServerRpc as c, serverEntry as default, getCookie as g };
//# sourceMappingURL=ssr.mjs.map
