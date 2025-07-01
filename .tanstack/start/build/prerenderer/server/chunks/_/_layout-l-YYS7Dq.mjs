import { createComponent, ssr, ssrHydrationKey, escape, ssrElement, mergeProps as mergeProps$1, ssrAttribute, Portal, isServer } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { lazy, mergeProps, splitProps, createSignal, createEffect, onCleanup, createContext, For, useContext, Switch, Match, createUniqueId, Show, createMemo, on, onMount, createComputed, createComponent as createComponent$1 } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { createQuery, createZero } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/solid.js';
import { c as cn, m as mergeDefaultProps, a as createRegisterId, b as createGenerateId, P as Polymorphic, S as SeparatorRoot, d as createTagName, T as TextField, e as TextFieldLabel, f as TextFieldInput, g as TextFieldErrorMessage, h as getDocument, i as createControllableBooleanSignal, j as callHandler, s as scrollIntoViewport, k as focusWithoutScrolling, l as composeEventHandlers, n as getWindow, o as getActiveElement, p as contains$1, q as isPointInPolygon, r as getEventPoint, t as removeItemFromArray, u as isFocusable, v as visuallyHiddenStyles, w as noop, x as createControllableArraySignal, y as getAllTabbableIn, E as EventKey, z as scrollIntoView, A as isCtrlKey, B as addItemToArray, C as createControllableSignal, D as isString, F as isNumber, G as getFocusableTreeWalker, _ as __export } from './input-DKjd3ZUC.mjs';
import { cva } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cva/dist/index.mjs';
import { access } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/utils/dist/index.js';
import { s as src_default$1, a as access$1, c as createToggleState } from './index-CTzmLFx9.mjs';
import { combineStyle } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/props/dist/index.js';
import { autoUpdate, offset, flip, shift, size, hide, arrow, computePosition, platform } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import { createEventListener } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/event-listener/dist/index.js';
import { mergeRefs } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/refs/dist/index.js';
import { u as useCreateWorkspace, g as getWebsiteData, w as workspaceSchema, f as findWorkspaceUrl, a as addCollaborator, e as email } from './use-create-workspace-DGWxjvGf.mjs';
import { c as createForm } from './auth-client-Crsybfbq.mjs';
import { parse } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tldts/dist/cjs/index.js';
import { querify, definePermissions, ANYONE_CAN } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/zero.js';
import { nanoid } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/nanoid/index.js';
import { O as Outlet, b as useParams, L as Link, u as useMatch, a as useLoaderData } from './ssr.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/clsx/dist/clsx.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/arktype/out/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cheerio/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/resend/dist/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/form-core/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/client/plugins/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/client/solid/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tiny-warning/dist/tiny-warning.cjs.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tiny-invariant/dist/esm/tiny-invariant.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/store/dist/server.js';
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

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function useRouteContext(opts) {
  return useMatch({
    ...opts,
    select: (match) => opts.select ? opts.select(match.context) : match.context
  });
}
var button_exports = {};
__export(button_exports, {
  Button: () => Button$1,
  Root: () => ButtonRoot
});
var BUTTON_INPUT_TYPES = ["button", "color", "file", "image", "reset", "submit"];
function isButton(element) {
  const tagName = element.tagName.toLowerCase();
  if (tagName === "button") {
    return true;
  }
  if (tagName === "input" && element.type) {
    return BUTTON_INPUT_TYPES.indexOf(element.type) !== -1;
  }
  return false;
}
function ButtonRoot(props) {
  let ref;
  const mergedProps = mergeDefaultProps({
    type: "button"
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "type", "disabled"]);
  const tagName = createTagName(() => ref, () => "button");
  const isNativeButton = createMemo(() => {
    const elementTagName = tagName();
    if (elementTagName == null) {
      return false;
    }
    return isButton({
      tagName: elementTagName,
      type: local.type
    });
  });
  const isNativeInput = createMemo(() => {
    return tagName() === "input";
  });
  const isNativeLink = createMemo(() => {
    return tagName() === "a" && (void 0 ) != null;
  });
  return createComponent(Polymorphic, mergeProps$1({
    as: "button",
    get type() {
      return isNativeButton() || isNativeInput() ? local.type : void 0;
    },
    get role() {
      return !isNativeButton() && !isNativeLink() ? "button" : void 0;
    },
    get tabIndex() {
      return !isNativeButton() && !isNativeLink() && !local.disabled ? 0 : void 0;
    },
    get disabled() {
      return isNativeButton() || isNativeInput() ? local.disabled : void 0;
    },
    get ["aria-disabled"]() {
      return !isNativeButton() && !isNativeInput() && local.disabled ? true : void 0;
    },
    get ["data-disabled"]() {
      return local.disabled ? "" : void 0;
    }
  }, others));
}
var Button$1 = ButtonRoot;
function buildNodes(params) {
  var _a, _b, _c;
  let index = (_a = params.startIndex) != null ? _a : 0;
  const level = (_b = params.startLevel) != null ? _b : 0;
  const nodes = [];
  const getKey = (data) => {
    var _a2;
    if (data == null) {
      return "";
    }
    const _getKey = (_a2 = params.getKey) != null ? _a2 : "key";
    const dataKey = isString(_getKey) ? data[_getKey] : _getKey(data);
    return dataKey != null ? String(dataKey) : "";
  };
  const getTextValue = (data) => {
    var _a2;
    if (data == null) {
      return "";
    }
    const _getTextValue = (_a2 = params.getTextValue) != null ? _a2 : "textValue";
    const dataTextValue = isString(_getTextValue) ? data[_getTextValue] : _getTextValue(data);
    return dataTextValue != null ? String(dataTextValue) : "";
  };
  const getDisabled = (data) => {
    var _a2, _b2;
    if (data == null) {
      return false;
    }
    const _getDisabled = (_a2 = params.getDisabled) != null ? _a2 : "disabled";
    return (_b2 = isString(_getDisabled) ? data[_getDisabled] : _getDisabled(data)) != null ? _b2 : false;
  };
  const getSectionChildren = (data) => {
    var _a2;
    if (data == null) {
      return void 0;
    }
    if (isString(params.getSectionChildren)) {
      return data[params.getSectionChildren];
    }
    return (_a2 = params.getSectionChildren) == null ? void 0 : _a2.call(params, data);
  };
  for (const data of params.dataSource) {
    if (isString(data) || isNumber(data)) {
      nodes.push({
        type: "item",
        rawValue: data,
        key: String(data),
        textValue: String(data),
        disabled: getDisabled(data),
        level,
        index
      });
      index++;
      continue;
    }
    if (getSectionChildren(data) != null) {
      nodes.push({
        type: "section",
        rawValue: data,
        key: "",
        // not applicable here
        textValue: "",
        // not applicable here
        disabled: false,
        // not applicable here
        level,
        index
      });
      index++;
      const sectionChildren = (_c = getSectionChildren(data)) != null ? _c : [];
      if (sectionChildren.length > 0) {
        const childNodes = buildNodes({
          dataSource: sectionChildren,
          getKey: params.getKey,
          getTextValue: params.getTextValue,
          getDisabled: params.getDisabled,
          getSectionChildren: params.getSectionChildren,
          startIndex: index,
          startLevel: level + 1
        });
        nodes.push(...childNodes);
        index += childNodes.length;
      }
    } else {
      nodes.push({
        type: "item",
        rawValue: data,
        key: getKey(data),
        textValue: getTextValue(data),
        disabled: getDisabled(data),
        level,
        index
      });
      index++;
    }
  }
  return nodes;
}
function createCollection(props, deps = []) {
  return createMemo(() => {
    const nodes = buildNodes({
      dataSource: access(props.dataSource),
      getKey: access(props.getKey),
      getTextValue: access(props.getTextValue),
      getDisabled: access(props.getDisabled),
      getSectionChildren: access(props.getSectionChildren)
    });
    for (let i = 0; i < deps.length; i++) deps[i]();
    return props.factory(nodes);
  });
}
var RTL_SCRIPTS = /* @__PURE__ */ new Set(["Avst", "Arab", "Armi", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]);
var RTL_LANGS = /* @__PURE__ */ new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
function isRTL(locale) {
  var _a;
  if (Intl.Locale) {
    const script = (_a = new Intl.Locale(locale).maximize().script) != null ? _a : "";
    return RTL_SCRIPTS.has(script);
  }
  const lang = locale.split("-")[0];
  return RTL_LANGS.has(lang);
}
function getReadingDirection(locale) {
  return isRTL(locale) ? "rtl" : "ltr";
}
function getDefaultLocale() {
  let locale = typeof navigator !== "undefined" && // @ts-ignore
  (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([locale]);
  } catch (_err) {
    locale = "en-US";
  }
  return {
    locale,
    direction: getReadingDirection(locale)
  };
}
var currentLocale = getDefaultLocale();
var listeners = /* @__PURE__ */ new Set();
function updateLocale() {
  currentLocale = getDefaultLocale();
  for (const listener of listeners) {
    listener(currentLocale);
  }
}
function createDefaultLocale() {
  const defaultSSRLocale = {
    locale: "en-US",
    direction: "ltr"
  };
  const [defaultClientLocale, setDefaultClientLocale] = createSignal(currentLocale);
  const defaultLocale = createMemo(() => isServer ? defaultSSRLocale : defaultClientLocale());
  onMount(() => {
    if (listeners.size === 0) {
      window.addEventListener("languagechange", updateLocale);
    }
    listeners.add(setDefaultClientLocale);
    onCleanup(() => {
      listeners.delete(setDefaultClientLocale);
      if (listeners.size === 0) {
        window.removeEventListener("languagechange", updateLocale);
      }
    });
  });
  return {
    locale: () => defaultLocale().locale,
    direction: () => defaultLocale().direction
  };
}
var I18nContext = createContext();
function useLocale() {
  const defaultLocale = createDefaultLocale();
  const context = useContext(I18nContext);
  return context || defaultLocale;
}
var cache = /* @__PURE__ */ new Map();
function createCollator(options) {
  const {
    locale
  } = useLocale();
  const cacheKey = createMemo(() => {
    return locale() + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
  });
  return createMemo(() => {
    const key = cacheKey();
    let collator;
    if (cache.has(key)) {
      collator = cache.get(key);
    }
    if (!collator) {
      collator = new Intl.Collator(locale(), options);
      cache.set(key, collator);
    }
    return collator;
  });
}
var Selection = class _Selection extends Set {
  constructor(keys, anchorKey, currentKey) {
    super(keys);
    __publicField(this, "anchorKey");
    __publicField(this, "currentKey");
    if (keys instanceof _Selection) {
      this.anchorKey = anchorKey || keys.anchorKey;
      this.currentKey = currentKey || keys.currentKey;
    } else {
      this.anchorKey = anchorKey;
      this.currentKey = currentKey;
    }
  }
};
function createControllableSelectionSignal(props) {
  const [_value, setValue] = createControllableSignal(props);
  const value = () => {
    var _a;
    return (_a = _value()) != null ? _a : new Selection();
  };
  return [value, setValue];
}
function isNonContiguousSelectionModifier(e) {
  return e.ctrlKey;
}
function isCtrlKeyPressed(e) {
  return e.ctrlKey;
}
function convertSelection(selection) {
  return new Selection(selection);
}
function isSameSelection(setA, setB) {
  if (setA.size !== setB.size) {
    return false;
  }
  for (const item of setA) {
    if (!setB.has(item)) {
      return false;
    }
  }
  return true;
}
function createMultipleSelectionState(props) {
  const mergedProps = mergeDefaultProps({
    selectionMode: "none",
    selectionBehavior: "toggle"
  }, props);
  const [isFocused, setFocused] = createSignal(false);
  const [focusedKey, setFocusedKey] = createSignal();
  const selectedKeysProp = createMemo(() => {
    const selection = access(mergedProps.selectedKeys);
    if (selection != null) {
      return convertSelection(selection);
    }
    return selection;
  });
  const defaultSelectedKeys = createMemo(() => {
    const defaultSelection = access(mergedProps.defaultSelectedKeys);
    if (defaultSelection != null) {
      return convertSelection(defaultSelection);
    }
    return new Selection();
  });
  const [selectedKeys, _setSelectedKeys] = createControllableSelectionSignal({
    value: selectedKeysProp,
    defaultValue: defaultSelectedKeys,
    onChange: (value) => {
      var _a;
      return (_a = mergedProps.onSelectionChange) == null ? void 0 : _a.call(mergedProps, value);
    }
  });
  const [selectionBehavior, setSelectionBehavior] = createSignal(access(mergedProps.selectionBehavior));
  const selectionMode = () => access(mergedProps.selectionMode);
  const disallowEmptySelection = () => {
    var _a;
    return (_a = access(mergedProps.disallowEmptySelection)) != null ? _a : false;
  };
  const setSelectedKeys = (keys) => {
    if (access(mergedProps.allowDuplicateSelectionEvents) || !isSameSelection(keys, selectedKeys())) {
      _setSelectedKeys(keys);
    }
  };
  createEffect(() => {
    const selection = selectedKeys();
    if (access(mergedProps.selectionBehavior) === "replace" && selectionBehavior() === "toggle" && typeof selection === "object" && selection.size === 0) {
      setSelectionBehavior("replace");
    }
  });
  createEffect(() => {
    var _a;
    setSelectionBehavior((_a = access(mergedProps.selectionBehavior)) != null ? _a : "toggle");
  });
  return {
    selectionMode,
    disallowEmptySelection,
    selectionBehavior,
    setSelectionBehavior,
    isFocused,
    setFocused,
    focusedKey,
    setFocusedKey,
    selectedKeys,
    setSelectedKeys
  };
}
function createTypeSelect(props) {
  const [search, setSearch] = createSignal("");
  const [timeoutId, setTimeoutId] = createSignal(-1);
  const onKeyDown = (e) => {
    var _a2, _b;
    var _a;
    if (access(props.isDisabled)) {
      return;
    }
    const delegate = access(props.keyboardDelegate);
    const manager = access(props.selectionManager);
    if (!delegate.getKeyForSearch) {
      return;
    }
    const character = getStringForKey(e.key);
    if (!character || e.ctrlKey || e.metaKey) {
      return;
    }
    if (character === " " && search().trim().length > 0) {
      e.preventDefault();
      e.stopPropagation();
    }
    let newSearch = setSearch((prev) => prev + character);
    let key = (_a2 = delegate.getKeyForSearch(newSearch, manager.focusedKey())) != null ? _a2 : delegate.getKeyForSearch(newSearch);
    if (key == null && isAllSameLetter(newSearch)) {
      newSearch = newSearch[0];
      key = (_b = delegate.getKeyForSearch(newSearch, manager.focusedKey())) != null ? _b : delegate.getKeyForSearch(newSearch);
    }
    if (key != null) {
      manager.setFocusedKey(key);
      (_a = props.onTypeSelect) == null ? void 0 : _a.call(props, key);
    }
    clearTimeout(timeoutId());
    setTimeoutId(window.setTimeout(() => setSearch(""), 500));
  };
  return {
    typeSelectHandlers: {
      onKeyDown
    }
  };
}
function getStringForKey(key) {
  if (key.length === 1 || !/^[A-Z]/i.test(key)) {
    return key;
  }
  return "";
}
function isAllSameLetter(search) {
  return search.split("").every((letter) => letter === search[0]);
}
function createSelectableCollection(props, ref, scrollRef) {
  const defaultProps = {
    selectOnFocus: () => access(props.selectionManager).selectionBehavior() === "replace"
  };
  const mergedProps = mergeProps(defaultProps, props);
  const finalScrollRef = () => ref();
  const {
    direction
  } = useLocale();
  let scrollPos = {
    top: 0,
    left: 0
  };
  createEventListener(() => !access(mergedProps.isVirtualized) ? finalScrollRef() : void 0, "scroll", () => {
    const scrollEl = finalScrollRef();
    if (!scrollEl) {
      return;
    }
    scrollPos = {
      top: scrollEl.scrollTop,
      left: scrollEl.scrollLeft
    };
  });
  const {
    typeSelectHandlers
  } = createTypeSelect({
    isDisabled: () => access(mergedProps.disallowTypeAhead),
    keyboardDelegate: () => access(mergedProps.keyboardDelegate),
    selectionManager: () => access(mergedProps.selectionManager)
  });
  const orientation = () => {
    var _a;
    return (_a = access(mergedProps.orientation)) != null ? _a : "vertical";
  };
  const onKeyDown = (e) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    callHandler(e, typeSelectHandlers.onKeyDown);
    if (e.altKey && e.key === "Tab") {
      e.preventDefault();
    }
    const refEl = ref();
    if (!(refEl == null ? void 0 : refEl.contains(e.target))) {
      return;
    }
    const manager = access(mergedProps.selectionManager);
    const selectOnFocus = access(mergedProps.selectOnFocus);
    const navigateToKey = (key) => {
      if (key != null) {
        manager.setFocusedKey(key);
        if (e.shiftKey && manager.selectionMode() === "multiple") {
          manager.extendSelection(key);
        } else if (selectOnFocus && !isNonContiguousSelectionModifier(e)) {
          manager.replaceSelection(key);
        }
      }
    };
    const delegate = access(mergedProps.keyboardDelegate);
    const shouldFocusWrap = access(mergedProps.shouldFocusWrap);
    const focusedKey = manager.focusedKey();
    switch (e.key) {
      case (orientation() === "vertical" ? "ArrowDown" : "ArrowRight"): {
        if (delegate.getKeyBelow) {
          e.preventDefault();
          let nextKey;
          if (focusedKey != null) {
            nextKey = delegate.getKeyBelow(focusedKey);
          } else {
            nextKey = (_a = delegate.getFirstKey) == null ? void 0 : _a.call(delegate);
          }
          if (nextKey == null && shouldFocusWrap) {
            nextKey = (_b = delegate.getFirstKey) == null ? void 0 : _b.call(delegate, focusedKey);
          }
          navigateToKey(nextKey);
        }
        break;
      }
      case (orientation() === "vertical" ? "ArrowUp" : "ArrowLeft"): {
        if (delegate.getKeyAbove) {
          e.preventDefault();
          let nextKey;
          if (focusedKey != null) {
            nextKey = delegate.getKeyAbove(focusedKey);
          } else {
            nextKey = (_c = delegate.getLastKey) == null ? void 0 : _c.call(delegate);
          }
          if (nextKey == null && shouldFocusWrap) {
            nextKey = (_d = delegate.getLastKey) == null ? void 0 : _d.call(delegate, focusedKey);
          }
          navigateToKey(nextKey);
        }
        break;
      }
      case (orientation() === "vertical" ? "ArrowLeft" : "ArrowUp"): {
        if (delegate.getKeyLeftOf) {
          e.preventDefault();
          const isRTL2 = direction() === "rtl";
          let nextKey;
          if (focusedKey != null) {
            nextKey = delegate.getKeyLeftOf(focusedKey);
          } else {
            nextKey = isRTL2 ? (_e = delegate.getFirstKey) == null ? void 0 : _e.call(delegate) : (_f = delegate.getLastKey) == null ? void 0 : _f.call(delegate);
          }
          navigateToKey(nextKey);
        }
        break;
      }
      case (orientation() === "vertical" ? "ArrowRight" : "ArrowDown"): {
        if (delegate.getKeyRightOf) {
          e.preventDefault();
          const isRTL2 = direction() === "rtl";
          let nextKey;
          if (focusedKey != null) {
            nextKey = delegate.getKeyRightOf(focusedKey);
          } else {
            nextKey = isRTL2 ? (_g = delegate.getLastKey) == null ? void 0 : _g.call(delegate) : (_h = delegate.getFirstKey) == null ? void 0 : _h.call(delegate);
          }
          navigateToKey(nextKey);
        }
        break;
      }
      case "Home":
        if (delegate.getFirstKey) {
          e.preventDefault();
          const firstKey = delegate.getFirstKey(focusedKey, isCtrlKeyPressed(e));
          if (firstKey != null) {
            manager.setFocusedKey(firstKey);
            if (isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode() === "multiple") {
              manager.extendSelection(firstKey);
            } else if (selectOnFocus) {
              manager.replaceSelection(firstKey);
            }
          }
        }
        break;
      case "End":
        if (delegate.getLastKey) {
          e.preventDefault();
          const lastKey = delegate.getLastKey(focusedKey, isCtrlKeyPressed(e));
          if (lastKey != null) {
            manager.setFocusedKey(lastKey);
            if (isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode() === "multiple") {
              manager.extendSelection(lastKey);
            } else if (selectOnFocus) {
              manager.replaceSelection(lastKey);
            }
          }
        }
        break;
      case "PageDown":
        if (delegate.getKeyPageBelow && focusedKey != null) {
          e.preventDefault();
          const nextKey = delegate.getKeyPageBelow(focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "PageUp":
        if (delegate.getKeyPageAbove && focusedKey != null) {
          e.preventDefault();
          const nextKey = delegate.getKeyPageAbove(focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "a":
        if (isCtrlKeyPressed(e) && manager.selectionMode() === "multiple" && access(mergedProps.disallowSelectAll) !== true) {
          e.preventDefault();
          manager.selectAll();
        }
        break;
      case "Escape":
        if (!e.defaultPrevented) {
          e.preventDefault();
          if (!access(mergedProps.disallowEmptySelection)) {
            manager.clearSelection();
          }
        }
        break;
      case "Tab": {
        if (!access(mergedProps.allowsTabNavigation)) {
          if (e.shiftKey) {
            refEl.focus();
          } else {
            const walker = getFocusableTreeWalker(refEl, {
              tabbable: true
            });
            let next;
            let last;
            do {
              last = walker.lastChild();
              if (last) {
                next = last;
              }
            } while (last);
            if (next && !next.contains(document.activeElement)) {
              focusWithoutScrolling(next);
            }
          }
          break;
        }
      }
    }
  };
  const onFocusIn = (e) => {
    var _a2, _b2;
    var _a, _b;
    const manager = access(mergedProps.selectionManager);
    const delegate = access(mergedProps.keyboardDelegate);
    const selectOnFocus = access(mergedProps.selectOnFocus);
    if (manager.isFocused()) {
      if (!e.currentTarget.contains(e.target)) {
        manager.setFocused(false);
      }
      return;
    }
    if (!e.currentTarget.contains(e.target)) {
      return;
    }
    manager.setFocused(true);
    if (manager.focusedKey() == null) {
      const navigateToFirstKey = (key) => {
        if (key == null) {
          return;
        }
        manager.setFocusedKey(key);
        if (selectOnFocus) {
          manager.replaceSelection(key);
        }
      };
      const relatedTarget = e.relatedTarget;
      if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) {
        navigateToFirstKey((_a2 = manager.lastSelectedKey()) != null ? _a2 : (_a = delegate.getLastKey) == null ? void 0 : _a.call(delegate));
      } else {
        navigateToFirstKey((_b2 = manager.firstSelectedKey()) != null ? _b2 : (_b = delegate.getFirstKey) == null ? void 0 : _b.call(delegate));
      }
    } else if (!access(mergedProps.isVirtualized)) {
      const scrollEl = finalScrollRef();
      if (scrollEl) {
        scrollEl.scrollTop = scrollPos.top;
        scrollEl.scrollLeft = scrollPos.left;
        const element = scrollEl.querySelector(`[data-key="${manager.focusedKey()}"]`);
        if (element) {
          focusWithoutScrolling(element);
          scrollIntoView(scrollEl, element);
        }
      }
    }
  };
  const onFocusOut = (e) => {
    const manager = access(mergedProps.selectionManager);
    if (!e.currentTarget.contains(e.relatedTarget)) {
      manager.setFocused(false);
    }
  };
  const onMouseDown = (e) => {
    if (finalScrollRef() === e.target) {
      e.preventDefault();
    }
  };
  const tryAutoFocus = () => {
    var _a, _b;
    const autoFocus = access(mergedProps.autoFocus);
    if (!autoFocus) {
      return;
    }
    const manager = access(mergedProps.selectionManager);
    const delegate = access(mergedProps.keyboardDelegate);
    let focusedKey;
    if (autoFocus === "first") {
      focusedKey = (_a = delegate.getFirstKey) == null ? void 0 : _a.call(delegate);
    }
    if (autoFocus === "last") {
      focusedKey = (_b = delegate.getLastKey) == null ? void 0 : _b.call(delegate);
    }
    const selectedKeys = manager.selectedKeys();
    if (selectedKeys.size) {
      focusedKey = selectedKeys.values().next().value;
    }
    manager.setFocused(true);
    manager.setFocusedKey(focusedKey);
    const refEl = ref();
    if (refEl && focusedKey == null && !access(mergedProps.shouldUseVirtualFocus)) {
      focusWithoutScrolling(refEl);
    }
  };
  onMount(() => {
    if (mergedProps.deferAutoFocus) {
      setTimeout(tryAutoFocus, 0);
    } else {
      tryAutoFocus();
    }
  });
  createEffect(on([finalScrollRef, () => access(mergedProps.isVirtualized), () => access(mergedProps.selectionManager).focusedKey()], (newValue) => {
    var _a;
    const [scrollEl, isVirtualized, focusedKey] = newValue;
    if (isVirtualized) {
      focusedKey && ((_a = mergedProps.scrollToKey) == null ? void 0 : _a.call(mergedProps, focusedKey));
    } else {
      if (focusedKey && scrollEl) {
        const element = scrollEl.querySelector(`[data-key="${focusedKey}"]`);
        if (element) {
          scrollIntoView(scrollEl, element);
        }
      }
    }
  }));
  const tabIndex = createMemo(() => {
    if (access(mergedProps.shouldUseVirtualFocus)) {
      return void 0;
    }
    return access(mergedProps.selectionManager).focusedKey() == null ? 0 : -1;
  });
  return {
    tabIndex,
    onKeyDown,
    onMouseDown,
    onFocusIn,
    onFocusOut
  };
}
function createSelectableItem(props, ref) {
  const manager = () => access(props.selectionManager);
  const key = () => access(props.key);
  const shouldUseVirtualFocus = () => access(props.shouldUseVirtualFocus);
  const onSelect = (e) => {
    if (manager().selectionMode() === "none") {
      return;
    }
    if (manager().selectionMode() === "single") {
      if (manager().isSelected(key()) && !manager().disallowEmptySelection()) {
        manager().toggleSelection(key());
      } else {
        manager().replaceSelection(key());
      }
    } else if (e == null ? void 0 : e.shiftKey) {
      manager().extendSelection(key());
    } else if (manager().selectionBehavior() === "toggle" || isCtrlKeyPressed(e) || "pointerType" in e && e.pointerType === "touch") {
      manager().toggleSelection(key());
    } else {
      manager().replaceSelection(key());
    }
  };
  const isSelected = () => manager().isSelected(key());
  const isDisabled = () => access(props.disabled) || manager().isDisabled(key());
  const allowsSelection = () => !isDisabled() && manager().canSelectItem(key());
  let pointerDownType = null;
  const onPointerDown = (e) => {
    if (!allowsSelection()) {
      return;
    }
    pointerDownType = e.pointerType;
    if (e.pointerType === "mouse" && e.button === 0 && !access(props.shouldSelectOnPressUp)) {
      onSelect(e);
    }
  };
  const onPointerUp = (e) => {
    if (!allowsSelection()) {
      return;
    }
    if (e.pointerType === "mouse" && e.button === 0 && access(props.shouldSelectOnPressUp) && access(props.allowsDifferentPressOrigin)) {
      onSelect(e);
    }
  };
  const onClick = (e) => {
    if (!allowsSelection()) {
      return;
    }
    if (access(props.shouldSelectOnPressUp) && !access(props.allowsDifferentPressOrigin) || pointerDownType !== "mouse") {
      onSelect(e);
    }
  };
  const onKeyDown = (e) => {
    if (!allowsSelection() || !["Enter", " "].includes(e.key)) {
      return;
    }
    if (isNonContiguousSelectionModifier(e)) {
      manager().toggleSelection(key());
    } else {
      onSelect(e);
    }
  };
  const onMouseDown = (e) => {
    if (isDisabled()) {
      e.preventDefault();
    }
  };
  const onFocus = (e) => {
    const refEl = ref();
    if (shouldUseVirtualFocus() || isDisabled() || !refEl) {
      return;
    }
    if (e.target === refEl) {
      manager().setFocusedKey(key());
    }
  };
  const tabIndex = createMemo(() => {
    if (shouldUseVirtualFocus() || isDisabled()) {
      return void 0;
    }
    return key() === manager().focusedKey() ? 0 : -1;
  });
  const dataKey = createMemo(() => {
    return access(props.virtualized) ? void 0 : key();
  });
  createEffect(on([ref, key, shouldUseVirtualFocus, () => manager().focusedKey(), () => manager().isFocused()], ([refEl, key2, shouldUseVirtualFocus2, focusedKey, isFocused]) => {
    if (refEl && key2 === focusedKey && isFocused && !shouldUseVirtualFocus2 && document.activeElement !== refEl) {
      if (props.focus) {
        props.focus();
      } else {
        focusWithoutScrolling(refEl);
      }
    }
  }));
  return {
    isSelected,
    isDisabled,
    allowsSelection,
    tabIndex,
    dataKey,
    onPointerDown,
    onPointerUp,
    onClick,
    onKeyDown,
    onMouseDown,
    onFocus
  };
}
var SelectionManager = class {
  constructor(collection, state) {
    __publicField(this, "collection");
    __publicField(this, "state");
    this.collection = collection;
    this.state = state;
  }
  /** The type of selection that is allowed in the collection. */
  selectionMode() {
    return this.state.selectionMode();
  }
  /** Whether the collection allows empty selection. */
  disallowEmptySelection() {
    return this.state.disallowEmptySelection();
  }
  /** The selection behavior for the collection. */
  selectionBehavior() {
    return this.state.selectionBehavior();
  }
  /** Sets the selection behavior for the collection. */
  setSelectionBehavior(selectionBehavior) {
    this.state.setSelectionBehavior(selectionBehavior);
  }
  /** Whether the collection is currently focused. */
  isFocused() {
    return this.state.isFocused();
  }
  /** Sets whether the collection is focused. */
  setFocused(isFocused) {
    this.state.setFocused(isFocused);
  }
  /** The current focused key in the collection. */
  focusedKey() {
    return this.state.focusedKey();
  }
  /** Sets the focused key. */
  setFocusedKey(key) {
    if (key == null || this.collection().getItem(key)) {
      this.state.setFocusedKey(key);
    }
  }
  /** The currently selected keys in the collection. */
  selectedKeys() {
    return this.state.selectedKeys();
  }
  /** Returns whether a key is selected. */
  isSelected(key) {
    if (this.state.selectionMode() === "none") {
      return false;
    }
    const retrievedKey = this.getKey(key);
    if (retrievedKey == null) {
      return false;
    }
    return this.state.selectedKeys().has(retrievedKey);
  }
  /** Whether the selection is empty. */
  isEmpty() {
    return this.state.selectedKeys().size === 0;
  }
  /** Whether all items in the collection are selected. */
  isSelectAll() {
    if (this.isEmpty()) {
      return false;
    }
    const selectedKeys = this.state.selectedKeys();
    return this.getAllSelectableKeys().every((k) => selectedKeys.has(k));
  }
  firstSelectedKey() {
    let first;
    for (const key of this.state.selectedKeys()) {
      const item = this.collection().getItem(key);
      const isItemBeforeFirst = (item == null ? void 0 : item.index) != null && (first == null ? void 0 : first.index) != null && item.index < first.index;
      if (!first || isItemBeforeFirst) {
        first = item;
      }
    }
    return first == null ? void 0 : first.key;
  }
  lastSelectedKey() {
    let last;
    for (const key of this.state.selectedKeys()) {
      const item = this.collection().getItem(key);
      const isItemAfterLast = (item == null ? void 0 : item.index) != null && (last == null ? void 0 : last.index) != null && item.index > last.index;
      if (!last || isItemAfterLast) {
        last = item;
      }
    }
    return last == null ? void 0 : last.key;
  }
  /** Extends the selection to the given key. */
  extendSelection(toKey) {
    if (this.selectionMode() === "none") {
      return;
    }
    if (this.selectionMode() === "single") {
      this.replaceSelection(toKey);
      return;
    }
    const retrievedToKey = this.getKey(toKey);
    if (retrievedToKey == null) {
      return;
    }
    const selectedKeys = this.state.selectedKeys();
    const anchorKey = selectedKeys.anchorKey || retrievedToKey;
    const selection = new Selection(selectedKeys, anchorKey, retrievedToKey);
    for (const key of this.getKeyRange(anchorKey, selectedKeys.currentKey || retrievedToKey)) {
      selection.delete(key);
    }
    for (const key of this.getKeyRange(retrievedToKey, anchorKey)) {
      if (this.canSelectItem(key)) {
        selection.add(key);
      }
    }
    this.state.setSelectedKeys(selection);
  }
  getKeyRange(from, to) {
    const fromItem = this.collection().getItem(from);
    const toItem = this.collection().getItem(to);
    if (fromItem && toItem) {
      if (fromItem.index != null && toItem.index != null && fromItem.index <= toItem.index) {
        return this.getKeyRangeInternal(from, to);
      }
      return this.getKeyRangeInternal(to, from);
    }
    return [];
  }
  getKeyRangeInternal(from, to) {
    const keys = [];
    let key = from;
    while (key != null) {
      const item = this.collection().getItem(key);
      if (item && item.type === "item") {
        keys.push(key);
      }
      if (key === to) {
        return keys;
      }
      key = this.collection().getKeyAfter(key);
    }
    return [];
  }
  getKey(key) {
    const item = this.collection().getItem(key);
    if (!item) {
      return key;
    }
    if (!item || item.type !== "item") {
      return null;
    }
    return item.key;
  }
  /** Toggles whether the given key is selected. */
  toggleSelection(key) {
    if (this.selectionMode() === "none") {
      return;
    }
    if (this.selectionMode() === "single" && !this.isSelected(key)) {
      this.replaceSelection(key);
      return;
    }
    const retrievedKey = this.getKey(key);
    if (retrievedKey == null) {
      return;
    }
    const keys = new Selection(this.state.selectedKeys());
    if (keys.has(retrievedKey)) {
      keys.delete(retrievedKey);
    } else if (this.canSelectItem(retrievedKey)) {
      keys.add(retrievedKey);
      keys.anchorKey = retrievedKey;
      keys.currentKey = retrievedKey;
    }
    if (this.disallowEmptySelection() && keys.size === 0) {
      return;
    }
    this.state.setSelectedKeys(keys);
  }
  /** Replaces the selection with only the given key. */
  replaceSelection(key) {
    if (this.selectionMode() === "none") {
      return;
    }
    const retrievedKey = this.getKey(key);
    if (retrievedKey == null) {
      return;
    }
    const selection = this.canSelectItem(retrievedKey) ? new Selection([retrievedKey], retrievedKey, retrievedKey) : new Selection();
    this.state.setSelectedKeys(selection);
  }
  /** Replaces the selection with the given keys. */
  setSelectedKeys(keys) {
    if (this.selectionMode() === "none") {
      return;
    }
    const selection = new Selection();
    for (const key of keys) {
      const retrievedKey = this.getKey(key);
      if (retrievedKey != null) {
        selection.add(retrievedKey);
        if (this.selectionMode() === "single") {
          break;
        }
      }
    }
    this.state.setSelectedKeys(selection);
  }
  /** Selects all items in the collection. */
  selectAll() {
    if (this.selectionMode() === "multiple") {
      this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()));
    }
  }
  /**
   * Removes all keys from the selection.
   */
  clearSelection() {
    const selectedKeys = this.state.selectedKeys();
    if (!this.disallowEmptySelection() && selectedKeys.size > 0) {
      this.state.setSelectedKeys(new Selection());
    }
  }
  /**
   * Toggles between select all and an empty selection.
   */
  toggleSelectAll() {
    if (this.isSelectAll()) {
      this.clearSelection();
    } else {
      this.selectAll();
    }
  }
  select(key, e) {
    if (this.selectionMode() === "none") {
      return;
    }
    if (this.selectionMode() === "single") {
      if (this.isSelected(key) && !this.disallowEmptySelection()) {
        this.toggleSelection(key);
      } else {
        this.replaceSelection(key);
      }
    } else if (this.selectionBehavior() === "toggle" || e && e.pointerType === "touch") {
      this.toggleSelection(key);
    } else {
      this.replaceSelection(key);
    }
  }
  /** Returns whether the current selection is equal to the given selection. */
  isSelectionEqual(selection) {
    if (selection === this.state.selectedKeys()) {
      return true;
    }
    const selectedKeys = this.selectedKeys();
    if (selection.size !== selectedKeys.size) {
      return false;
    }
    for (const key of selection) {
      if (!selectedKeys.has(key)) {
        return false;
      }
    }
    for (const key of selectedKeys) {
      if (!selection.has(key)) {
        return false;
      }
    }
    return true;
  }
  canSelectItem(key) {
    if (this.state.selectionMode() === "none") {
      return false;
    }
    const item = this.collection().getItem(key);
    return item != null && !item.disabled;
  }
  isDisabled(key) {
    const item = this.collection().getItem(key);
    return !item || item.disabled;
  }
  getAllSelectableKeys() {
    const keys = [];
    const addKeys = (key) => {
      while (key != null) {
        if (this.canSelectItem(key)) {
          const item = this.collection().getItem(key);
          if (!item) {
            continue;
          }
          if (item.type === "item") {
            keys.push(key);
          }
        }
        key = this.collection().getKeyAfter(key);
      }
    };
    addKeys(this.collection().getFirstKey());
    return keys;
  }
};
var ListCollection = class {
  constructor(nodes) {
    __publicField(this, "keyMap", /* @__PURE__ */ new Map());
    __publicField(this, "iterable");
    __publicField(this, "firstKey");
    __publicField(this, "lastKey");
    this.iterable = nodes;
    for (const node of nodes) {
      this.keyMap.set(node.key, node);
    }
    if (this.keyMap.size === 0) {
      return;
    }
    let last;
    let index = 0;
    for (const [key, node] of this.keyMap) {
      if (last) {
        last.nextKey = key;
        node.prevKey = last.key;
      } else {
        this.firstKey = key;
        node.prevKey = void 0;
      }
      if (node.type === "item") {
        node.index = index++;
      }
      last = node;
      last.nextKey = void 0;
    }
    this.lastKey = last.key;
  }
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  getSize() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(key) {
    var _a;
    return (_a = this.keyMap.get(key)) == null ? void 0 : _a.prevKey;
  }
  getKeyAfter(key) {
    var _a;
    return (_a = this.keyMap.get(key)) == null ? void 0 : _a.nextKey;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(key) {
    return this.keyMap.get(key);
  }
  at(idx) {
    const keys = [...this.getKeys()];
    return this.getItem(keys[idx]);
  }
};
function createListState(props) {
  const selectionState = createMultipleSelectionState(props);
  const factory = (nodes) => {
    return props.filter ? new ListCollection(props.filter(nodes)) : new ListCollection(nodes);
  };
  const collection = createCollection({
    dataSource: () => access(props.dataSource),
    getKey: () => access(props.getKey),
    getTextValue: () => access(props.getTextValue),
    getDisabled: () => access(props.getDisabled),
    getSectionChildren: () => access(props.getSectionChildren),
    factory
  }, [() => props.filter]);
  const selectionManager = new SelectionManager(collection, selectionState);
  createComputed(() => {
    const focusedKey = selectionState.focusedKey();
    if (focusedKey != null && !collection().getItem(focusedKey)) {
      selectionState.setFocusedKey(void 0);
    }
  });
  return {
    collection,
    selectionManager: () => selectionManager
  };
}
var DomCollectionContext = createContext();
function useOptionalDomCollectionContext() {
  return useContext(DomCollectionContext);
}
function useDomCollectionContext() {
  const context = useOptionalDomCollectionContext();
  if (context === void 0) {
    throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");
  }
  return context;
}
function isElementPreceding(a, b) {
  return Boolean(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
function findDOMIndex(items2, item) {
  var _a;
  const itemEl = item.ref();
  if (!itemEl) {
    return -1;
  }
  let length = items2.length;
  if (!length) {
    return -1;
  }
  while (length--) {
    const currentItemEl = (_a = items2[length]) == null ? void 0 : _a.ref();
    if (!currentItemEl) {
      continue;
    }
    if (isElementPreceding(currentItemEl, itemEl)) {
      return length + 1;
    }
  }
  return 0;
}
function sortBasedOnDOMPosition(items2) {
  const pairs = items2.map((item, index) => [index, item]);
  let isOrderDifferent = false;
  pairs.sort(([indexA, a], [indexB, b]) => {
    const elementA = a.ref();
    const elementB = b.ref();
    if (elementA === elementB) {
      return 0;
    }
    if (!elementA || !elementB) {
      return 0;
    }
    if (isElementPreceding(elementA, elementB)) {
      if (indexA > indexB) {
        isOrderDifferent = true;
      }
      return -1;
    }
    if (indexA < indexB) {
      isOrderDifferent = true;
    }
    return 1;
  });
  if (isOrderDifferent) {
    return pairs.map(([_, item]) => item);
  }
  return items2;
}
function setItemsBasedOnDOMPosition(items2, setItems) {
  const sortedItems = sortBasedOnDOMPosition(items2);
  if (items2 !== sortedItems) {
    setItems(sortedItems);
  }
}
function getCommonParent(items2) {
  var _a, _b;
  const firstItem = items2[0];
  const lastItemEl = (_a = items2[items2.length - 1]) == null ? void 0 : _a.ref();
  let parentEl = (_b = firstItem == null ? void 0 : firstItem.ref()) == null ? void 0 : _b.parentElement;
  while (parentEl) {
    if (lastItemEl && parentEl.contains(lastItemEl)) {
      return parentEl;
    }
    parentEl = parentEl.parentElement;
  }
  return getDocument(parentEl).body;
}
function createTimeoutObserver(items2, setItems) {
  createEffect(() => {
    const timeout = setTimeout(() => {
      setItemsBasedOnDOMPosition(items2(), setItems);
    });
    onCleanup(() => clearTimeout(timeout));
  });
}
function createSortBasedOnDOMPosition(items2, setItems) {
  if (typeof IntersectionObserver !== "function") {
    createTimeoutObserver(items2, setItems);
    return;
  }
  let previousItems = [];
  createEffect(() => {
    const callback = () => {
      const hasPreviousItems = !!previousItems.length;
      previousItems = items2();
      if (!hasPreviousItems) {
        return;
      }
      setItemsBasedOnDOMPosition(items2(), setItems);
    };
    const root = getCommonParent(items2());
    const observer = new IntersectionObserver(callback, {
      root
    });
    for (const item of items2()) {
      const itemEl = item.ref();
      if (itemEl) {
        observer.observe(itemEl);
      }
    }
    onCleanup(() => observer.disconnect());
  });
}
function createDomCollection(props = {}) {
  const [items2, setItems] = createControllableArraySignal({
    value: () => access(props.items),
    onChange: (value) => {
      var _a;
      return (_a = props.onItemsChange) == null ? void 0 : _a.call(props, value);
    }
  });
  createSortBasedOnDOMPosition(items2, setItems);
  const registerItem = (item) => {
    setItems((prevItems) => {
      const index = findDOMIndex(prevItems, item);
      return addItemToArray(prevItems, item, index);
    });
    return () => {
      setItems((prevItems) => {
        const nextItems = prevItems.filter((prevItem) => prevItem.ref() !== item.ref());
        if (prevItems.length === nextItems.length) {
          return prevItems;
        }
        return nextItems;
      });
    };
  };
  const DomCollectionProvider = (props2) => {
    return createComponent$1(DomCollectionContext.Provider, {
      value: {
        registerItem
      },
      get children() {
        return props2.children;
      }
    });
  };
  return {
    DomCollectionProvider
  };
}
function createDomCollectionItem(props) {
  const context = useDomCollectionContext();
  const mergedProps = mergeDefaultProps({
    shouldRegisterItem: true
  }, props);
  createEffect(() => {
    if (!mergedProps.shouldRegisterItem) {
      return;
    }
    const unregister = context.registerItem(mergedProps.getItem());
    onCleanup(unregister);
  });
}
var _tmpl$$a = ["<svg", ' display="block" viewBox="', '" style="transform:scale(1.02)"><g', '><path fill="none"', '></path><path stroke="none"', "></path></g></svg>"];
var PopperContext = createContext();
function usePopperContext() {
  const context = useContext(PopperContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");
  }
  return context;
}
var DEFAULT_SIZE = 30;
var HALF_DEFAULT_SIZE = DEFAULT_SIZE / 2;
var ROTATION_DEG = {
  top: 180,
  right: -90,
  bottom: 0,
  left: 90
};
var ARROW_PATH = "M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z";
function PopperArrow(props) {
  const context = usePopperContext();
  const mergedProps = mergeDefaultProps({
    size: DEFAULT_SIZE
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "style", "size"]);
  const dir = () => context.currentPlacement().split("-")[0];
  const contentStyle = createComputedStyle(context.contentRef);
  const fill = () => {
    var _a;
    return ((_a = contentStyle()) == null ? void 0 : _a.getPropertyValue("background-color")) || "none";
  };
  const stroke = () => {
    var _a;
    return ((_a = contentStyle()) == null ? void 0 : _a.getPropertyValue(`border-${dir()}-color`)) || "none";
  };
  const borderWidth = () => {
    var _a;
    return ((_a = contentStyle()) == null ? void 0 : _a.getPropertyValue(`border-${dir()}-width`)) || "0px";
  };
  const strokeWidth = () => {
    return Number.parseInt(borderWidth()) * 2 * (DEFAULT_SIZE / local.size);
  };
  const rotate = () => {
    return `rotate(${ROTATION_DEG[dir()]} ${HALF_DEFAULT_SIZE} ${HALF_DEFAULT_SIZE}) translate(0 2)`;
  };
  return createComponent(Polymorphic, mergeProps$1({
    as: "div",
    "aria-hidden": "true",
    get style() {
      return combineStyle({
        // server side rendering
        position: "absolute",
        "font-size": `${local.size}px`,
        width: "1em",
        height: "1em",
        "pointer-events": "none",
        fill: fill(),
        stroke: stroke(),
        "stroke-width": strokeWidth()
      }, local.style);
    }
  }, others, {
    get children() {
      return ssr(_tmpl$$a, ssrHydrationKey(), `0 0 ${escape(DEFAULT_SIZE, true)} ${escape(DEFAULT_SIZE, true)}`, ssrAttribute("transform", escape(rotate(), true), false), ssrAttribute("d", escape(ARROW_PATH, true), false), ssrAttribute("d", escape(ARROW_PATH, true), false));
    }
  }));
}
function createComputedStyle(element) {
  const [style, setStyle] = createSignal();
  createEffect(() => {
    const el = element();
    el && setStyle(getWindow(el).getComputedStyle(el));
  });
  return style;
}
function PopperPositioner(props) {
  usePopperContext();
  const [local, others] = splitProps(props, ["ref", "style"]);
  return createComponent(Polymorphic, mergeProps$1({
    as: "div",
    "data-popper-positioner": "",
    get style() {
      return combineStyle({
        position: "absolute",
        top: 0,
        left: 0,
        "min-width": "max-content"
      }, local.style);
    }
  }, others));
}
function createDOMRect(anchorRect) {
  const {
    x = 0,
    y = 0,
    width = 0,
    height = 0
  } = anchorRect != null ? anchorRect : {};
  if (typeof DOMRect === "function") {
    return new DOMRect(x, y, width, height);
  }
  const rect = {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x
  };
  return {
    ...rect,
    toJSON: () => rect
  };
}
function getAnchorElement(anchor, getAnchorRect) {
  const contextElement = anchor;
  return {
    contextElement,
    getBoundingClientRect: () => {
      const anchorRect = getAnchorRect(anchor);
      if (anchorRect) {
        return createDOMRect(anchorRect);
      }
      if (anchor) {
        return anchor.getBoundingClientRect();
      }
      return createDOMRect();
    }
  };
}
function isValidPlacement(flip2) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(flip2);
}
var REVERSE_BASE_PLACEMENT = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
function getTransformOrigin(placement, readingDirection) {
  const [basePlacement, alignment] = placement.split("-");
  const reversePlacement = REVERSE_BASE_PLACEMENT[basePlacement];
  if (!alignment) {
    return `${reversePlacement} center`;
  }
  if (basePlacement === "left" || basePlacement === "right") {
    return `${reversePlacement} ${alignment === "start" ? "top" : "bottom"}`;
  }
  if (alignment === "start") {
    return `${reversePlacement} ${readingDirection === "rtl" ? "right" : "left"}`;
  }
  return `${reversePlacement} ${readingDirection === "rtl" ? "left" : "right"}`;
}
function PopperRoot(props) {
  const mergedProps = mergeDefaultProps({
    getAnchorRect: (anchor) => anchor == null ? void 0 : anchor.getBoundingClientRect(),
    placement: "bottom",
    gutter: 0,
    shift: 0,
    flip: true,
    slide: true,
    overlap: false,
    sameWidth: false,
    fitViewport: false,
    hideWhenDetached: false,
    detachedPadding: 0,
    arrowPadding: 4,
    overflowPadding: 8
  }, props);
  const [positionerRef, setPositionerRef] = createSignal();
  const [arrowRef, setArrowRef] = createSignal();
  const [currentPlacement, setCurrentPlacement] = createSignal(mergedProps.placement);
  const anchorRef = () => {
    var _a;
    return getAnchorElement((_a = mergedProps.anchorRef) == null ? void 0 : _a.call(mergedProps), mergedProps.getAnchorRect);
  };
  const {
    direction
  } = useLocale();
  async function updatePosition() {
    var _a2;
    var _a, _b;
    const referenceEl = anchorRef();
    const floatingEl = positionerRef();
    const arrowEl = arrowRef();
    if (!referenceEl || !floatingEl) {
      return;
    }
    const arrowOffset = ((arrowEl == null ? void 0 : arrowEl.clientHeight) || 0) / 2;
    const finalGutter = typeof mergedProps.gutter === "number" ? mergedProps.gutter + arrowOffset : (_a2 = mergedProps.gutter) != null ? _a2 : arrowOffset;
    floatingEl.style.setProperty("--kb-popper-content-overflow-padding", `${mergedProps.overflowPadding}px`);
    referenceEl.getBoundingClientRect();
    const middleware = [
      // https://floating-ui.com/docs/offset
      offset(({
        placement
      }) => {
        const hasAlignment = !!placement.split("-")[1];
        return {
          mainAxis: finalGutter,
          crossAxis: !hasAlignment ? mergedProps.shift : void 0,
          alignmentAxis: mergedProps.shift
        };
      })
    ];
    if (mergedProps.flip !== false) {
      const fallbackPlacements = typeof mergedProps.flip === "string" ? mergedProps.flip.split(" ") : void 0;
      if (fallbackPlacements !== void 0 && !fallbackPlacements.every(isValidPlacement)) {
        throw new Error("`flip` expects a spaced-delimited list of placements");
      }
      middleware.push(flip({
        padding: mergedProps.overflowPadding,
        fallbackPlacements
      }));
    }
    if (mergedProps.slide || mergedProps.overlap) {
      middleware.push(shift({
        mainAxis: mergedProps.slide,
        crossAxis: mergedProps.overlap,
        padding: mergedProps.overflowPadding
      }));
    }
    middleware.push(size({
      padding: mergedProps.overflowPadding,
      apply({
        availableWidth,
        availableHeight,
        rects
      }) {
        const referenceWidth = Math.round(rects.reference.width);
        availableWidth = Math.floor(availableWidth);
        availableHeight = Math.floor(availableHeight);
        floatingEl.style.setProperty("--kb-popper-anchor-width", `${referenceWidth}px`);
        floatingEl.style.setProperty("--kb-popper-content-available-width", `${availableWidth}px`);
        floatingEl.style.setProperty("--kb-popper-content-available-height", `${availableHeight}px`);
        if (mergedProps.sameWidth) {
          floatingEl.style.width = `${referenceWidth}px`;
        }
        if (mergedProps.fitViewport) {
          floatingEl.style.maxWidth = `${availableWidth}px`;
          floatingEl.style.maxHeight = `${availableHeight}px`;
        }
      }
    }));
    if (mergedProps.hideWhenDetached) {
      middleware.push(hide({
        padding: mergedProps.detachedPadding
      }));
    }
    if (arrowEl) {
      middleware.push(arrow({
        element: arrowEl,
        padding: mergedProps.arrowPadding
      }));
    }
    const pos = await computePosition(referenceEl, floatingEl, {
      placement: mergedProps.placement,
      strategy: "absolute",
      middleware,
      platform: {
        ...platform,
        isRTL: () => direction() === "rtl"
      }
    });
    setCurrentPlacement(pos.placement);
    (_a = mergedProps.onCurrentPlacementChange) == null ? void 0 : _a.call(mergedProps, pos.placement);
    if (!floatingEl) {
      return;
    }
    floatingEl.style.setProperty("--kb-popper-content-transform-origin", getTransformOrigin(pos.placement, direction()));
    const x = Math.round(pos.x);
    const y = Math.round(pos.y);
    let visibility;
    if (mergedProps.hideWhenDetached) {
      visibility = ((_b = pos.middlewareData.hide) == null ? void 0 : _b.referenceHidden) ? "hidden" : "visible";
    }
    Object.assign(floatingEl.style, {
      top: "0",
      left: "0",
      transform: `translate3d(${x}px, ${y}px, 0)`,
      visibility
    });
    if (arrowEl && pos.middlewareData.arrow) {
      const {
        x: arrowX,
        y: arrowY
      } = pos.middlewareData.arrow;
      const dir = pos.placement.split("-")[0];
      Object.assign(arrowEl.style, {
        left: arrowX != null ? `${arrowX}px` : "",
        top: arrowY != null ? `${arrowY}px` : "",
        [dir]: "100%"
      });
    }
  }
  createEffect(() => {
    const referenceEl = anchorRef();
    const floatingEl = positionerRef();
    if (!referenceEl || !floatingEl) {
      return;
    }
    const cleanupAutoUpdate = autoUpdate(referenceEl, floatingEl, updatePosition, {
      // JSDOM doesn't support ResizeObserver
      elementResize: typeof ResizeObserver === "function"
    });
    onCleanup(cleanupAutoUpdate);
  });
  createEffect(() => {
    var _a;
    const positioner = positionerRef();
    const content = (_a = mergedProps.contentRef) == null ? void 0 : _a.call(mergedProps);
    if (!positioner || !content) {
      return;
    }
    queueMicrotask(() => {
      positioner.style.zIndex = getComputedStyle(content).zIndex;
    });
  });
  const context = {
    currentPlacement,
    contentRef: () => {
      var _a;
      return (_a = mergedProps.contentRef) == null ? void 0 : _a.call(mergedProps);
    },
    setPositionerRef,
    setArrowRef
  };
  return createComponent(PopperContext.Provider, {
    value: context,
    get children() {
      return mergedProps.children;
    }
  });
}
var Popper = Object.assign(PopperRoot, {
  Arrow: PopperArrow,
  Context: PopperContext,
  usePopperContext,
  Positioner: PopperPositioner
});
var DATA_TOP_LAYER_ATTR = "data-kb-top-layer";
var originalBodyPointerEvents;
var hasDisabledBodyPointerEvents = false;
var layers = [];
function indexOf(node) {
  return layers.findIndex((layer) => layer.node === node);
}
function find(node) {
  return layers[indexOf(node)];
}
function isTopMostLayer(node) {
  return layers[layers.length - 1].node === node;
}
function getPointerBlockingLayers() {
  return layers.filter((layer) => layer.isPointerBlocking);
}
function getTopMostPointerBlockingLayer() {
  return [...getPointerBlockingLayers()].slice(-1)[0];
}
function hasPointerBlockingLayer() {
  return getPointerBlockingLayers().length > 0;
}
function isBelowPointerBlockingLayer(node) {
  var _a;
  const highestBlockingIndex = indexOf((_a = getTopMostPointerBlockingLayer()) == null ? void 0 : _a.node);
  return indexOf(node) < highestBlockingIndex;
}
function addLayer(layer) {
  layers.push(layer);
}
function removeLayer(node) {
  const index = indexOf(node);
  if (index < 0) {
    return;
  }
  layers.splice(index, 1);
}
function assignPointerEventToLayers() {
  for (const {
    node
  } of layers) {
    node.style.pointerEvents = isBelowPointerBlockingLayer(node) ? "none" : "auto";
  }
}
function disableBodyPointerEvents(node) {
  if (hasPointerBlockingLayer() && !hasDisabledBodyPointerEvents) {
    const ownerDocument = getDocument(node);
    originalBodyPointerEvents = document.body.style.pointerEvents;
    ownerDocument.body.style.pointerEvents = "none";
    hasDisabledBodyPointerEvents = true;
  }
}
function restoreBodyPointerEvents(node) {
  if (hasPointerBlockingLayer()) {
    return;
  }
  const ownerDocument = getDocument(node);
  ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
  if (ownerDocument.body.style.length === 0) {
    ownerDocument.body.removeAttribute("style");
  }
  hasDisabledBodyPointerEvents = false;
}
var layerStack = {
  layers,
  isTopMostLayer,
  hasPointerBlockingLayer,
  isBelowPointerBlockingLayer,
  addLayer,
  removeLayer,
  indexOf,
  find,
  assignPointerEventToLayers,
  disableBodyPointerEvents,
  restoreBodyPointerEvents
};
var POINTER_DOWN_OUTSIDE_EVENT = "interactOutside.pointerDownOutside";
var FOCUS_OUTSIDE_EVENT = "interactOutside.focusOutside";
function createInteractOutside(props, ref) {
  let pointerDownTimeoutId;
  let clickHandler = noop;
  const ownerDocument = () => getDocument(ref());
  const onPointerDownOutside = (e) => {
    var _a;
    return (_a = props.onPointerDownOutside) == null ? void 0 : _a.call(props, e);
  };
  const onFocusOutside = (e) => {
    var _a;
    return (_a = props.onFocusOutside) == null ? void 0 : _a.call(props, e);
  };
  const onInteractOutside = (e) => {
    var _a;
    return (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, e);
  };
  const isEventOutside = (e) => {
    var _a;
    const target = e.target;
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    if (target.closest(`[${DATA_TOP_LAYER_ATTR}]`)) {
      return false;
    }
    if (!contains$1(ownerDocument(), target)) {
      return false;
    }
    if (contains$1(ref(), target)) {
      return false;
    }
    return !((_a = props.shouldExcludeElement) == null ? void 0 : _a.call(props, target));
  };
  const onPointerDown = (e) => {
    function handler() {
      const container = ref();
      const target = e.target;
      if (!container || !target || !isEventOutside(e)) {
        return;
      }
      const handler2 = composeEventHandlers([onPointerDownOutside, onInteractOutside]);
      target.addEventListener(POINTER_DOWN_OUTSIDE_EVENT, handler2, {
        once: true
      });
      const pointerDownOutsideEvent = new CustomEvent(POINTER_DOWN_OUTSIDE_EVENT, {
        bubbles: false,
        cancelable: true,
        detail: {
          originalEvent: e,
          isContextMenu: e.button === 2 || isCtrlKey(e) && e.button === 0
        }
      });
      target.dispatchEvent(pointerDownOutsideEvent);
    }
    if (e.pointerType === "touch") {
      ownerDocument().removeEventListener("click", handler);
      clickHandler = handler;
      ownerDocument().addEventListener("click", handler, {
        once: true
      });
    } else {
      handler();
    }
  };
  const onFocusIn = (e) => {
    const container = ref();
    const target = e.target;
    if (!container || !target || !isEventOutside(e)) {
      return;
    }
    const handler = composeEventHandlers([onFocusOutside, onInteractOutside]);
    target.addEventListener(FOCUS_OUTSIDE_EVENT, handler, {
      once: true
    });
    const focusOutsideEvent = new CustomEvent(FOCUS_OUTSIDE_EVENT, {
      bubbles: false,
      cancelable: true,
      detail: {
        originalEvent: e,
        isContextMenu: false
      }
    });
    target.dispatchEvent(focusOutsideEvent);
  };
  createEffect(() => {
    if (isServer) {
      return;
    }
    if (access(props.isDisabled)) {
      return;
    }
    pointerDownTimeoutId = window.setTimeout(() => {
      ownerDocument().addEventListener("pointerdown", onPointerDown, true);
    }, 0);
    ownerDocument().addEventListener("focusin", onFocusIn, true);
    onCleanup(() => {
      window.clearTimeout(pointerDownTimeoutId);
      ownerDocument().removeEventListener("click", clickHandler);
      ownerDocument().removeEventListener("pointerdown", onPointerDown, true);
      ownerDocument().removeEventListener("focusin", onFocusIn, true);
    });
  });
}
function createEscapeKeyDown(props) {
  const handleKeyDown = (event) => {
    if (event.key === EventKey.Escape) ;
  };
  createEffect(() => {
    var _a2;
    var _a;
    if (isServer) {
      return;
    }
    if (access(props.isDisabled)) {
      return;
    }
    const document2 = (_a2 = (_a = props.ownerDocument) == null ? void 0 : _a.call(props)) != null ? _a2 : getDocument();
    document2.addEventListener("keydown", handleKeyDown);
    onCleanup(() => {
      document2.removeEventListener("keydown", handleKeyDown);
    });
  });
}
var DismissableLayerContext = createContext();
function useOptionalDismissableLayerContext() {
  return useContext(DismissableLayerContext);
}
function DismissableLayer(props) {
  let ref;
  const parentContext = useOptionalDismissableLayerContext();
  const [local, others] = splitProps(props, ["ref", "disableOutsidePointerEvents", "excludedElements", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss", "bypassTopMostLayerCheck"]);
  const nestedLayers = /* @__PURE__ */ new Set([]);
  const registerNestedLayer = (element) => {
    nestedLayers.add(element);
    const parentUnregister = parentContext == null ? void 0 : parentContext.registerNestedLayer(element);
    return () => {
      nestedLayers.delete(element);
      parentUnregister == null ? void 0 : parentUnregister();
    };
  };
  const shouldExcludeElement = (element) => {
    {
      return false;
    }
  };
  const onPointerDownOutside = (e) => {
    {
      return;
    }
  };
  const onFocusOutside = (e) => {
    var _a, _b, _c;
    (_a = local.onFocusOutside) == null ? void 0 : _a.call(local, e);
    (_b = local.onInteractOutside) == null ? void 0 : _b.call(local, e);
    if (!e.defaultPrevented) {
      (_c = local.onDismiss) == null ? void 0 : _c.call(local);
    }
  };
  createInteractOutside({
    shouldExcludeElement,
    onPointerDownOutside,
    onFocusOutside
  }, () => ref);
  createEscapeKeyDown({
    ownerDocument: () => getDocument(ref),
    onEscapeKeyDown: (e) => {
      {
        return;
      }
    }
  });
  onMount(() => {
    {
      return;
    }
  });
  createEffect(on([() => ref, () => local.disableOutsidePointerEvents], ([ref2, disableOutsidePointerEvents]) => {
    if (!ref2) {
      return;
    }
    const layer = layerStack.find(ref2);
    if (layer && layer.isPointerBlocking !== disableOutsidePointerEvents) {
      layer.isPointerBlocking = disableOutsidePointerEvents;
      layerStack.assignPointerEventToLayers();
    }
    if (disableOutsidePointerEvents) {
      layerStack.disableBodyPointerEvents(ref2);
    }
    onCleanup(() => {
      layerStack.restoreBodyPointerEvents(ref2);
    });
  }, {
    defer: true
  }));
  const context = {
    registerNestedLayer
  };
  return createComponent(DismissableLayerContext.Provider, {
    value: context,
    get children() {
      return createComponent(Polymorphic, mergeProps$1({
        as: "div"
      }, others));
    }
  });
}
function createDisclosureState(props = {}) {
  const [isOpen, setIsOpen] = createControllableBooleanSignal({
    value: () => access(props.open),
    defaultValue: () => !!access(props.defaultOpen),
    onChange: (value) => {
      var _a;
      return (_a = props.onOpenChange) == null ? void 0 : _a.call(props, value);
    }
  });
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const toggle = () => {
    isOpen() ? close() : open();
  };
  return {
    isOpen,
    setIsOpen,
    open,
    close,
    toggle
  };
}
var tooltip_exports = {};
__export(tooltip_exports, {
  Arrow: () => PopperArrow,
  Content: () => TooltipContent$1,
  Portal: () => TooltipPortal,
  Root: () => TooltipRoot,
  Tooltip: () => Tooltip$1,
  Trigger: () => TooltipTrigger$1,
  useTooltipContext: () => useTooltipContext
});
var TooltipContext = createContext();
function useTooltipContext() {
  const context = useContext(TooltipContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useTooltipContext` must be used within a `Tooltip` component");
  }
  return context;
}
function TooltipContent$1(props) {
  const context = useTooltipContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("content")
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "style"]);
  createEffect(() => onCleanup(context.registerContentId(others.id)));
  return createComponent(Show, {
    get when() {
      return context.contentPresent();
    },
    get children() {
      return createComponent(Popper.Positioner, {
        get children() {
          return createComponent(DismissableLayer, mergeProps$1({
            role: "tooltip",
            disableOutsidePointerEvents: false,
            get style() {
              return combineStyle({
                "--kb-tooltip-content-transform-origin": "var(--kb-popper-content-transform-origin)",
                position: "relative"
              }, local.style);
            },
            onFocusOutside: (e) => e.preventDefault(),
            onDismiss: () => context.hideTooltip(true)
          }, () => context.dataset(), others));
        }
      });
    }
  });
}
function TooltipPortal(props) {
  const context = useTooltipContext();
  return createComponent(Show, {
    get when() {
      return context.contentPresent();
    },
    get children() {
      return createComponent(Portal, props);
    }
  });
}
function getTooltipSafeArea(placement, anchorEl, floatingEl) {
  const basePlacement = placement.split("-")[0];
  const anchorRect = anchorEl.getBoundingClientRect();
  const floatingRect = floatingEl.getBoundingClientRect();
  const polygon = [];
  const anchorCenterX = anchorRect.left + anchorRect.width / 2;
  const anchorCenterY = anchorRect.top + anchorRect.height / 2;
  switch (basePlacement) {
    case "top":
      polygon.push([anchorRect.left, anchorCenterY]);
      polygon.push([floatingRect.left, floatingRect.bottom]);
      polygon.push([floatingRect.left, floatingRect.top]);
      polygon.push([floatingRect.right, floatingRect.top]);
      polygon.push([floatingRect.right, floatingRect.bottom]);
      polygon.push([anchorRect.right, anchorCenterY]);
      break;
    case "right":
      polygon.push([anchorCenterX, anchorRect.top]);
      polygon.push([floatingRect.left, floatingRect.top]);
      polygon.push([floatingRect.right, floatingRect.top]);
      polygon.push([floatingRect.right, floatingRect.bottom]);
      polygon.push([floatingRect.left, floatingRect.bottom]);
      polygon.push([anchorCenterX, anchorRect.bottom]);
      break;
    case "bottom":
      polygon.push([anchorRect.left, anchorCenterY]);
      polygon.push([floatingRect.left, floatingRect.top]);
      polygon.push([floatingRect.left, floatingRect.bottom]);
      polygon.push([floatingRect.right, floatingRect.bottom]);
      polygon.push([floatingRect.right, floatingRect.top]);
      polygon.push([anchorRect.right, anchorCenterY]);
      break;
    case "left":
      polygon.push([anchorCenterX, anchorRect.top]);
      polygon.push([floatingRect.right, floatingRect.top]);
      polygon.push([floatingRect.left, floatingRect.top]);
      polygon.push([floatingRect.left, floatingRect.bottom]);
      polygon.push([floatingRect.right, floatingRect.bottom]);
      polygon.push([anchorCenterX, anchorRect.bottom]);
      break;
  }
  return polygon;
}
var tooltips = {};
var tooltipsCounter = 0;
var globalWarmedUp = false;
var globalWarmUpTimeout;
var globalCoolDownTimeout;
var globalSkipDelayTimeout;
function TooltipRoot(props) {
  const defaultId = `tooltip-${createUniqueId()}`;
  const tooltipId = `${++tooltipsCounter}`;
  const mergedProps = mergeDefaultProps({
    id: defaultId,
    openDelay: 700,
    closeDelay: 300,
    skipDelayDuration: 300
  }, props);
  const [local, others] = splitProps(mergedProps, ["id", "open", "defaultOpen", "onOpenChange", "disabled", "triggerOnFocusOnly", "openDelay", "closeDelay", "skipDelayDuration", "ignoreSafeArea", "forceMount"]);
  let closeTimeoutId;
  const [contentId, setContentId] = createSignal();
  const [triggerRef, setTriggerRef] = createSignal();
  const [contentRef, setContentRef] = createSignal();
  const [currentPlacement, setCurrentPlacement] = createSignal(others.placement);
  const disclosureState = createDisclosureState({
    open: () => local.open,
    defaultOpen: () => local.defaultOpen,
    onOpenChange: (isOpen) => {
      var _a;
      return (_a = local.onOpenChange) == null ? void 0 : _a.call(local, isOpen);
    }
  });
  const {
    present: contentPresent
  } = src_default$1({
    show: () => local.forceMount || disclosureState.isOpen(),
    element: () => {
      var _a;
      return (_a = contentRef()) != null ? _a : null;
    }
  });
  const ensureTooltipEntry = () => {
    tooltips[tooltipId] = hideTooltip;
  };
  const closeOpenTooltips = () => {
    for (const hideTooltipId in tooltips) {
      if (hideTooltipId !== tooltipId) {
        tooltips[hideTooltipId](true);
        delete tooltips[hideTooltipId];
      }
    }
  };
  const hideTooltip = (immediate = false) => {
    if (isServer) {
      return;
    }
    if (immediate || local.closeDelay && local.closeDelay <= 0) {
      window.clearTimeout(closeTimeoutId);
      closeTimeoutId = void 0;
      disclosureState.close();
    } else if (!closeTimeoutId) {
      closeTimeoutId = window.setTimeout(() => {
        closeTimeoutId = void 0;
        disclosureState.close();
      }, local.closeDelay);
    }
    window.clearTimeout(globalWarmUpTimeout);
    globalWarmUpTimeout = void 0;
    if (local.skipDelayDuration && local.skipDelayDuration >= 0) {
      globalSkipDelayTimeout = window.setTimeout(() => {
        window.clearTimeout(globalSkipDelayTimeout);
        globalSkipDelayTimeout = void 0;
      }, local.skipDelayDuration);
    }
    if (globalWarmedUp) {
      window.clearTimeout(globalCoolDownTimeout);
      globalCoolDownTimeout = window.setTimeout(() => {
        delete tooltips[tooltipId];
        globalCoolDownTimeout = void 0;
        globalWarmedUp = false;
      }, local.closeDelay);
    }
  };
  const showTooltip = () => {
    if (isServer) {
      return;
    }
    clearTimeout(closeTimeoutId);
    closeTimeoutId = void 0;
    closeOpenTooltips();
    ensureTooltipEntry();
    globalWarmedUp = true;
    disclosureState.open();
    window.clearTimeout(globalWarmUpTimeout);
    globalWarmUpTimeout = void 0;
    window.clearTimeout(globalCoolDownTimeout);
    globalCoolDownTimeout = void 0;
    window.clearTimeout(globalSkipDelayTimeout);
    globalSkipDelayTimeout = void 0;
  };
  const warmupTooltip = () => {
    if (isServer) {
      return;
    }
    closeOpenTooltips();
    ensureTooltipEntry();
    if (!disclosureState.isOpen() && !globalWarmUpTimeout && !globalWarmedUp) {
      globalWarmUpTimeout = window.setTimeout(() => {
        globalWarmUpTimeout = void 0;
        globalWarmedUp = true;
        showTooltip();
      }, local.openDelay);
    } else if (!disclosureState.isOpen()) {
      showTooltip();
    }
  };
  const openTooltip = (immediate = false) => {
    if (isServer) {
      return;
    }
    if (!immediate && local.openDelay && local.openDelay > 0 && !closeTimeoutId && !globalSkipDelayTimeout) {
      warmupTooltip();
    } else {
      showTooltip();
    }
  };
  const cancelOpening = () => {
    if (isServer) {
      return;
    }
    window.clearTimeout(globalWarmUpTimeout);
    globalWarmUpTimeout = void 0;
    globalWarmedUp = false;
  };
  const cancelClosing = () => {
    if (isServer) {
      return;
    }
    window.clearTimeout(closeTimeoutId);
    closeTimeoutId = void 0;
  };
  const isTargetOnTooltip = (target) => {
    return contains$1(triggerRef(), target) || contains$1(contentRef(), target);
  };
  const getPolygonSafeArea = (placement) => {
    const triggerEl = triggerRef();
    const contentEl = contentRef();
    if (!triggerEl || !contentEl) {
      return;
    }
    return getTooltipSafeArea(placement, triggerEl, contentEl);
  };
  const onHoverOutside = (event) => {
    const target = event.target;
    if (isTargetOnTooltip(target)) {
      cancelClosing();
      return;
    }
    if (!local.ignoreSafeArea) {
      const polygon = getPolygonSafeArea(currentPlacement());
      if (polygon && isPointInPolygon(getEventPoint(event), polygon)) {
        cancelClosing();
        return;
      }
    }
    if (closeTimeoutId) {
      return;
    }
    hideTooltip();
  };
  createEffect(() => {
    if (isServer) {
      return;
    }
    if (!disclosureState.isOpen()) {
      return;
    }
    const doc = getDocument();
    doc.addEventListener("pointermove", onHoverOutside, true);
    onCleanup(() => {
      doc.removeEventListener("pointermove", onHoverOutside, true);
    });
  });
  createEffect(() => {
    const trigger = triggerRef();
    if (!trigger || !disclosureState.isOpen()) {
      return;
    }
    const handleScroll = (event) => {
      const target = event.target;
      if (contains$1(target, trigger)) {
        hideTooltip(true);
      }
    };
    const win = getWindow();
    win.addEventListener("scroll", handleScroll, {
      capture: true
    });
    onCleanup(() => {
      win.removeEventListener("scroll", handleScroll, {
        capture: true
      });
    });
  });
  onCleanup(() => {
    clearTimeout(closeTimeoutId);
    const tooltip = tooltips[tooltipId];
    if (tooltip) {
      delete tooltips[tooltipId];
    }
  });
  const dataset = createMemo(() => ({
    "data-expanded": disclosureState.isOpen() ? "" : void 0,
    "data-closed": !disclosureState.isOpen() ? "" : void 0
  }));
  const context = {
    dataset,
    isOpen: disclosureState.isOpen,
    isDisabled: () => {
      var _a;
      return (_a = local.disabled) != null ? _a : false;
    },
    triggerOnFocusOnly: () => {
      var _a;
      return (_a = local.triggerOnFocusOnly) != null ? _a : false;
    },
    contentId,
    contentPresent,
    openTooltip,
    hideTooltip,
    cancelOpening,
    generateId: createGenerateId(() => mergedProps.id),
    registerContentId: createRegisterId(setContentId),
    isTargetOnTooltip,
    setTriggerRef,
    setContentRef
  };
  return createComponent(TooltipContext.Provider, {
    value: context,
    get children() {
      return createComponent(Popper, mergeProps$1({
        anchorRef: triggerRef,
        contentRef,
        onCurrentPlacementChange: setCurrentPlacement
      }, others));
    }
  });
}
function TooltipTrigger$1(props) {
  let ref;
  const context = useTooltipContext();
  const [local, others] = splitProps(props, ["ref", "onPointerEnter", "onPointerLeave", "onPointerDown", "onClick", "onFocus", "onBlur"]);
  let isPointerDown = false;
  let isHovered = false;
  let isFocused = false;
  const handlePointerUp = () => {
    isPointerDown = false;
  };
  const handleShow = () => {
    if (!context.isOpen() && (isHovered || isFocused)) {
      context.openTooltip(isFocused);
    }
  };
  const handleHide = (immediate) => {
    if (context.isOpen() && !isHovered && !isFocused) {
      context.hideTooltip(immediate);
    }
  };
  const onPointerEnter = (e) => {
    callHandler(e, local.onPointerEnter);
    if (e.pointerType === "touch" || context.triggerOnFocusOnly() || context.isDisabled() || e.defaultPrevented) {
      return;
    }
    isHovered = true;
    handleShow();
  };
  const onPointerLeave = (e) => {
    callHandler(e, local.onPointerLeave);
    if (e.pointerType === "touch") {
      return;
    }
    isHovered = false;
    isFocused = false;
    if (context.isOpen()) {
      handleHide();
    } else {
      context.cancelOpening();
    }
  };
  const onPointerDown = (e) => {
    callHandler(e, local.onPointerDown);
    isPointerDown = true;
    getDocument(ref).addEventListener("pointerup", handlePointerUp, {
      once: true
    });
  };
  const onClick = (e) => {
    callHandler(e, local.onClick);
    isHovered = false;
    isFocused = false;
    handleHide(true);
  };
  const onFocus = (e) => {
    callHandler(e, local.onFocus);
    if (context.isDisabled() || e.defaultPrevented || isPointerDown) {
      return;
    }
    isFocused = true;
    handleShow();
  };
  const onBlur = (e) => {
    callHandler(e, local.onBlur);
    const relatedTarget = e.relatedTarget;
    if (context.isTargetOnTooltip(relatedTarget)) {
      return;
    }
    isHovered = false;
    isFocused = false;
    handleHide(true);
  };
  onCleanup(() => {
    if (isServer) {
      return;
    }
    getDocument(ref).removeEventListener("pointerup", handlePointerUp);
  });
  return createComponent(Polymorphic, mergeProps$1({
    as: "button",
    get ["aria-describedby"]() {
      return context.isOpen() ? context.contentId() : void 0;
    },
    onPointerEnter,
    onPointerLeave,
    onPointerDown,
    onClick,
    onFocus,
    onBlur
  }, () => context.dataset(), others));
}
var Tooltip$1 = Object.assign(TooltipRoot, {
  Arrow: PopperArrow,
  Content: TooltipContent$1,
  Portal: TooltipPortal,
  Trigger: TooltipTrigger$1
});
var AUTOFOCUS_ON_MOUNT_EVENT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT_EVENT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var focusScopeStack = {
  /** A stack of focus scopes, with the active one at the top */
  stack: [],
  active() {
    return this.stack[0];
  },
  add(scope) {
    var _a;
    if (scope !== this.active()) {
      (_a = this.active()) == null ? void 0 : _a.pause();
    }
    this.stack = removeItemFromArray(this.stack, scope);
    this.stack.unshift(scope);
  },
  remove(scope) {
    var _a;
    this.stack = removeItemFromArray(this.stack, scope);
    (_a = this.active()) == null ? void 0 : _a.resume();
  }
};
function createFocusScope(props, ref) {
  const [isPaused, setIsPaused] = createSignal(false);
  const focusScope = {
    pause() {
      setIsPaused(true);
    },
    resume() {
      setIsPaused(false);
    }
  };
  let lastFocusedElement = null;
  const onMountAutoFocus = (e) => {
    var _a;
    return (_a = props.onMountAutoFocus) == null ? void 0 : _a.call(props, e);
  };
  const onUnmountAutoFocus = (e) => {
    var _a;
    return (_a = props.onUnmountAutoFocus) == null ? void 0 : _a.call(props, e);
  };
  const ownerDocument = () => getDocument(ref());
  const createSentinel = () => {
    const element = ownerDocument().createElement("span");
    element.setAttribute("data-focus-trap", "");
    element.tabIndex = 0;
    Object.assign(element.style, visuallyHiddenStyles);
    return element;
  };
  const tabbables = () => {
    const container = ref();
    if (!container) {
      return [];
    }
    return getAllTabbableIn(container, true).filter((el) => !el.hasAttribute("data-focus-trap"));
  };
  const firstTabbable = () => {
    const items2 = tabbables();
    return items2.length > 0 ? items2[0] : null;
  };
  const lastTabbable = () => {
    const items2 = tabbables();
    return items2.length > 0 ? items2[items2.length - 1] : null;
  };
  const shouldPreventUnmountAutoFocus = () => {
    const container = ref();
    if (!container) {
      return false;
    }
    const activeElement = getActiveElement(container);
    if (!activeElement) {
      return false;
    }
    if (contains$1(container, activeElement)) {
      return false;
    }
    return isFocusable(activeElement);
  };
  createEffect(() => {
    if (isServer) {
      return;
    }
    const container = ref();
    if (!container) {
      return;
    }
    focusScopeStack.add(focusScope);
    const previouslyFocusedElement = getActiveElement(container);
    const hasFocusedCandidate = contains$1(container, previouslyFocusedElement);
    if (!hasFocusedCandidate) {
      const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT_EVENT, EVENT_OPTIONS);
      container.addEventListener(AUTOFOCUS_ON_MOUNT_EVENT, onMountAutoFocus);
      container.dispatchEvent(mountEvent);
      if (!mountEvent.defaultPrevented) {
        setTimeout(() => {
          focusWithoutScrolling(firstTabbable());
          if (getActiveElement(container) === previouslyFocusedElement) {
            focusWithoutScrolling(container);
          }
        }, 0);
      }
    }
    onCleanup(() => {
      container.removeEventListener(AUTOFOCUS_ON_MOUNT_EVENT, onMountAutoFocus);
      setTimeout(() => {
        const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT_EVENT, EVENT_OPTIONS);
        if (shouldPreventUnmountAutoFocus()) {
          unmountEvent.preventDefault();
        }
        container.addEventListener(AUTOFOCUS_ON_UNMOUNT_EVENT, onUnmountAutoFocus);
        container.dispatchEvent(unmountEvent);
        if (!unmountEvent.defaultPrevented) {
          focusWithoutScrolling(previouslyFocusedElement != null ? previouslyFocusedElement : ownerDocument().body);
        }
        container.removeEventListener(AUTOFOCUS_ON_UNMOUNT_EVENT, onUnmountAutoFocus);
        focusScopeStack.remove(focusScope);
      }, 0);
    });
  });
  createEffect(() => {
    if (isServer) {
      return;
    }
    const container = ref();
    if (!container || !access(props.trapFocus) || isPaused()) {
      return;
    }
    const onFocusIn = (event) => {
      const target = event.target;
      if (target == null ? void 0 : target.closest(`[${DATA_TOP_LAYER_ATTR}]`)) {
        return;
      }
      if (contains$1(container, target)) {
        lastFocusedElement = target;
      } else {
        focusWithoutScrolling(lastFocusedElement);
      }
    };
    const onFocusOut = (event) => {
      const relatedTarget = event.relatedTarget;
      const target = relatedTarget != null ? relatedTarget : getActiveElement(container);
      if (target == null ? void 0 : target.closest(`[${DATA_TOP_LAYER_ATTR}]`)) {
        return;
      }
      if (!contains$1(container, target)) {
        focusWithoutScrolling(lastFocusedElement);
      }
    };
    ownerDocument().addEventListener("focusin", onFocusIn);
    ownerDocument().addEventListener("focusout", onFocusOut);
    onCleanup(() => {
      ownerDocument().removeEventListener("focusin", onFocusIn);
      ownerDocument().removeEventListener("focusout", onFocusOut);
    });
  });
  createEffect(() => {
    if (isServer) {
      return;
    }
    const container = ref();
    if (!container || !access(props.trapFocus) || isPaused()) {
      return;
    }
    const startSentinel = createSentinel();
    container.insertAdjacentElement("afterbegin", startSentinel);
    const endSentinel = createSentinel();
    container.insertAdjacentElement("beforeend", endSentinel);
    function onFocus(event) {
      const first = firstTabbable();
      const last = lastTabbable();
      if (event.relatedTarget === first) {
        focusWithoutScrolling(last);
      } else {
        focusWithoutScrolling(first);
      }
    }
    startSentinel.addEventListener("focusin", onFocus);
    endSentinel.addEventListener("focusin", onFocus);
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.previousSibling === endSentinel) {
          endSentinel.remove();
          container.insertAdjacentElement("beforeend", endSentinel);
        }
        if (mutation.nextSibling === startSentinel) {
          startSentinel.remove();
          container.insertAdjacentElement("afterbegin", startSentinel);
        }
      }
    });
    observer.observe(container, {
      childList: true,
      subtree: false
    });
    onCleanup(() => {
      startSentinel.removeEventListener("focusin", onFocus);
      endSentinel.removeEventListener("focusin", onFocus);
      startSentinel.remove();
      endSentinel.remove();
      observer.disconnect();
    });
  });
}
var DATA_LIVE_ANNOUNCER_ATTR = "data-live-announcer";
function createHideOutside(props) {
  createEffect(() => {
    if (access(props.isDisabled)) {
      return;
    }
    onCleanup(ariaHideOutside(access(props.targets), access(props.root)));
  });
}
var refCountMap = /* @__PURE__ */ new WeakMap();
var observerStack = [];
function ariaHideOutside(targets, root = document.body) {
  const visibleNodes = new Set(targets);
  const hiddenNodes = /* @__PURE__ */ new Set();
  const walk = (root2) => {
    for (const element of root2.querySelectorAll(`[${DATA_LIVE_ANNOUNCER_ATTR}], [${DATA_TOP_LAYER_ATTR}]`)) {
      visibleNodes.add(element);
    }
    const acceptNode = (node) => {
      if (visibleNodes.has(node) || node.parentElement && hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute("role") !== "row") {
        return NodeFilter.FILTER_REJECT;
      }
      for (const target of visibleNodes) {
        if (node.contains(target)) {
          return NodeFilter.FILTER_SKIP;
        }
      }
      return NodeFilter.FILTER_ACCEPT;
    };
    const walker = document.createTreeWalker(root2, NodeFilter.SHOW_ELEMENT, {
      acceptNode
    });
    const acceptRoot = acceptNode(root2);
    if (acceptRoot === NodeFilter.FILTER_ACCEPT) {
      hide2(root2);
    }
    if (acceptRoot !== NodeFilter.FILTER_REJECT) {
      let node = walker.nextNode();
      while (node != null) {
        hide2(node);
        node = walker.nextNode();
      }
    }
  };
  const hide2 = (node) => {
    var _a;
    const refCount = (_a = refCountMap.get(node)) != null ? _a : 0;
    if (node.getAttribute("aria-hidden") === "true" && refCount === 0) {
      return;
    }
    if (refCount === 0) {
      node.setAttribute("aria-hidden", "true");
    }
    hiddenNodes.add(node);
    refCountMap.set(node, refCount + 1);
  };
  if (observerStack.length) {
    observerStack[observerStack.length - 1].disconnect();
  }
  walk(root);
  const observer = new MutationObserver((changes) => {
    for (const change of changes) {
      if (change.type !== "childList" || change.addedNodes.length === 0) {
        continue;
      }
      if (![...visibleNodes, ...hiddenNodes].some((node) => node.contains(change.target))) {
        for (const node of change.removedNodes) {
          if (node instanceof Element) {
            visibleNodes.delete(node);
            hiddenNodes.delete(node);
          }
        }
        for (const node of change.addedNodes) {
          if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === "true" || node.dataset.reactAriaTopLayer === "true")) {
            visibleNodes.add(node);
          } else if (node instanceof Element) {
            walk(node);
          }
        }
      }
    }
  });
  observer.observe(root, {
    childList: true,
    subtree: true
  });
  const observerWrapper = {
    observe() {
      observer.observe(root, {
        childList: true,
        subtree: true
      });
    },
    disconnect() {
      observer.disconnect();
    }
  };
  observerStack.push(observerWrapper);
  return () => {
    observer.disconnect();
    for (const node of hiddenNodes) {
      const count = refCountMap.get(node);
      if (count == null) {
        return;
      }
      if (count === 1) {
        node.removeAttribute("aria-hidden");
        refCountMap.delete(node);
      } else {
        refCountMap.set(node, count - 1);
      }
    }
    if (observerWrapper === observerStack[observerStack.length - 1]) {
      observerStack.pop();
      if (observerStack.length) {
        observerStack[observerStack.length - 1].observe();
      }
    } else {
      observerStack.splice(observerStack.indexOf(observerWrapper), 1);
    }
  };
}
var contains = (wrapper, target) => {
  var _a;
  if (wrapper.contains(target)) return true;
  let currentElement = target;
  while (currentElement) {
    if (currentElement === wrapper) return true;
    currentElement = (_a = currentElement._$host) != null ? _a : currentElement.parentElement;
  }
  return false;
};
var activeStyles = /* @__PURE__ */ new Map();
var createStyle = (props) => {
  createEffect(() => {
    var _a, _b;
    const style = (_a = access$1(props.style)) != null ? _a : {};
    const properties = (_b = access$1(props.properties)) != null ? _b : [];
    const originalStyles = {};
    for (const key in style) {
      originalStyles[key] = props.element.style[key];
    }
    const activeStyle = activeStyles.get(props.key);
    if (activeStyle) {
      activeStyle.activeCount++;
    } else {
      activeStyles.set(props.key, {
        activeCount: 1,
        originalStyles,
        properties: properties.map((property) => property.key)
      });
    }
    Object.assign(props.element.style, props.style);
    for (const property of properties) {
      props.element.style.setProperty(property.key, property.value);
    }
    onCleanup(() => {
      var _a2;
      const activeStyle2 = activeStyles.get(props.key);
      if (!activeStyle2) return;
      if (activeStyle2.activeCount !== 1) {
        activeStyle2.activeCount--;
        return;
      }
      activeStyles.delete(props.key);
      for (const [key, value] of Object.entries(activeStyle2.originalStyles)) {
        props.element.style[key] = value;
      }
      for (const property of activeStyle2.properties) {
        props.element.style.removeProperty(property);
      }
      if (props.element.style.length === 0) {
        props.element.removeAttribute("style");
      }
      (_a2 = props.cleanup) == null ? void 0 : _a2.call(props);
    });
  });
};
var style_default = createStyle;
var getScrollDimensions = (element, axis) => {
  switch (axis) {
    case "x":
      return [element.clientWidth, element.scrollLeft, element.scrollWidth];
    case "y":
      return [element.clientHeight, element.scrollTop, element.scrollHeight];
  }
};
var isScrollContainer = (element, axis) => {
  const styles = getComputedStyle(element);
  const overflow = axis === "x" ? styles.overflowX : styles.overflowY;
  return overflow === "auto" || overflow === "scroll" || // The HTML element is a scroll container if it has overflow visible
  element.tagName === "HTML" && overflow === "visible";
};
var getScrollAtLocation = (location, axis, stopAt) => {
  var _a;
  const directionFactor = axis === "x" && window.getComputedStyle(location).direction === "rtl" ? -1 : 1;
  let currentElement = location;
  let availableScroll = 0;
  let availableScrollTop = 0;
  let wrapperReached = false;
  do {
    const [clientSize, scrollOffset, scrollSize] = getScrollDimensions(currentElement, axis);
    const scrolled = scrollSize - clientSize - directionFactor * scrollOffset;
    if ((scrollOffset !== 0 || scrolled !== 0) && isScrollContainer(currentElement, axis)) {
      availableScroll += scrolled;
      availableScrollTop += scrollOffset;
    }
    if (currentElement === (stopAt != null ? stopAt : document.documentElement)) {
      wrapperReached = true;
    } else {
      currentElement = (_a = currentElement._$host) != null ? _a : currentElement.parentElement;
    }
  } while (currentElement && !wrapperReached);
  return [availableScroll, availableScrollTop];
};
var [preventScrollStack, setPreventScrollStack] = createSignal([]);
var isActive = (id) => preventScrollStack().indexOf(id) === preventScrollStack().length - 1;
var createPreventScroll = (props) => {
  const defaultedProps = mergeProps({
    element: null,
    enabled: true,
    hideScrollbar: true,
    preventScrollbarShift: true,
    preventScrollbarShiftMode: "padding",
    restoreScrollPosition: true,
    allowPinchZoom: false
  }, props);
  const preventScrollId = createUniqueId();
  let currentTouchStart = [0, 0];
  let currentTouchStartAxis = null;
  let currentTouchStartDelta = null;
  createEffect(() => {
    if (!access$1(defaultedProps.enabled)) return;
    setPreventScrollStack((stack) => [...stack, preventScrollId]);
    onCleanup(() => {
      setPreventScrollStack((stack) => stack.filter((id) => id !== preventScrollId));
    });
  });
  createEffect(() => {
    if (!access$1(defaultedProps.enabled) || !access$1(defaultedProps.hideScrollbar)) return;
    const {
      body
    } = document;
    const scrollbarWidth = window.innerWidth - body.offsetWidth;
    if (access$1(defaultedProps.preventScrollbarShift)) {
      const style = {
        overflow: "hidden"
      };
      const properties = [];
      if (scrollbarWidth > 0) {
        if (access$1(defaultedProps.preventScrollbarShiftMode) === "padding") {
          style.paddingRight = `calc(${window.getComputedStyle(body).paddingRight} + ${scrollbarWidth}px)`;
        } else {
          style.marginRight = `calc(${window.getComputedStyle(body).marginRight} + ${scrollbarWidth}px)`;
        }
        properties.push({
          key: "--scrollbar-width",
          value: `${scrollbarWidth}px`
        });
      }
      const offsetTop = window.scrollY;
      const offsetLeft = window.scrollX;
      style_default({
        key: "prevent-scroll",
        element: body,
        style,
        properties,
        cleanup: () => {
          if (access$1(defaultedProps.restoreScrollPosition) && scrollbarWidth > 0) {
            window.scrollTo(offsetLeft, offsetTop);
          }
        }
      });
    } else {
      style_default({
        key: "prevent-scroll",
        element: body,
        style: {
          overflow: "hidden"
        }
      });
    }
  });
  createEffect(() => {
    if (!isActive(preventScrollId) || !access$1(defaultedProps.enabled)) return;
    document.addEventListener("wheel", maybePreventWheel, {
      passive: false
    });
    document.addEventListener("touchstart", logTouchStart, {
      passive: false
    });
    document.addEventListener("touchmove", maybePreventTouch, {
      passive: false
    });
    onCleanup(() => {
      document.removeEventListener("wheel", maybePreventWheel);
      document.removeEventListener("touchstart", logTouchStart);
      document.removeEventListener("touchmove", maybePreventTouch);
    });
  });
  const logTouchStart = (event) => {
    currentTouchStart = getTouchXY(event);
    currentTouchStartAxis = null;
    currentTouchStartDelta = null;
  };
  const maybePreventWheel = (event) => {
    const target = event.target;
    const wrapper = access$1(defaultedProps.element);
    const delta = getDeltaXY(event);
    const axis = Math.abs(delta[0]) > Math.abs(delta[1]) ? "x" : "y";
    const axisDelta = axis === "x" ? delta[0] : delta[1];
    const resultsInScroll = wouldScroll(target, axis, axisDelta, wrapper);
    let shouldCancel;
    if (wrapper && contains(wrapper, target)) {
      shouldCancel = !resultsInScroll;
    } else {
      shouldCancel = true;
    }
    if (shouldCancel && event.cancelable) {
      event.preventDefault();
    }
  };
  const maybePreventTouch = (event) => {
    const wrapper = access$1(defaultedProps.element);
    const target = event.target;
    let shouldCancel;
    if (event.touches.length === 2) {
      shouldCancel = !access$1(defaultedProps.allowPinchZoom);
    } else {
      if (currentTouchStartAxis == null || currentTouchStartDelta === null) {
        const delta = getTouchXY(event).map((touch, i) => currentTouchStart[i] - touch);
        const axis = Math.abs(delta[0]) > Math.abs(delta[1]) ? "x" : "y";
        currentTouchStartAxis = axis;
        currentTouchStartDelta = axis === "x" ? delta[0] : delta[1];
      }
      if (target.type === "range") {
        shouldCancel = false;
      } else {
        const wouldResultInScroll = wouldScroll(target, currentTouchStartAxis, currentTouchStartDelta, wrapper);
        if (wrapper && contains(wrapper, target)) {
          shouldCancel = !wouldResultInScroll;
        } else {
          shouldCancel = true;
        }
      }
    }
    if (shouldCancel && event.cancelable) {
      event.preventDefault();
    }
  };
};
var getDeltaXY = (event) => [event.deltaX, event.deltaY];
var getTouchXY = (event) => event.changedTouches[0] ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
var wouldScroll = (target, axis, delta, wrapper) => {
  const targetInWrapper = wrapper !== null && contains(wrapper, target);
  const [availableScroll, availableScrollTop] = getScrollAtLocation(target, axis, targetInWrapper ? wrapper : void 0);
  if (delta > 0 && Math.abs(availableScroll) <= 1) {
    return false;
  }
  if (delta < 0 && Math.abs(availableScrollTop) < 1) {
    return false;
  }
  return true;
};
var preventScroll_default = createPreventScroll;
var src_default = preventScroll_default;
var ListKeyboardDelegate = class {
  constructor(collection, ref, collator) {
    __publicField(this, "collection");
    __publicField(this, "ref");
    __publicField(this, "collator");
    this.collection = collection;
    this.ref = ref;
    this.collator = collator;
  }
  getKeyBelow(key) {
    let keyAfter = this.collection().getKeyAfter(key);
    while (keyAfter != null) {
      const item = this.collection().getItem(keyAfter);
      if (item && item.type === "item" && !item.disabled) {
        return keyAfter;
      }
      keyAfter = this.collection().getKeyAfter(keyAfter);
    }
  }
  getKeyAbove(key) {
    let keyBefore = this.collection().getKeyBefore(key);
    while (keyBefore != null) {
      const item = this.collection().getItem(keyBefore);
      if (item && item.type === "item" && !item.disabled) {
        return keyBefore;
      }
      keyBefore = this.collection().getKeyBefore(keyBefore);
    }
  }
  getFirstKey() {
    let key = this.collection().getFirstKey();
    while (key != null) {
      const item = this.collection().getItem(key);
      if (item && item.type === "item" && !item.disabled) {
        return key;
      }
      key = this.collection().getKeyAfter(key);
    }
  }
  getLastKey() {
    let key = this.collection().getLastKey();
    while (key != null) {
      const item = this.collection().getItem(key);
      if (item && item.type === "item" && !item.disabled) {
        return key;
      }
      key = this.collection().getKeyBefore(key);
    }
  }
  getItem(key) {
    var _a2;
    var _a, _b;
    return (_a2 = (_b = (_a = this.ref) == null ? void 0 : _a.call(this)) == null ? void 0 : _b.querySelector(`[data-key="${key}"]`)) != null ? _a2 : null;
  }
  // TODO: not working correctly
  getKeyPageAbove(key) {
    var _a;
    const menu = (_a = this.ref) == null ? void 0 : _a.call(this);
    let item = this.getItem(key);
    if (!menu || !item) {
      return;
    }
    const pageY = Math.max(0, item.offsetTop + item.offsetHeight - menu.offsetHeight);
    let keyAbove = key;
    while (keyAbove && item && item.offsetTop > pageY) {
      keyAbove = this.getKeyAbove(keyAbove);
      item = keyAbove != null ? this.getItem(keyAbove) : null;
    }
    return keyAbove;
  }
  // TODO: not working correctly
  getKeyPageBelow(key) {
    var _a;
    const menu = (_a = this.ref) == null ? void 0 : _a.call(this);
    let item = this.getItem(key);
    if (!menu || !item) {
      return;
    }
    const pageY = Math.min(menu.scrollHeight, item.offsetTop - item.offsetHeight + menu.offsetHeight);
    let keyBelow = key;
    while (keyBelow && item && item.offsetTop < pageY) {
      keyBelow = this.getKeyBelow(keyBelow);
      item = keyBelow != null ? this.getItem(keyBelow) : null;
    }
    return keyBelow;
  }
  getKeyForSearch(search, fromKey) {
    var _a;
    const collator = (_a = this.collator) == null ? void 0 : _a.call(this);
    if (!collator) {
      return;
    }
    let key = fromKey != null ? this.getKeyBelow(fromKey) : this.getFirstKey();
    while (key != null) {
      const item = this.collection().getItem(key);
      if (item) {
        const substring = item.textValue.slice(0, search.length);
        if (item.textValue && collator.compare(substring, search) === 0) {
          return key;
        }
      }
      key = this.getKeyBelow(key);
    }
  }
};
function createSelectableList(props, ref, scrollRef) {
  const collator = createCollator({
    usage: "search",
    sensitivity: "base"
  });
  const delegate = createMemo(() => {
    const keyboardDelegate = access(props.keyboardDelegate);
    if (keyboardDelegate) {
      return keyboardDelegate;
    }
    return new ListKeyboardDelegate(props.collection, ref, collator);
  });
  return createSelectableCollection({
    selectionManager: () => access(props.selectionManager),
    keyboardDelegate: delegate,
    autoFocus: () => access(props.autoFocus),
    deferAutoFocus: () => access(props.deferAutoFocus),
    shouldFocusWrap: () => access(props.shouldFocusWrap),
    disallowEmptySelection: () => access(props.disallowEmptySelection),
    selectOnFocus: () => access(props.selectOnFocus),
    disallowTypeAhead: () => access(props.disallowTypeAhead),
    shouldUseVirtualFocus: () => access(props.shouldUseVirtualFocus),
    allowsTabNavigation: () => access(props.allowsTabNavigation),
    isVirtualized: () => access(props.isVirtualized),
    scrollToKey: (key) => {
      var _a;
      return (_a = access(props.scrollToKey)) == null ? void 0 : _a(key);
    },
    orientation: () => access(props.orientation)
  }, ref);
}
var image_exports = {};
__export(image_exports, {
  Fallback: () => ImageFallback,
  Image: () => Image,
  Img: () => ImageImg,
  Root: () => ImageRoot,
  useImageContext: () => useImageContext
});
var ImageContext = createContext();
function useImageContext() {
  const context = useContext(ImageContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useImageContext` must be used within an `Image.Root` component");
  }
  return context;
}
function ImageFallback(props) {
  const context = useImageContext();
  const [canRender, setCanRender] = createSignal(context.fallbackDelay() === void 0);
  createEffect(() => {
    const delayMs = context.fallbackDelay();
    if (delayMs !== void 0) {
      const timerId = window.setTimeout(() => setCanRender(true), delayMs);
      onCleanup(() => window.clearTimeout(timerId));
    }
  });
  return createComponent(Show, {
    get when() {
      return canRender() && context.imageLoadingStatus() !== "loaded";
    },
    get children() {
      return createComponent(Polymorphic, mergeProps$1({
        as: "span"
      }, props));
    }
  });
}
function ImageImg(props) {
  const context = useImageContext();
  const [loadingStatus, setLoadingStatus] = createSignal("idle");
  createEffect(on(() => props.src, (src) => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status) => () => {
      if (!isMounted) {
        return;
      }
      setLoadingStatus(status);
    };
    setLoadingStatus("loading");
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    image.src = src;
    onCleanup(() => {
      isMounted = false;
    });
  }));
  createEffect(() => {
    const imageLoadingStatus = loadingStatus();
    if (imageLoadingStatus !== "idle") {
      context.onImageLoadingStatusChange(imageLoadingStatus);
    }
  });
  return createComponent(Show, {
    get when() {
      return loadingStatus() === "loaded";
    },
    get children() {
      return createComponent(Polymorphic, mergeProps$1({
        as: "img"
      }, props));
    }
  });
}
function ImageRoot(props) {
  const [local, others] = splitProps(props, ["fallbackDelay", "onLoadingStatusChange"]);
  const [imageLoadingStatus, setImageLoadingStatus] = createSignal("idle");
  const context = {
    fallbackDelay: () => local.fallbackDelay,
    imageLoadingStatus,
    onImageLoadingStatusChange: (status) => {
      var _a;
      setImageLoadingStatus(status);
      (_a = local.onLoadingStatusChange) == null ? void 0 : _a.call(local, status);
    }
  };
  return createComponent(ImageContext.Provider, {
    value: context,
    get children() {
      return createComponent(Polymorphic, mergeProps$1({
        as: "span"
      }, others));
    }
  });
}
var Image = Object.assign(ImageRoot, {
  Fallback: ImageFallback,
  Img: ImageImg
});
var MenubarContext = createContext();
function useOptionalMenubarContext() {
  return useContext(MenubarContext);
}
var NavigationMenuContext = createContext();
function useOptionalNavigationMenuContext() {
  return useContext(NavigationMenuContext);
}
var MenuContext = createContext();
function useOptionalMenuContext() {
  return useContext(MenuContext);
}
function useMenuContext() {
  const context = useOptionalMenuContext();
  if (context === void 0) {
    throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");
  }
  return context;
}
var MenuItemContext = createContext();
function useMenuItemContext() {
  const context = useContext(MenuItemContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");
  }
  return context;
}
var MenuRootContext = createContext();
function useMenuRootContext() {
  const context = useContext(MenuRootContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");
  }
  return context;
}
function MenuItemBase(props) {
  let ref;
  const rootContext = useMenuRootContext();
  const menuContext = useMenuContext();
  const mergedProps = mergeDefaultProps({
    id: rootContext.generateId(`item-${createUniqueId()}`)
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "textValue", "disabled", "closeOnSelect", "checked", "indeterminate", "onSelect", "onPointerMove", "onPointerLeave", "onPointerDown", "onPointerUp", "onClick", "onKeyDown", "onMouseDown", "onFocus"]);
  const [labelId, setLabelId] = createSignal();
  const [descriptionId, setDescriptionId] = createSignal();
  const [labelRef, setLabelRef] = createSignal();
  const selectionManager = () => menuContext.listState().selectionManager();
  const key = () => others.id;
  const isHighlighted = () => selectionManager().focusedKey() === key();
  const onSelect = () => {
    var _a;
    (_a = local.onSelect) == null ? void 0 : _a.call(local);
    if (local.closeOnSelect) {
      setTimeout(() => {
        menuContext.close(true);
      });
    }
  };
  createDomCollectionItem({
    getItem: () => {
      var _a2, _b, _c, _d;
      var _a;
      return {
        ref: () => ref,
        type: "item",
        key: key(),
        textValue: (_c = (_b = (_a2 = local.textValue) != null ? _a2 : (_a = labelRef()) == null ? void 0 : _a.textContent) != null ? _b : void 0 ) != null ? _c : "",
        disabled: (_d = local.disabled) != null ? _d : false
      };
    }
  });
  const selectableItem = createSelectableItem({
    key,
    selectionManager,
    shouldSelectOnPressUp: true,
    allowsDifferentPressOrigin: true,
    disabled: () => local.disabled
  }, () => ref);
  const onPointerMove = (e) => {
    callHandler(e, local.onPointerMove);
    if (e.pointerType !== "mouse") {
      return;
    }
    if (local.disabled) {
      menuContext.onItemLeave(e);
    } else {
      menuContext.onItemEnter(e);
      if (!e.defaultPrevented) {
        focusWithoutScrolling(e.currentTarget);
        menuContext.listState().selectionManager().setFocused(true);
        menuContext.listState().selectionManager().setFocusedKey(key());
      }
    }
  };
  const onPointerLeave = (e) => {
    callHandler(e, local.onPointerLeave);
    if (e.pointerType !== "mouse") {
      return;
    }
    menuContext.onItemLeave(e);
  };
  const onPointerUp = (e) => {
    callHandler(e, local.onPointerUp);
    if (!local.disabled && e.button === 0) {
      onSelect();
    }
  };
  const onKeyDown = (e) => {
    callHandler(e, local.onKeyDown);
    if (e.repeat) {
      return;
    }
    if (local.disabled) {
      return;
    }
    switch (e.key) {
      case "Enter":
      case " ":
        onSelect();
        break;
    }
  };
  const ariaChecked = createMemo(() => {
    if (local.indeterminate) {
      return "mixed";
    }
    if (local.checked == null) {
      return void 0;
    }
    return local.checked;
  });
  const dataset = createMemo(() => ({
    "data-indeterminate": local.indeterminate ? "" : void 0,
    "data-checked": local.checked && !local.indeterminate ? "" : void 0,
    "data-disabled": local.disabled ? "" : void 0,
    "data-highlighted": isHighlighted() ? "" : void 0
  }));
  const context = {
    isChecked: () => local.checked,
    dataset,
    setLabelRef,
    generateId: createGenerateId(() => others.id),
    registerLabel: createRegisterId(setLabelId),
    registerDescription: createRegisterId(setDescriptionId)
  };
  return createComponent(MenuItemContext.Provider, {
    value: context,
    get children() {
      return createComponent(Polymorphic, mergeProps$1({
        as: "div",
        get tabIndex() {
          return selectableItem.tabIndex();
        },
        get ["aria-checked"]() {
          return ariaChecked();
        },
        get ["aria-disabled"]() {
          return local.disabled;
        },
        get ["aria-labelledby"]() {
          return labelId();
        },
        get ["aria-describedby"]() {
          return descriptionId();
        },
        get ["data-key"]() {
          return selectableItem.dataKey();
        },
        get onPointerDown() {
          return composeEventHandlers([local.onPointerDown, selectableItem.onPointerDown]);
        },
        get onPointerUp() {
          return composeEventHandlers([onPointerUp, selectableItem.onPointerUp]);
        },
        get onClick() {
          return composeEventHandlers([local.onClick, selectableItem.onClick]);
        },
        get onKeyDown() {
          return composeEventHandlers([onKeyDown, selectableItem.onKeyDown]);
        },
        get onMouseDown() {
          return composeEventHandlers([local.onMouseDown, selectableItem.onMouseDown]);
        },
        get onFocus() {
          return composeEventHandlers([local.onFocus, selectableItem.onFocus]);
        },
        onPointerMove,
        onPointerLeave
      }, dataset, others));
    }
  });
}
function MenuCheckboxItem(props) {
  const mergedProps = mergeDefaultProps({
    closeOnSelect: false
  }, props);
  const [local, others] = splitProps(mergedProps, ["checked", "defaultChecked", "onChange", "onSelect"]);
  const state = createToggleState({
    isSelected: () => local.checked,
    defaultIsSelected: () => local.defaultChecked,
    onSelectedChange: (checked) => {
      var _a;
      return (_a = local.onChange) == null ? void 0 : _a.call(local, checked);
    },
    isDisabled: () => others.disabled
  });
  const onSelect = () => {
    var _a;
    (_a = local.onSelect) == null ? void 0 : _a.call(local);
    state.toggle();
  };
  return createComponent(MenuItemBase, mergeProps$1({
    role: "menuitemcheckbox",
    get checked() {
      return state.isSelected();
    },
    onSelect
  }, others));
}
var MENUBAR_KEYS = {
  next: (dir, orientation) => dir === "ltr" ? orientation === "horizontal" ? "ArrowRight" : "ArrowDown" : orientation === "horizontal" ? "ArrowLeft" : "ArrowUp",
  previous: (dir, orientation) => MENUBAR_KEYS.next(dir === "ltr" ? "rtl" : "ltr", orientation)
};
var MENU_KEYS = {
  first: (orientation) => orientation === "horizontal" ? "ArrowDown" : "ArrowRight",
  last: (orientation) => orientation === "horizontal" ? "ArrowUp" : "ArrowLeft"
};
function MenuTrigger(props) {
  const rootContext = useMenuRootContext();
  const context = useMenuContext();
  const optionalMenubarContext = useOptionalMenubarContext();
  const {
    direction
  } = useLocale();
  const mergedProps = mergeDefaultProps({
    id: rootContext.generateId("trigger")
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "id", "disabled", "onPointerDown", "onClick", "onKeyDown", "onMouseOver", "onFocus"]);
  let key = () => rootContext.value();
  if (optionalMenubarContext !== void 0) {
    key = () => {
      var _a;
      return (_a = rootContext.value()) != null ? _a : local.id;
    };
    if (optionalMenubarContext.lastValue() === void 0) optionalMenubarContext.setLastValue(key);
  }
  const tagName = createTagName(() => context.triggerRef(), () => "button");
  const isNativeLink = createMemo(() => {
    var _a;
    return tagName() === "a" && ((_a = context.triggerRef()) == null ? void 0 : _a.getAttribute("href")) != null;
  });
  createEffect(on(() => optionalMenubarContext == null ? void 0 : optionalMenubarContext.value(), (value) => {
    var _a;
    if (!isNativeLink()) return;
    if (value === key()) (_a = context.triggerRef()) == null ? void 0 : _a.focus();
  }));
  const handleClick = () => {
    if (optionalMenubarContext !== void 0) {
      if (!context.isOpen()) {
        if (!optionalMenubarContext.autoFocusMenu()) {
          optionalMenubarContext.setAutoFocusMenu(true);
        }
        context.open(false);
      } else {
        if (optionalMenubarContext.value() === key()) optionalMenubarContext.closeMenu();
      }
    } else context.toggle(true);
  };
  const onPointerDown = (e) => {
    callHandler(e, local.onPointerDown);
    e.currentTarget.dataset.pointerType = e.pointerType;
    if (!local.disabled && e.pointerType !== "touch" && e.button === 0) {
      handleClick();
    }
  };
  const onClick = (e) => {
    callHandler(e, local.onClick);
    if (!local.disabled) {
      if (e.currentTarget.dataset.pointerType === "touch") handleClick();
    }
  };
  const onKeyDown = (e) => {
    callHandler(e, local.onKeyDown);
    if (local.disabled) {
      return;
    }
    if (isNativeLink()) {
      switch (e.key) {
        case "Enter":
        case " ":
          return;
      }
    }
    switch (e.key) {
      case "Enter":
      case " ":
      case MENU_KEYS.first(rootContext.orientation()):
        e.stopPropagation();
        e.preventDefault();
        scrollIntoViewport(e.currentTarget);
        context.open("first");
        optionalMenubarContext == null ? void 0 : optionalMenubarContext.setAutoFocusMenu(true);
        optionalMenubarContext == null ? void 0 : optionalMenubarContext.setValue(key);
        break;
      case MENU_KEYS.last(rootContext.orientation()):
        e.stopPropagation();
        e.preventDefault();
        context.open("last");
        break;
      case MENUBAR_KEYS.next(direction(), rootContext.orientation()):
        if (optionalMenubarContext === void 0) break;
        e.stopPropagation();
        e.preventDefault();
        optionalMenubarContext.nextMenu();
        break;
      case MENUBAR_KEYS.previous(direction(), rootContext.orientation()):
        if (optionalMenubarContext === void 0) break;
        e.stopPropagation();
        e.preventDefault();
        optionalMenubarContext.previousMenu();
        break;
    }
  };
  const onMouseOver = (e) => {
    var _a;
    callHandler(e, local.onMouseOver);
    if (((_a = context.triggerRef()) == null ? void 0 : _a.dataset.pointerType) === "touch") return;
    if (!local.disabled && optionalMenubarContext !== void 0 && optionalMenubarContext.value() !== void 0) {
      optionalMenubarContext.setValue(key);
    }
  };
  const onFocus = (e) => {
    callHandler(e, local.onFocus);
    if (optionalMenubarContext !== void 0 && e.currentTarget.dataset.pointerType !== "touch") optionalMenubarContext.setValue(key);
  };
  createEffect(() => onCleanup(context.registerTriggerId(local.id)));
  return createComponent(ButtonRoot, mergeProps$1({
    get ["data-kb-menu-value-trigger"]() {
      return rootContext.value();
    },
    get id() {
      return local.id;
    },
    get disabled() {
      return local.disabled;
    },
    "aria-haspopup": "true",
    get ["aria-expanded"]() {
      return context.isOpen();
    },
    get ["aria-controls"]() {
      return context.isOpen() ? context.contentId() : void 0;
    },
    get ["data-highlighted"]() {
      return key() !== void 0 && (optionalMenubarContext == null ? void 0 : optionalMenubarContext.value()) === key() ? true : void 0;
    },
    get tabIndex() {
      return optionalMenubarContext !== void 0 ? optionalMenubarContext.value() === key() || optionalMenubarContext.lastValue() === key() ? 0 : -1 : void 0;
    },
    onPointerDown,
    onMouseOver,
    onClick,
    onKeyDown,
    onFocus,
    role: optionalMenubarContext !== void 0 ? "menuitem" : void 0
  }, () => context.dataset(), others));
}
function MenuContentBase(props) {
  let ref;
  const rootContext = useMenuRootContext();
  const context = useMenuContext();
  const optionalMenubarContext = useOptionalMenubarContext();
  const optionalNavigationMenuContext = useOptionalNavigationMenuContext();
  const {
    direction
  } = useLocale();
  const mergedProps = mergeDefaultProps({
    id: rootContext.generateId(`content-${createUniqueId()}`)
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "id", "style", "onOpenAutoFocus", "onCloseAutoFocus", "onEscapeKeyDown", "onFocusOutside", "onPointerEnter", "onPointerMove", "onKeyDown", "onMouseDown", "onFocusIn", "onFocusOut"]);
  let lastPointerX = 0;
  const isRootModalContent = () => {
    return context.parentMenuContext() == null && optionalMenubarContext === void 0 && rootContext.isModal();
  };
  const selectableList = createSelectableList({
    selectionManager: context.listState().selectionManager,
    collection: context.listState().collection,
    autoFocus: context.autoFocus,
    deferAutoFocus: true,
    // ensure all menu items are mounted and collection is not empty before trying to autofocus.
    shouldFocusWrap: true,
    disallowTypeAhead: () => !context.listState().selectionManager().isFocused(),
    orientation: () => rootContext.orientation() === "horizontal" ? "vertical" : "horizontal"
  }, () => ref);
  createFocusScope({
    trapFocus: () => isRootModalContent() && context.isOpen(),
    onMountAutoFocus: (event) => {
      var _a;
      if (optionalMenubarContext === void 0) (_a = local.onOpenAutoFocus) == null ? void 0 : _a.call(local, event);
    },
    onUnmountAutoFocus: local.onCloseAutoFocus
  }, () => ref);
  const onKeyDown = (e) => {
    if (!contains$1(e.currentTarget, e.target)) {
      return;
    }
    if (e.key === "Tab" && context.isOpen()) {
      e.preventDefault();
    }
    if (optionalMenubarContext !== void 0) {
      if (e.currentTarget.getAttribute("aria-haspopup") !== "true") switch (e.key) {
        case MENUBAR_KEYS.next(direction(), rootContext.orientation()):
          e.stopPropagation();
          e.preventDefault();
          context.close(true);
          optionalMenubarContext.setAutoFocusMenu(true);
          optionalMenubarContext.nextMenu();
          break;
        case MENUBAR_KEYS.previous(direction(), rootContext.orientation()):
          if (e.currentTarget.hasAttribute("data-closed")) break;
          e.stopPropagation();
          e.preventDefault();
          context.close(true);
          optionalMenubarContext.setAutoFocusMenu(true);
          optionalMenubarContext.previousMenu();
          break;
      }
    }
  };
  const onEscapeKeyDown = (e) => {
    var _a;
    (_a = local.onEscapeKeyDown) == null ? void 0 : _a.call(local, e);
    optionalMenubarContext == null ? void 0 : optionalMenubarContext.setAutoFocusMenu(false);
    context.close(true);
  };
  const onFocusOutside = (e) => {
    var _a;
    (_a = local.onFocusOutside) == null ? void 0 : _a.call(local, e);
    if (rootContext.isModal()) {
      e.preventDefault();
    }
  };
  const onPointerEnter = (e) => {
    var _a, _b;
    callHandler(e, local.onPointerEnter);
    if (!context.isOpen()) {
      return;
    }
    (_a = context.parentMenuContext()) == null ? void 0 : _a.listState().selectionManager().setFocused(false);
    (_b = context.parentMenuContext()) == null ? void 0 : _b.listState().selectionManager().setFocusedKey(void 0);
  };
  const onPointerMove = (e) => {
    callHandler(e, local.onPointerMove);
    if (e.pointerType !== "mouse") {
      return;
    }
    const target = e.target;
    const pointerXHasChanged = lastPointerX !== e.clientX;
    if (contains$1(e.currentTarget, target) && pointerXHasChanged) {
      context.setPointerDir(e.clientX > lastPointerX ? "right" : "left");
      lastPointerX = e.clientX;
    }
  };
  createEffect(() => onCleanup(context.registerContentId(local.id)));
  onCleanup(() => context.setContentRef(void 0));
  const commonAttributes = {
    ref: mergeRefs((el) => {
      context.setContentRef(el);
      ref = el;
    }, local.ref),
    role: "menu",
    get id() {
      return local.id;
    },
    get tabIndex() {
      return selectableList.tabIndex();
    },
    get "aria-labelledby"() {
      return context.triggerId();
    },
    onKeyDown: composeEventHandlers([local.onKeyDown, selectableList.onKeyDown, onKeyDown]),
    onMouseDown: composeEventHandlers([local.onMouseDown, selectableList.onMouseDown]),
    onFocusIn: composeEventHandlers([local.onFocusIn, selectableList.onFocusIn]),
    onFocusOut: composeEventHandlers([local.onFocusOut, selectableList.onFocusOut]),
    onPointerEnter,
    onPointerMove,
    get "data-orientation"() {
      return rootContext.orientation();
    }
  };
  return createComponent(Show, {
    get when() {
      return context.contentPresent();
    },
    get children() {
      return createComponent(Show, {
        get when() {
          return optionalNavigationMenuContext === void 0 || context.parentMenuContext() != null;
        },
        get fallback() {
          return createComponent(Polymorphic, mergeProps$1({
            as: "div"
          }, () => context.dataset(), commonAttributes, others));
        },
        get children() {
          return createComponent(Popper.Positioner, {
            get children() {
              return createComponent(DismissableLayer, mergeProps$1({
                get disableOutsidePointerEvents() {
                  return isRootModalContent() && context.isOpen();
                },
                get excludedElements() {
                  return [context.triggerRef];
                },
                bypassTopMostLayerCheck: true,
                get style() {
                  return combineStyle({
                    "--kb-menu-content-transform-origin": "var(--kb-popper-content-transform-origin)",
                    position: "relative"
                  }, local.style);
                },
                onEscapeKeyDown,
                onFocusOutside,
                get onDismiss() {
                  return context.close;
                }
              }, () => context.dataset(), commonAttributes, others));
            }
          });
        }
      });
    }
  });
}
function MenuContent(props) {
  const rootContext = useMenuRootContext();
  const context = useMenuContext();
  const [local, others] = splitProps(props, ["ref"]);
  src_default({
    element: () => null,
    enabled: () => context.contentPresent() && rootContext.preventScroll()
  });
  return createComponent(MenuContentBase, others);
}
var MenuGroupContext = createContext();
function useMenuGroupContext() {
  const context = useContext(MenuGroupContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");
  }
  return context;
}
function MenuGroup(props) {
  const rootContext = useMenuRootContext();
  const mergedProps = mergeDefaultProps({
    id: rootContext.generateId(`group-${createUniqueId()}`)
  }, props);
  const [labelId, setLabelId] = createSignal();
  const context = {
    generateId: createGenerateId(() => mergedProps.id),
    registerLabelId: createRegisterId(setLabelId)
  };
  return createComponent(MenuGroupContext.Provider, {
    value: context,
    get children() {
      return createComponent(Polymorphic, mergeProps$1({
        as: "div",
        role: "group",
        get ["aria-labelledby"]() {
          return labelId();
        }
      }, mergedProps));
    }
  });
}
function MenuGroupLabel(props) {
  const context = useMenuGroupContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("label")
  }, props);
  const [local, others] = splitProps(mergedProps, ["id"]);
  createEffect(() => onCleanup(context.registerLabelId(local.id)));
  return createComponent(Polymorphic, mergeProps$1({
    as: "span",
    get id() {
      return local.id;
    },
    "aria-hidden": "true"
  }, others));
}
function MenuIcon(props) {
  const context = useMenuContext();
  const mergedProps = mergeDefaultProps({
    children: "\u25BC"
  }, props);
  return createComponent(Polymorphic, mergeProps$1({
    as: "span",
    "aria-hidden": "true"
  }, () => context.dataset(), mergedProps));
}
function MenuItem(props) {
  return createComponent(MenuItemBase, mergeProps$1({
    role: "menuitem",
    closeOnSelect: true
  }, props));
}
function MenuItemDescription(props) {
  const context = useMenuItemContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("description")
  }, props);
  const [local, others] = splitProps(mergedProps, ["id"]);
  createEffect(() => onCleanup(context.registerDescription(local.id)));
  return createComponent(Polymorphic, mergeProps$1({
    as: "div",
    get id() {
      return local.id;
    }
  }, () => context.dataset(), others));
}
function MenuItemIndicator(props) {
  const context = useMenuItemContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("indicator")
  }, props);
  const [local, others] = splitProps(mergedProps, ["forceMount"]);
  return createComponent(Show, {
    get when() {
      return local.forceMount || context.isChecked();
    },
    get children() {
      return createComponent(Polymorphic, mergeProps$1({
        as: "div"
      }, () => context.dataset(), others));
    }
  });
}
function MenuItemLabel(props) {
  const context = useMenuItemContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("label")
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "id"]);
  createEffect(() => onCleanup(context.registerLabel(local.id)));
  return createComponent(Polymorphic, mergeProps$1({
    as: "div",
    get id() {
      return local.id;
    }
  }, () => context.dataset(), others));
}
function MenuPortal(props) {
  const context = useMenuContext();
  return createComponent(Show, {
    get when() {
      return context.contentPresent();
    },
    get children() {
      return createComponent(Portal, props);
    }
  });
}
var MenuRadioGroupContext = createContext();
function useMenuRadioGroupContext() {
  const context = useContext(MenuRadioGroupContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");
  }
  return context;
}
function MenuRadioGroup(props) {
  const rootContext = useMenuRootContext();
  const defaultId = rootContext.generateId(`radiogroup-${createUniqueId()}`);
  const mergedProps = mergeDefaultProps({
    id: defaultId
  }, props);
  const [local, others] = splitProps(mergedProps, ["value", "defaultValue", "onChange", "disabled"]);
  const [selected, setSelected] = createControllableSignal({
    value: () => local.value,
    defaultValue: () => local.defaultValue,
    onChange: (value) => {
      var _a;
      return (_a = local.onChange) == null ? void 0 : _a.call(local, value);
    }
  });
  const context = {
    isDisabled: () => local.disabled,
    isSelectedValue: (value) => value === selected(),
    setSelectedValue: (value) => setSelected(value)
  };
  return createComponent(MenuRadioGroupContext.Provider, {
    value: context,
    get children() {
      return createComponent(MenuGroup, others);
    }
  });
}
function MenuRadioItem(props) {
  const context = useMenuRadioGroupContext();
  const mergedProps = mergeDefaultProps({
    closeOnSelect: false
  }, props);
  const [local, others] = splitProps(mergedProps, ["value", "onSelect"]);
  const onSelect = () => {
    var _a;
    (_a = local.onSelect) == null ? void 0 : _a.call(local);
    context.setSelectedValue(local.value);
  };
  return createComponent(MenuItemBase, mergeProps$1({
    role: "menuitemradio",
    get checked() {
      return context.isSelectedValue(local.value);
    },
    onSelect
  }, others));
}
function getPointerGraceArea(placement, event, contentEl) {
  const basePlacement = placement.split("-")[0];
  const contentRect = contentEl.getBoundingClientRect();
  const polygon = [];
  const pointerX = event.clientX;
  const pointerY = event.clientY;
  switch (basePlacement) {
    case "top":
      polygon.push([pointerX, pointerY + 5]);
      polygon.push([contentRect.left, contentRect.bottom]);
      polygon.push([contentRect.left, contentRect.top]);
      polygon.push([contentRect.right, contentRect.top]);
      polygon.push([contentRect.right, contentRect.bottom]);
      break;
    case "right":
      polygon.push([pointerX - 5, pointerY]);
      polygon.push([contentRect.left, contentRect.top]);
      polygon.push([contentRect.right, contentRect.top]);
      polygon.push([contentRect.right, contentRect.bottom]);
      polygon.push([contentRect.left, contentRect.bottom]);
      break;
    case "bottom":
      polygon.push([pointerX, pointerY - 5]);
      polygon.push([contentRect.right, contentRect.top]);
      polygon.push([contentRect.right, contentRect.bottom]);
      polygon.push([contentRect.left, contentRect.bottom]);
      polygon.push([contentRect.left, contentRect.top]);
      break;
    case "left":
      polygon.push([pointerX + 5, pointerY]);
      polygon.push([contentRect.right, contentRect.bottom]);
      polygon.push([contentRect.left, contentRect.bottom]);
      polygon.push([contentRect.left, contentRect.top]);
      polygon.push([contentRect.right, contentRect.top]);
      break;
  }
  return polygon;
}
function isPointerInGraceArea(event, area) {
  if (!area) {
    return false;
  }
  return isPointInPolygon([event.clientX, event.clientY], area);
}
function Menu(props) {
  const rootContext = useMenuRootContext();
  const parentDomCollectionContext = useOptionalDomCollectionContext();
  const parentMenuContext = useOptionalMenuContext();
  const optionalMenubarContext = useOptionalMenubarContext();
  const optionalNavigationMenuContext = useOptionalNavigationMenuContext();
  const mergedProps = mergeDefaultProps({
    placement: rootContext.orientation() === "horizontal" ? "bottom-start" : "right-start"
  }, props);
  const [local, others] = splitProps(mergedProps, ["open", "defaultOpen", "onOpenChange"]);
  let pointerGraceTimeoutId = 0;
  let pointerGraceIntent = null;
  let pointerDir = "right";
  const [triggerId, setTriggerId] = createSignal();
  const [contentId, setContentId] = createSignal();
  const [triggerRef, setTriggerRef] = createSignal();
  const [contentRef, setContentRef] = createSignal();
  const [focusStrategy, setFocusStrategy] = createSignal(true);
  const [currentPlacement, setCurrentPlacement] = createSignal(others.placement);
  const [nestedMenus, setNestedMenus] = createSignal([]);
  const [items2, setItems] = createSignal([]);
  const {
    DomCollectionProvider
  } = createDomCollection({
    items: items2,
    onItemsChange: setItems
  });
  const disclosureState = createDisclosureState({
    open: () => local.open,
    defaultOpen: () => local.defaultOpen,
    onOpenChange: (isOpen) => {
      var _a;
      return (_a = local.onOpenChange) == null ? void 0 : _a.call(local, isOpen);
    }
  });
  const {
    present: contentPresent
  } = src_default$1({
    show: () => rootContext.forceMount() || disclosureState.isOpen(),
    element: () => {
      var _a;
      return (_a = contentRef()) != null ? _a : null;
    }
  });
  const listState = createListState({
    selectionMode: "none",
    dataSource: items2
  });
  const open = (focusStrategy2) => {
    setFocusStrategy(focusStrategy2);
    disclosureState.open();
  };
  const close = (recursively = false) => {
    disclosureState.close();
    if (recursively && parentMenuContext) {
      parentMenuContext.close(true);
    }
  };
  const toggle = (focusStrategy2) => {
    setFocusStrategy(focusStrategy2);
    disclosureState.toggle();
  };
  const _focusContent = () => {
    const content = contentRef();
    if (content) {
      focusWithoutScrolling(content);
      listState.selectionManager().setFocused(true);
      listState.selectionManager().setFocusedKey(void 0);
    }
  };
  const focusContent = () => {
    if (optionalNavigationMenuContext != null) setTimeout(() => _focusContent());
    else _focusContent();
  };
  const registerNestedMenu = (element) => {
    setNestedMenus((prev) => [...prev, element]);
    const parentUnregister = parentMenuContext == null ? void 0 : parentMenuContext.registerNestedMenu(element);
    return () => {
      setNestedMenus((prev) => removeItemFromArray(prev, element));
      parentUnregister == null ? void 0 : parentUnregister();
    };
  };
  const isPointerMovingToSubmenu = (e) => {
    const isMovingTowards = pointerDir === (pointerGraceIntent == null ? void 0 : pointerGraceIntent.side);
    return isMovingTowards && isPointerInGraceArea(e, pointerGraceIntent == null ? void 0 : pointerGraceIntent.area);
  };
  const onItemEnter = (e) => {
    if (isPointerMovingToSubmenu(e)) {
      e.preventDefault();
    }
  };
  const onItemLeave = (e) => {
    if (isPointerMovingToSubmenu(e)) {
      return;
    }
    focusContent();
  };
  const onTriggerLeave = (e) => {
    if (isPointerMovingToSubmenu(e)) {
      e.preventDefault();
    }
  };
  createHideOutside({
    isDisabled: () => {
      return !(parentMenuContext == null && disclosureState.isOpen() && rootContext.isModal());
    },
    targets: () => [contentRef(), ...nestedMenus()].filter(Boolean)
  });
  createEffect(() => {
    const contentEl = contentRef();
    if (!contentEl || !parentMenuContext) {
      return;
    }
    const parentUnregister = parentMenuContext.registerNestedMenu(contentEl);
    onCleanup(() => {
      parentUnregister();
    });
  });
  createEffect(() => {
    if (parentMenuContext !== void 0) return;
    optionalMenubarContext == null ? void 0 : optionalMenubarContext.registerMenu(rootContext.value(), [contentRef(), ...nestedMenus()]);
  });
  createEffect(() => {
    var _a;
    if (parentMenuContext !== void 0 || optionalMenubarContext === void 0) return;
    if (optionalMenubarContext.value() === rootContext.value()) {
      (_a = triggerRef()) == null ? void 0 : _a.focus();
      if (optionalMenubarContext.autoFocusMenu()) open(true);
    } else close();
  });
  createEffect(() => {
    if (parentMenuContext !== void 0 || optionalMenubarContext === void 0) return;
    if (disclosureState.isOpen()) optionalMenubarContext.setValue(rootContext.value());
  });
  onCleanup(() => {
    if (parentMenuContext !== void 0) return;
    optionalMenubarContext == null ? void 0 : optionalMenubarContext.unregisterMenu(rootContext.value());
  });
  const dataset = createMemo(() => ({
    "data-expanded": disclosureState.isOpen() ? "" : void 0,
    "data-closed": !disclosureState.isOpen() ? "" : void 0
  }));
  const context = {
    dataset,
    isOpen: disclosureState.isOpen,
    contentPresent,
    nestedMenus,
    currentPlacement,
    pointerGraceTimeoutId: () => pointerGraceTimeoutId,
    autoFocus: focusStrategy,
    listState: () => listState,
    parentMenuContext: () => parentMenuContext,
    triggerRef,
    contentRef,
    triggerId,
    contentId,
    setTriggerRef,
    setContentRef,
    open,
    close,
    toggle,
    focusContent,
    onItemEnter,
    onItemLeave,
    onTriggerLeave,
    setPointerDir: (dir) => pointerDir = dir,
    setPointerGraceTimeoutId: (id) => pointerGraceTimeoutId = id,
    setPointerGraceIntent: (intent) => pointerGraceIntent = intent,
    registerNestedMenu,
    registerItemToParentDomCollection: parentDomCollectionContext == null ? void 0 : parentDomCollectionContext.registerItem,
    registerTriggerId: createRegisterId(setTriggerId),
    registerContentId: createRegisterId(setContentId)
  };
  return createComponent(DomCollectionProvider, {
    get children() {
      return createComponent(MenuContext.Provider, {
        value: context,
        get children() {
          return createComponent(Show, {
            when: optionalNavigationMenuContext === void 0,
            get fallback() {
              return others.children;
            },
            get children() {
              return createComponent(Popper, mergeProps$1({
                anchorRef: triggerRef,
                contentRef,
                onCurrentPlacementChange: setCurrentPlacement
              }, others));
            }
          });
        }
      });
    }
  });
}
function MenuSub(props) {
  const {
    direction
  } = useLocale();
  return createComponent(Menu, mergeProps$1({
    get placement() {
      return direction() === "rtl" ? "left-start" : "right-start";
    },
    flip: true
  }, props));
}
var SUB_CLOSE_KEYS = {
  close: (dir, orientation) => {
    if (dir === "ltr") {
      return [orientation === "horizontal" ? "ArrowLeft" : "ArrowUp"];
    }
    return [orientation === "horizontal" ? "ArrowRight" : "ArrowDown"];
  }
};
function MenuSubContent(props) {
  const context = useMenuContext();
  const rootContext = useMenuRootContext();
  const [local, others] = splitProps(props, ["onFocusOutside", "onKeyDown"]);
  const {
    direction
  } = useLocale();
  const onOpenAutoFocus = (e) => {
    e.preventDefault();
  };
  const onCloseAutoFocus = (e) => {
    e.preventDefault();
  };
  const onFocusOutside = (e) => {
    var _a;
    (_a = local.onFocusOutside) == null ? void 0 : _a.call(local, e);
    const target = e.target;
    if (!contains$1(context.triggerRef(), target)) {
      context.close();
    }
  };
  const onKeyDown = (e) => {
    callHandler(e, local.onKeyDown);
    const isKeyDownInside = contains$1(e.currentTarget, e.target);
    const isCloseKey = SUB_CLOSE_KEYS.close(direction(), rootContext.orientation()).includes(e.key);
    const isSubMenu = context.parentMenuContext() != null;
    if (isKeyDownInside && isCloseKey && isSubMenu) {
      context.close();
      focusWithoutScrolling(context.triggerRef());
    }
  };
  return createComponent(MenuContentBase, mergeProps$1({
    onOpenAutoFocus,
    onCloseAutoFocus,
    onFocusOutside,
    onKeyDown
  }, others));
}
var SELECTION_KEYS = ["Enter", " "];
var SUB_OPEN_KEYS = {
  open: (dir, orientation) => {
    if (dir === "ltr") {
      return [...SELECTION_KEYS, orientation === "horizontal" ? "ArrowRight" : "ArrowDown"];
    }
    return [...SELECTION_KEYS, orientation === "horizontal" ? "ArrowLeft" : "ArrowUp"];
  }
};
function MenuSubTrigger(props) {
  let ref;
  const rootContext = useMenuRootContext();
  const context = useMenuContext();
  const mergedProps = mergeDefaultProps({
    id: rootContext.generateId(`sub-trigger-${createUniqueId()}`)
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "id", "textValue", "disabled", "onPointerMove", "onPointerLeave", "onPointerDown", "onPointerUp", "onClick", "onKeyDown", "onMouseDown", "onFocus"]);
  let openTimeoutId = null;
  const clearOpenTimeout = () => {
    if (isServer) {
      return;
    }
    if (openTimeoutId) {
      window.clearTimeout(openTimeoutId);
    }
    openTimeoutId = null;
  };
  const {
    direction
  } = useLocale();
  const key = () => local.id;
  const parentSelectionManager = () => {
    const parentMenuContext = context.parentMenuContext();
    if (parentMenuContext == null) {
      throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");
    }
    return parentMenuContext.listState().selectionManager();
  };
  const collection = () => context.listState().collection();
  const isHighlighted = () => parentSelectionManager().focusedKey() === key();
  const selectableItem = createSelectableItem({
    key,
    selectionManager: parentSelectionManager,
    shouldSelectOnPressUp: true,
    allowsDifferentPressOrigin: true,
    disabled: () => local.disabled
  }, () => ref);
  const onClick = (e) => {
    callHandler(e, local.onClick);
    if (!context.isOpen() && !local.disabled) {
      context.open(true);
    }
  };
  const onPointerMove = (e) => {
    var _a;
    callHandler(e, local.onPointerMove);
    if (e.pointerType !== "mouse") {
      return;
    }
    const parentMenuContext = context.parentMenuContext();
    parentMenuContext == null ? void 0 : parentMenuContext.onItemEnter(e);
    if (e.defaultPrevented) {
      return;
    }
    if (local.disabled) {
      parentMenuContext == null ? void 0 : parentMenuContext.onItemLeave(e);
      return;
    }
    if (!context.isOpen() && !openTimeoutId) {
      (_a = context.parentMenuContext()) == null ? void 0 : _a.setPointerGraceIntent(null);
      openTimeoutId = window.setTimeout(() => {
        context.open(false);
        clearOpenTimeout();
      }, 100);
    }
    parentMenuContext == null ? void 0 : parentMenuContext.onItemEnter(e);
    if (!e.defaultPrevented) {
      if (context.listState().selectionManager().isFocused()) {
        context.listState().selectionManager().setFocused(false);
        context.listState().selectionManager().setFocusedKey(void 0);
      }
      focusWithoutScrolling(e.currentTarget);
      parentMenuContext == null ? void 0 : parentMenuContext.listState().selectionManager().setFocused(true);
      parentMenuContext == null ? void 0 : parentMenuContext.listState().selectionManager().setFocusedKey(key());
    }
  };
  const onPointerLeave = (e) => {
    callHandler(e, local.onPointerLeave);
    if (e.pointerType !== "mouse") {
      return;
    }
    clearOpenTimeout();
    const parentMenuContext = context.parentMenuContext();
    const contentEl = context.contentRef();
    if (contentEl) {
      parentMenuContext == null ? void 0 : parentMenuContext.setPointerGraceIntent({
        area: getPointerGraceArea(context.currentPlacement(), e, contentEl),
        // Safe because sub menu always open "left" or "right".
        side: context.currentPlacement().split("-")[0]
      });
      window.clearTimeout(parentMenuContext == null ? void 0 : parentMenuContext.pointerGraceTimeoutId());
      const pointerGraceTimeoutId = window.setTimeout(() => {
        parentMenuContext == null ? void 0 : parentMenuContext.setPointerGraceIntent(null);
      }, 300);
      parentMenuContext == null ? void 0 : parentMenuContext.setPointerGraceTimeoutId(pointerGraceTimeoutId);
    } else {
      parentMenuContext == null ? void 0 : parentMenuContext.onTriggerLeave(e);
      if (e.defaultPrevented) {
        return;
      }
      parentMenuContext == null ? void 0 : parentMenuContext.setPointerGraceIntent(null);
    }
    parentMenuContext == null ? void 0 : parentMenuContext.onItemLeave(e);
  };
  const onKeyDown = (e) => {
    callHandler(e, local.onKeyDown);
    if (e.repeat) {
      return;
    }
    if (local.disabled) {
      return;
    }
    if (SUB_OPEN_KEYS.open(direction(), rootContext.orientation()).includes(e.key)) {
      e.stopPropagation();
      e.preventDefault();
      parentSelectionManager().setFocused(false);
      parentSelectionManager().setFocusedKey(void 0);
      if (!context.isOpen()) {
        context.open("first");
      }
      context.focusContent();
      context.listState().selectionManager().setFocused(true);
      context.listState().selectionManager().setFocusedKey(collection().getFirstKey());
    }
  };
  createEffect(() => {
    var _a, _b, _c;
    if (context.registerItemToParentDomCollection == null) {
      throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");
    }
    const unregister = context.registerItemToParentDomCollection({
      ref: () => ref,
      type: "item",
      key: key(),
      textValue: (_b = (_a = local.textValue) != null ? _a : void 0 ) != null ? _b : "",
      disabled: (_c = local.disabled) != null ? _c : false
    });
    onCleanup(unregister);
  });
  createEffect(on(() => {
    var _a;
    return (_a = context.parentMenuContext()) == null ? void 0 : _a.pointerGraceTimeoutId();
  }, (pointerGraceTimer) => {
    onCleanup(() => {
      var _a;
      window.clearTimeout(pointerGraceTimer);
      (_a = context.parentMenuContext()) == null ? void 0 : _a.setPointerGraceIntent(null);
    });
  }));
  createEffect(() => onCleanup(context.registerTriggerId(local.id)));
  onCleanup(() => {
    clearOpenTimeout();
  });
  return createComponent(Polymorphic, mergeProps$1({
    as: "div",
    get id() {
      return local.id;
    },
    role: "menuitem",
    get tabIndex() {
      return selectableItem.tabIndex();
    },
    "aria-haspopup": "true",
    get ["aria-expanded"]() {
      return context.isOpen();
    },
    get ["aria-controls"]() {
      return context.isOpen() ? context.contentId() : void 0;
    },
    get ["aria-disabled"]() {
      return local.disabled;
    },
    get ["data-key"]() {
      return selectableItem.dataKey();
    },
    get ["data-highlighted"]() {
      return isHighlighted() ? "" : void 0;
    },
    get ["data-disabled"]() {
      return local.disabled ? "" : void 0;
    },
    get onPointerDown() {
      return composeEventHandlers([local.onPointerDown, selectableItem.onPointerDown]);
    },
    get onPointerUp() {
      return composeEventHandlers([local.onPointerUp, selectableItem.onPointerUp]);
    },
    get onClick() {
      return composeEventHandlers([onClick, selectableItem.onClick]);
    },
    get onKeyDown() {
      return composeEventHandlers([onKeyDown, selectableItem.onKeyDown]);
    },
    get onMouseDown() {
      return composeEventHandlers([local.onMouseDown, selectableItem.onMouseDown]);
    },
    get onFocus() {
      return composeEventHandlers([local.onFocus, selectableItem.onFocus]);
    },
    onPointerMove,
    onPointerLeave
  }, () => context.dataset(), others));
}
function MenuRoot(props) {
  const optionalMenubarContext = useOptionalMenubarContext();
  const defaultId = `menu-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps({
    id: defaultId,
    modal: true
  }, props);
  const [local, others] = splitProps(mergedProps, ["id", "modal", "preventScroll", "forceMount", "open", "defaultOpen", "onOpenChange", "value", "orientation"]);
  const disclosureState = createDisclosureState({
    open: () => local.open,
    defaultOpen: () => local.defaultOpen,
    onOpenChange: (isOpen) => {
      var _a;
      return (_a = local.onOpenChange) == null ? void 0 : _a.call(local, isOpen);
    }
  });
  const context = {
    isModal: () => {
      var _a;
      return (_a = local.modal) != null ? _a : true;
    },
    preventScroll: () => {
      var _a;
      return (_a = local.preventScroll) != null ? _a : context.isModal();
    },
    forceMount: () => {
      var _a;
      return (_a = local.forceMount) != null ? _a : false;
    },
    generateId: createGenerateId(() => local.id),
    value: () => local.value,
    orientation: () => {
      var _a, _b;
      return (_b = (_a = local.orientation) != null ? _a : optionalMenubarContext == null ? void 0 : optionalMenubarContext.orientation()) != null ? _b : "horizontal";
    }
  };
  return createComponent(MenuRootContext.Provider, {
    value: context,
    get children() {
      return createComponent(Menu, mergeProps$1({
        get open() {
          return disclosureState.isOpen();
        },
        get onOpenChange() {
          return disclosureState.setIsOpen;
        }
      }, others));
    }
  });
}
var dropdown_menu_exports = {};
__export(dropdown_menu_exports, {
  Arrow: () => PopperArrow,
  CheckboxItem: () => MenuCheckboxItem,
  Content: () => DropdownMenuContent$1,
  DropdownMenu: () => DropdownMenu$1,
  Group: () => MenuGroup,
  GroupLabel: () => MenuGroupLabel,
  Icon: () => MenuIcon,
  Item: () => MenuItem,
  ItemDescription: () => MenuItemDescription,
  ItemIndicator: () => MenuItemIndicator,
  ItemLabel: () => MenuItemLabel,
  Portal: () => MenuPortal,
  RadioGroup: () => MenuRadioGroup,
  RadioItem: () => MenuRadioItem,
  Root: () => DropdownMenuRoot,
  Separator: () => SeparatorRoot,
  Sub: () => MenuSub,
  SubContent: () => MenuSubContent,
  SubTrigger: () => MenuSubTrigger,
  Trigger: () => MenuTrigger
});
function DropdownMenuContent$1(props) {
  const rootContext = useMenuRootContext();
  const context = useMenuContext();
  const [local, others] = splitProps(props, ["onCloseAutoFocus", "onInteractOutside"]);
  let hasInteractedOutside = false;
  const onCloseAutoFocus = (e) => {
    var _a;
    (_a = local.onCloseAutoFocus) == null ? void 0 : _a.call(local, e);
    if (!hasInteractedOutside) {
      focusWithoutScrolling(context.triggerRef());
    }
    hasInteractedOutside = false;
    e.preventDefault();
  };
  const onInteractOutside = (e) => {
    var _a;
    (_a = local.onInteractOutside) == null ? void 0 : _a.call(local, e);
    if (!rootContext.isModal() || e.detail.isContextMenu) {
      hasInteractedOutside = true;
    }
  };
  return createComponent(MenuContent, mergeProps$1({
    onCloseAutoFocus,
    onInteractOutside
  }, others));
}
function DropdownMenuRoot(props) {
  const defaultId = `dropdownmenu-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps({
    id: defaultId
  }, props);
  return createComponent(MenuRoot, mergedProps);
}
var DropdownMenu$1 = Object.assign(DropdownMenuRoot, {
  Arrow: PopperArrow,
  CheckboxItem: MenuCheckboxItem,
  Content: DropdownMenuContent$1,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Icon: MenuIcon,
  Item: MenuItem,
  ItemDescription: MenuItemDescription,
  ItemIndicator: MenuItemIndicator,
  ItemLabel: MenuItemLabel,
  Portal: MenuPortal,
  RadioGroup: MenuRadioGroup,
  RadioItem: MenuRadioItem,
  Separator: SeparatorRoot,
  Sub: MenuSub,
  SubContent: MenuSubContent,
  SubTrigger: MenuSubTrigger,
  Trigger: MenuTrigger
});
var dialog_exports = {};
__export(dialog_exports, {
  CloseButton: () => DialogCloseButton,
  Content: () => DialogContent$1,
  Description: () => DialogDescription$1,
  Dialog: () => Dialog$1,
  Overlay: () => DialogOverlay$1,
  Portal: () => DialogPortal$1,
  Root: () => DialogRoot,
  Title: () => DialogTitle$1,
  Trigger: () => DialogTrigger$1,
  useDialogContext: () => useDialogContext
});
var DialogContext = createContext();
function useDialogContext() {
  const context = useContext(DialogContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useDialogContext` must be used within a `Dialog` component");
  }
  return context;
}
function DialogCloseButton(props) {
  const context = useDialogContext();
  const [local, others] = splitProps(props, ["aria-label", "onClick"]);
  const onClick = (e) => {
    callHandler(e, local.onClick);
    context.close();
  };
  return createComponent(ButtonRoot, mergeProps$1({
    get ["aria-label"]() {
      return local["aria-label"] || context.translations().dismiss;
    },
    onClick
  }, others));
}
function DialogContent$1(props) {
  let ref;
  const context = useDialogContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("content")
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "onOpenAutoFocus", "onCloseAutoFocus", "onPointerDownOutside", "onFocusOutside", "onInteractOutside"]);
  let hasInteractedOutside = false;
  let hasPointerDownOutside = false;
  const onPointerDownOutside = (e) => {
    var _a;
    (_a = local.onPointerDownOutside) == null ? void 0 : _a.call(local, e);
    if (context.modal() && e.detail.isContextMenu) {
      e.preventDefault();
    }
  };
  const onFocusOutside = (e) => {
    var _a;
    (_a = local.onFocusOutside) == null ? void 0 : _a.call(local, e);
    if (context.modal()) {
      e.preventDefault();
    }
  };
  const onInteractOutside = (e) => {
    var _a;
    (_a = local.onInteractOutside) == null ? void 0 : _a.call(local, e);
    if (context.modal()) {
      return;
    }
    if (!e.defaultPrevented) {
      hasInteractedOutside = true;
      if (e.detail.originalEvent.type === "pointerdown") {
        hasPointerDownOutside = true;
      }
    }
    if (contains$1(context.triggerRef(), e.target)) {
      e.preventDefault();
    }
    if (e.detail.originalEvent.type === "focusin" && hasPointerDownOutside) {
      e.preventDefault();
    }
  };
  const onCloseAutoFocus = (e) => {
    var _a;
    (_a = local.onCloseAutoFocus) == null ? void 0 : _a.call(local, e);
    if (context.modal()) {
      e.preventDefault();
      focusWithoutScrolling(context.triggerRef());
    } else {
      if (!e.defaultPrevented) {
        if (!hasInteractedOutside) {
          focusWithoutScrolling(context.triggerRef());
        }
        e.preventDefault();
      }
      hasInteractedOutside = false;
      hasPointerDownOutside = false;
    }
  };
  createHideOutside({
    isDisabled: () => !(context.isOpen() && context.modal()),
    targets: () => []
  });
  src_default({
    element: () => null,
    enabled: () => context.contentPresent() && context.preventScroll()
  });
  createFocusScope({
    trapFocus: () => context.isOpen() && context.modal(),
    onMountAutoFocus: local.onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, () => ref);
  createEffect(() => onCleanup(context.registerContentId(others.id)));
  return createComponent(Show, {
    get when() {
      return context.contentPresent();
    },
    get children() {
      return createComponent(DismissableLayer, mergeProps$1({
        role: "dialog",
        tabIndex: -1,
        get disableOutsidePointerEvents() {
          return context.modal() && context.isOpen();
        },
        get excludedElements() {
          return [context.triggerRef];
        },
        get ["aria-labelledby"]() {
          return context.titleId();
        },
        get ["aria-describedby"]() {
          return context.descriptionId();
        },
        get ["data-expanded"]() {
          return context.isOpen() ? "" : void 0;
        },
        get ["data-closed"]() {
          return !context.isOpen() ? "" : void 0;
        },
        onPointerDownOutside,
        onFocusOutside,
        onInteractOutside,
        get onDismiss() {
          return context.close;
        }
      }, others));
    }
  });
}
function DialogDescription$1(props) {
  const context = useDialogContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("description")
  }, props);
  const [local, others] = splitProps(mergedProps, ["id"]);
  createEffect(() => onCleanup(context.registerDescriptionId(local.id)));
  return createComponent(Polymorphic, mergeProps$1({
    as: "p",
    get id() {
      return local.id;
    }
  }, others));
}
function DialogOverlay$1(props) {
  const context = useDialogContext();
  const [local, others] = splitProps(props, ["ref", "style", "onPointerDown"]);
  const onPointerDown = (e) => {
    callHandler(e, local.onPointerDown);
    if (e.target === e.currentTarget) {
      e.preventDefault();
    }
  };
  return createComponent(Show, {
    get when() {
      return context.overlayPresent();
    },
    get children() {
      return createComponent(Polymorphic, mergeProps$1({
        as: "div",
        get style() {
          return combineStyle({
            "pointer-events": "auto"
          }, local.style);
        },
        get ["data-expanded"]() {
          return context.isOpen() ? "" : void 0;
        },
        get ["data-closed"]() {
          return !context.isOpen() ? "" : void 0;
        },
        onPointerDown
      }, others));
    }
  });
}
function DialogPortal$1(props) {
  const context = useDialogContext();
  return createComponent(Show, {
    get when() {
      return context.contentPresent() || context.overlayPresent();
    },
    get children() {
      return createComponent(Portal, props);
    }
  });
}
var DIALOG_INTL_TRANSLATIONS = {
  // `aria-label` of Dialog.CloseButton.
  dismiss: "Dismiss"
};
function DialogRoot(props) {
  const defaultId = `dialog-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps({
    id: defaultId,
    modal: true,
    translations: DIALOG_INTL_TRANSLATIONS
  }, props);
  const [contentId, setContentId] = createSignal();
  const [titleId, setTitleId] = createSignal();
  const [descriptionId, setDescriptionId] = createSignal();
  const [overlayRef, setOverlayRef] = createSignal();
  const [contentRef, setContentRef] = createSignal();
  const [triggerRef, setTriggerRef] = createSignal();
  const disclosureState = createDisclosureState({
    open: () => mergedProps.open,
    defaultOpen: () => mergedProps.defaultOpen,
    onOpenChange: (isOpen) => {
      var _a;
      return (_a = mergedProps.onOpenChange) == null ? void 0 : _a.call(mergedProps, isOpen);
    }
  });
  const shouldMount = () => mergedProps.forceMount || disclosureState.isOpen();
  const {
    present: overlayPresent
  } = src_default$1({
    show: shouldMount,
    element: () => {
      var _a;
      return (_a = overlayRef()) != null ? _a : null;
    }
  });
  const {
    present: contentPresent
  } = src_default$1({
    show: shouldMount,
    element: () => {
      var _a;
      return (_a = contentRef()) != null ? _a : null;
    }
  });
  const context = {
    translations: () => {
      var _a;
      return (_a = mergedProps.translations) != null ? _a : DIALOG_INTL_TRANSLATIONS;
    },
    isOpen: disclosureState.isOpen,
    modal: () => {
      var _a;
      return (_a = mergedProps.modal) != null ? _a : true;
    },
    preventScroll: () => {
      var _a;
      return (_a = mergedProps.preventScroll) != null ? _a : context.modal();
    },
    contentId,
    titleId,
    descriptionId,
    triggerRef,
    overlayRef,
    setOverlayRef,
    contentRef,
    setContentRef,
    overlayPresent,
    contentPresent,
    close: disclosureState.close,
    toggle: disclosureState.toggle,
    setTriggerRef,
    generateId: createGenerateId(() => mergedProps.id),
    registerContentId: createRegisterId(setContentId),
    registerTitleId: createRegisterId(setTitleId),
    registerDescriptionId: createRegisterId(setDescriptionId)
  };
  return createComponent(DialogContext.Provider, {
    value: context,
    get children() {
      return mergedProps.children;
    }
  });
}
function DialogTitle$1(props) {
  const context = useDialogContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("title")
  }, props);
  const [local, others] = splitProps(mergedProps, ["id"]);
  createEffect(() => onCleanup(context.registerTitleId(local.id)));
  return createComponent(Polymorphic, mergeProps$1({
    as: "h2",
    get id() {
      return local.id;
    }
  }, others));
}
function DialogTrigger$1(props) {
  const context = useDialogContext();
  const [local, others] = splitProps(props, ["ref", "onClick"]);
  const onClick = (e) => {
    callHandler(e, local.onClick);
    context.toggle();
  };
  return createComponent(ButtonRoot, mergeProps$1({
    "aria-haspopup": "dialog",
    get ["aria-expanded"]() {
      return context.isOpen();
    },
    get ["aria-controls"]() {
      return context.isOpen() ? context.contentId() : void 0;
    },
    get ["data-expanded"]() {
      return context.isOpen() ? "" : void 0;
    },
    get ["data-closed"]() {
      return !context.isOpen() ? "" : void 0;
    },
    onClick
  }, others));
}
var Dialog$1 = Object.assign(DialogRoot, {
  CloseButton: DialogCloseButton,
  Content: DialogContent$1,
  Description: DialogDescription$1,
  Overlay: DialogOverlay$1,
  Portal: DialogPortal$1,
  Title: DialogTitle$1,
  Trigger: DialogTrigger$1
});
const buttonVariants = cva({
  base: "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer rounded-lg active:scale-95 transition-all duration-200 [&_svg:not([class*='size-'])]:size-4 select-none",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 ",
      destructive: "bg-destructive text-destructive-foreground shadow hover:bg-destructive/90",
      outline: "border border-input hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "gap-2 h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "gap-1.5 h-8 px-3 text-sm has-[>svg]:px-2.5",
      lg: "gap-2 h-10 px-6 text-lg has-[>svg]:px-4",
      icon: "size-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Button = (props) => {
  const [local, others] = splitProps(props, ["variant", "size", "class"]);
  return createComponent(ButtonRoot, mergeProps$1({
    get ["class"]() {
      return cn(buttonVariants({
        variant: local.variant,
        size: local.size
      }), local.class);
    }
  }, others));
};
var _tmpl$$9 = ["<div", ">", "</div>"], _tmpl$2$7 = ["<div", ' class="iconify solar--sidebar-minimalistic-linear" aria-hidden></div>'], _tmpl$3$6 = ["<span", ' class="sr-only">Close</span>'];
const Sheet = DialogRoot;
const portalVariants = cva({
  base: "fixed inset-0 z-50 flex",
  variants: {
    position: {
      top: "items-start",
      bottom: "items-end",
      left: "justify-start",
      right: "justify-end"
    }
  },
  defaultVariants: {
    position: "right"
  }
});
const SheetPortal = (props) => {
  const [local, others] = splitProps(props, ["position", "children"]);
  return createComponent(DialogPortal$1, mergeProps$1(others, {
    get children() {
      return ssr(_tmpl$$9, ssrHydrationKey() + ssrAttribute("class", escape(portalVariants({
        position: local.position
      }), true), false), escape(local.children));
    }
  }));
};
const SheetOverlay = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(DialogOverlay$1, mergeProps$1({
    get ["class"]() {
      return cn("data-[closed=]:fade-out-0 data-[expanded=]:fade-in-0 fixed inset-0 z-50 bg-black/80 data-[closed=]:animate-out data-[expanded=]:animate-in", local.class);
    }
  }, others));
};
const sheetVariants = cva({
  base: "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[closed=]:duration-300 data-[expanded=]:duration-500 data-[expanded=]:animate-in data-[closed=]:animate-out",
  variants: {
    position: {
      top: "inset-x-0 top-0 border-b data-[closed=]:slide-out-to-top data-[expanded=]:slide-in-from-top",
      bottom: "inset-x-0 bottom-0 border-t data-[closed=]:slide-out-to-bottom data-[expanded=]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 border-r data-[closed=]:slide-out-to-left data-[expanded=]:slide-in-from-left sm:max-w-sm",
      right: "inset-y-0 right-0 h-full w-3/4 border-l data-[closed=]:slide-out-to-right data-[expanded=]:slide-in-from-right sm:max-w-sm"
    }
  },
  defaultVariants: {
    position: "right"
  }
});
const SheetContent = (props) => {
  const [local, others] = splitProps(props, ["position", "class", "children"]);
  return createComponent(SheetPortal, {
    get position() {
      return local.position;
    },
    get children() {
      return [createComponent(SheetOverlay, {}), createComponent(DialogContent$1, mergeProps$1({
        get ["class"]() {
          return cn(sheetVariants({
            position: local.position
          }), local.class, "max-h-screen overflow-y-auto");
        }
      }, others, {
        get children() {
          return [local.children, createComponent(DialogCloseButton, {
            "class": "absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
            get children() {
              return [ssr(_tmpl$2$7, ssrHydrationKey()), ssr(_tmpl$3$6, ssrHydrationKey())];
            }
          })];
        }
      }))];
    }
  });
};
const TooltipTrigger = TooltipTrigger$1;
const Tooltip = (props) => {
  return createComponent(TooltipRoot, mergeProps$1({
    gutter: 4
  }, props));
};
const TooltipContent = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(TooltipPortal, {
    get children() {
      return createComponent(TooltipContent$1, mergeProps$1({
        get ["class"]() {
          return cn("fade-in-0 zoom-in-95 z-50 origin-[var(--kb-popover-content-transform-origin)] animate-in overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-popover-foreground text-sm shadow-md", local.class);
        }
      }, others));
    }
  });
};
var _tmpl$$8 = ["<div", ' class="flex size-full flex-col">', "</div>"], _tmpl$2$6 = ['<div data-sidebar="sidebar" class="flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow">', "</div>"], _tmpl$3$5 = ["<div", ' class="group peer hidden md:block"', "><div", "></div>", "</div>"];
const MOBILE_BREAKPOINT = 768;
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = createContext(null);
function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a Sidebar.");
  }
  return context;
}
function useIsMobile(fallback = false) {
  const [isMobile, setIsMobile] = createSignal(fallback);
  createEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = (e) => {
      setIsMobile(e.matches);
    };
    mql.addEventListener("change", onChange);
    onChange(mql);
    onCleanup(() => mql.removeEventListener("change", onChange));
  });
  return isMobile;
}
const SidebarProvider = (rawProps) => {
  const props = mergeProps({
    defaultOpen: true
  }, rawProps);
  const [local, others] = splitProps(props, ["defaultOpen", "open", "onOpenChange", "class", "style", "children"]);
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = createSignal(false);
  const [_open, _setOpen] = createSignal(local.defaultOpen);
  const open = () => {
    var _a;
    return (_a = local.open) != null ? _a : _open();
  };
  const setOpen = (value) => {
    var _a;
    if (local.onOpenChange) {
      return (_a = local.onOpenChange) == null ? void 0 : _a.call(local, typeof value === "function" ? value(open()) : value);
    }
    _setOpen(value);
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${open()}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  };
  const toggleSidebar = () => {
    return isMobile() ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  };
  createEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    onCleanup(() => window.removeEventListener("keydown", handleKeyDown));
  });
  const state = () => open() ? "expanded" : "collapsed";
  const contextValue = {
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar
  };
  return createComponent(SidebarContext.Provider, {
    value: contextValue,
    get children() {
      return ssrElement("div", mergeProps$1({
        get style() {
          return {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...local.style
          };
        },
        get ["class"]() {
          return cn("group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar", local.class);
        }
      }, others), () => escape(local.children), true);
    }
  });
};
const Sidebar = (rawProps) => {
  const props = mergeProps({
    side: "left",
    variant: "sidebar",
    collapsible: "offcanvas"
  }, rawProps);
  const [local, others] = splitProps(props, ["side", "variant", "collapsible", "class", "children"]);
  const {
    isMobile,
    state,
    openMobile,
    setOpenMobile
  } = useSidebar();
  return createComponent(Switch, {
    get children() {
      return [createComponent(Match, {
        get when() {
          return local.collapsible === "none";
        },
        get children() {
          return ssrElement("div", mergeProps$1({
            get ["class"]() {
              return cn("test flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", local.class);
            }
          }, others), () => escape(local.children), true);
        }
      }), createComponent(Match, {
        get when() {
          return isMobile();
        },
        get children() {
          return createComponent(Sheet, mergeProps$1({
            get open() {
              return openMobile();
            },
            onOpenChange: setOpenMobile
          }, others, {
            get children() {
              return createComponent(SheetContent, {
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                "class": "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                  "--sidebar-width": SIDEBAR_WIDTH_MOBILE
                },
                get position() {
                  return local.side;
                },
                get children() {
                  return ssr(_tmpl$$8, ssrHydrationKey(), escape(local.children));
                }
              });
            }
          }));
        }
      }), createComponent(Match, {
        get when() {
          return !isMobile();
        },
        get children() {
          return ssr(_tmpl$3$5, ssrHydrationKey(), ssrAttribute("data-state", escape(state(), true), false) + ssrAttribute("data-collapsible", state() === "collapsed" ? escape(local.collapsible, true) : "", false) + ssrAttribute("data-variant", escape(local.variant, true), false) + ssrAttribute("data-side", escape(local.side, true), false), ssrAttribute("class", escape(cn("relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", local.variant === "floating" || local.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_1rem)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"), true), false), ssrElement("div", mergeProps$1({
            get ["class"]() {
              return cn(
                "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
                local.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                local.variant === "floating" || local.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_1rem_+_2px)]" : "border-border group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
                local.class
              );
            }
          }, others), () => ssr(_tmpl$2$6, escape(local.children)), false));
        }
      })];
    }
  });
};
const SidebarHeader = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("div", mergeProps$1({
    "data-sidebar": "header",
    get ["class"]() {
      return cn("flex flex-col gap-2 p-2", local.class);
    }
  }, others), void 0, true);
};
const SidebarContent = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("div", mergeProps$1({
    "data-sidebar": "content",
    get ["class"]() {
      return cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", local.class);
    }
  }, others), void 0, true);
};
const SidebarGroup = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("div", mergeProps$1({
    "data-sidebar": "group",
    get ["class"]() {
      return cn("relative flex w-full min-w-0 flex-col p-2", local.class);
    }
  }, others), void 0, true);
};
const SidebarGroupLabel = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(Polymorphic, mergeProps$1({
    as: "div",
    "data-sidebar": "group-label",
    get ["class"]() {
      return cn("flex h-8 shrink-0 items-center rounded-md px-2 font-medium text-sidebar-foreground/70 text-xs outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", local.class);
    }
  }, others));
};
const SidebarGroupContent = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("div", mergeProps$1({
    "data-sidebar": "group-content",
    get ["class"]() {
      return cn("w-full text-sm", local.class);
    }
  }, others), void 0, true);
};
const SidebarMenu = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("ul", mergeProps$1({
    "data-sidebar": "menu",
    get ["class"]() {
      return cn("flex w-full min-w-0 flex-col gap-1", local.class);
    }
  }, others), void 0, true);
};
const SidebarMenuItem = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("li", mergeProps$1({
    "data-sidebar": "menu-item",
    get ["class"]() {
      return cn("group/menu-item relative", local.class);
    }
  }, others), void 0, true);
};
const sidebarMenuButtonVariants = cva({
  base: "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  variants: {
    variant: {
      default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
    },
    size: {
      default: "h-8 text-sm",
      sm: "h-7 text-xs",
      lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const SidebarMenuButton = (rawProps) => {
  const props = mergeProps({
    isActive: false,
    variant: "default",
    size: "default"
  }, rawProps);
  const [local, others] = splitProps(props, ["isActive", "tooltip", "variant", "size", "class"]);
  const {
    isMobile,
    state
  } = useSidebar();
  const button = createComponent(Polymorphic, mergeProps$1({
    as: "button",
    "data-sidebar": "menu-button",
    get ["data-size"]() {
      return local.size;
    },
    get ["data-active"]() {
      return local.isActive;
    },
    get ["class"]() {
      return cn(sidebarMenuButtonVariants({
        variant: local.variant,
        size: local.size
      }), local.class);
    }
  }, others));
  return createComponent(Show, {
    get when() {
      return local.tooltip;
    },
    fallback: button,
    get children() {
      return createComponent(Tooltip, {
        placement: "right",
        get children() {
          return [createComponent(TooltipTrigger, {
            "class": "w-full",
            children: button
          }), createComponent(TooltipContent, {
            get hidden() {
              return state() !== "collapsed" || isMobile();
            },
            get children() {
              return local.tooltip;
            }
          })];
        }
      });
    }
  });
};
const Avatar = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(ImageRoot, mergeProps$1({
    get ["class"]() {
      return cn("relative flex size-8 shrink-0 overflow-hidden rounded-lg", local.class);
    }
  }, others));
};
const AvatarImage = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(ImageImg, mergeProps$1({
    get ["class"]() {
      return cn("aspect-square size-full", local.class);
    }
  }, others));
};
const AvatarFallback = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(ImageFallback, mergeProps$1({
    get ["class"]() {
      return cn("flex size-full items-center justify-center rounded-lg bg-muted", local.class);
    }
  }, others));
};
const DropdownMenuGroup = MenuGroup;
const DropdownMenuTrigger = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return createComponent(MenuTrigger, mergeProps$1({
    get ["class"]() {
      return cn("inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-secondary px-5 py-2 font-medium text-secondary-foreground text-sm shadow outline-none hover:bg-secondary/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none", props.class);
    }
  }, rest));
};
const DropdownMenu = (props) => {
  return createComponent(DropdownMenuRoot, mergeProps$1({
    gutter: 4
  }, props));
};
const DropdownMenuContent = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return createComponent(MenuPortal, {
    get children() {
      return createComponent(DropdownMenuContent$1, mergeProps$1({
        get ["class"]() {
          return cn("z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] animate-content-hide overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[expanded]:animate-content-show", props.class);
        }
      }, rest));
    }
  });
};
const DropdownMenuItem = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return createComponent(MenuItem, mergeProps$1({
    get ["class"]() {
      return cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", props.class);
    }
  }, rest));
};
const DropdownMenuSeparator = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return createComponent(SeparatorRoot, mergeProps$1({
    get ["class"]() {
      return cn("-mx-1 my-1 h-px bg-muted", props.class);
    }
  }, rest));
};
const DropdownMenuGroupLabel = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return createComponent(MenuGroupLabel, mergeProps$1({
    get ["class"]() {
      return cn("px-2 py-1.5 font-semibold text-sm", props.class);
    }
  }, rest));
};
var _tmpl$$7 = ["<div", ' class="iconify solar--close-square-bold block" aria-hidden></div>'], _tmpl$2$5 = ["<span", ' class="sr-only">Close</span>'];
const Dialog = DialogRoot;
const DialogTrigger = DialogTrigger$1;
const DialogClose = DialogCloseButton;
const DialogPortal = (props) => {
  const [local, rest] = splitProps(props, ["children"]);
  return createComponent(DialogPortal$1, mergeProps$1(rest, {
    get children() {
      return local.children;
    }
  }));
};
const DialogOverlay = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(DialogOverlay$1, mergeProps$1({
    get ["class"]() {
      return cn("data-[closed]:fade-out-0 data-[expanded]:fade-in-0 fixed inset-0 z-50 bg-black/10 backdrop-blur-sm data-[closed]:animate-out data-[expanded]:animate-in", local.class);
    }
  }, rest));
};
const DialogContent = (props) => {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return createComponent(DialogPortal, {
    get children() {
      return [createComponent(DialogOverlay, {}), createComponent(DialogContent$1, mergeProps$1({
        get ["class"]() {
          return cn("data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid max-h-[calc(100%-2rem)] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border border-accent/40 bg-background p-6 duration-200 data-[closed]:animate-out data-[expanded]:animate-in", local.class);
        }
      }, rest, {
        get children() {
          return [local.children, createComponent(DialogClose, {
            "class": "absolute top-4 right-4 rounded-sm bg-black outline-primary focus:outline-2",
            get children() {
              return [ssr(_tmpl$$7, ssrHydrationKey()), ssr(_tmpl$2$5, ssrHydrationKey())];
            }
          })];
        }
      }))];
    }
  });
};
const DialogHeader = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return ssrElement("div", mergeProps$1({
    get ["class"]() {
      return cn("flex flex-col space-y-1.5 text-center sm:text-left ", local.class);
    }
  }, rest), void 0, true);
};
const DialogFooter = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return ssrElement("div", mergeProps$1({
    get ["class"]() {
      return cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end ", local.class);
    }
  }, rest), void 0, true);
};
const DialogTitle = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(DialogTitle$1, mergeProps$1({
    get ["class"]() {
      return cn("font-semibold text-lg leading-none tracking-tight", local.class);
    }
  }, rest));
};
const DialogDescription = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(DialogDescription$1, mergeProps$1({
    get ["class"]() {
      return cn("text-muted-foreground text-sm", local.class);
    }
  }, rest));
};
var _tmpl$$6 = ["<div", ' class="slide-in-from-left-50 flex h-3/4 animate-in flex-col justify-center gap-4 md:h-1/2"><!--$-->', "<!--/--><form>", "</form></div>"], _tmpl$2$4 = ["<div", ' class="iconify solar--user-plus-rounded-linear size-5"></div>'], _tmpl$3$4 = ["<div", ' class="flex w-full items-center gap-2"><div class="relative w-full"><!--$-->', '<!--/--><div class="iconify -translate-y-1/2 solar--users-group-two-rounded-linear absolute top-1/2 left-2 "></div></div><!--$-->', "<!--/--></div>"];
function AddCollaborators() {
  const form = createForm(() => ({
    defaultValues: {
      email: ""
    },
    onSubmit: async ({
      value
    }) => {
      await addCollaborator({
        data: {
          email: value.email
        }
      });
      form.reset();
    }
  }));
  return ssr(_tmpl$$6, ssrHydrationKey(), escape(createComponent(DialogHeader, {
    get children() {
      return [createComponent(DialogTitle, {
        "class": "text-left text-2xl",
        children: "Add collaborators."
      }), createComponent(DialogDescription, {
        "class": "text-left",
        children: "Invite your team members to collaborate on this workspace with you."
      })];
    }
  })), escape(createComponent(form.Field, {
    name: "email",
    validators: {
      onChange: ({
        fieldApi
      }) => {
        const errors = fieldApi.parseValueWithSchema(email.get("email"));
        if (errors) {
          return errors;
        }
      }
    },
    children: (field) => createComponent(TextField, {
      "class": "w-full",
      get validationState() {
        return field().state.meta.errors.length > 0 ? "invalid" : "valid";
      },
      get children() {
        return [createComponent(TextFieldLabel, {
          "class": "sr-only",
          children: "Email"
        }), ssr(_tmpl$3$4, ssrHydrationKey(), escape(createComponent(TextFieldInput, {
          placeholder: "jonn@jonzz.com",
          "class": "peer pl-9 placeholder-shown:",
          get id() {
            return field().name;
          },
          get value() {
            return field().state.value;
          },
          onInput: (e) => field().handleChange(e.target.value),
          onKeyDown: (e) => {
            if (e.key === " " || e.key === "Spacebar") {
              e.preventDefault();
            }
          }
        })), escape(createComponent(Button, {
          type: "submit",
          size: "icon",
          get children() {
            return ssr(_tmpl$2$4, ssrHydrationKey());
          }
        }))), createComponent(TextFieldErrorMessage, {
          get error() {
            return field().state.meta.errors.join(",");
          }
        })];
      }
    })
  })));
}
var _tmpl$$5 = ["<div", ' class="', '"><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"], _tmpl$2$3 = ["<div", ' class="iconify tabler--loader-3 -translate-y-1/2 absolute top-1/2 right-2 animate-spin "></div>'], _tmpl$3$3 = ["<div", ' class="iconify solar--check-read-linear -translate-y-1/2 absolute top-1/2 right-2 text-green-600"></div>'], _tmpl$4$3 = ["<div", ' class="iconify tabler--alert-square-rounded -translate-y-1/2 absolute top-1/2 right-2 text-destructive"></div>'], _tmpl$5$2 = ["<div", ' class="flex w-full items-center gap-2"><!--$-->', '<!--/--><div class="relative isolate w-full"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div></div>"], _tmpl$6$1 = ["<p", ' class="ml-11 text-muted-foreground text-xs"><!--$-->', "<!--/-->.anchkor.com</p>"];
function AddName({
  form,
  direction
}) {
  const logoUrl = form.useStore((state) => state.values.logo);
  return ssr(_tmpl$$5, ssrHydrationKey(), ` flex h-3/4 animate-in flex-col justify-center gap-4 md:h-1/2 ${direction() === "forward" ? "slide-in-from-left-50" : "slide-in-from-right-50"}`, escape(createComponent(DialogHeader, {
    get children() {
      return [createComponent(DialogTitle, {
        "class": "text-left text-2xl",
        children: "Choose a workspace name."
      }), createComponent(DialogDescription, {
        "class": "text-left",
        children: "What should we call this workspace? Usually, this is your product name"
      })];
    }
  })), escape(createComponent(form.Field, {
    name: "name",
    validators: {
      onMount: ({
        fieldApi
      }) => {
        const errors = fieldApi.parseValueWithSchema(workspaceSchema.get("name"));
        if (errors) {
          return errors;
        }
      },
      onChangeAsyncDebounceMs: 500,
      onChangeAsync: async ({
        fieldApi,
        value
      }) => {
        const errors = fieldApi.parseValueWithSchema(workspaceSchema.get("name"));
        if (errors) {
          return errors;
        }
        try {
          const isTakenUrl = await findWorkspaceUrl({
            data: {
              url: value
            }
          });
          if (isTakenUrl) {
            return "This subdomain is already taken";
          }
          fieldApi.form.setFieldValue("workspaceUrl", `${value}.anchkor.com`);
        } catch (error) {
          console.error("Error fetching website data:", error);
          return "Failed to get the domain availability";
        }
      }
    },
    children: (field) => createComponent(TextField, {
      "class": "w-full",
      get validationState() {
        return field().state.meta.errors.length > 0 ? "invalid" : "valid";
      },
      get children() {
        return [createComponent(TextFieldLabel, {
          "class": "sr-only",
          children: "Workspace Name"
        }), ssr(_tmpl$5$2, ssrHydrationKey(), escape(createComponent(Avatar, {
          "class": "size-9 rounded-lg",
          get children() {
            return [createComponent(AvatarImage, {
              get src() {
                return logoUrl();
              }
            }), createComponent(AvatarFallback, {
              get children() {
                return field().state.value.slice(0, 2);
              }
            })];
          }
        })), escape(createComponent(TextFieldInput, {
          placeholder: "eg: supercoolwebsite",
          get id() {
            return field().name;
          },
          get value() {
            return field().state.value;
          },
          onInput: (e) => field().handleChange(e.target.value.replace(/\s/g, "").toLowerCase()),
          onKeyDown: (e) => {
            if (e.key === " " || e.key === "Spacebar") {
              e.preventDefault();
            }
          },
          get ["class"]() {
            return `data-[invalid='']:focus-visible:ring-destructive ${field().state.meta.errors.length > 0 ? "focus-visible:ring-destructive" : ""}`;
          }
        })), escape(createComponent(Show, {
          get when() {
            return field().state.meta.isValidating;
          },
          get children() {
            return ssr(_tmpl$2$3, ssrHydrationKey());
          }
        })), escape(createComponent(Show, {
          get when() {
            return !field().state.meta.errors.length && !field().state.meta.isValidating;
          },
          get children() {
            return ssr(_tmpl$3$3, ssrHydrationKey());
          }
        })), escape(createComponent(Show, {
          get when() {
            return field().state.meta.errors.length > 0 && !field().state.meta.isValidating;
          },
          get children() {
            return ssr(_tmpl$4$3, ssrHydrationKey());
          }
        }))), createComponent(TextFieldErrorMessage, {
          "class": " ml-12",
          get error() {
            return field().state.meta.errors.join(",");
          }
        }), createComponent(Show, {
          get when() {
            return !field().state.meta.errors.length && !field().state.meta.isValidating;
          },
          get children() {
            return ssr(_tmpl$6$1, ssrHydrationKey(), escape(field().state.value));
          }
        })];
      }
    })
  })));
}
var _tmpl$$4 = ["<div", ' class="slide-in-from-right-50 flex h-3/4 animate-in flex-col justify-center gap-4 md:h-1/2"><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"], _tmpl$2$2 = ["<div", ' class="iconify tabler--loader-3 -translate-y-1/2 absolute top-1/2 right-2 animate-spin "></div>'], _tmpl$3$2 = ["<div", ' class="iconify solar--check-read-linear -translate-y-1/2 absolute top-1/2 right-2 text-green-600"></div>'], _tmpl$4$2 = ["<div", ' class="iconify tabler--alert-square-rounded -translate-y-1/2 absolute top-1/2 right-2 text-destructive"></div>'], _tmpl$5$1 = ["<div", ' class="flex w-full items-center gap-2"><!--$-->', '<!--/--><div class="relative isolate w-full"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div></div>"];
function AddWebsite({
  form
}) {
  const logoUrl = form.useStore((state) => state.values.logo);
  return ssr(_tmpl$$4, ssrHydrationKey(), escape(createComponent(DialogHeader, {
    get children() {
      return [createComponent(DialogTitle, {
        "class": "text-left text-2xl",
        children: "First things first."
      }), createComponent(DialogDescription, {
        "class": "text-left",
        children: "Which website do you want to collect feedback for?"
      })];
    }
  })), escape(createComponent(form.Field, {
    name: "domain",
    validators: {
      onChangeAsyncDebounceMs: 500,
      onChangeAsync: async ({
        value,
        fieldApi
      }) => {
        var _a;
        const domain = parse(value);
        if (!domain.isIcann) {
          return "Please enter a valid domain";
        }
        try {
          const data = await getWebsiteData({
            data: {
              domain: value
            }
          });
          console.log(data);
          fieldApi.form.setFieldValue("name", value.split(".")[0]);
          fieldApi.form.setFieldValue("logo", (_a = data.logoUrl) != null ? _a : "");
          fieldApi.form.setFieldValue("title", data.title);
          fieldApi.form.setFieldValue("description", data.description);
        } catch (error) {
          console.error("Error fetching website data:", error);
          return "Failed to find this domain";
        }
      }
    },
    listeners: {
      onChange: ({
        fieldApi
      }) => {
        fieldApi.form.setFieldValue("logo", "");
        fieldApi.form.setFieldValue("name", "");
        fieldApi.form.setFieldValue("title", "");
        fieldApi.form.setFieldValue("description", "");
      }
    },
    children: (field) => createComponent(TextField, {
      "class": "w-full",
      get validationState() {
        return field().state.meta.errors.length > 0 ? "invalid" : "valid";
      },
      get children() {
        return [createComponent(TextFieldLabel, {
          "class": "sr-only",
          children: "Website URL"
        }), ssr(_tmpl$5$1, ssrHydrationKey(), escape(createComponent(Show, {
          get when() {
            return logoUrl();
          },
          get children() {
            return createComponent(Avatar, {
              "class": "slide-in-from-left size-9 animate-in rounded-lg",
              get children() {
                return [createComponent(AvatarImage, {
                  get src() {
                    return logoUrl();
                  }
                }), createComponent(AvatarFallback, {
                  get children() {
                    return field().state.value.slice(0, 2);
                  }
                })];
              }
            });
          }
        })), escape(createComponent(TextFieldInput, {
          placeholder: "eg: supercoolwebsite.com",
          get id() {
            return field().name;
          },
          get value() {
            return field().state.value;
          },
          onInput: (e) => field().handleChange(e.target.value.toLowerCase()),
          get ["class"]() {
            return `transition-[width] duration-200 ease-in data-[invalid='']:focus-visible:ring-destructive ${field().state.meta.errors.length > 0 ? "focus-visible:ring-destructive" : ""}`;
          }
        })), escape(createComponent(Show, {
          get when() {
            return field().state.meta.isValidating;
          },
          get children() {
            return ssr(_tmpl$2$2, ssrHydrationKey());
          }
        })), escape(createComponent(Show, {
          get when() {
            return field().state.meta.isValid && !field().state.meta.isValidating && !field().state.meta.isPristine;
          },
          get children() {
            return ssr(_tmpl$3$2, ssrHydrationKey());
          }
        })), escape(createComponent(Show, {
          get when() {
            return field().state.meta.errors.length > 0;
          },
          get children() {
            return ssr(_tmpl$4$2, ssrHydrationKey());
          }
        }))), createComponent(TextFieldErrorMessage, {
          get error() {
            return field().state.meta.errors.join(",");
          }
        })];
      }
    })
  })));
}
var _tmpl$$3 = ["<div", ' class="slide-in-from-right-50 flex h-3/4 animate-in flex-col justify-center gap-4 md:h-1/2"><!--$-->', '<!--/--><p class="text-left text-foreground">Click on the workspace to start collecting feedback.</p></div>'];
function FinishCreation() {
  return ssr(_tmpl$$3, ssrHydrationKey(), escape(createComponent(DialogHeader, {
    get children() {
      return [createComponent(DialogTitle, {
        "class": "text-left text-2xl",
        children: "All set!"
      }), createComponent(DialogDescription, {
        "class": "text-left",
        children: "Your workspace is ready to go!"
      })];
    }
  })));
}
var _tmpl$$2 = ["<div", ' class="iconify mynaui--plus-solid"></div>'], _tmpl$2$1 = ["<div", ' class="iconify solar--arrow-right-linear"></div>'], _tmpl$3$1 = ["<div", ' class="iconify solar--arrow-left-linear"></div>'], _tmpl$4$1 = ["<div", ' class="iconify tabler--loader-3 animate-spin"></div>'], _tmpl$5 = ["<form", ">", "</form>"], _tmpl$6 = ["<div", ' class="flex w-full flex-col gap-2 bg-zinc-900 px-3 py-5 "><div class="flex h-fit gap-1">', '</div><div class="flex h-full flex-col items-start justify-between space-y-4 overflow-hidden p-px"><!--$-->', "<!--/--><!--$-->", "<!--/--></div></div>"], _tmpl$7 = ["<div", ' class="hidden overflow-y-hidden border-l bg-zinc-900/40 md:block"><img src="onboarding3.webp" alt="onboarding" width="500" height="500" class=" h-[500px] object-contain"></div>'], _tmpl$8 = ["<span", ' class="', '"></span>'];
function WorkspaceCreationDialog() {
  const {
    createWorkspaceForm: form,
    step,
    setPrevStep,
    setStep,
    direction
  } = useCreateWorkspace();
  function handleNextStep() {
    if (step() >= 4) {
      setStep(1);
      return;
    }
    setPrevStep(step());
    setStep(step() + 1);
  }
  function handlePreviousStep() {
    if (step() <= 1) return;
    setPrevStep(step());
    setStep(step() - 1);
  }
  const canSubmit = form.useStore((state) => state.canSubmit);
  const isLoading = form.useStore((state) => state.isSubmitting);
  const isValidating = form.useStore((state) => {
    var _a;
    return (_a = state.fieldMeta.domain) == null ? void 0 : _a.isValidating;
  });
  const validDomain = form.useStore((state) => {
    var _a;
    return (_a = state.fieldMeta.domain) == null ? void 0 : _a.isValid;
  });
  const isPristine = form.useStore((state) => {
    var _a;
    return (_a = state.fieldMeta.domain) == null ? void 0 : _a.isPristine;
  });
  return createComponent(Dialog, {
    get children() {
      return [createComponent(DialogTrigger, {
        as: Button,
        size: "sm",
        variant: "ghost",
        "class": "w-full justify-between",
        get children() {
          return ["Create workspace", ssr(_tmpl$$2, ssrHydrationKey())];
        }
      }), createComponent(DialogContent, {
        "class": "h-80 gap-0 overflow-auto p-0 sm:max-w-3xl md:grid md:min-h-[500px] md:w-3xl md:grid-cols-2",
        get children() {
          return [ssr(_tmpl$6, ssrHydrationKey(), escape(createComponent(For, {
            get each() {
              return Array.from({
                length: 4
              }, (_, i) => i + 1);
            },
            children: (item) => ssr(_tmpl$8, ssrHydrationKey(), `h-1.5 rounded-lg transition-[width,height] duration-200 ease-in-out ${step() === item ? "w-6 bg-accent-foreground" : "w-3 bg-accent"}`)
          })), escape(createComponent(Switch, {
            get children() {
              return [createComponent(Match, {
                get when() {
                  return step() === 1;
                },
                get children() {
                  return createComponent(AddWebsite, {
                    form
                  });
                }
              }), createComponent(Match, {
                get when() {
                  return step() === 2;
                },
                get children() {
                  return createComponent(AddName, {
                    form,
                    direction
                  });
                }
              }), createComponent(Match, {
                get when() {
                  return step() === 3;
                },
                get children() {
                  return createComponent(AddCollaborators, {});
                }
              }), createComponent(Match, {
                get when() {
                  return step() === 4;
                },
                get children() {
                  return createComponent(FinishCreation, {});
                }
              })];
            }
          })), escape(createComponent(DialogFooter, {
            "class": "flex w-full flex-row items-center justify-end",
            get children() {
              return createComponent(Switch, {
                get children() {
                  return [createComponent(Match, {
                    get when() {
                      return step() === 1;
                    },
                    get children() {
                      return createComponent(Button, {
                        get disabled() {
                          return isValidating() || !validDomain() || isPristine();
                        },
                        variant: "default",
                        onClick: handleNextStep,
                        get children() {
                          return ["Continue", ssr(_tmpl$2$1, ssrHydrationKey())];
                        }
                      });
                    }
                  }), createComponent(Match, {
                    get when() {
                      return step() === 2;
                    },
                    get children() {
                      return [createComponent(Button, {
                        variant: "default",
                        size: "sm",
                        onClick: handlePreviousStep,
                        get children() {
                          return [ssr(_tmpl$3$1, ssrHydrationKey()), "Back"];
                        }
                      }), ssr(_tmpl$5, ssrHydrationKey(), escape(createComponent(Button, {
                        get disabled() {
                          return !canSubmit() || isLoading();
                        },
                        variant: "default",
                        size: "sm",
                        type: "submit",
                        get children() {
                          return createComponent(Show, {
                            get when() {
                              return isLoading();
                            },
                            get fallback() {
                              return ["Create workspace", ssr(_tmpl$2$1, ssrHydrationKey())];
                            },
                            get children() {
                              return ["Creating workspace", ssr(_tmpl$4$1, ssrHydrationKey())];
                            }
                          });
                        }
                      })))];
                    }
                  }), createComponent(Match, {
                    get when() {
                      return step() === 3;
                    },
                    get children() {
                      return createComponent(Button, {
                        variant: "default",
                        size: "sm",
                        onClick: handleNextStep,
                        get children() {
                          return ["Skip ", ssr(_tmpl$2$1, ssrHydrationKey())];
                        }
                      });
                    }
                  }), createComponent(Match, {
                    get when() {
                      return step() === 4;
                    },
                    get children() {
                      return createComponent(DialogClose, {
                        as: Button,
                        variant: "default",
                        "on:click": handleNextStep,
                        get children() {
                          return ["Start collecting", ssr(_tmpl$2$1, ssrHydrationKey())];
                        }
                      });
                    }
                  })];
                }
              });
            }
          }))), ssr(_tmpl$7, ssrHydrationKey())];
        }
      })];
    }
  });
}
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
    }
  };
});
function createMutators({ authData }) {
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
      create: async (tx, workspace) => {
        if (!authData) throw new Error("Not authenticated");
        const id = nanoid();
        try {
          await tx.mutate.workspace.insert({
            id,
            name: workspace.name,
            domain: workspace.domain,
            organizationId: "MR7wSx5lyqDCeMc96f1ovf0ZUw62cEL1",
            workspaceUrl: workspace.workspaceUrl,
            logo: workspace.logo,
            createdAt: Date.now(),
            updatedAt: Date.now()
          });
        } catch (err) {
          console.error("error adding workspace", err);
          throw err;
        }
      }
    }
  };
}
const Context = createContext();
function ZeroContext(props) {
  const loaderData = useLoaderData({
    from: "/_layout"
  });
  const z = createMemo(() => {
    return createZero({
      userID: loaderData().user.id,
      auth: async (error) => {
        return loaderData().jwt;
      },
      server: "http://localhost:4848",
      schema,
      // kvStore: "idb",
      mutators: createMutators({
        authData: loaderData().user.id
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
const zeroApp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ZeroContext,
  useZero
}, Symbol.toStringTag, { value: "Module" }));
var _tmpl$$1 = ["<div", ' class="', '"></div>'], _tmpl$2 = ["<div", ' class="flex items-center gap-2"><!--$-->', '<!--/--><span class="truncate font-semibold text-lg first-letter:capitalize">', "</span></div>"], _tmpl$3 = ["<div", ' class="iconify mynaui--chevron-up-down" aria-hidden></div>'], _tmpl$4 = ["<span", ">", "</span>"];
const Icon = (props) => ssr(_tmpl$$1, ssrHydrationKey(), `iconify ${escape(props.class, true)}`);
const items = [{
  title: "Pending",
  url: "/",
  icon: "solar--inbox-archive-bold-duotone bg-yellow-500"
}, {
  title: "Reviewing",
  url: "/",
  icon: "solar--card-search-bold-duotone bg-blue-500"
}, {
  title: "Planned",
  url: "/",
  icon: "solar--calendar-mark-bold-duotone bg-purple-500"
}, {
  title: "Completed",
  url: "/",
  icon: "solar--archive-minimalistic-bold-duotone bg-green-500"
}, {
  title: "Closed",
  url: "/",
  icon: "solar--archive-down-minimlistic-bold-duotone bg-gray-500"
}];
const feedbackItems = [{
  title: "Boards",
  url: ".",
  icon: "tabler--circle-dashed"
}];
function AppSidebar() {
  useParams({
    from: "/_layout/$workspaceId"
  });
  const routerContext = useRouteContext({
    from: "/_layout/$workspaceId"
  });
  const z = useZero();
  const [workspace] = createQuery(() => z().query.workspace.whereExists("member", (m) => m.where("userId", "=", z().userID)).limit(20));
  return createComponent(Sidebar, {
    get children() {
      return [createComponent(SidebarHeader, {
        "class": "bg-background font-semibold",
        get children() {
          return createComponent(DropdownMenu, {
            sameWidth: true,
            get children() {
              return [createComponent(DropdownMenuTrigger, {
                "class": "justify-between px-1.5",
                get children() {
                  var _a;
                  return [ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent(Avatar, {
                    "class": "size-8 ",
                    get children() {
                      return [createComponent(AvatarImage, {
                        get src() {
                          var _a2;
                          return ((_a2 = routerContext().currentWorkspace) == null ? void 0 : _a2.logo) || "";
                        }
                      }), createComponent(AvatarFallback, {
                        "class": "uppercase",
                        get children() {
                          var _a2;
                          return (_a2 = routerContext().currentWorkspace) == null ? void 0 : _a2.name.slice(0, 2);
                        }
                      })];
                    }
                  })), escape((_a = routerContext().currentWorkspace) == null ? void 0 : _a.name) || "No Workspace Selected"), ssr(_tmpl$3, ssrHydrationKey())];
                }
              }), createComponent(DropdownMenuContent, {
                get children() {
                  return [createComponent(DropdownMenuGroup, {
                    get children() {
                      return [createComponent(DropdownMenuGroupLabel, {
                        "class": "text-muted-foreground text-xs/tight",
                        children: "Workspaces"
                      }), createComponent(For, {
                        get each() {
                          return workspace();
                        },
                        children: (item) => createComponent(DropdownMenuItem, {
                          "class": "relative isolate overflow-clip",
                          get children() {
                            return [createComponent(Avatar, {
                              "class": "size-5",
                              get children() {
                                return [createComponent(AvatarImage, {
                                  get src() {
                                    return item.logo || "";
                                  }
                                }), createComponent(AvatarFallback, {
                                  "class": "uppercase",
                                  get children() {
                                    return item.name.slice(0, 2);
                                  }
                                })];
                              }
                            }), ssr(_tmpl$4, ssrHydrationKey(), escape(item.name)), createComponent(Link, {
                              "class": "absolute inset-0 z-20",
                              to: "/$workspaceId",
                              get params() {
                                return {
                                  workspaceId: item.id
                                };
                              }
                            })];
                          }
                        })
                      })];
                    }
                  }), createComponent(DropdownMenuSeparator, {}), createComponent(DropdownMenuGroup, {
                    get children() {
                      return [createComponent(DropdownMenuGroupLabel, {
                        "class": "text-muted-foreground text-xs/tight",
                        children: "Actions"
                      }), createComponent(DropdownMenuItem, {
                        as: WorkspaceCreationDialog
                      })];
                    }
                  })];
                }
              })];
            }
          });
        }
      }), createComponent(SidebarContent, {
        "class": "bg-background",
        get children() {
          return [createComponent(SidebarGroup, {
            get children() {
              return [createComponent(SidebarGroupLabel, {
                children: "Feedbacks"
              }), createComponent(SidebarGroupContent, {
                get children() {
                  return createComponent(SidebarMenu, {
                    get children() {
                      return createComponent(For, {
                        each: items,
                        children: (item) => createComponent(SidebarMenuItem, {
                          get children() {
                            return createComponent(Link, {
                              get ["class"]() {
                                return sidebarMenuButtonVariants({
                                  variant: "default",
                                  size: "default"
                                });
                              },
                              get to() {
                                return item.url;
                              },
                              get children() {
                                return [createComponent(Icon, {
                                  get ["class"]() {
                                    return item.icon;
                                  }
                                }), ssr(_tmpl$4, ssrHydrationKey(), escape(item.title))];
                              }
                            });
                          }
                        })
                      });
                    }
                  });
                }
              })];
            }
          }), createComponent(SidebarGroup, {
            get children() {
              return [createComponent(SidebarGroupLabel, {
                children: "Feedbacks"
              }), createComponent(SidebarGroupContent, {
                get children() {
                  return createComponent(SidebarMenu, {
                    get children() {
                      return createComponent(For, {
                        each: feedbackItems,
                        children: (item) => createComponent(SidebarMenuItem, {
                          get children() {
                            return createComponent(SidebarMenuButton, {
                              as: Link,
                              get to() {
                                return item.url;
                              },
                              get children() {
                                return [createComponent(Icon, {
                                  get ["class"]() {
                                    return item.icon;
                                  }
                                }), ssr(_tmpl$4, ssrHydrationKey(), escape(item.title))];
                              }
                            });
                          }
                        })
                      });
                    }
                  });
                }
              })];
            }
          })];
        }
      })];
    }
  });
}
var _tmpl$ = ["<div", ' class="flex w-full items-center gap-1"><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"];
const ZeroApp = lazy(() => Promise.resolve().then(() => zeroApp));
const SplitComponent = function RouteComponent() {
  return createComponent(ZeroApp, {
    get children() {
      return createComponent(SidebarProvider, {
        get children() {
          return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(AppSidebar, {})), escape(createComponent(Outlet, {})));
        }
      });
    }
  });
};

export { SplitComponent as component };
//# sourceMappingURL=_layout-l-YYS7Dq.mjs.map
