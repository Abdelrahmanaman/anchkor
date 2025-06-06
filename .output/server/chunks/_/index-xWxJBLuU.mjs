import { ssr, ssrHydrationKey } from 'solid-js/web';

var _tmpl$ = ["<div", ' class=" min-h-dvh p-2"><h3 class="pos-relative text-8xl ">Welcome Home!!!</h3><button type="button" class=" btn-ghost-lg "><div class="i-solar:dialog-2-bold-duotone "></div>click me</button><div class="[&amp;_.hello]:text-blue-500"><span class="hello"> I am a blue span (inside a div with [&_.hello]) </span></div></div>'];
const SplitComponent = function Home() {
  return ssr(_tmpl$, ssrHydrationKey());
};

export { SplitComponent as component };
//# sourceMappingURL=index-xWxJBLuU.mjs.map
