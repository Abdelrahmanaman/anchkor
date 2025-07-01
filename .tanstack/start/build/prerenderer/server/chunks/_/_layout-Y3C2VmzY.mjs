import { createComponent, ssr, ssrHydrationKey, escape, ssrElement, mergeProps as mergeProps$1, ssrAttribute, Portal, isServer } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { lazy, mergeProps, splitProps, createSignal, createEffect, onCleanup, createContext, For, Switch, Match, createUniqueId, Show, useContext, createMemo, on, createComponent as createComponent$1 } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { createQuery } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/solid.js';
import { m as mergeDefaultProps, c as createRegisterId, a as createGenerateId, P as Polymorphic, b as createTagName, T as TextField, d as TextFieldLabel, e as TextFieldInput, f as TextFieldErrorMessage, g as getDocument, h as callHandler, s as scrollIntoViewport, i as focusWithoutScrolling, j as composeEventHandlers, k as getWindow, l as isPointInPolygon, n as getEventPoint, o as contains, p as createControllableArraySignal, r as removeItemFromArray, q as addItemToArray, _ as __export, t as createControllableSignal } from './input-C-O6VnJe.mjs';
import { cva } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cva/dist/index.mjs';
import { c as cn } from './cn-H80jjgLf.mjs';
import { A as Avatar, a as AvatarImage, b as AvatarFallback, D as DialogRoot, c as Dialog, d as DialogTrigger, B as Button, e as DialogContent, f as DialogFooter, g as DialogClose, h as DialogContent$1, i as DialogCloseButton, u as useLocale, j as ButtonRoot, k as DialogHeader, l as DialogTitle, m as DialogDescription, n as DialogPortal$1, o as DialogOverlay$1, p as createDisclosureState, s as src_default, q as createSelectableItem, P as Popper, r as DismissableLayer, t as createListState, v as createHideOutside, w as createSelectableList, x as createFocusScope, y as PopperArrow } from './dialog-CNARRy0Q.mjs';
import { combineStyle } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/props/dist/index.js';
import { s as src_default$1 } from './index-DCMxpmOX.mjs';
import { access } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/utils/dist/index.js';
import { c as createToggleState } from './VI7QYH27-jMO1ipnR.mjs';
import { mergeRefs } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/refs/dist/index.js';
import { S as SeparatorRoot } from './T4C3DMHT-DrbLaRy5.mjs';
import { u as useCreateWorkspace, g as getWebsiteData, w as workspaceSchema, f as findWorkspaceUrl, a as addCollaborator, e as email } from './use-create-workspace-CO31sMVw.mjs';
import { c as createForm } from './auth-client-BR_qw2T0.mjs';
import { parse } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tldts/dist/cjs/index.js';
import { useZero } from './zero-app-DmbvaHgN.mjs';
import { O as Outlet, a as useParams, L as Link, u as useMatch } from './ssr.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/clsx/dist/clsx.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/event-listener/dist/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/arktype/out/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cheerio/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/nanoid/index.js';
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
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/drizzle-orm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/drizzle-orm/pg-core/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/zero/src/pg.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/jose/dist/node/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/postgres/src/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/zero.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/history/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/isbot/index.mjs';
import 'node:stream/web';

function useRouteContext(opts) {
  return useMatch({
    ...opts,
    select: (match) => opts.select ? opts.select(match.context) : match.context
  });
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
    return contains(triggerRef(), target) || contains(contentRef(), target);
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
      if (contains(target, trigger)) {
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
    if (!contains(e.currentTarget, e.target)) {
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
    if (contains(e.currentTarget, target) && pointerXHasChanged) {
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
    if (!contains(context.triggerRef(), target)) {
      context.close();
    }
  };
  const onKeyDown = (e) => {
    callHandler(e, local.onKeyDown);
    const isKeyDownInside = contains(e.currentTarget, e.target);
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
var _tmpl$$8 = ["<div", ">", "</div>"], _tmpl$2$6 = ["<div", ' class="iconify solar--sidebar-minimalistic-linear" aria-hidden></div>'], _tmpl$3$6 = ["<span", ' class="sr-only">Close</span>'];
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
      return ssr(_tmpl$$8, ssrHydrationKey() + ssrAttribute("class", escape(portalVariants({
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
              return [ssr(_tmpl$2$6, ssrHydrationKey()), ssr(_tmpl$3$6, ssrHydrationKey())];
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
var _tmpl$$7 = ["<div", ' class="flex size-full flex-col">', "</div>"], _tmpl$2$5 = ['<div data-sidebar="sidebar" class="flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow">', "</div>"], _tmpl$3$5 = ["<div", ' class="group peer hidden md:block"', "><div", "></div>", "</div>"];
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
                  return ssr(_tmpl$$7, ssrHydrationKey(), escape(local.children));
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
          }, others), () => ssr(_tmpl$2$5, escape(local.children)), false));
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
var _tmpl$ = ["<div", ' class="flex w-full items-center "><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"];
const ZeroApp = lazy(() => import('./zero-app-DmbvaHgN.mjs'));
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
//# sourceMappingURL=_layout-Y3C2VmzY.mjs.map
