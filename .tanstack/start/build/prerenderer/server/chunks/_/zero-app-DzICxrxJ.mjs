import { createComponent, mergeProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { createMemo, createContext, useContext, splitProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { cva } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cva/dist/index.mjs';
import { c as cn, m as mergeDefaultProps, b as createTagName, P as Polymorphic, _ as __export } from './cn-Z8LgDN0F.mjs';
import { createZero } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/solid.js';
import { j as useLoaderData, k as createMutators, s as schema } from './ssr.mjs';

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
  return createComponent(Polymorphic, mergeProps({
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
  return createComponent(ButtonRoot, mergeProps({
    get ["class"]() {
      return cn(buttonVariants({
        variant: local.variant,
        size: local.size
      }), local.class);
    }
  }, others));
};
const Context = createContext();
function ZeroContext(props) {
  const loaderData = useLoaderData({
    from: "/_layout"
  });
  console.log(loaderData());
  const z = createMemo(() => {
    return createZero({
      userID: loaderData().user.id,
      auth: async (error) => {
        return loaderData().jwt;
      },
      server: "http://localhost:4848",
      schema,
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

export { Button as B, ZeroContext as Z, ButtonRoot as a, useZero as u };
//# sourceMappingURL=zero-app-DzICxrxJ.mjs.map
