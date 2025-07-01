import { createComponent, mergeProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { V as Separator$1, c as cn } from './input-DKjd3ZUC.mjs';
import { splitProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';

const Separator = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(Separator$1, mergeProps({
    get ["class"]() {
      return cn("shrink-0 bg-blue-500 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px", local.class);
    }
  }, rest));
};

export { Separator as S };
//# sourceMappingURL=separator-D-OYQinX.mjs.map
