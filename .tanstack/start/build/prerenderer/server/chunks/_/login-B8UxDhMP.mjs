import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute, mergeProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { Show, splitProps, createSignal, createEffect, on, createUniqueId, createMemo, createContext, useContext, children } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { c as cn, m as mergeDefaultProps, P as Polymorphic, v as visuallyHiddenStyles, a as createGenerateId, d as callHandler, E as EventKey, n as isFunction, _ as __export } from './cn-Z8LgDN0F.mjs';
import { c as createToggleState } from './VI7QYH27-BoEQ4ELt.mjs';
import { T as TextField, a as TextFieldLabel, b as TextFieldInput, u as useFormControlContext, F as FORM_CONTROL_FIELD_PROP_NAMES, g as createFormControlField, h as FormControlLabel, i as FormControlErrorMessage, j as FORM_CONTROL_PROP_NAMES, k as createFormControl, l as createFormResetListener, m as FormControlContext, n as FormControlDescription } from './input-d83Srw8p.mjs';
import { s as src_default } from './index-DCMxpmOX.mjs';
import { combineStyle } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/props/dist/index.js';
import { access } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/utils/dist/index.js';
import { S as Separator } from './separator-2j7CU-gp.mjs';
import { c as createForm, a as signIn } from './auth-client-DyI4Lu4B.mjs';
import { L as Link } from './ssr.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/clsx/dist/clsx.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import './T4C3DMHT-DuXXLj3J.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/form-core/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/client/plugins/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/client/solid/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tiny-warning/dist/tiny-warning.cjs.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tiny-invariant/dist/esm/tiny-invariant.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/store/dist/server.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/refs/dist/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/router-core/dist/esm/index.js';
import 'node:async_hooks';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/h3/dist/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/adapters/drizzle-adapter/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/plugins/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/drizzle-orm/postgres-js/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/drizzle-orm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/drizzle-orm/pg-core/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/router-core/dist/esm/ssr/client.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/arktype/out/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/zero/src/pg.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/jose/dist/node/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/postgres/src/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/zero.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/nanoid/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/history/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/router-core/dist/esm/ssr/server.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/isbot/index.mjs';

var checkbox_exports = {};
__export(checkbox_exports, {
  Checkbox: () => Checkbox$1,
  Control: () => CheckboxControl,
  Description: () => CheckboxDescription,
  ErrorMessage: () => CheckboxErrorMessage,
  Indicator: () => CheckboxIndicator,
  Input: () => CheckboxInput,
  Label: () => CheckboxLabel,
  Root: () => CheckboxRoot,
  useCheckboxContext: () => useCheckboxContext
});
var CheckboxContext = createContext();
function useCheckboxContext() {
  const context = useContext(CheckboxContext);
  if (context === void 0) {
    throw new Error("[kobalte]: `useCheckboxContext` must be used within a `Checkbox` component");
  }
  return context;
}
function CheckboxControl(props) {
  const formControlContext = useFormControlContext();
  const context = useCheckboxContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("control")
  }, props);
  const [local, others] = splitProps(mergedProps, ["onClick", "onKeyDown"]);
  const onClick = (e) => {
    var _a;
    callHandler(e, local.onClick);
    context.toggle();
    (_a = context.inputRef()) == null ? void 0 : _a.focus();
  };
  const onKeyDown = (e) => {
    var _a;
    callHandler(e, local.onKeyDown);
    if (e.key === EventKey.Space) {
      context.toggle();
      (_a = context.inputRef()) == null ? void 0 : _a.focus();
    }
  };
  return createComponent(Polymorphic, mergeProps({
    as: "div",
    onClick,
    onKeyDown
  }, () => formControlContext.dataset(), () => context.dataset(), others));
}
function CheckboxDescription(props) {
  const context = useCheckboxContext();
  return createComponent(FormControlDescription, mergeProps(() => context.dataset(), props));
}
function CheckboxErrorMessage(props) {
  const context = useCheckboxContext();
  return createComponent(FormControlErrorMessage, mergeProps(() => context.dataset(), props));
}
function CheckboxIndicator(props) {
  const formControlContext = useFormControlContext();
  const context = useCheckboxContext();
  const [ref, setRef] = createSignal();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("indicator")
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "forceMount"]);
  const {
    present
  } = src_default({
    show: () => local.forceMount || context.indeterminate() || context.checked(),
    element: () => {
      var _a;
      return (_a = ref()) != null ? _a : null;
    }
  });
  return createComponent(Show, {
    get when() {
      return present();
    },
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "div"
      }, () => formControlContext.dataset(), () => context.dataset(), others));
    }
  });
}
function CheckboxInput(props) {
  let ref;
  const formControlContext = useFormControlContext();
  const context = useCheckboxContext();
  const mergedProps = mergeDefaultProps({
    id: context.generateId("input")
  }, props);
  const [local, formControlFieldProps, others] = splitProps(mergedProps, ["ref", "style", "onChange", "onFocus", "onBlur"], FORM_CONTROL_FIELD_PROP_NAMES);
  const {
    fieldProps
  } = createFormControlField(formControlFieldProps);
  const [isInternalChangeEvent, setIsInternalChangeEvent] = createSignal(false);
  const onChange = (e) => {
    callHandler(e, local.onChange);
    e.stopPropagation();
    if (!isInternalChangeEvent()) {
      const target = e.target;
      context.setIsChecked(target.checked);
      target.checked = context.checked();
    }
    setIsInternalChangeEvent(false);
  };
  const onFocus = (e) => {
    callHandler(e, local.onFocus);
    context.setIsFocused(true);
  };
  const onBlur = (e) => {
    callHandler(e, local.onBlur);
    context.setIsFocused(false);
  };
  createEffect(on([() => context.checked(), () => context.value()], () => {
    setIsInternalChangeEvent(true);
  }, {
    defer: true
  }));
  createEffect(on([() => ref, () => context.indeterminate(), () => context.checked()], ([ref2, indeterminate]) => {
    if (ref2) {
      ref2.indeterminate = indeterminate;
    }
  }));
  return createComponent(Polymorphic, mergeProps({
    as: "input",
    type: "checkbox",
    get id() {
      return fieldProps.id();
    },
    get name() {
      return formControlContext.name();
    },
    get value() {
      return context.value();
    },
    get checked() {
      return context.checked();
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
    get style() {
      return combineStyle(visuallyHiddenStyles, local.style);
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
      return formControlContext.isRequired();
    },
    get ["aria-disabled"]() {
      return formControlContext.isDisabled();
    },
    get ["aria-readonly"]() {
      return formControlContext.isReadOnly();
    },
    onChange,
    onFocus,
    onBlur
  }, () => formControlContext.dataset(), () => context.dataset(), others));
}
function CheckboxLabel(props) {
  const context = useCheckboxContext();
  return createComponent(FormControlLabel, mergeProps(() => context.dataset(), props));
}
function CheckboxRoot(props) {
  let ref;
  const defaultId = `checkbox-${createUniqueId()}`;
  const mergedProps = mergeDefaultProps({
    value: "on",
    id: defaultId
  }, props);
  const [local, formControlProps, others] = splitProps(mergedProps, ["ref", "children", "value", "checked", "defaultChecked", "indeterminate", "onChange", "onPointerDown"], FORM_CONTROL_PROP_NAMES);
  const [inputRef, setInputRef] = createSignal();
  const [isFocused, setIsFocused] = createSignal(false);
  const {
    formControlContext
  } = createFormControl(formControlProps);
  const state = createToggleState({
    isSelected: () => local.checked,
    defaultIsSelected: () => local.defaultChecked,
    onSelectedChange: (selected) => {
      var _a;
      return (_a = local.onChange) == null ? void 0 : _a.call(local, selected);
    },
    isDisabled: () => formControlContext.isDisabled(),
    isReadOnly: () => formControlContext.isReadOnly()
  });
  createFormResetListener(() => ref, () => {
    var _a;
    return state.setIsSelected((_a = local.defaultChecked) != null ? _a : false);
  });
  const onPointerDown = (e) => {
    callHandler(e, local.onPointerDown);
    if (isFocused()) {
      e.preventDefault();
    }
  };
  const dataset = createMemo(() => ({
    "data-checked": state.isSelected() ? "" : void 0,
    "data-indeterminate": local.indeterminate ? "" : void 0
  }));
  const context = {
    value: () => local.value,
    dataset,
    checked: () => state.isSelected(),
    indeterminate: () => {
      var _a;
      return (_a = local.indeterminate) != null ? _a : false;
    },
    inputRef,
    generateId: createGenerateId(() => access(formControlProps.id)),
    toggle: () => state.toggle(),
    setIsChecked: (isChecked) => state.setIsSelected(isChecked),
    setIsFocused,
    setInputRef
  };
  return createComponent(FormControlContext.Provider, {
    value: formControlContext,
    get children() {
      return createComponent(CheckboxContext.Provider, {
        value: context,
        get children() {
          return createComponent(Polymorphic, mergeProps({
            as: "div",
            role: "group",
            get id() {
              return access(formControlProps.id);
            },
            onPointerDown
          }, () => formControlContext.dataset(), dataset, others, {
            get children() {
              return createComponent(CheckboxRootChild, {
                state: context,
                get children() {
                  return local.children;
                }
              });
            }
          }));
        }
      });
    }
  });
}
function CheckboxRootChild(props) {
  const resolvedChildren = children(() => {
    const body = props.children;
    return isFunction(body) ? body(props.state) : body;
  });
  return resolvedChildren();
}
var Checkbox$1 = Object.assign(CheckboxRoot, {
  Control: CheckboxControl,
  Description: CheckboxDescription,
  ErrorMessage: CheckboxErrorMessage,
  Indicator: CheckboxIndicator,
  Input: CheckboxInput,
  Label: CheckboxLabel
});
var _tmpl$$1 = ["<svg", ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="size-4"><title>Check</title><path d="M5 12l5 5l10 -10"></path></svg>'];
const Checkbox = (props) => {
  const [local, others] = splitProps(props, ["class", "checked", "label", "error"]);
  return createComponent(Checkbox$1, mergeProps({
    get ["class"]() {
      return cn("items-top group relative flex items-center gap-1", local.class);
    }
  }, others, {
    get children() {
      return [createComponent(CheckboxInput, {}), createComponent(CheckboxControl, {
        "class": "flex size-4 items-center justify-center rounded-sm border border-input p-px data-[checked]:bg-secondary",
        get children() {
          return createComponent(CheckboxIndicator, {
            get children() {
              return ssr(_tmpl$$1, ssrHydrationKey());
            }
          });
        }
      }), createComponent(CheckboxLabel, {
        get children() {
          return local.label;
        }
      }), createComponent(Show, {
        get when() {
          return local.error;
        },
        get children() {
          return createComponent(CheckboxErrorMessage, {
            get children() {
              return local.error;
            }
          });
        }
      })];
    }
  }));
};
var _tmpl$ = ["<span", ' class="font-semibold">Sign Up</span>'], _tmpl$2 = ["<section", ' class="grid h-full place-content-center "><div class="min-w-[22rem] space-y-4 rounded-xl border border-border p-6 "><div class="flex flex-col items-center gap-2"><div class="flex size-11 shrink-0 items-center justify-center rounded-full border" aria-hidden="true"><div class="i-solar:user-circle-bold-duotone text-2xl text-zinc-800 dark:text-zinc-100"></div></div><div class="sm:text-center">Welcome back</div></div><button type="button" class="btn-outline flex w-full items-center justify-center gap-2"><img src="/google.svg" alt="Google logo" width="24" height="24" class="size-5"><span>Login with Google</span></button><div class="relative my-4"><div class="absolute inset-0 flex items-center">', '</div><div class="relative flex justify-center text-xs uppercase"><span class="bg-background px-4 text-muted-foreground">or</span></div></div><form class="space-y-4"><!--$-->', "<!--/--><!--$-->", '<!--/--><div class="flex items-center justify-between"><!--$-->', "<!--/--><!--$-->", "<!--/--></div><!--$-->", "<!--/--><!--$-->", "<!--/--></form></div></section>"], _tmpl$3 = ["<button", ' type="submit"', ' class="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"><div aria-hidden class="i-tabler:loader-2 animate-duration-700 animate-spin"></div>Logging-in</button>'], _tmpl$4 = ["<button", ' type="submit"', ' class="btn-primary w-full">Login</button>'];
const SplitComponent = function RouteComponent() {
  const form = createForm(() => ({
    defaultValues: {
      email: "",
      password: ""
    },
    onSubmit: async ({
      value
    }) => {
      await signIn.email({
        email: value.email,
        password: value.password
      });
    }
  }));
  return ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent(Separator, {
    as: "span",
    "class": "bg-primary/40"
  })), escape(createComponent(form.Field, {
    name: "email",
    children: (field) => createComponent(TextField, {
      get children() {
        return [createComponent(TextFieldLabel, {
          children: "Email"
        }), createComponent(TextFieldInput, {
          placeholder: "achkor.doe@example.com",
          type: "email",
          get id() {
            return field().name;
          },
          get value() {
            return field().state.value;
          },
          onInput: (e) => field().handleChange(e.target.value)
        })];
      }
    })
  })), escape(createComponent(form.Field, {
    name: "password",
    children: (field) => createComponent(TextField, {
      get children() {
        return [createComponent(TextFieldLabel, {
          children: "Password"
        }), createComponent(TextFieldInput, {
          type: "password",
          placeholder: "Enter your password",
          get id() {
            return field().name;
          },
          get value() {
            return field().state.value;
          },
          onInput: (e) => field().handleChange(e.target.value)
        })];
      }
    })
  })), escape(createComponent(Checkbox, {
    label: "Remember me"
  })), escape(createComponent(Link, {
    "class": "text-muted-foreground text-sm hover:underline",
    to: "/",
    children: "Forgot password?"
  })), escape(createComponent(Link, {
    "class": "block w-full text-sm hover:underline",
    to: "/register",
    get children() {
      return ["Don't have an account? ", ssr(_tmpl$, ssrHydrationKey())];
    }
  })), escape(createComponent(form.Subscribe, {
    selector: (state) => ({
      canSubmit: state.canSubmit,
      isSubmitting: state.isSubmitting
    }),
    children: (state) => createComponent(Show, {
      get when() {
        return state().isSubmitting;
      },
      get fallback() {
        return ssr(_tmpl$4, ssrHydrationKey(), ssrAttribute("disabled", !state().canSubmit, true));
      },
      get children() {
        return ssr(_tmpl$3, ssrHydrationKey(), ssrAttribute("disabled", !state().canSubmit, true));
      }
    })
  })));
};

export { SplitComponent as component };
//# sourceMappingURL=login-B8UxDhMP.mjs.map
