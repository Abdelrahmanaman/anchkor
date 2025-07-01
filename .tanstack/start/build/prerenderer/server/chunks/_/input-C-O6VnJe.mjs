import { createComponent, mergeProps, ssrElement, Dynamic } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { splitProps, mergeProps as mergeProps$1, createUniqueId, createContext, createEffect, onCleanup, Show, createSignal, createMemo, on, useContext, untrack } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { c as cn } from './cn-H80jjgLf.mjs';
import { access, accessWith } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/utils/dist/index.js';

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
  return mergeProps$1(defaultProps, props);
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
    createComponent(Dynamic, mergeProps(others, {
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
function createControllableSignal(props) {
  var _a;
  const [_value, _setValue] = createSignal((_a = props.defaultValue) == null ? void 0 : _a.call(props));
  const isControlled = createMemo(() => {
    var _a2;
    return ((_a2 = props.value) == null ? void 0 : _a2.call(props)) !== void 0;
  });
  const value = createMemo(() => {
    var _a2;
    return isControlled() ? (_a2 = props.value) == null ? void 0 : _a2.call(props) : _value();
  });
  const setValue = (next) => {
    untrack(() => {
      var _a2;
      const nextValue = accessWith(next, value());
      if (!Object.is(nextValue, value())) {
        if (!isControlled()) {
          _setValue(nextValue);
        }
        (_a2 = props.onChange) == null ? void 0 : _a2.call(props, nextValue);
      }
      return nextValue;
    });
  };
  return [value, setValue];
}
function createControllableBooleanSignal(props) {
  const [_value, setValue] = createControllableSignal(props);
  const value = () => {
    var _a;
    return (_a = _value()) != null ? _a : false;
  };
  return [value, setValue];
}
function createControllableArraySignal(props) {
  const [_value, setValue] = createControllableSignal(props);
  const value = () => {
    var _a;
    return (_a = _value()) != null ? _a : [];
  };
  return [value, setValue];
}
function createRegisterId(setter) {
  return (id) => {
    setter(id);
    return () => setter(void 0);
  };
}
var FORM_CONTROL_PROP_NAMES = ["id", "name", "validationState", "required", "disabled", "readOnly"];
function createFormControl(props) {
  const defaultId = `form-control-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps({
    id: defaultId
  }, props);
  const [labelId, setLabelId] = createSignal();
  const [fieldId, setFieldId] = createSignal();
  const [descriptionId, setDescriptionId] = createSignal();
  const [errorMessageId, setErrorMessageId] = createSignal();
  const getAriaLabelledBy = (fieldId2, fieldAriaLabel, fieldAriaLabelledBy) => {
    const hasAriaLabelledBy = fieldAriaLabelledBy != null || labelId() != null;
    return [
      fieldAriaLabelledBy,
      labelId(),
      // If there is both an aria-label and aria-labelledby, add the field itself has an aria-labelledby
      hasAriaLabelledBy && fieldAriaLabel != null ? fieldId2 : void 0
    ].filter(Boolean).join(" ") || void 0;
  };
  const getAriaDescribedBy = (fieldAriaDescribedBy) => {
    return [
      descriptionId(),
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA.
      // See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      errorMessageId(),
      fieldAriaDescribedBy
    ].filter(Boolean).join(" ") || void 0;
  };
  const dataset = createMemo(() => ({
    "data-valid": access(mergedProps.validationState) === "valid" ? "" : void 0,
    "data-invalid": access(mergedProps.validationState) === "invalid" ? "" : void 0,
    "data-required": access(mergedProps.required) ? "" : void 0,
    "data-disabled": access(mergedProps.disabled) ? "" : void 0,
    "data-readonly": access(mergedProps.readOnly) ? "" : void 0
  }));
  const formControlContext = {
    name: () => {
      var _a;
      return (_a = access(mergedProps.name)) != null ? _a : access(mergedProps.id);
    },
    dataset,
    validationState: () => access(mergedProps.validationState),
    isRequired: () => access(mergedProps.required),
    isDisabled: () => access(mergedProps.disabled),
    isReadOnly: () => access(mergedProps.readOnly),
    labelId,
    fieldId,
    descriptionId,
    errorMessageId,
    getAriaLabelledBy,
    getAriaDescribedBy,
    generateId: createGenerateId(() => access(mergedProps.id)),
    registerLabel: createRegisterId(setLabelId),
    registerField: createRegisterId(setFieldId),
    registerDescription: createRegisterId(setDescriptionId),
    registerErrorMessage: createRegisterId(setErrorMessageId)
  };
  return {
    formControlContext
  };
}
var FormControlContext = createContext();
function useFormControlContext() {
  const context = useContext(FormControlContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");
  }
  return context;
}
function FormControlDescription(props) {
  const context = useFormControlContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("description")
  }, props);
  createEffect(() => onCleanup(context.registerDescription(mergedProps.id)));
  return createComponent(Polymorphic, mergeProps({
    as: "div"
  }, () => context.dataset(), mergedProps));
}
var FORM_CONTROL_FIELD_PROP_NAMES = ["id", "aria-label", "aria-labelledby", "aria-describedby"];
function createFormControlField(props) {
  const context = useFormControlContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("field")
  }, props);
  createEffect(() => onCleanup(context.registerField(access(mergedProps.id))));
  return {
    fieldProps: {
      id: () => access(mergedProps.id),
      ariaLabel: () => access(mergedProps["aria-label"]),
      ariaLabelledBy: () => context.getAriaLabelledBy(access(mergedProps.id), access(mergedProps["aria-label"]), access(mergedProps["aria-labelledby"])),
      ariaDescribedBy: () => context.getAriaDescribedBy(access(mergedProps["aria-describedby"]))
    }
  };
}
function FormControlLabel(props) {
  let ref;
  const context = useFormControlContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("label")
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref"]);
  const tagName = createTagName(() => ref, () => "label");
  createEffect(() => onCleanup(context.registerLabel(others.id)));
  return createComponent(Polymorphic, mergeProps({
    as: "label",
    get ["for"]() {
      return tagName() === "label" ? context.fieldId() : void 0;
    }
  }, () => context.dataset(), others));
}
function createFormResetListener(element, handler) {
  createEffect(on(element, (element2) => {
    if (element2 == null) {
      return;
    }
    const form = getClosestForm(element2);
    if (form == null) {
      return;
    }
    form.addEventListener("reset", handler, {
      passive: true
    });
    onCleanup(() => {
      form.removeEventListener("reset", handler);
    });
  }));
}
function getClosestForm(element) {
  return isFormElement(element) ? element.form : element.closest("form");
}
function isFormElement(element) {
  return element.matches("textarea, input, select, button");
}
function FormControlErrorMessage(props) {
  const context = useFormControlContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("error-message")
  }, props);
  const [local, others] = splitProps(mergedProps, ["forceMount"]);
  const isInvalid = () => context.validationState() === "invalid";
  createEffect(() => {
    if (!isInvalid()) {
      return;
    }
    onCleanup(context.registerErrorMessage(others.id));
  });
  return createComponent(Show, {
    get when() {
      return local.forceMount || isInvalid();
    },
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "div"
      }, () => context.dataset(), others));
    }
  });
}
var text_field_exports = {};
__export(text_field_exports, {
  Description: () => FormControlDescription,
  ErrorMessage: () => FormControlErrorMessage,
  Input: () => TextFieldInput$1,
  Label: () => FormControlLabel,
  Root: () => TextFieldRoot,
  TextArea: () => TextFieldTextArea$1,
  TextField: () => TextField$1,
  useTextFieldContext: () => useTextFieldContext
});
var TextFieldContext = createContext();
function useTextFieldContext() {
  const context = useContext(TextFieldContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useTextFieldContext` must be used within a `TextField` component");
  }
  return context;
}
function TextFieldInput$1(props) {
  return createComponent(TextFieldInputBase, mergeProps({
    type: "text"
  }, props));
}
function TextFieldInputBase(props) {
  const formControlContext = useFormControlContext();
  const context = useTextFieldContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("input")
  }, props);
  const [local, formControlFieldProps, others] = splitProps(mergedProps, ["onInput"], FORM_CONTROL_FIELD_PROP_NAMES);
  const {
    fieldProps
  } = createFormControlField(formControlFieldProps);
  return createComponent(Polymorphic, mergeProps({
    as: "input",
    get id() {
      return fieldProps.id();
    },
    get name() {
      return formControlContext.name();
    },
    get value() {
      return context.value();
    },
    get required() {
      return formControlContext.isRequired();
    },
    get disabled() {
      return formControlContext.isDisabled();
    },
    get readonly() {
      return formControlContext.isReadOnly();
    },
    get ["aria-label"]() {
      return fieldProps.ariaLabel();
    },
    get ["aria-labelledby"]() {
      return fieldProps.ariaLabelledBy();
    },
    get ["aria-describedby"]() {
      return fieldProps.ariaDescribedBy();
    },
    get ["aria-invalid"]() {
      return formControlContext.validationState() === "invalid" || void 0;
    },
    get ["aria-required"]() {
      return formControlContext.isRequired() || void 0;
    },
    get ["aria-disabled"]() {
      return formControlContext.isDisabled() || void 0;
    },
    get ["aria-readonly"]() {
      return formControlContext.isReadOnly() || void 0;
    },
    get onInput() {
      return composeEventHandlers([local.onInput, context.onInput]);
    }
  }, () => formControlContext.dataset(), others));
}
function TextFieldRoot(props) {
  let ref;
  const defaultId = `textfield-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps({
    id: defaultId
  }, props);
  const [local, formControlProps, others] = splitProps(mergedProps, ["ref", "value", "defaultValue", "onChange"], FORM_CONTROL_PROP_NAMES);
  const initialValue = local.value;
  const [value, setValue] = createControllableSignal({
    value: () => {
      var _a;
      return initialValue === void 0 ? void 0 : (_a = local.value) != null ? _a : "";
    },
    defaultValue: () => local.defaultValue,
    onChange: (value2) => {
      var _a;
      return (_a = local.onChange) == null ? void 0 : _a.call(local, value2);
    }
  });
  const {
    formControlContext
  } = createFormControl(formControlProps);
  createFormResetListener(() => ref, () => {
    var _a;
    return setValue((_a = local.defaultValue) != null ? _a : "");
  });
  const onInput = (e) => {
    var _a;
    if (formControlContext.isReadOnly() || formControlContext.isDisabled()) {
      return;
    }
    const target = e.target;
    setValue(target.value);
    target.value = (_a = value()) != null ? _a : "";
  };
  const context = {
    value,
    generateId: createGenerateId(() => access(formControlProps.id)),
    onInput
  };
  return createComponent(FormControlContext.Provider, {
    value: formControlContext,
    get children() {
      return createComponent(TextFieldContext.Provider, {
        value: context,
        get children() {
          return createComponent(Polymorphic, mergeProps({
            as: "div",
            role: "group",
            get id() {
              return access(formControlProps.id);
            }
          }, () => formControlContext.dataset(), others));
        }
      });
    }
  });
}
function TextFieldTextArea$1(props) {
  let ref;
  const context = useTextFieldContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("textarea")
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "autoResize", "submitOnEnter", "onKeyPress"]);
  createEffect(on([() => ref, () => local.autoResize, () => context.value()], ([ref2, autoResize]) => {
    if (!ref2 || !autoResize) {
      return;
    }
    adjustHeight(ref2);
  }));
  const onKeyPress = (event) => {
  };
  return createComponent(TextFieldInputBase, mergeProps({
    as: "textarea",
    get ["aria-multiline"]() {
      return local.submitOnEnter ? "false" : void 0;
    },
    get onKeyPress() {
      return composeEventHandlers([local.onKeyPress, onKeyPress]);
    }
  }, others));
}
function adjustHeight(el) {
  const prevAlignment = el.style.alignSelf;
  const prevOverflow = el.style.overflow;
  const isFirefox = "MozAppearance" in el.style;
  if (!isFirefox) {
    el.style.overflow = "hidden";
  }
  el.style.alignSelf = "start";
  el.style.height = "auto";
  el.style.height = `${el.scrollHeight + (el.offsetHeight - el.clientHeight)}px`;
  el.style.overflow = prevOverflow;
  el.style.alignSelf = prevAlignment;
}
var TextField$1 = Object.assign(TextFieldRoot, {
  Description: FormControlDescription,
  ErrorMessage: FormControlErrorMessage,
  Input: TextFieldInput$1,
  Label: FormControlLabel,
  TextArea: TextFieldTextArea$1
});
const TextField = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(TextFieldRoot, mergeProps({
    get ["class"]() {
      return cn("flex flex-col gap-1", local.class);
    }
  }, others));
};
const TextFieldInput = (rawProps) => {
  const props = mergeProps$1({
    type: "text"
  }, rawProps);
  const [local, others] = splitProps(props, ["type", "class"]);
  return createComponent(TextFieldInput$1, mergeProps({
    get type() {
      return local.type;
    },
    get ["class"]() {
      return cn("flex h-9 w-full min-w-0 appearance-none rounded-md border-0 border-input bg-secondary/70 px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[1px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ", local.class);
    }
  }, others));
};
const TextFieldTextArea = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(TextFieldTextArea$1, mergeProps({
    get ["class"]() {
      return cn("flex h-9 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm ", local.class);
    }
  }, others));
};
const TextFieldLabel = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(FormControlLabel, mergeProps({
    get ["class"]() {
      return cn("w-fit font-normal text-muted-foreground", local.class);
    }
  }, others));
};
const TextFieldErrorMessage = (props) => {
  const [local, others] = splitProps(props, ["class", "error"]);
  return createComponent(FormControlErrorMessage, mergeProps({
    get ["class"]() {
      return cn(" text-destructive text-xs data-[invalid]:text-destructive", local.class);
    }
  }, others, {
    get children() {
      return local.error;
    }
  }));
};
function Input(props) {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("input", mergeProps({
    type: "search",
    get ["class"]() {
      return cn("peer flex h-9 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:w-96 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", local.class);
    }
  }, others), void 0, true);
}

export { createFormControl as A, createFormResetListener as B, FormControlContext as C, FormControlDescription as D, EventKey as E, FORM_CONTROL_FIELD_PROP_NAMES as F, isFunction as G, createControllableBooleanSignal as H, Input as I, TextFieldTextArea as J, getActiveElement as K, isFocusable as L, noop as M, getAllTabbableIn as N, scrollIntoView as O, Polymorphic as P, isString as Q, isNumber as R, isCtrlKey as S, TextField as T, getFocusableTreeWalker as U, __export as _, createGenerateId as a, createTagName as b, createRegisterId as c, TextFieldLabel as d, TextFieldInput as e, TextFieldErrorMessage as f, getDocument as g, callHandler as h, focusWithoutScrolling as i, composeEventHandlers as j, getWindow as k, isPointInPolygon as l, mergeDefaultProps as m, getEventPoint as n, contains as o, createControllableArraySignal as p, addItemToArray as q, removeItemFromArray as r, scrollIntoViewport as s, createControllableSignal as t, useFormControlContext as u, createFormControlField as v, visuallyHiddenStyles as w, FormControlLabel as x, FormControlErrorMessage as y, FORM_CONTROL_PROP_NAMES as z };
//# sourceMappingURL=input-C-O6VnJe.mjs.map
