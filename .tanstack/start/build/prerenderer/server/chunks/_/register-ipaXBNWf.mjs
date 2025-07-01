import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { Show } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { T as TextField, e as TextFieldLabel, f as TextFieldInput, g as TextFieldErrorMessage } from './input-DKjd3ZUC.mjs';
import { S as Separator } from './separator-D-OYQinX.mjs';
import { c as createForm, s as signUp } from './auth-client-Crsybfbq.mjs';
import { type } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/arktype/out/index.js';
import { L as Link } from './ssr.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/clsx/dist/clsx.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/utils/dist/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/form-core/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/client/plugins/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/better-auth/dist/client/solid/index.mjs';
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
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/drizzle-orm/pg-core/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@tanstack/history/dist/esm/index.js';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/isbot/index.mjs';
import 'node:stream/web';

type({
  email: type("string.email").configure({
    message: "Please enter a valid email address."
  }),
  password: type(
    "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/"
  ).configure({
    message: "Please enter a valid password."
  })
});
const registerSchema = type({
  email: type("string.email").configure({
    message: "Please enter a valid email address."
  }),
  password: type(
    "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/"
  ).configure({
    message: "Please enter a valid password."
  }),
  firstName: type("string>4").configure({
    message: "Please enter a valid first name."
  }),
  lastName: type("string>4").configure({
    message: "Please enter a valid last name."
  })
});
var _tmpl$ = ["<span", ' class="font-semibold">Sign In</span>'], _tmpl$2 = ["<section", ' class="grid h-full place-content-center "><div class="max-w-[24rem] space-y-4 rounded-xl border border-border p-6 "><div class="sm:text-center">Register</div><button type="button" class="btn-outline flex w-full items-center justify-center gap-2"><img src="/google.svg" alt="Google logo" width="24" height="24" class="size-5"><span>Register with Google</span></button><div class="relative my-4"><div class="absolute inset-0 flex items-center">', '</div><div class="relative flex justify-center text-xs uppercase"><span class="bg-background px-4 text-muted-foreground">or</span></div></div><form class="space-y-4"><div class="flex flex-wrap items-center gap-4 sm:flex-nowrap"><!--$-->', "<!--/--><!--$-->", "<!--/--></div><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></form></div></section>"], _tmpl$3 = ["<button", ' type="submit"', ' class="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"><div aria-hidden class="i-tabler:loader-2 animate-duration-700 animate-spin"></div>Registering</button>'], _tmpl$4 = ["<button", ' type="submit"', ' class="btn-primary w-full">Register</button>'];
const SplitComponent = function RouteComponent() {
  const form = createForm(() => ({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    },
    onSubmit: async ({
      value
    }) => {
      await signUp.email({
        email: value.email,
        name: `${value.firstName} ${value.lastName}`,
        password: value.password
      });
    }
  }));
  return ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent(Separator, {
    as: "span",
    "class": "bg-primary/40"
  })), escape(createComponent(form.Field, {
    name: "firstName",
    validators: {
      onChange: ({
        fieldApi
      }) => {
        const errors = fieldApi.parseValueWithSchema(registerSchema.get("firstName"));
        if (errors) return errors;
      }
    },
    children: (field) => createComponent(TextField, {
      get validationState() {
        return field().state.meta.errors.length > 0 ? "invalid" : "valid";
      },
      "class": "w-full",
      get children() {
        return [createComponent(TextFieldLabel, {
          children: "First Name"
        }), createComponent(TextFieldInput, {
          type: "text",
          "class": "",
          placeholder: "First Name",
          get id() {
            return field().name;
          },
          get value() {
            return field().state.value;
          },
          onInput: (e) => field().handleChange(e.target.value)
        }), createComponent(TextFieldErrorMessage, {
          get error() {
            return field().state.meta.errors.join(",");
          }
        })];
      }
    })
  })), escape(createComponent(form.Field, {
    name: "lastName",
    validators: {
      onChange: ({
        fieldApi
      }) => {
        const errors = fieldApi.parseValueWithSchema(registerSchema.get("lastName"));
        if (errors) return errors;
      }
    },
    children: (field) => createComponent(TextField, {
      get validationState() {
        return field().state.meta.errors.length > 0 ? "invalid" : "valid";
      },
      "class": "w-full",
      get children() {
        return [createComponent(TextFieldLabel, {
          children: "Last Name"
        }), createComponent(TextFieldInput, {
          type: "text",
          placeholder: "Last Name",
          get id() {
            return field().name;
          },
          get value() {
            return field().state.value;
          },
          onInput: (e) => field().handleChange(e.target.value)
        }), createComponent(TextFieldErrorMessage, {
          get error() {
            return field().state.meta.errors.join(",");
          }
        })];
      }
    })
  })), escape(createComponent(form.Field, {
    name: "email",
    validators: {
      onChange: ({
        fieldApi
      }) => {
        const errors = fieldApi.parseValueWithSchema(registerSchema.get("email"));
        if (errors) return errors;
      }
    },
    children: (field) => createComponent(TextField, {
      get validationState() {
        return field().state.meta.errors.length > 0 ? "invalid" : "valid";
      },
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
        }), createComponent(TextFieldErrorMessage, {
          get error() {
            return field().state.meta.errors.join(",");
          }
        })];
      }
    })
  })), escape(createComponent(form.Field, {
    name: "password",
    validators: {
      onChange: ({
        fieldApi
      }) => {
        const errors = fieldApi.parseValueWithSchema(registerSchema.get("password"));
        if (errors) return errors;
      }
    },
    children: (field) => createComponent(TextField, {
      get validationState() {
        return field().state.meta.errors.length > 0 ? "invalid" : "valid";
      },
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
        }), createComponent(TextFieldErrorMessage, {
          get error() {
            return field().state.meta.errors.join(",");
          }
        })];
      }
    })
  })), escape(createComponent(Link, {
    "class": "block w-full text-sm hover:underline",
    to: "/login",
    get children() {
      return ["Already have an account? ", ssr(_tmpl$, ssrHydrationKey())];
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
//# sourceMappingURL=register-ipaXBNWf.mjs.map
