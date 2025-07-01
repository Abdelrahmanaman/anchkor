import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute, mergeProps, Portal, ssrStyle, ssrElement } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { createQuery } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/solid.js';
import { For, Show, Switch, Match, createSignal, splitProps, createMemo, createEffect, onCleanup, createUniqueId, on, createContext, useContext, children } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { u as useZero, a as Button, B as ButtonRoot } from './zero-app-DbTpjO0h.mjs';
import { debounce } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/pacer/dist/esm/index.js';
import { I as Input, T as TextField, a as TextFieldLabel, b as TextFieldInput, p as TextFieldTextArea, u as useFormControlContext, j as FORM_CONTROL_PROP_NAMES, k as createFormControl, l as createFormResetListener, m as FormControlContext, c as createRegisterId, F as FORM_CONTROL_FIELD_PROP_NAMES, g as createFormControlField, i as FormControlErrorMessage, n as FormControlDescription, h as FormControlLabel } from './input-d83Srw8p.mjs';
import { cva } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cva/dist/index.mjs';
import { c as cn, m as mergeDefaultProps, P as Polymorphic, a as createGenerateId, n as isFunction, e as composeEventHandlers, d as callHandler, f as focusWithoutScrolling, _ as __export, v as visuallyHiddenStyles } from './cn-Z8LgDN0F.mjs';
import { A as Avatar, a as AvatarImage, b as AvatarFallback, c as Dialog, d as DialogTrigger, e as DialogContent, j as DialogHeader, k as DialogTitle, l as DialogDescription, f as DialogFooter, o as createDisclosureState, r as createListState, S as Selection, y as createCollator, L as ListKeyboardDelegate, P as Popper, z as createTypeSelect, t as createHideOutside, s as src_default$1, w as createFocusScope, q as DismissableLayer, p as createSelectableItem, v as createSelectableList, x as PopperArrow, B as isSameSelection } from './dialog-D4lr3swB.mjs';
import { Key } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/keyed/dist/index.js';
import { access } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/utils/dist/index.js';
import { combineStyle } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/props/dist/index.js';
import { s as src_default } from './index-DCMxpmOX.mjs';
import { R as Route$1, b as useNavigate, c as useSearch, L as Link, a as useParams } from './ssr.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from './card-l2fL6499.mjs';
import { formatDistanceToNowStrict } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/date-fns/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/clsx/dist/clsx.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/event-listener/dist/index.js';
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

var _tmpl$$5 = ["<option", "", ">", "</option>"], _tmpl$2$4 = "<option></option>", _tmpl$3$3 = ["<div", ' style="', '" aria-hidden="true"><input type="text"', ' style="', '"', "", ">", "</div>"];
function HiddenSelectBase(props) {
  const [local, others] = splitProps(props, ["ref", "onChange", "collection", "selectionManager", "isOpen", "isMultiple", "isVirtualized", "focusTrigger"]);
  const formControlContext = useFormControlContext();
  const [isInternalChangeEvent, setIsInternalChangeEvent] = createSignal(false);
  const renderOption = (key) => {
    const item = local.collection.getItem(key);
    return createComponent(Show, {
      get when() {
        return (item == null ? void 0 : item.type) === "item";
      },
      get children() {
        return ssr(_tmpl$$5, ssrHydrationKey() + ssrAttribute("value", escape(key, true), false), ssrAttribute("selected", local.selectionManager.isSelected(key), true), escape(item == null ? void 0 : item.textValue));
      }
    });
  };
  createEffect(on(() => local.selectionManager.selectedKeys(), (keys, prevKeys) => {
    if (prevKeys && isSameSelection(keys, prevKeys)) {
      return;
    }
    setIsInternalChangeEvent(true);
  }, {
    defer: true
  }));
  return ssr(_tmpl$3$3, ssrHydrationKey(), ssrStyle(visuallyHiddenStyles), ssrAttribute("tabindex", local.selectionManager.isFocused() || local.isOpen ? -1 : 0, false), "font-size:16px", ssrAttribute("required", formControlContext.isRequired(), true), ssrAttribute("disabled", formControlContext.isDisabled(), true) + ssrAttribute("readonly", escape(formControlContext.isReadOnly(), true), false), ssrElement("select", mergeProps({
    tabIndex: -1,
    get multiple() {
      return local.isMultiple;
    },
    get name() {
      return formControlContext.name();
    },
    get required() {
      return formControlContext.isRequired();
    },
    get disabled() {
      return formControlContext.isDisabled();
    },
    get size() {
      return local.collection.getSize();
    },
    get value() {
      var _a;
      return (_a = local.selectionManager.firstSelectedKey()) != null ? _a : "";
    }
  }, others), () => [ssr(_tmpl$2$4), "<!--$-->", escape(createComponent(Show, {
    get when() {
      return local.isVirtualized;
    },
    get fallback() {
      return createComponent(For, {
        get each() {
          return [...local.collection.getKeys()];
        },
        children: renderOption
      });
    },
    get children() {
      return createComponent(For, {
        get each() {
          return [...local.selectionManager.selectedKeys()];
        },
        children: renderOption
      });
    }
  })), "<!--/-->"], false));
}
var cache = /* @__PURE__ */ new WeakMap();
function getItemCount(collection) {
  let count = cache.get(collection);
  if (count != null) {
    return count;
  }
  count = 0;
  for (const item of collection) {
    if (item.type === "item") {
      count++;
    }
  }
  cache.set(collection, count);
  return count;
}
var listbox_exports = {};
__export(listbox_exports, {
  Item: () => ListboxItem,
  ItemDescription: () => ListboxItemDescription,
  ItemIndicator: () => ListboxItemIndicator,
  ItemLabel: () => ListboxItemLabel,
  Listbox: () => Listbox,
  Root: () => ListboxRoot,
  Section: () => ListboxSection,
  useListboxContext: () => useListboxContext
});
var ListboxContext = createContext();
function useListboxContext() {
  const context = useContext(ListboxContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useListboxContext` must be used within a `Listbox` component");
  }
  return context;
}
var ListboxItemContext = createContext();
function useListboxItemContext() {
  const context = useContext(ListboxItemContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useListboxItemContext` must be used within a `Listbox.Item` component");
  }
  return context;
}
function ListboxItem(props) {
  let ref;
  const listBoxContext = useListboxContext();
  const defaultId = `${listBoxContext.generateId("item")}-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps({
    id: defaultId
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "item", "aria-label", "aria-labelledby", "aria-describedby", "onPointerMove", "onPointerDown", "onPointerUp", "onClick", "onKeyDown", "onMouseDown", "onFocus"]);
  const [labelId, setLabelId] = createSignal();
  const [descriptionId, setDescriptionId] = createSignal();
  const selectionManager = () => listBoxContext.listState().selectionManager();
  const isHighlighted = () => selectionManager().focusedKey() === local.item.key;
  const selectableItem = createSelectableItem({
    key: () => local.item.key,
    selectionManager,
    shouldSelectOnPressUp: listBoxContext.shouldSelectOnPressUp,
    allowsDifferentPressOrigin: () => {
      return listBoxContext.shouldSelectOnPressUp() && listBoxContext.shouldFocusOnHover();
    },
    shouldUseVirtualFocus: listBoxContext.shouldUseVirtualFocus,
    disabled: () => local.item.disabled
  }, () => ref);
  const ariaSelected = () => {
    if (selectionManager().selectionMode() === "none") {
      return void 0;
    }
    return selectableItem.isSelected();
  };
  const isNotSafariMacOS = createMemo(() => true);
  const ariaLabel = () => isNotSafariMacOS() ? local["aria-label"] : void 0;
  const ariaLabelledBy = () => isNotSafariMacOS() ? labelId() : void 0;
  const ariaDescribedBy = () => isNotSafariMacOS() ? descriptionId() : void 0;
  const ariaPosInSet = () => {
    var _a;
    if (!listBoxContext.isVirtualized()) {
      return void 0;
    }
    const index = (_a = listBoxContext.listState().collection().getItem(local.item.key)) == null ? void 0 : _a.index;
    return index != null ? index + 1 : void 0;
  };
  const ariaSetSize = () => {
    if (!listBoxContext.isVirtualized()) {
      return void 0;
    }
    return getItemCount(listBoxContext.listState().collection());
  };
  const onPointerMove = (e) => {
    callHandler(e, local.onPointerMove);
    if (e.pointerType !== "mouse") {
      return;
    }
    if (!selectableItem.isDisabled() && listBoxContext.shouldFocusOnHover()) {
      focusWithoutScrolling(e.currentTarget);
      selectionManager().setFocused(true);
      selectionManager().setFocusedKey(local.item.key);
    }
  };
  const dataset = createMemo(() => ({
    "data-disabled": selectableItem.isDisabled() ? "" : void 0,
    "data-selected": selectableItem.isSelected() ? "" : void 0,
    "data-highlighted": isHighlighted() ? "" : void 0
  }));
  const context = {
    isSelected: selectableItem.isSelected,
    dataset,
    generateId: createGenerateId(() => others.id),
    registerLabelId: createRegisterId(setLabelId),
    registerDescriptionId: createRegisterId(setDescriptionId)
  };
  return createComponent(ListboxItemContext.Provider, {
    value: context,
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "li",
        role: "option",
        get tabIndex() {
          return selectableItem.tabIndex();
        },
        get ["aria-disabled"]() {
          return selectableItem.isDisabled();
        },
        get ["aria-selected"]() {
          return ariaSelected();
        },
        get ["aria-label"]() {
          return ariaLabel();
        },
        get ["aria-labelledby"]() {
          return ariaLabelledBy();
        },
        get ["aria-describedby"]() {
          return ariaDescribedBy();
        },
        get ["aria-posinset"]() {
          return ariaPosInSet();
        },
        get ["aria-setsize"]() {
          return ariaSetSize();
        },
        get ["data-key"]() {
          return selectableItem.dataKey();
        },
        get onPointerDown() {
          return composeEventHandlers([local.onPointerDown, selectableItem.onPointerDown]);
        },
        get onPointerUp() {
          return composeEventHandlers([local.onPointerUp, selectableItem.onPointerUp]);
        },
        get onClick() {
          return composeEventHandlers([local.onClick, selectableItem.onClick]);
        },
        get onKeyDown() {
          return composeEventHandlers([local.onKeyDown, selectableItem.onKeyDown]);
        },
        get onMouseDown() {
          return composeEventHandlers([local.onMouseDown, selectableItem.onMouseDown]);
        },
        get onFocus() {
          return composeEventHandlers([local.onFocus, selectableItem.onFocus]);
        },
        onPointerMove
      }, dataset, others));
    }
  });
}
function ListboxItemDescription(props) {
  const context = useListboxItemContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("description")
  }, props);
  createEffect(() => onCleanup(context.registerDescriptionId(mergedProps.id)));
  return createComponent(Polymorphic, mergeProps({
    as: "div"
  }, () => context.dataset(), mergedProps));
}
function ListboxItemIndicator(props) {
  const context = useListboxItemContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("indicator")
  }, props);
  const [local, others] = splitProps(mergedProps, ["forceMount"]);
  return createComponent(Show, {
    get when() {
      return local.forceMount || context.isSelected();
    },
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "div",
        "aria-hidden": "true"
      }, () => context.dataset(), others));
    }
  });
}
function ListboxItemLabel(props) {
  const context = useListboxItemContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("label")
  }, props);
  createEffect(() => onCleanup(context.registerLabelId(mergedProps.id)));
  return createComponent(Polymorphic, mergeProps({
    as: "div"
  }, () => context.dataset(), mergedProps));
}
function ListboxRoot(props) {
  let ref;
  const defaultId = `listbox-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps({
    id: defaultId,
    selectionMode: "single",
    virtualized: false
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "children", "renderItem", "renderSection", "value", "defaultValue", "onChange", "options", "optionValue", "optionTextValue", "optionDisabled", "optionGroupChildren", "state", "keyboardDelegate", "autoFocus", "selectionMode", "shouldFocusWrap", "shouldUseVirtualFocus", "shouldSelectOnPressUp", "shouldFocusOnHover", "allowDuplicateSelectionEvents", "disallowEmptySelection", "selectionBehavior", "selectOnFocus", "disallowTypeAhead", "allowsTabNavigation", "virtualized", "scrollToItem", "scrollRef", "onKeyDown", "onMouseDown", "onFocusIn", "onFocusOut"]);
  const listState = createMemo(() => {
    if (local.state) {
      return local.state;
    }
    return createListState({
      selectedKeys: () => local.value,
      defaultSelectedKeys: () => local.defaultValue,
      onSelectionChange: local.onChange,
      allowDuplicateSelectionEvents: () => access(local.allowDuplicateSelectionEvents),
      disallowEmptySelection: () => access(local.disallowEmptySelection),
      selectionBehavior: () => access(local.selectionBehavior),
      selectionMode: () => access(local.selectionMode),
      dataSource: () => {
        var _a;
        return (_a = local.options) != null ? _a : [];
      },
      getKey: () => local.optionValue,
      getTextValue: () => local.optionTextValue,
      getDisabled: () => local.optionDisabled,
      getSectionChildren: () => local.optionGroupChildren
    });
  });
  const selectableList = createSelectableList({
    selectionManager: () => listState().selectionManager(),
    collection: () => listState().collection(),
    autoFocus: () => access(local.autoFocus),
    shouldFocusWrap: () => access(local.shouldFocusWrap),
    keyboardDelegate: () => local.keyboardDelegate,
    disallowEmptySelection: () => access(local.disallowEmptySelection),
    selectOnFocus: () => access(local.selectOnFocus),
    disallowTypeAhead: () => access(local.disallowTypeAhead),
    shouldUseVirtualFocus: () => access(local.shouldUseVirtualFocus),
    allowsTabNavigation: () => access(local.allowsTabNavigation),
    isVirtualized: () => local.virtualized,
    scrollToKey: () => local.scrollToItem
  }, () => ref, () => {
    var _a;
    return (_a = local.scrollRef) == null ? void 0 : _a.call(local);
  });
  const context = {
    listState,
    generateId: createGenerateId(() => others.id),
    shouldUseVirtualFocus: () => mergedProps.shouldUseVirtualFocus,
    shouldSelectOnPressUp: () => mergedProps.shouldSelectOnPressUp,
    shouldFocusOnHover: () => mergedProps.shouldFocusOnHover,
    isVirtualized: () => local.virtualized
  };
  return createComponent(ListboxContext.Provider, {
    value: context,
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "ul",
        role: "listbox",
        get tabIndex() {
          return selectableList.tabIndex();
        },
        get ["aria-multiselectable"]() {
          return listState().selectionManager().selectionMode() === "multiple" ? true : void 0;
        },
        get onKeyDown() {
          return composeEventHandlers([local.onKeyDown, selectableList.onKeyDown]);
        },
        get onMouseDown() {
          return composeEventHandlers([local.onMouseDown, selectableList.onMouseDown]);
        },
        get onFocusIn() {
          return composeEventHandlers([local.onFocusIn, selectableList.onFocusIn]);
        },
        get onFocusOut() {
          return composeEventHandlers([local.onFocusOut, selectableList.onFocusOut]);
        }
      }, others, {
        get children() {
          return createComponent(Show, {
            get when() {
              return !local.virtualized;
            },
            get fallback() {
              var _a;
              return (_a = local.children) == null ? void 0 : _a.call(local, listState().collection);
            },
            get children() {
              return createComponent(Key, {
                get each() {
                  return [...listState().collection()];
                },
                by: "key",
                children: (item) => createComponent(Switch, {
                  get children() {
                    return [createComponent(Match, {
                      get when() {
                        return item().type === "section";
                      },
                      get children() {
                        var _a;
                        return (_a = local.renderSection) == null ? void 0 : _a.call(local, item());
                      }
                    }), createComponent(Match, {
                      get when() {
                        return item().type === "item";
                      },
                      get children() {
                        var _a;
                        return (_a = local.renderItem) == null ? void 0 : _a.call(local, item());
                      }
                    })];
                  }
                })
              });
            }
          });
        }
      }));
    }
  });
}
function ListboxSection(props) {
  return createComponent(Polymorphic, mergeProps({
    as: "li",
    role: "presentation"
  }, props));
}
var Listbox = Object.assign(ListboxRoot, {
  Item: ListboxItem,
  ItemDescription: ListboxItemDescription,
  ItemIndicator: ListboxItemIndicator,
  ItemLabel: ListboxItemLabel,
  Section: ListboxSection
});
var select_exports = {};
__export(select_exports, {
  Arrow: () => PopperArrow,
  Content: () => SelectContent$1,
  Description: () => FormControlDescription,
  ErrorMessage: () => FormControlErrorMessage,
  HiddenSelect: () => SelectHiddenSelect,
  Icon: () => SelectIcon,
  Item: () => ListboxItem,
  ItemDescription: () => ListboxItemDescription,
  ItemIndicator: () => ListboxItemIndicator,
  ItemLabel: () => ListboxItemLabel,
  Label: () => SelectLabel,
  Listbox: () => SelectListbox,
  Portal: () => SelectPortal,
  Root: () => SelectRoot,
  Section: () => ListboxSection,
  Select: () => Select$1,
  Trigger: () => SelectTrigger$1,
  Value: () => SelectValue$1,
  useSelectContext: () => useSelectContext
});
var SelectContext = createContext();
function useSelectContext() {
  const context = useContext(SelectContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useSelectContext` must be used within a `Select` component");
  }
  return context;
}
function SelectContent$1(props) {
  let ref;
  const context = useSelectContext();
  const [local, others] = splitProps(props, ["ref", "style", "onCloseAutoFocus", "onFocusOutside"]);
  const onEscapeKeyDown = (e) => {
    context.close();
  };
  const onFocusOutside = (e) => {
    var _a;
    (_a = local.onFocusOutside) == null ? void 0 : _a.call(local, e);
    if (context.isOpen() && context.isModal()) {
      e.preventDefault();
    }
  };
  createHideOutside({
    isDisabled: () => !(context.isOpen() && context.isModal()),
    targets: () => []
  });
  src_default$1({
    element: () => null,
    enabled: () => context.contentPresent() && context.preventScroll()
  });
  createFocusScope({
    trapFocus: () => context.isOpen() && context.isModal(),
    onMountAutoFocus: (e) => {
      e.preventDefault();
    },
    onUnmountAutoFocus: (e) => {
      var _a;
      (_a = local.onCloseAutoFocus) == null ? void 0 : _a.call(local, e);
      if (!e.defaultPrevented) {
        focusWithoutScrolling(context.triggerRef());
        e.preventDefault();
      }
    }
  }, () => ref);
  return createComponent(Show, {
    get when() {
      return context.contentPresent();
    },
    get children() {
      return createComponent(Popper.Positioner, {
        get children() {
          return createComponent(DismissableLayer, mergeProps({
            get disableOutsidePointerEvents() {
              return context.isModal() && context.isOpen();
            },
            get excludedElements() {
              return [context.triggerRef];
            },
            get style() {
              return combineStyle({
                "--kb-select-content-transform-origin": "var(--kb-popper-content-transform-origin)",
                position: "relative"
              }, local.style);
            },
            onEscapeKeyDown,
            onFocusOutside,
            get onDismiss() {
              return context.close;
            }
          }, () => context.dataset(), others));
        }
      });
    }
  });
}
function SelectHiddenSelect(props) {
  const context = useSelectContext();
  return createComponent(HiddenSelectBase, mergeProps({
    get collection() {
      return context.listState().collection();
    },
    get selectionManager() {
      return context.listState().selectionManager();
    },
    get isOpen() {
      return context.isOpen();
    },
    get isMultiple() {
      return context.isMultiple();
    },
    get isVirtualized() {
      return context.isVirtualized();
    },
    focusTrigger: () => {
      var _a;
      return (_a = context.triggerRef()) == null ? void 0 : _a.focus();
    }
  }, props));
}
function SelectIcon(props) {
  const context = useSelectContext();
  const mergedProps = mergeDefaultProps({
    children: "\u25BC"
  }, props);
  return createComponent(Polymorphic, mergeProps({
    as: "span",
    "aria-hidden": "true"
  }, () => context.dataset(), mergedProps));
}
function SelectLabel(props) {
  const context = useSelectContext();
  const [local, others] = splitProps(props, ["onClick"]);
  const onClick = (e) => {
    var _a;
    callHandler(e, local.onClick);
    if (!context.isDisabled()) {
      (_a = context.triggerRef()) == null ? void 0 : _a.focus();
    }
  };
  return createComponent(FormControlLabel, mergeProps({
    as: "span",
    onClick
  }, others));
}
function SelectListbox(props) {
  const context = useSelectContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("listbox")
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "id", "onKeyDown"]);
  createEffect(() => onCleanup(context.registerListboxId(local.id)));
  const onKeyDown = (e) => {
    callHandler(e, local.onKeyDown);
    if (e.key === "Escape") {
      e.preventDefault();
    }
  };
  return createComponent(ListboxRoot, mergeProps({
    get id() {
      return local.id;
    },
    get state() {
      return context.listState();
    },
    get virtualized() {
      return context.isVirtualized();
    },
    get autoFocus() {
      return context.autoFocus();
    },
    shouldSelectOnPressUp: true,
    shouldFocusOnHover: true,
    get shouldFocusWrap() {
      return context.shouldFocusWrap();
    },
    get disallowTypeAhead() {
      return context.disallowTypeAhead();
    },
    get ["aria-labelledby"]() {
      return context.listboxAriaLabelledBy();
    },
    get renderItem() {
      return context.renderItem;
    },
    get renderSection() {
      return context.renderSection;
    },
    onKeyDown
  }, others));
}
function SelectPortal(props) {
  const context = useSelectContext();
  return createComponent(Show, {
    get when() {
      return context.contentPresent();
    },
    get children() {
      return createComponent(Portal, props);
    }
  });
}
function SelectBase(props) {
  const defaultId = `select-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps({
    id: defaultId,
    selectionMode: "single",
    disallowEmptySelection: false,
    closeOnSelection: props.selectionMode === "single",
    allowDuplicateSelectionEvents: true,
    gutter: 8,
    sameWidth: true,
    modal: false
  }, props);
  const [local, popperProps, formControlProps, others] = splitProps(mergedProps, ["itemComponent", "sectionComponent", "open", "defaultOpen", "onOpenChange", "value", "defaultValue", "onChange", "placeholder", "options", "optionValue", "optionTextValue", "optionDisabled", "optionGroupChildren", "keyboardDelegate", "allowDuplicateSelectionEvents", "disallowEmptySelection", "closeOnSelection", "disallowTypeAhead", "shouldFocusWrap", "selectionBehavior", "selectionMode", "virtualized", "modal", "preventScroll", "forceMount"], ["getAnchorRect", "placement", "gutter", "shift", "flip", "slide", "overlap", "sameWidth", "fitViewport", "hideWhenDetached", "detachedPadding", "arrowPadding", "overflowPadding"], FORM_CONTROL_PROP_NAMES);
  const [triggerId, setTriggerId] = createSignal();
  const [valueId, setValueId] = createSignal();
  const [listboxId, setListboxId] = createSignal();
  const [triggerRef, setTriggerRef] = createSignal();
  const [contentRef, setContentRef] = createSignal();
  const [listboxRef, setListboxRef] = createSignal();
  const [listboxAriaLabelledBy, setListboxAriaLabelledBy] = createSignal();
  const [focusStrategy, setFocusStrategy] = createSignal(true);
  const getOptionValue = (option) => {
    const optionValue = local.optionValue;
    if (optionValue == null) {
      return String(option);
    }
    return String(isFunction(optionValue) ? optionValue(option) : option[optionValue]);
  };
  const flattenOptions = createMemo(() => {
    const optionGroupChildren = local.optionGroupChildren;
    if (optionGroupChildren == null) {
      return local.options;
    }
    return local.options.flatMap((item) => {
      var _a;
      return (_a = item[optionGroupChildren]) != null ? _a : item;
    });
  });
  const flattenOptionKeys = createMemo(() => {
    return flattenOptions().map((option) => getOptionValue(option));
  });
  const getOptionsFromValues = (values) => {
    return [...values].map((value) => flattenOptions().find((option) => getOptionValue(option) === value)).filter((option) => option != null);
  };
  const disclosureState = createDisclosureState({
    open: () => local.open,
    defaultOpen: () => local.defaultOpen,
    onOpenChange: (isOpen) => {
      var _a;
      return (_a = local.onOpenChange) == null ? void 0 : _a.call(local, isOpen);
    }
  });
  const listState = createListState({
    selectedKeys: () => {
      if (local.value != null) {
        return local.value.map(getOptionValue);
      }
      return local.value;
    },
    defaultSelectedKeys: () => {
      if (local.defaultValue != null) {
        return local.defaultValue.map(getOptionValue);
      }
      return local.defaultValue;
    },
    onSelectionChange: (selectedKeys) => {
      var _a;
      (_a = local.onChange) == null ? void 0 : _a.call(local, getOptionsFromValues(selectedKeys));
      if (local.closeOnSelection) {
        close();
      }
    },
    allowDuplicateSelectionEvents: () => access(local.allowDuplicateSelectionEvents),
    disallowEmptySelection: () => access(local.disallowEmptySelection),
    selectionBehavior: () => access(local.selectionBehavior),
    selectionMode: () => local.selectionMode,
    dataSource: () => {
      var _a;
      return (_a = local.options) != null ? _a : [];
    },
    getKey: () => local.optionValue,
    getTextValue: () => local.optionTextValue,
    getDisabled: () => local.optionDisabled,
    getSectionChildren: () => local.optionGroupChildren
  });
  const selectedOptions = createMemo(() => {
    return getOptionsFromValues(listState.selectionManager().selectedKeys());
  });
  const removeOptionFromSelection = (option) => {
    listState.selectionManager().toggleSelection(getOptionValue(option));
  };
  const {
    present: contentPresent
  } = src_default({
    show: () => local.forceMount || disclosureState.isOpen(),
    element: () => {
      var _a;
      return (_a = contentRef()) != null ? _a : null;
    }
  });
  const focusListbox = () => {
    const listboxEl = listboxRef();
    if (listboxEl) {
      focusWithoutScrolling(listboxEl);
    }
  };
  const open = (focusStrategy2) => {
    if (local.options.length <= 0) {
      return;
    }
    setFocusStrategy(focusStrategy2);
    disclosureState.open();
    let focusedKey = listState.selectionManager().firstSelectedKey();
    if (focusedKey == null) {
      if (focusStrategy2 === "first") {
        focusedKey = listState.collection().getFirstKey();
      } else if (focusStrategy2 === "last") {
        focusedKey = listState.collection().getLastKey();
      }
    }
    focusListbox();
    listState.selectionManager().setFocused(true);
    listState.selectionManager().setFocusedKey(focusedKey);
  };
  const close = () => {
    disclosureState.close();
    listState.selectionManager().setFocused(false);
    listState.selectionManager().setFocusedKey(void 0);
  };
  const toggle = (focusStrategy2) => {
    if (disclosureState.isOpen()) {
      close();
    } else {
      open(focusStrategy2);
    }
  };
  const {
    formControlContext
  } = createFormControl(formControlProps);
  createFormResetListener(triggerRef, () => {
    const defaultSelectedKeys = local.defaultValue ? [...local.defaultValue].map(getOptionValue) : new Selection();
    listState.selectionManager().setSelectedKeys(defaultSelectedKeys);
  });
  const collator = createCollator({
    usage: "search",
    sensitivity: "base"
  });
  const delegate = createMemo(() => {
    const keyboardDelegate = access(local.keyboardDelegate);
    if (keyboardDelegate) {
      return keyboardDelegate;
    }
    return new ListKeyboardDelegate(listState.collection, void 0, collator);
  });
  const renderItem = (item) => {
    var _a;
    return (_a = local.itemComponent) == null ? void 0 : _a.call(local, {
      item
    });
  };
  const renderSection = (section) => {
    var _a;
    return (_a = local.sectionComponent) == null ? void 0 : _a.call(local, {
      section
    });
  };
  createEffect(on([flattenOptionKeys], ([flattenOptionKeys2]) => {
    const currentSelectedKeys = [...listState.selectionManager().selectedKeys()];
    const keysToKeep = currentSelectedKeys.filter((key) => flattenOptionKeys2.includes(key));
    listState.selectionManager().setSelectedKeys(keysToKeep);
  }, {
    defer: true
  }));
  const dataset = createMemo(() => ({
    "data-expanded": disclosureState.isOpen() ? "" : void 0,
    "data-closed": !disclosureState.isOpen() ? "" : void 0
  }));
  const context = {
    dataset,
    isOpen: disclosureState.isOpen,
    isDisabled: () => {
      var _a;
      return (_a = formControlContext.isDisabled()) != null ? _a : false;
    },
    isMultiple: () => access(local.selectionMode) === "multiple",
    isVirtualized: () => {
      var _a;
      return (_a = local.virtualized) != null ? _a : false;
    },
    isModal: () => {
      var _a;
      return (_a = local.modal) != null ? _a : false;
    },
    preventScroll: () => {
      var _a;
      return (_a = local.preventScroll) != null ? _a : context.isModal();
    },
    disallowTypeAhead: () => {
      var _a;
      return (_a = local.disallowTypeAhead) != null ? _a : false;
    },
    shouldFocusWrap: () => {
      var _a;
      return (_a = local.shouldFocusWrap) != null ? _a : false;
    },
    selectedOptions,
    contentPresent,
    autoFocus: focusStrategy,
    triggerRef,
    listState: () => listState,
    keyboardDelegate: delegate,
    triggerId,
    valueId,
    listboxId,
    listboxAriaLabelledBy,
    setListboxAriaLabelledBy,
    setTriggerRef,
    setContentRef,
    setListboxRef,
    open,
    close,
    toggle,
    placeholder: () => local.placeholder,
    renderItem,
    renderSection,
    removeOptionFromSelection,
    generateId: createGenerateId(() => access(formControlProps.id)),
    registerTriggerId: createRegisterId(setTriggerId),
    registerValueId: createRegisterId(setValueId),
    registerListboxId: createRegisterId(setListboxId)
  };
  return createComponent(FormControlContext.Provider, {
    value: formControlContext,
    get children() {
      return createComponent(SelectContext.Provider, {
        value: context,
        get children() {
          return createComponent(Popper, mergeProps({
            anchorRef: triggerRef,
            contentRef
          }, popperProps, {
            get children() {
              return createComponent(Polymorphic, mergeProps({
                as: "div",
                role: "group",
                get id() {
                  return access(formControlProps.id);
                }
              }, () => formControlContext.dataset(), dataset, others));
            }
          }));
        }
      });
    }
  });
}
function SelectRoot(props) {
  const [local, others] = splitProps(props, ["value", "defaultValue", "onChange", "multiple"]);
  const value = createMemo(() => {
    if (local.value != null) {
      return local.multiple ? local.value : [local.value];
    }
    return local.value;
  });
  const defaultValue = createMemo(() => {
    if (local.defaultValue != null) {
      return local.multiple ? local.defaultValue : [local.defaultValue];
    }
    return local.defaultValue;
  });
  const onChange = (value2) => {
    var _a2;
    var _a, _b;
    if (local.multiple) {
      (_a = local.onChange) == null ? void 0 : _a.call(local, value2 != null ? value2 : []);
    } else {
      (_b = local.onChange) == null ? void 0 : _b.call(local, (_a2 = value2[0]) != null ? _a2 : null);
    }
  };
  return createComponent(SelectBase, mergeProps({
    get value() {
      return value();
    },
    get defaultValue() {
      return defaultValue();
    },
    onChange,
    get selectionMode() {
      return local.multiple ? "multiple" : "single";
    }
  }, others));
}
function SelectTrigger$1(props) {
  const formControlContext = useFormControlContext();
  const context = useSelectContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("trigger")
  }, props);
  const [local, formControlFieldProps, others] = splitProps(mergedProps, ["ref", "disabled", "onPointerDown", "onClick", "onKeyDown", "onFocus", "onBlur"], FORM_CONTROL_FIELD_PROP_NAMES);
  const selectionManager = () => context.listState().selectionManager();
  const keyboardDelegate = () => context.keyboardDelegate();
  const isDisabled = () => local.disabled || context.isDisabled();
  const {
    fieldProps
  } = createFormControlField(formControlFieldProps);
  const {
    typeSelectHandlers
  } = createTypeSelect({
    keyboardDelegate,
    selectionManager,
    onTypeSelect: (key) => selectionManager().select(key)
  });
  const ariaLabelledBy = () => {
    return [context.listboxAriaLabelledBy(), context.valueId()].filter(Boolean).join(" ") || void 0;
  };
  const onPointerDown = (e) => {
    callHandler(e, local.onPointerDown);
    e.currentTarget.dataset.pointerType = e.pointerType;
    if (!isDisabled() && e.pointerType !== "touch" && e.button === 0) {
      e.preventDefault();
      context.toggle(true);
    }
  };
  const onClick = (e) => {
    callHandler(e, local.onClick);
    if (!isDisabled() && e.currentTarget.dataset.pointerType === "touch") {
      context.toggle(true);
    }
  };
  const onKeyDown = (e) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    callHandler(e, local.onKeyDown);
    if (isDisabled()) {
      return;
    }
    callHandler(e, typeSelectHandlers.onKeyDown);
    switch (e.key) {
      case "Enter":
      case " ":
      case "ArrowDown":
        e.stopPropagation();
        e.preventDefault();
        context.toggle("first");
        break;
      case "ArrowUp":
        e.stopPropagation();
        e.preventDefault();
        context.toggle("last");
        break;
      case "ArrowLeft": {
        e.preventDefault();
        if (context.isMultiple()) {
          return;
        }
        const firstSelectedKey = selectionManager().firstSelectedKey();
        const key = firstSelectedKey != null ? (_b = (_a = keyboardDelegate()).getKeyAbove) == null ? void 0 : _b.call(_a, firstSelectedKey) : (_d = (_c = keyboardDelegate()).getFirstKey) == null ? void 0 : _d.call(_c);
        if (key != null) {
          selectionManager().select(key);
        }
        break;
      }
      case "ArrowRight": {
        e.preventDefault();
        if (context.isMultiple()) {
          return;
        }
        const firstSelectedKey = selectionManager().firstSelectedKey();
        const key = firstSelectedKey != null ? (_f = (_e = keyboardDelegate()).getKeyBelow) == null ? void 0 : _f.call(_e, firstSelectedKey) : (_h = (_g = keyboardDelegate()).getFirstKey) == null ? void 0 : _h.call(_g);
        if (key != null) {
          selectionManager().select(key);
        }
        break;
      }
    }
  };
  const onFocus = (e) => {
    callHandler(e, local.onFocus);
    if (selectionManager().isFocused()) {
      return;
    }
    selectionManager().setFocused(true);
  };
  const onBlur = (e) => {
    callHandler(e, local.onBlur);
    if (context.isOpen()) {
      return;
    }
    selectionManager().setFocused(false);
  };
  createEffect(() => onCleanup(context.registerTriggerId(fieldProps.id())));
  createEffect(() => {
    context.setListboxAriaLabelledBy([fieldProps.ariaLabelledBy(), fieldProps.ariaLabel() && !fieldProps.ariaLabelledBy() ? fieldProps.id() : null].filter(Boolean).join(" ") || void 0);
  });
  return createComponent(ButtonRoot, mergeProps({
    get id() {
      return fieldProps.id();
    },
    get disabled() {
      return isDisabled();
    },
    "aria-haspopup": "listbox",
    get ["aria-expanded"]() {
      return context.isOpen();
    },
    get ["aria-controls"]() {
      return context.isOpen() ? context.listboxId() : void 0;
    },
    get ["aria-label"]() {
      return fieldProps.ariaLabel();
    },
    get ["aria-labelledby"]() {
      return ariaLabelledBy();
    },
    get ["aria-describedby"]() {
      return fieldProps.ariaDescribedBy();
    },
    onPointerDown,
    onClick,
    onKeyDown,
    onFocus,
    onBlur
  }, () => context.dataset(), () => formControlContext.dataset(), others));
}
function SelectValue$1(props) {
  const formControlContext = useFormControlContext();
  const context = useSelectContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("value")
  }, props);
  const [local, others] = splitProps(mergedProps, ["id", "children"]);
  const selectionManager = () => context.listState().selectionManager();
  const isSelectionEmpty = () => {
    const selectedKeys = selectionManager().selectedKeys();
    if (selectedKeys.size === 1 && selectedKeys.has("")) {
      return true;
    }
    return selectionManager().isEmpty();
  };
  createEffect(() => onCleanup(context.registerValueId(local.id)));
  return createComponent(Polymorphic, mergeProps({
    as: "span",
    get id() {
      return local.id;
    },
    get ["data-placeholder-shown"]() {
      return isSelectionEmpty() ? "" : void 0;
    }
  }, () => formControlContext.dataset(), others, {
    get children() {
      return createComponent(Show, {
        get when() {
          return !isSelectionEmpty();
        },
        get fallback() {
          return context.placeholder();
        },
        get children() {
          return createComponent(SelectValueChild, {
            state: {
              selectedOption: () => context.selectedOptions()[0],
              selectedOptions: () => context.selectedOptions(),
              remove: (option) => context.removeOptionFromSelection(option),
              clear: () => selectionManager().clearSelection()
            },
            get children() {
              return local.children;
            }
          });
        }
      });
    }
  }));
}
function SelectValueChild(props) {
  const resolvedChildren = children(() => {
    const body = props.children;
    return isFunction(body) ? body(props.state) : body;
  });
  return resolvedChildren();
}
var Select$1 = Object.assign(SelectRoot, {
  Arrow: PopperArrow,
  Content: SelectContent$1,
  Description: FormControlDescription,
  ErrorMessage: FormControlErrorMessage,
  HiddenSelect: SelectHiddenSelect,
  Icon: SelectIcon,
  Item: ListboxItem,
  ItemDescription: ListboxItemDescription,
  ItemIndicator: ListboxItemIndicator,
  ItemLabel: ListboxItemLabel,
  Label: SelectLabel,
  Listbox: SelectListbox,
  Portal: SelectPortal,
  Section: ListboxSection,
  Trigger: SelectTrigger$1,
  Value: SelectValue$1
});
var _tmpl$$4 = ["<div", ' class="iconify mynaui--chevron-up-down size-4" aria-hidden></div>'], _tmpl$2$3 = ["<div", ' class="iconify mynaui--check-solid" aria-hidden></div>'];
const Select = SelectRoot;
const SelectValue = SelectValue$1;
const SelectTrigger = (props) => {
  const [local, others] = splitProps(props, ["class", "children", "showIcon"]);
  return createComponent(SelectTrigger$1, mergeProps({
    get ["class"]() {
      return cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", local.class);
    }
  }, others, {
    get children() {
      return [local.children, createComponent(Show, {
        get when() {
          return local.showIcon;
        },
        get children() {
          return createComponent(SelectIcon, {
            get children() {
              return ssr(_tmpl$$4, ssrHydrationKey());
            }
          });
        }
      })];
    }
  }));
};
const SelectContent = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(SelectPortal, {
    get children() {
      return createComponent(SelectContent$1, mergeProps({
        get ["class"]() {
          return cn("fade-in-80 relative z-50 min-w-32 animate-in overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md", local.class);
        }
      }, others, {
        get children() {
          return createComponent(SelectListbox, {
            "class": "m-0 p-1"
          });
        }
      }));
    }
  });
};
const SelectItem = (props) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return createComponent(ListboxItem, mergeProps({
    get ["class"]() {
      return cn("relative mt-0 flex w-full cursor-default select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", local.class);
    }
  }, others, {
    get children() {
      return [createComponent(ListboxItemIndicator, {
        "class": "absolute right-2 flex size-3.5 items-center justify-center",
        get children() {
          return ssr(_tmpl$2$3, ssrHydrationKey());
        }
      }), createComponent(ListboxItemLabel, {
        get children() {
          return local.children;
        }
      })];
    }
  }));
};
cva({
  base: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  variants: {
    variant: {
      label: "data-[invalid]:text-destructive",
      description: "font-normal text-muted-foreground",
      error: "text-xs text-destructive"
    }
  },
  defaultVariants: {
    variant: "label"
  }
});
var _tmpl$$3 = ["<div", ' class="iconify mynaui--plus size-5"></div>'], _tmpl$2$2 = ["<span", ' class="sr-only">Create Feedback</span>'], _tmpl$3$2 = ["<div", ' class="space-y-2 py-4"><!--$-->', "<!--/--><!--$-->", '<!--/--><div class="flex flex-wrap items-center gap-2"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div></div>"], _tmpl$4$2 = ["<div", ' class="iconify tabler--inner-shadow-bottom-left-filled size-5 text-yellow-600"></div>'], _tmpl$5$2 = ["<div", ' class="flex items-center gap-1">', "</div>"], _tmpl$6$2 = ["<div", ' class="iconify solar--clipboard-heart-bold-duotone size-5 text-red-400"></div>'], _tmpl$7$1 = ["<div", ' class="iconify solar--tag-bold-duotone size-5 text-purple-400"></div>'], _tmpl$8$1 = ["<div", ' class="-translate-y-1/2 -right-2 absolute bottom-3 rounded-sm border bg-secondary px-1 text-xs">', "</div>"];
const options$1 = [{
  label: "Pending",
  value: "pending"
}, {
  label: "Reviewing",
  value: "reviewing"
}, {
  label: "Planned",
  value: "planned"
}, {
  label: "In Progress",
  value: "in-progress"
}, {
  label: "Completed",
  value: "completed"
}, {
  label: "Closed",
  value: "closed"
}];
function CreateFeedback() {
  const params = useParams({
    from: "/_layout/$workspaceId"
  });
  const [addFeedback, setAddFeedback] = createSignal({
    title: "",
    message: "",
    status: "pending",
    type: "bug",
    tags: ["security"],
    workspaceId: params().workspaceId
  });
  const isValid = () => addFeedback().title.trim() !== "" && addFeedback().message.trim() !== "" && addFeedback().workspaceId.trim() !== "";
  const z = useZero();
  function handleFeedbackCreation() {
    z().mutate.feedback.create({
      workspaceId: "8MEw-LJHwn7jizJ--dDBY",
      title: addFeedback().title,
      message: addFeedback().message,
      status: addFeedback().status,
      type: addFeedback().type,
      tags: addFeedback().tags
    });
    setAddFeedback({
      title: "",
      message: "",
      status: "pending",
      type: "bug",
      tags: ["security"],
      workspaceId: params().workspaceId
    });
  }
  return createComponent(Dialog, {
    get children() {
      return [createComponent(DialogTrigger, {
        as: Button,
        size: "sm",
        variant: "ghost",
        "class": "h-8 w-8 p-0",
        get children() {
          return [ssr(_tmpl$$3, ssrHydrationKey()), ssr(_tmpl$2$2, ssrHydrationKey())];
        }
      }), createComponent(DialogContent, {
        "class": "w-full md:h-80 md:w-2xl",
        get children() {
          return [createComponent(DialogHeader, {
            "class": "sr-only",
            get children() {
              return [createComponent(DialogTitle, {
                children: "Create Feedback"
              }), createComponent(DialogDescription, {
                children: "Make changes to your profile here. Click save when you're done."
              })];
            }
          }), ssr(_tmpl$3$2, ssrHydrationKey(), escape(createComponent(TextField, {
            "class": " gap-4",
            get children() {
              return [createComponent(TextFieldLabel, {
                "class": "sr-only text-right",
                children: "Name"
              }), createComponent(TextFieldInput, {
                placeholder: "Title",
                "class": "border-none bg-transparent p-0 font-semibold text-xl placeholder:text-xl focus-visible:border-none focus-visible:ring-0 md:text-xl",
                type: "text",
                onInput: (e) => setAddFeedback({
                  ...addFeedback(),
                  title: e.target.value
                }),
                get value() {
                  var _a;
                  return (_a = addFeedback().title) != null ? _a : "";
                }
              })];
            }
          })), escape(createComponent(TextField, {
            "class": "gap-4",
            get children() {
              return [createComponent(TextFieldLabel, {
                "class": "sr-only text-right",
                children: "Username"
              }), createComponent(TextFieldTextArea, {
                placeholder: "Description",
                "class": " h-24 resize-none border-none p-0 font-semibold text-xl placeholder:text-xl focus-visible:border-none focus-visible:ring-0 md:text-xl",
                onInput: (e) => setAddFeedback({
                  ...addFeedback(),
                  message: e.target.value
                }),
                get value() {
                  var _a;
                  return (_a = addFeedback().message) != null ? _a : "";
                }
              })];
            }
          })), escape(createComponent(FeedbackStatusSelect$1, {
            setAddFeedback,
            accessAddFeedback: addFeedback
          })), escape(createComponent(FeedbackTypeSelect$1, {
            setAddFeedback,
            accessAddFeedback: addFeedback
          })), escape(createComponent(FeedbackTagsSelect$1, {
            setAddFeedback,
            accessAddFeedback: addFeedback
          }))), createComponent(DialogFooter, {
            get children() {
              return createComponent(
                Button,
                {
                  onClick: handleFeedbackCreation,
                  get disabled() {
                    return !isValid();
                  },
                  children: "Create Feedback"
                }
              );
            }
          })];
        }
      })];
    }
  });
}
function FeedbackStatusSelect$1({
  setAddFeedback,
  accessAddFeedback
}) {
  return createComponent(Select, {
    options: options$1,
    optionValue: "value",
    optionTextValue: "label",
    get defaultValue() {
      return options$1[0];
    },
    itemComponent: (props) => createComponent(SelectItem, {
      get item() {
        return props.item;
      },
      get children() {
        return props.item.rawValue.label;
      }
    }),
    placement: "bottom-start",
    onChange: (e) => {
      if (e) {
        setAddFeedback((prev) => ({
          ...prev,
          status: e.value
        }));
      }
    },
    get children() {
      return [createComponent(SelectTrigger, {
        "aria-label": "Type",
        "class": "flex h-8 w-full items-center justify-center gap-1 truncate border-transparent bg-accent px-1 text-sm ",
        get children() {
          return [ssr(_tmpl$4$2, ssrHydrationKey()), createComponent(SelectValue, {
            children: (state) => ssr(_tmpl$5$2, ssrHydrationKey(), escape(state.selectedOption().label))
          })];
        }
      }), createComponent(SelectContent, {})];
    }
  });
}
function FeedbackTypeSelect$1({
  setAddFeedback,
  accessAddFeedback
}) {
  return createComponent(Select, {
    options: [{
      label: "Bug",
      value: "bug"
    }, {
      label: "Feature",
      value: "feature"
    }, {
      label: "Improvement",
      value: "improvement"
    }],
    optionValue: "value",
    optionTextValue: "label",
    get defaultValue() {
      return {
        label: "Bug",
        value: accessAddFeedback().type
      };
    },
    onChange: (e) => {
      if (e) {
        setAddFeedback((prev) => ({
          ...prev,
          type: e.value
        }));
      }
    },
    itemComponent: (props) => createComponent(SelectItem, {
      get item() {
        return props.item;
      },
      get children() {
        return props.item.rawValue.label;
      }
    }),
    placement: "bottom-start",
    get children() {
      return [createComponent(SelectTrigger, {
        "aria-label": "Type",
        "class": "flex h-8 w-full items-center justify-center gap-1 truncate border-transparent bg-accent px-1 text-sm ",
        get children() {
          return [ssr(_tmpl$6$2, ssrHydrationKey()), createComponent(SelectValue, {
            children: (state) => state.selectedOption().label
          })];
        }
      }), createComponent(SelectContent, {})];
    }
  });
}
function FeedbackTagsSelect$1({
  setAddFeedback,
  accessAddFeedback
}) {
  return createComponent(Select, {
    multiple: true,
    options: ["security", "performance", "usability", "design", "code-quality", "other", "clear"],
    get value() {
      return accessAddFeedback().tags;
    },
    onChange: (e) => {
      const clearAll = e.includes("clear");
      setAddFeedback((prev) => ({
        ...prev,
        tags: clearAll ? [] : e
      }));
    },
    itemComponent: (props) => createComponent(SelectItem, {
      "class": "capitalize",
      get item() {
        return props.item;
      },
      get children() {
        return props.item.rawValue;
      }
    }),
    placement: "bottom-start",
    get children() {
      return [createComponent(SelectTrigger, {
        "aria-label": "Type",
        "class": "relative isolate h-8 w-full border-transparent bg-accent px-1 text-sm ",
        get children() {
          return [ssr(_tmpl$7$1, ssrHydrationKey()), createComponent(SelectValue, {
            children: (state) => state.selectedOptions().length > 0 && ssr(_tmpl$8$1, ssrHydrationKey(), escape(state.selectedOptions().length))
          })];
        }
      }), createComponent(SelectContent, {})];
    }
  });
}
var _tmpl$$2 = ["<div", ' class="ml-3 flex flex-wrap items-center justify-between gap-2"><h1 class="font-semibold text-2xl">Feedbacks</h1><div class="relative w-full md:w-96"><!--$-->', '<!--/--><div class="iconify mynaui--search -translate-y-1/2 absolute top-1/2 right-3 text-muted-foreground peer-focus:text-white/80"></div></div><div class="flex items-center gap-2"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div></div>"], _tmpl$2$1 = ["<div", ' class="grid size-8 place-items-center"><div class="iconify mynaui--circle-dashed size-5" aria-hidden></div><span class="sr-only">Select a status</span></div>'], _tmpl$3$1 = ["<div", ' class="relative flex size-8 items-center justify-center "><div class="iconify mynaui--circle-dashed size-5" aria-hidden></div><!--$-->', "<!--/--></div>"], _tmpl$4$1 = ["<div", ' class="-translate-y-1/2 -right-2 absolute bottom-3 rounded-sm border bg-secondary px-1 text-xs">', "</div>"], _tmpl$5$1 = ["<div", ' class="grid size-8 place-items-center"><div class="iconify solar--clipboard-text-line-duotone size-5 " aria-hidden></div><span class="sr-only">Select a type</span></div>'], _tmpl$6$1 = ["<div", ' class="relative flex size-8 items-center justify-center"><div class="iconify solar--clipboard-text-line-duotone size-5" aria-hidden></div><!--$-->', "<!--/--></div>"], _tmpl$7 = ["<div", ' class="grid size-8 place-items-center"><div class="iconify solar--list-arrow-up-broken size-5" aria-hidden></div><span class="sr-only">Select a type</span></div>'], _tmpl$8 = ["<div", ' class="relative flex size-8 items-center justify-center"><div class="iconify solar--sort-from-top-to-bottom-line-duotone size-5" aria-hidden></div></div>'], _tmpl$9 = ["<div", ' class="relative flex size-8 items-center justify-center"><div class="iconify solar--sort-from-bottom-to-top-line-duotone size-5" aria-hidden></div></div>'], _tmpl$0 = ["<div", ' class="relative flex size-8 items-center justify-center"><div class="iconify solar--fire-bold-duotone size-5 fill-orange-600 text-orange-600" aria-hidden></div></div>'], _tmpl$1 = ["<div", ' class="grid size-8 place-items-center"><div class="iconify solar--tag-line-duotone size-5 " aria-hidden></div><span class="sr-only">Select a type</span></div>'], _tmpl$10 = ["<div", ' class="relative flex size-8 items-center justify-center"><div class=" iconify solar--tag-linear size-5 text-red-500" aria-hidden></div><!--$-->', "<!--/--></div>"];
const options = [{
  label: "Pending",
  value: "pending"
}, {
  label: "Reviewing",
  value: "reviewing"
}, {
  label: "Planned",
  value: "planned"
}, {
  label: "In Progress",
  value: "in-progress"
}, {
  label: "Completed",
  value: "completed"
}, {
  label: "Closed",
  value: "closed"
}, {
  label: "Clear all",
  value: "clear"
}];
function FeedbackFilter() {
  const navigate = useNavigate({
    from: "/$workspaceId"
  });
  const searchQuery = useSearch({
    from: "/_layout/$workspaceId"
  });
  const debouncedNavigate = debounce((value) => {
    navigate({
      to: ".",
      search: (prev) => ({
        ...prev,
        search: value
      })
    });
  }, {
    wait: 500
  });
  return ssr(_tmpl$$2, ssrHydrationKey(), escape(createComponent(Input, {
    onInput: (e) => {
      debouncedNavigate(e.target.value);
    },
    placeholder: "Search...",
    get value() {
      var _a;
      return (_a = searchQuery().search) != null ? _a : "";
    }
  })), escape(createComponent(FeedbackStatusSelect, {
    searchQuery
  })), escape(createComponent(FeedbackTypeSelect, {
    searchQuery
  })), escape(createComponent(FeedbackTagsSelect, {
    searchQuery
  })), escape(createComponent(SortSelect, {
    searchQuery
  })), escape(createComponent(CreateFeedback, {})));
}
function FeedbackStatusSelect({
  searchQuery
}) {
  const navigate = useNavigate({
    from: "/$workspaceId"
  });
  return createComponent(Select, {
    multiple: true,
    get value() {
      var _a;
      return searchQuery ? ((_a = searchQuery == null ? void 0 : searchQuery().status) == null ? void 0 : _a.map((status) => ({
        label: status,
        value: status
      }))) || [] : void 0;
    },
    optionValue: "value",
    optionTextValue: "label",
    options,
    get placeholder() {
      return ssr(_tmpl$2$1, ssrHydrationKey());
    },
    itemComponent: (props) => createComponent(SelectItem, {
      get item() {
        return props.item;
      },
      get children() {
        return props.item.rawValue.label;
      }
    }),
    placement: "bottom-start",
    onChange: (e) => {
      if (searchQuery) {
        const status = e.map((item) => item.value);
        const clearAll = status.includes("clear");
        navigate({
          to: ".",
          search: (prev) => ({
            ...prev,
            status: clearAll ? void 0 : status
          })
        });
      }
    },
    get children() {
      return [createComponent(SelectTrigger, {
        "aria-label": "Status",
        as: Button,
        size: "sm",
        variant: "ghost",
        "class": "size-8 border-none p-0",
        get children() {
          return createComponent(SelectValue, {
            children: (state) => ssr(_tmpl$3$1, ssrHydrationKey(), state.selectedOptions().length > 0 && ssr(_tmpl$4$1, ssrHydrationKey(), escape(state.selectedOptions().length)))
          });
        }
      }), createComponent(SelectContent, {})];
    }
  });
}
function FeedbackTypeSelect({
  searchQuery
}) {
  const navigate = useNavigate({
    from: "/$workspaceId"
  });
  return createComponent(Select, {
    multiple: true,
    optionValue: "value",
    optionTextValue: "label",
    get value() {
      var _a;
      return searchQuery ? ((_a = searchQuery == null ? void 0 : searchQuery().type) == null ? void 0 : _a.map((type) => ({
        label: type,
        value: type
      }))) || [] : void 0;
    },
    options: [{
      label: "Bug",
      value: "bug"
    }, {
      label: "Feature",
      value: "feature"
    }, {
      label: "Improvement",
      value: "improvement"
    }, {
      label: "Clear all",
      value: "clear"
    }],
    get placeholder() {
      return ssr(_tmpl$5$1, ssrHydrationKey());
    },
    itemComponent: (props) => createComponent(SelectItem, {
      get item() {
        return props.item;
      },
      get children() {
        return props.item.rawValue.label;
      }
    }),
    placement: "bottom-start",
    onChange: (e) => {
      if (searchQuery) {
        const type = e.map((item) => item.value);
        const clearAll = type.includes("clear");
        navigate({
          to: ".",
          search: (prev) => ({
            ...prev,
            type: clearAll ? void 0 : type
          })
        });
      }
    },
    get children() {
      return [createComponent(SelectTrigger, {
        "aria-label": "Type",
        as: Button,
        size: "sm",
        variant: "ghost",
        "class": "size-8 border-none p-0",
        get children() {
          return createComponent(SelectValue, {
            children: (state) => ssr(_tmpl$6$1, ssrHydrationKey(), state.selectedOptions().length > 0 && ssr(_tmpl$4$1, ssrHydrationKey(), escape(state.selectedOptions().length)))
          });
        }
      }), createComponent(SelectContent, {})];
    }
  });
}
function SortSelect({
  searchQuery
}) {
  const navigate = useNavigate({
    from: "/$workspaceId"
  });
  return createComponent(Select, {
    options: ["newest", "oldest", "hot"],
    get value() {
      return searchQuery ? searchQuery().order || "" : void 0;
    },
    get placeholder() {
      return ssr(_tmpl$7, ssrHydrationKey());
    },
    itemComponent: (props) => createComponent(SelectItem, {
      get item() {
        return props.item;
      },
      get children() {
        return props.item.rawValue;
      }
    }),
    placement: "bottom-start",
    onChange: (e) => {
      if (searchQuery) {
        navigate({
          to: ".",
          search: (prev) => ({
            ...prev,
            order: e ? e : void 0
          })
        });
      }
    },
    get children() {
      return [createComponent(SelectTrigger, {
        as: Button,
        size: "sm",
        variant: "ghost",
        "class": "size-8 border-none p-0",
        "aria-label": "Sort",
        get children() {
          return createComponent(SelectValue, {
            children: (state) => createComponent(Switch, {
              get children() {
                return [createComponent(Match, {
                  get when() {
                    return state.selectedOption() === "newest";
                  },
                  get children() {
                    return ssr(_tmpl$8, ssrHydrationKey());
                  }
                }), createComponent(Match, {
                  get when() {
                    return state.selectedOption() === "oldest";
                  },
                  get children() {
                    return ssr(_tmpl$9, ssrHydrationKey());
                  }
                }), createComponent(Match, {
                  get when() {
                    return state.selectedOption() === "hot";
                  },
                  get children() {
                    return ssr(_tmpl$0, ssrHydrationKey());
                  }
                })];
              }
            })
          });
        }
      }), createComponent(SelectContent, {})];
    }
  });
}
function FeedbackTagsSelect({
  searchQuery
}) {
  const navigate = useNavigate({
    from: "/$workspaceId"
  });
  return createComponent(Select, {
    multiple: true,
    optionValue: "value",
    optionTextValue: "label",
    get value() {
      var _a;
      return searchQuery ? ((_a = searchQuery == null ? void 0 : searchQuery().tags) == null ? void 0 : _a.map((tag) => ({
        label: tag,
        value: tag
      }))) || [] : void 0;
    },
    options: [{
      label: "Security",
      value: "security"
    }, {
      label: "Performance",
      value: "performance"
    }, {
      label: "Usability",
      value: "usability"
    }, {
      label: "Design",
      value: "design"
    }, {
      label: "Code Quality",
      value: "code-quality"
    }, {
      label: "Other",
      value: "other"
    }, {
      label: "Clear all",
      value: "clear"
    }],
    get placeholder() {
      return ssr(_tmpl$1, ssrHydrationKey());
    },
    itemComponent: (props) => createComponent(SelectItem, {
      get item() {
        return props.item;
      },
      get children() {
        return props.item.rawValue.label;
      }
    }),
    placement: "bottom-start",
    onChange: (e) => {
      if (searchQuery) {
        const tags = e.map((item) => item.value);
        const clearAll = tags.includes("clear");
        navigate({
          to: ".",
          search: (prev) => ({
            ...prev,
            tags: clearAll ? void 0 : tags
          })
        });
      }
    },
    get children() {
      return [createComponent(SelectTrigger, {
        as: Button,
        size: "sm",
        variant: "ghost",
        "class": "size-8 border-none p-0",
        "aria-label": "Tags",
        get children() {
          return createComponent(SelectValue, {
            children: (state) => ssr(_tmpl$10, ssrHydrationKey(), state.selectedOptions().length > 0 && ssr(_tmpl$4$1, ssrHydrationKey(), escape(state.selectedOptions().length)))
          });
        }
      }), createComponent(SelectContent, {})];
    }
  });
}
function formatDate(date) {
  return formatDistanceToNowStrict(new Date(date));
}
var _tmpl$$1 = ["<div", ' class="iconify solar--clipboard-text-line-duotone size-5" aria-hidden="true"></div>'], _tmpl$2 = ["<span", ' class="absolute inset-0 z-10 hover:bg-accent/10"></span>'], _tmpl$3 = ["<div", ' class="flex items-center gap-2"><div>', "</div><div>", "</div></div>"], _tmpl$4 = ["<article", ' class="flex h-14 items-center justify-between p-2"><!--$-->', "<!--/--><!--$-->", "<!--/--></article>"], _tmpl$5 = ["<time", ' class="font-semibold text-xs">', "</time>"], _tmpl$6 = ["<p", ">", "</p>"];
function FeedbackList({
  feedback
}) {
  console.log(feedback);
  return createComponent(Card, {
    "class": "relative w-full rounded-none border-0 border-b p-0",
    get children() {
      return ssr(_tmpl$4, ssrHydrationKey(), escape(createComponent(CardHeader, {
        "class": "p-0",
        get children() {
          return createComponent(CardTitle, {
            "class": "flex flex-row items-center gap-2",
            get children() {
              return [ssr(_tmpl$$1, ssrHydrationKey()), createComponent(Link, {
                to: "/$workspaceId/$feedbackId",
                get params() {
                  return {
                    workspaceId: feedback.workspaceId,
                    feedbackId: feedback.id
                  };
                },
                get children() {
                  return [feedback.title, ssr(_tmpl$2, ssrHydrationKey())];
                }
              })];
            }
          });
        }
      })), escape(createComponent(CardContent, {
        "class": "p-0",
        get children() {
          return [createComponent(Show, {
            get when() {
              return feedback.likesCount && feedback.commentsCount;
            },
            children: "so many like"
          }), ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(Show, {
            get when() {
              return feedback.createdAt;
            },
            children: (createdAt) => ssr(_tmpl$5, ssrHydrationKey() + ssrAttribute("datetime", escape(new Date(createdAt()).toISOString(), true), false), escape(formatDate(createdAt())))
          })), escape(createComponent(Show, {
            get when() {
              return feedback.user;
            },
            children: (user) => [ssr(_tmpl$6, ssrHydrationKey(), escape(user().email)), createComponent(Avatar, {
              get children() {
                return [createComponent(AvatarImage, {
                  get src() {
                    return user().image || "";
                  }
                }), createComponent(AvatarFallback, {
                  get children() {
                    var _a;
                    return (_a = user().name) == null ? void 0 : _a.charAt(0).toUpperCase();
                  }
                })];
              }
            })]
          })))];
        }
      })));
    }
  });
}
var _tmpl$ = ["<section", ' class="h-full w-full pt-3"><!--$-->', '<!--/--><div class="mt-8">', "</div></section>"];
const SplitComponent = function RouteComponent() {
  const params = Route$1.useParams();
  const z = useZero();
  z().query.feedback.where("workspaceId", "=", params().workspaceId).related("user").preload({
    ttl: "1d"
  });
  const [feedbacks, feedbackStatus] = createQuery(() => z().query.feedback.where("workspaceId", "=", params().workspaceId).related("user"));
  console.log("feedback", feedbacks());
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(FeedbackFilter, {})), escape(createComponent(For, {
    get each() {
      return feedbacks();
    },
    children: (feedback) => createComponent(FeedbackList, {
      feedback
    })
  })));
};

export { SplitComponent as component };
//# sourceMappingURL=index-KLU9iKWw.mjs.map
