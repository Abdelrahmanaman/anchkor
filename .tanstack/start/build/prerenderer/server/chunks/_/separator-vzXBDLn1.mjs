import { createComponent, mergeProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { a as Separator$1 } from './T4C3DMHT-DrbLaRy5.mjs';
import { splitProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { c as cn } from './cn-H80jjgLf.mjs';

const Separator = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(Separator$1, mergeProps({
    get ["class"]() {
      return cn("shrink-0 bg-blue-500 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px", local.class);
    }
  }, rest));
};

export { Separator as S };
//# sourceMappingURL=separator-vzXBDLn1.mjs.map
