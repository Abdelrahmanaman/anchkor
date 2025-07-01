import { createComponent, ssr, ssrHydrationKey, escape, ssrElement, mergeProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { createQuery } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@rocicorp/zero/out/solid.js';
import { createMemo, Show, For, createSignal, splitProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardFooter } from './card-l2fL6499.mjs';
import { u as useZero, B as Button } from './zero-app-DzICxrxJ.mjs';
import { c as cn } from './cn-Z8LgDN0F.mjs';
import { a as useParams } from './ssr.mjs';

function Textarea(props) {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("textarea", mergeProps({
    "data-slot": "textarea",
    get ["class"]() {
      return cn("field-sizing-content flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", local.class);
    }
  }, others), void 0, true);
}
var _tmpl$$2 = ["<div", ' class="iconify solar--map-arrow-right-bold-duotone -rotate-45 size-5 text-indigo-800" aria-hidden="true"></div>'], _tmpl$2$1 = ["<div", ' class="relative"><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"];
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
      return ["Send", ssr(_tmpl$$2, ssrHydrationKey())];
    }
  })));
}
var _tmpl$$1 = ["<div", "><!--$-->", "<!--/--><div>", "</div></div>"];
function FeedbackComment(props) {
  return ssr(_tmpl$$1, ssrHydrationKey(), escape(props.comment.message), escape(props.comment.user.name));
}
var _tmpl$ = ["<button", ' type="button" class=" flex cursor-pointer items-center gap-1 rounded-lg border border-border px-1 hover:bg-accent"><div class="', '"></div><span>', "</span></button>"], _tmpl$2 = ["<div", ' class="flex items-center gap-1 rounded-lg border border-border px-1"><div class="iconify solar--chat-square-bold-duotone size-5"></div><span>', "</span></div>"], _tmpl$3 = ["<div", ">", "</div>"];
function FeedbackCard() {
  const params = useParams({
    from: "/_layout/$workspaceId/$feedbackId"
  });
  const z = useZero();
  const [feedback] = createQuery(() => z().query.feedback.where("id", "=", params().feedbackId).related("user").related("likes").related("comments", (u) => u.related("user").orderBy("createdAt", "desc")).one(), {
    ttl: "1d"
  });
  const [like] = createQuery(() => z().query.like.where("feedbackId", "=", params().feedbackId).where("userId", "=", z().userID).one(), {
    ttl: "1d"
  });
  const hasLiked = createMemo(() => !!like());
  const likeCount = createMemo(() => {
    var _a2;
    var _a, _b;
    return (_a2 = (_b = (_a = feedback()) == null ? void 0 : _a.likes) == null ? void 0 : _b.length) != null ? _a2 : 0;
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
            return [ssr(_tmpl$, ssrHydrationKey(), `iconify solar--heart-angle-bold size-5 ${hasLiked() ? " text-destructive" : ""}`, escape(likeCount())), ssr(_tmpl$2, ssrHydrationKey(), (_a2 = escape((_b = (_a = feedback2()) == null ? void 0 : _a.comments) == null ? void 0 : _b.length)) != null ? _a2 : 0)];
          }
        })];
      }
    }), createComponent(CreateComment, {}), ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(For, {
      get each() {
        return feedback2().comments;
      },
      children: (comment) => createComponent(FeedbackComment, {
        comment
      })
    })))]
  });
}

export { FeedbackCard as F };
//# sourceMappingURL=feedback-card-D1iUFuw0.mjs.map
