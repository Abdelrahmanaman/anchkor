import { createComponent, mergeProps, ssrElement } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { splitProps, mergeProps as mergeProps$1, createUniqueId, createContext, createEffect, onCleanup, Show, createSignal, createMemo, on, useContext, untrack } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { c as cn, m as mergeDefaultProps, a as createGenerateId, P as Polymorphic, b as createTagName, e as composeEventHandlers, _ as __export } from './cn-Z8LgDN0F.mjs';
import { access, accessWith } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/utils/dist/index.js';

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

export { FORM_CONTROL_FIELD_PROP_NAMES as F, Input as I, TextField as T, TextFieldLabel as a, TextFieldInput as b, createRegisterId as c, TextFieldErrorMessage as d, createControllableArraySignal as e, createControllableSignal as f, createFormControlField as g, FormControlLabel as h, FormControlErrorMessage as i, FORM_CONTROL_PROP_NAMES as j, createFormControl as k, createFormResetListener as l, FormControlContext as m, FormControlDescription as n, createControllableBooleanSignal as o, TextFieldTextArea as p, useFormControlContext as u };
//# sourceMappingURL=input-d83Srw8p.mjs.map
