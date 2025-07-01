import { ssr, ssrHydrationKey, escape, createComponent, ssrElement, mergeProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { createQuery } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/solid.js';
import { createMemo, createEffect, Show, For, createSignal, splitProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardFooter } from './card-l2fL6499.mjs';
import { u as useZero, a as Button } from './zero-app-B4FAy-T1.mjs';
import { c as cn } from './cn-Z8LgDN0F.mjs';
import { a as useParams } from './ssr.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/cva/dist/index.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/clsx/dist/clsx.mjs';
import 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
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

function Textarea(props) {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("textarea", mergeProps({
    "data-slot": "textarea",
    get ["class"]() {
      return cn("field-sizing-content flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", local.class);
    }
  }, others), void 0, true);
}
var _tmpl$$3 = ["<div", ' class="iconify solar--map-arrow-right-bold-duotone -rotate-45 size-5 text-indigo-800" aria-hidden="true"></div>'], _tmpl$2$1 = ["<div", ' class="relative"><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"];
function CreateComment() {
  const [comment, setComment] = createSignal("");
  const isValid = () => !!comment();
  const params = useParams({
    from: "/_layout/$workspaceId/$feedbackId"
  });
  const z = useZero();
  function addComment() {
    z().mutate.comment.add({
      feedbackId: params().feedbackId,
      message: comment()
    });
    setComment("");
  }
  return ssr(_tmpl$2$1, ssrHydrationKey(), escape(createComponent(Textarea, {
    onInput: (e) => setComment(e.target.value),
    get value() {
      return comment();
    },
    "class": "h-32 placeholder:text-lg",
    placeholder: "Leave your comment..."
  })), escape(createComponent(Button, {
    get disabled() {
      return !isValid();
    },
    "class": "absolute right-2 bottom-2 flex items-center",
    onClick: addComment,
    get children() {
      return ["Send", ssr(_tmpl$$3, ssrHydrationKey())];
    }
  })));
}
var _tmpl$$2 = ["<div", "><!--$-->", "<!--/--><div>", "</div></div>"];
function FeedbackComment(props) {
  return ssr(_tmpl$$2, ssrHydrationKey(), escape(props.comment.message), escape(props.comment.user.name));
}
var _tmpl$$1 = ["<button", ' type="button" class=" flex cursor-pointer items-center gap-1 rounded-lg border border-border px-1 hover:bg-accent"><div class="', '"></div><span>', "</span></button>"], _tmpl$2 = ["<div", ' class="flex items-center gap-1 rounded-lg border border-border px-1"><div class="iconify solar--chat-square-bold-duotone size-5"></div><span>', "</span></div>"], _tmpl$3 = ["<div", ">", "</div>"], _tmpl$4 = ["<div", "><p>", "</p></div>"];
function FeedbackCard() {
  const params = useParams({
    from: "/_layout/$workspaceId/$feedbackId"
  });
  const z = useZero();
  const [feedback, ss] = createQuery(() => z().query.feedback.where("id", "=", params().feedbackId).related("user").related("likes").related("comments", (q) => q.related("user")).one());
  const [like] = createQuery(() => z().query.like.where("feedbackId", "=", params().feedbackId).where("userId", "=", z().userID).one());
  const hasLiked = createMemo(() => !!like());
  const likeCount = createMemo(() => {
    var _a2;
    var _a, _b;
    return (_a2 = (_b = (_a = feedback()) == null ? void 0 : _a.likes) == null ? void 0 : _b.length) != null ? _a2 : 0;
  });
  createEffect(() => {
    var _a;
    if (ss().type === "complete") {
      console.log("complete", (_a = feedback()) == null ? void 0 : _a.comments);
    }
  });
  return createComponent(Show, {
    get when() {
      return feedback();
    },
    children: (feedback2) => [createComponent(Card, {
      get children() {
        return [createComponent(CardHeader, {
          get children() {
            return createComponent(CardTitle, {
              get children() {
                return feedback2().title;
              }
            });
          }
        }), createComponent(CardContent, {
          get children() {
            return feedback2().message;
          }
        }), createComponent(CardFooter, {
          "class": "flex justify-end gap-2",
          get children() {
            var _a2;
            var _a, _b;
            return [ssr(_tmpl$$1, ssrHydrationKey(), `iconify solar--heart-angle-bold size-5 ${hasLiked() ? " text-destructive" : ""}`, escape(likeCount())), ssr(_tmpl$2, ssrHydrationKey(), (_a2 = escape((_b = (_a = feedback2()) == null ? void 0 : _a.comments) == null ? void 0 : _b.length)) != null ? _a2 : 0), ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(For, {
              get each() {
                var _a22;
                return (_a22 = feedback2()) == null ? void 0 : _a22.comments;
              },
              children: (comment) => ssr(_tmpl$4, ssrHydrationKey(), escape(comment.message))
            })))];
          }
        })];
      }
    }), createComponent(CreateComment, {}), createComponent(For, {
      get each() {
        return feedback2().comments;
      },
      children: (comment) => createComponent(FeedbackComment, {
        comment
      })
    })]
  });
}
var _tmpl$ = ["<section", ' class="h-full w-full pt-3">', "</section>"];
const SplitComponent = function RouteComponent() {
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(FeedbackCard, {})));
};

export { SplitComponent as component };
//# sourceMappingURL=_feedbackId-C19CbW8H.mjs.map
