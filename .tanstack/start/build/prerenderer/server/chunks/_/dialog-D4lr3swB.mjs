import { createComponent, mergeProps, ssr, ssrHydrationKey, ssrElement, Portal, isServer, escape, ssrAttribute } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { c as cn, m as mergeDefaultProps, a as createGenerateId, P as Polymorphic, d as callHandler, o as getActiveElement, k as contains$1, f as focusWithoutScrolling, g as getDocument, r as removeItemFromArray, p as isFocusable, v as visuallyHiddenStyles, q as noop, t as getAllTabbableIn, e as composeEventHandlers, E as EventKey, u as scrollIntoView, h as getWindow, w as isString, x as isNumber, y as isCtrlKey, z as getFocusableTreeWalker, _ as __export } from './cn-Z8LgDN0F.mjs';
import { splitProps, createUniqueId, createSignal, createContext, createEffect, on, onCleanup, Show, useContext, mergeProps as mergeProps$1, onMount, createMemo, createComputed } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { combineStyle } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/props/dist/index.js';
import { autoUpdate, offset, flip, shift, size, hide, arrow, computePosition, platform } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import { access } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/utils/dist/index.js';
import { c as createRegisterId, o as createControllableBooleanSignal, f as createControllableSignal } from './input-d83Srw8p.mjs';
import { createEventListener } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/event-listener/dist/index.js';
import { B as ButtonRoot } from './zero-app-DbTpjO0h.mjs';
import { s as src_default$1, a as access$1 } from './index-DCMxpmOX.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
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
  const mergedProps = mergeProps$1(defaultProps, props);
  const finalScrollRef = () => {
    var _a;
    return (_a = scrollRef == null ? void 0 : scrollRef()) != null ? _a : ref();
  };
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
var _tmpl$$1 = ["<svg", ' display="block" viewBox="', '" style="transform:scale(1.02)"><g', '><path fill="none"', '></path><path stroke="none"', "></path></g></svg>"];
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
  return createComponent(Polymorphic, mergeProps({
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
      return ssr(_tmpl$$1, ssrHydrationKey(), `0 0 ${escape(DEFAULT_SIZE, true)} ${escape(DEFAULT_SIZE, true)}`, ssrAttribute("transform", escape(rotate(), true), false), ssrAttribute("d", escape(ARROW_PATH, true), false), ssrAttribute("d", escape(ARROW_PATH, true), false));
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
  return createComponent(Polymorphic, mergeProps({
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
      return createComponent(Polymorphic, mergeProps({
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
    const items = tabbables();
    return items.length > 0 ? items[0] : null;
  };
  const lastTabbable = () => {
    const items = tabbables();
    return items.length > 0 ? items[items.length - 1] : null;
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
  const defaultedProps = mergeProps$1({
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
  }, ref, scrollRef);
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
      return createComponent(Polymorphic, mergeProps({
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
      return createComponent(Polymorphic, mergeProps({
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
      return createComponent(Polymorphic, mergeProps({
        as: "span"
      }, others));
    }
  });
}
var Image = Object.assign(ImageRoot, {
  Fallback: ImageFallback,
  Img: ImageImg
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
  return createComponent(ButtonRoot, mergeProps({
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
      return createComponent(DismissableLayer, mergeProps({
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
  return createComponent(Polymorphic, mergeProps({
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
      return createComponent(Polymorphic, mergeProps({
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
  return createComponent(Polymorphic, mergeProps({
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
  return createComponent(ButtonRoot, mergeProps({
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
const Avatar = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(ImageRoot, mergeProps({
    get ["class"]() {
      return cn("relative flex size-8 shrink-0 overflow-hidden rounded-lg", local.class);
    }
  }, others));
};
const AvatarImage = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(ImageImg, mergeProps({
    get ["class"]() {
      return cn("aspect-square size-full", local.class);
    }
  }, others));
};
const AvatarFallback = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(ImageFallback, mergeProps({
    get ["class"]() {
      return cn("flex size-full items-center justify-center rounded-lg bg-muted", local.class);
    }
  }, others));
};
var _tmpl$ = ["<div", ' class="iconify solar--close-square-bold block"></div>'], _tmpl$2 = ["<span", ' class="sr-only">Close</span>'];
const Dialog = DialogRoot;
const DialogTrigger = DialogTrigger$1;
const DialogClose = DialogCloseButton;
const DialogPortal = (props) => {
  const [local, rest] = splitProps(props, ["children"]);
  return createComponent(DialogPortal$1, mergeProps(rest, {
    get children() {
      return local.children;
    }
  }));
};
const DialogOverlay = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(DialogOverlay$1, mergeProps({
    get ["class"]() {
      return cn("data-[closed]:fade-out-0 data-[expanded]:fade-in-0 fixed inset-0 z-50 bg-black/10 backdrop-blur-sm data-[closed]:animate-out data-[expanded]:animate-in", local.class);
    }
  }, rest));
};
const DialogContent = (props) => {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return createComponent(DialogPortal, {
    get children() {
      return [createComponent(DialogOverlay, {}), createComponent(DialogContent$1, mergeProps({
        get ["class"]() {
          return cn("data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid max-h-[calc(100%-2rem)] max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border border-border bg-card p-6 duration-200 data-[closed]:animate-out data-[expanded]:animate-in ", local.class);
        }
      }, rest, {
        get children() {
          return [local.children, createComponent(DialogClose, {
            "class": "absolute top-4 right-4 rounded-sm bg-black outline-primary focus:outline-2",
            get children() {
              return [ssr(_tmpl$, ssrHydrationKey()), ssr(_tmpl$2, ssrHydrationKey())];
            }
          })];
        }
      }))];
    }
  });
};
const DialogHeader = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return ssrElement("div", mergeProps({
    get ["class"]() {
      return cn("flex flex-col space-y-1.5 text-center sm:text-left ", local.class);
    }
  }, rest), void 0, true);
};
const DialogFooter = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return ssrElement("div", mergeProps({
    get ["class"]() {
      return cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end ", local.class);
    }
  }, rest), void 0, true);
};
const DialogTitle = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(DialogTitle$1, mergeProps({
    get ["class"]() {
      return cn("font-semibold text-lg leading-none tracking-tight", local.class);
    }
  }, rest));
};
const DialogDescription = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(DialogDescription$1, mergeProps({
    get ["class"]() {
      return cn("text-muted-foreground text-sm", local.class);
    }
  }, rest));
};

export { Avatar as A, isSameSelection as B, DialogRoot as D, ListKeyboardDelegate as L, Popper as P, Selection as S, AvatarImage as a, AvatarFallback as b, Dialog as c, DialogTrigger as d, DialogContent as e, DialogFooter as f, DialogClose as g, DialogContent$1 as h, DialogCloseButton as i, DialogHeader as j, DialogTitle as k, DialogDescription as l, DialogPortal$1 as m, DialogOverlay$1 as n, createDisclosureState as o, createSelectableItem as p, DismissableLayer as q, createListState as r, src_default as s, createHideOutside as t, useLocale as u, createSelectableList as v, createFocusScope as w, PopperArrow as x, createCollator as y, createTypeSelect as z };
//# sourceMappingURL=dialog-D4lr3swB.mjs.map
