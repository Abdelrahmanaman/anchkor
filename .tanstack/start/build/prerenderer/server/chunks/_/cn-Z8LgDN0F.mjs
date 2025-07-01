import { mergeProps, splitProps, createSignal, createEffect } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { createComponent, Dynamic, mergeProps as mergeProps$1 } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { clsx } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/clsx/dist/clsx.mjs';
import { twMerge } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tailwind-merge/dist/bundle-mjs.mjs';

function addItemToArray(array, item, index = -1) {
  if (!(index in array)) {
    return [...array, item];
  }
  return [...array.slice(0, index), item, ...array.slice(index)];
}
function removeItemFromArray(array, item) {
  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);
  if (index !== -1) {
    updatedArray.splice(index, 1);
  }
  return updatedArray;
}
function isNumber(value) {
  return typeof value === "number";
}
function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
function isFunction(value) {
  return typeof value === "function";
}
function createGenerateId(baseId) {
  return (suffix) => `${baseId()}-${suffix}`;
}
function contains(parent, child) {
  if (!parent) {
    return false;
  }
  return parent === child || parent.contains(child);
}
function getActiveElement(node, activeDescendant = false) {
  const { activeElement } = getDocument(node);
  if (!(activeElement == null ? void 0 : activeElement.nodeName)) {
    return null;
  }
  if (isFrame(activeElement) && activeElement.contentDocument) {
    return getActiveElement(
      activeElement.contentDocument.body,
      activeDescendant
    );
  }
  if (activeDescendant) {
    const id = activeElement.getAttribute("aria-activedescendant");
    if (id) {
      const element = getDocument(activeElement).getElementById(id);
      if (element) {
        return element;
      }
    }
  }
  return activeElement;
}
function getWindow(node) {
  return getDocument(node).defaultView || window;
}
function getDocument(node) {
  return node ? node.ownerDocument || node : document;
}
function isFrame(element) {
  return element.tagName === "IFRAME";
}
var EventKey = /* @__PURE__ */ ((EventKey2) => {
  EventKey2["Escape"] = "Escape";
  EventKey2["Enter"] = "Enter";
  EventKey2["Tab"] = "Tab";
  EventKey2["Space"] = " ";
  EventKey2["ArrowDown"] = "ArrowDown";
  EventKey2["ArrowLeft"] = "ArrowLeft";
  EventKey2["ArrowRight"] = "ArrowRight";
  EventKey2["ArrowUp"] = "ArrowUp";
  EventKey2["End"] = "End";
  EventKey2["Home"] = "Home";
  EventKey2["PageDown"] = "PageDown";
  EventKey2["PageUp"] = "PageUp";
  return EventKey2;
})(EventKey || {});
function callHandler(event, handler) {
  if (handler) {
    if (isFunction(handler)) {
      handler(event);
    } else {
      handler[0](handler[1], event);
    }
  }
  return event == null ? void 0 : event.defaultPrevented;
}
function composeEventHandlers(handlers) {
  return (event) => {
    for (const handler of handlers) {
      callHandler(event, handler);
    }
  };
}
function isCtrlKey(e) {
  return e.ctrlKey && !e.metaKey;
}
function focusWithoutScrolling(element) {
  if (!element) {
    return;
  }
  if (supportsPreventScroll()) {
    element.focus({ preventScroll: true });
  } else {
    const scrollableElements = getScrollableElements(element);
    element.focus();
    restoreScrollPosition(scrollableElements);
  }
}
var supportsPreventScrollCached = null;
function supportsPreventScroll() {
  if (supportsPreventScrollCached == null) {
    supportsPreventScrollCached = false;
    try {
      const focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e) {
    }
  }
  return supportsPreventScrollCached;
}
function getScrollableElements(element) {
  let parent = element.parentNode;
  const scrollableElements = [];
  const rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    }
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) {
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  }
  return scrollableElements;
}
function restoreScrollPosition(scrollableElements) {
  for (const { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
var focusableElements = [
  "input:not([type='hidden']):not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "[tabindex]",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]:not([contenteditable='false'])"
];
var tabbableElements = [
  ...focusableElements,
  '[tabindex]:not([tabindex="-1"]):not([disabled])'
];
var FOCUSABLE_ELEMENT_SELECTOR = `${focusableElements.join(
  ":not([hidden]),"
)},[tabindex]:not([disabled]):not([hidden])`;
var TABBABLE_ELEMENT_SELECTOR = tabbableElements.join(
  ':not([hidden]):not([tabindex="-1"]),'
);
function getAllTabbableIn(container, includeContainer) {
  const elements = Array.from(
    container.querySelectorAll(FOCUSABLE_ELEMENT_SELECTOR)
  );
  const tabbableElements2 = elements.filter(isTabbable);
  if (includeContainer && isTabbable(container)) {
    tabbableElements2.unshift(container);
  }
  tabbableElements2.forEach((element, i) => {
    if (isFrame(element) && element.contentDocument) {
      const frameBody = element.contentDocument.body;
      const allFrameTabbable = getAllTabbableIn(frameBody, false);
      tabbableElements2.splice(i, 1, ...allFrameTabbable);
    }
  });
  return tabbableElements2;
}
function isTabbable(element) {
  return isFocusable(element) && !hasNegativeTabIndex(element);
}
function isFocusable(element) {
  return element.matches(FOCUSABLE_ELEMENT_SELECTOR) && isElementVisible(element);
}
function hasNegativeTabIndex(element) {
  const tabIndex = Number.parseInt(element.getAttribute("tabindex") || "0", 10);
  return tabIndex < 0;
}
function isElementVisible(element, childElement) {
  return element.nodeName !== "#comment" && isStyleVisible(element) && isAttributeVisible(element, childElement) && (!element.parentElement || isElementVisible(element.parentElement, element));
}
function isStyleVisible(element) {
  if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
    return false;
  }
  const { display, visibility } = element.style;
  let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
  if (isVisible) {
    if (!element.ownerDocument.defaultView) {
      return isVisible;
    }
    const { getComputedStyle } = element.ownerDocument.defaultView;
    const { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
    isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
  }
  return isVisible;
}
function isAttributeVisible(element, childElement) {
  return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function getFocusableTreeWalker(root, opts, scope) {
  const selector = (opts == null ? void 0 : opts.tabbable) ? TABBABLE_ELEMENT_SELECTOR : FOCUSABLE_ELEMENT_SELECTOR;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      var _a;
      if ((_a = opts == null ? void 0 : opts.from) == null ? void 0 : _a.contains(node)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (node.matches(selector) && isElementVisible(node) && true && (!(opts == null ? void 0 : opts.accept) || opts.accept(node))) {
        return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_SKIP;
    }
  });
  if (opts == null ? void 0 : opts.from) {
    walker.currentNode = opts.from;
  }
  return walker;
}
function getScrollParent(node) {
  let parentNode = node;
  while (parentNode && !isScrollable(parentNode)) {
    parentNode = parentNode.parentElement;
  }
  return parentNode || document.scrollingElement || document.documentElement;
}
function isScrollable(node) {
  const style = window.getComputedStyle(node);
  return /(auto|scroll)/.test(
    style.overflow + style.overflowX + style.overflowY
  );
}
function noop() {
  return;
}
function getEventPoint(event) {
  return [event.clientX, event.clientY];
}
function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let inside = false;
  const length = polygon.length;
  for (let l = length, i = 0, j = l - 1; i < l; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    const [, vy] = polygon[j === 0 ? l - 1 : j - 1] || [0, 0];
    const where = (yi - yj) * (x - xi) - (xi - xj) * (y - yi);
    if (yj < yi) {
      if (y >= yj && y < yi) {
        if (where === 0)
          return true;
        if (where > 0) {
          if (y === yj) {
            if (y > vy) {
              inside = !inside;
            }
          } else {
            inside = !inside;
          }
        }
      }
    } else if (yi < yj) {
      if (y > yi && y <= yj) {
        if (where === 0)
          return true;
        if (where < 0) {
          if (y === yj) {
            if (y < vy) {
              inside = !inside;
            }
          } else {
            inside = !inside;
          }
        }
      }
    } else if (y === yi && (x >= xj && x <= xi || x >= xi && x <= xj)) {
      return true;
    }
  }
  return inside;
}
function mergeDefaultProps(defaultProps, props) {
  return mergeProps(defaultProps, props);
}
function setupGlobalEvents() {
  {
    return;
  }
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") ; else {
    document.addEventListener("DOMContentLoaded", setupGlobalEvents);
  }
}
function scrollIntoView(scrollView, element) {
  const offsetX = relativeOffset(scrollView, element, "left");
  const offsetY = relativeOffset(scrollView, element, "top");
  const width = element.offsetWidth;
  const height = element.offsetHeight;
  let x = scrollView.scrollLeft;
  let y = scrollView.scrollTop;
  const maxX = x + scrollView.offsetWidth;
  const maxY = y + scrollView.offsetHeight;
  if (offsetX <= x) {
    x = offsetX;
  } else if (offsetX + width > maxX) {
    x += offsetX + width - maxX;
  }
  if (offsetY <= y) {
    y = offsetY;
  } else if (offsetY + height > maxY) {
    y += offsetY + height - maxY;
  }
  scrollView.scrollLeft = x;
  scrollView.scrollTop = y;
}
function relativeOffset(ancestor, child, axis) {
  const prop = axis === "left" ? "offsetLeft" : "offsetTop";
  let sum = 0;
  while (child.offsetParent) {
    sum += child[prop];
    if (child.offsetParent === ancestor) {
      break;
    }
    if (child.offsetParent.contains(ancestor)) {
      sum -= ancestor[prop];
      break;
    }
    child = child.offsetParent;
  }
  return sum;
}
function scrollIntoViewport(targetElement, opts) {
  var _a, _b;
  if (document.contains(targetElement)) {
    const root = document.scrollingElement || document.documentElement;
    const isScrollPrevented = window.getComputedStyle(root).overflow === "hidden";
    if (!isScrollPrevented) {
      const { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
      (_a = targetElement == null ? void 0 : targetElement.scrollIntoView) == null ? void 0 : _a.call(targetElement, { block: "nearest" });
      const { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
      if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
        (_b = targetElement.scrollIntoView) == null ? void 0 : _b.call(targetElement, { block: "nearest" });
      }
    } else {
      let scrollParent = getScrollParent(targetElement);
      while (targetElement && scrollParent && targetElement !== root && scrollParent !== root) {
        scrollIntoView(
          scrollParent,
          targetElement
        );
        targetElement = scrollParent;
        scrollParent = getScrollParent(targetElement);
      }
    }
  }
}
var visuallyHiddenStyles = {
  border: "0",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(50%)",
  height: "1px",
  margin: "0 -1px -1px 0",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  width: "1px",
  "white-space": "nowrap"
};
function createTagName(ref, fallback) {
  const [tagName, setTagName] = createSignal(stringOrUndefined(fallback == null ? void 0 : fallback()));
  createEffect(() => {
    var _a;
    setTagName(((_a = ref()) == null ? void 0 : _a.tagName.toLowerCase()) || stringOrUndefined(fallback == null ? void 0 : fallback()));
  });
  return tagName;
}
function stringOrUndefined(value) {
  return isString(value) ? value : void 0;
}
function Polymorphic(props) {
  const [local, others] = splitProps(props, ["as"]);
  if (!local.as) {
    throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");
  }
  return (
    // @ts-ignore: Props are valid but not worth calculating
    createComponent(Dynamic, mergeProps$1(others, {
      get component() {
        return local.as;
      }
    }))
  );
}
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export { EventKey as E, Polymorphic as P, __export as _, createGenerateId as a, createTagName as b, cn as c, callHandler as d, composeEventHandlers as e, focusWithoutScrolling as f, getDocument as g, getWindow as h, isPointInPolygon as i, getEventPoint as j, contains as k, addItemToArray as l, mergeDefaultProps as m, isFunction as n, getActiveElement as o, isFocusable as p, noop as q, removeItemFromArray as r, scrollIntoViewport as s, getAllTabbableIn as t, scrollIntoView as u, visuallyHiddenStyles as v, isString as w, isNumber as x, isCtrlKey as y, getFocusableTreeWalker as z };
//# sourceMappingURL=cn-Z8LgDN0F.mjs.map
