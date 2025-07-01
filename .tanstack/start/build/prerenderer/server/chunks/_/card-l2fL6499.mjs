import { ssrElement, mergeProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { splitProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';
import { c as cn } from './cn-Z8LgDN0F.mjs';

const Card = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("div", mergeProps({
    get ["class"]() {
      return cn("rounded-lg border border-border bg-card text-card-foreground shadow-sm", local.class);
    }
  }, others), void 0, true);
};
const CardHeader = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("div", mergeProps({
    get ["class"]() {
      return cn("flex flex-col space-y-1.5 p-6", local.class);
    }
  }, others), void 0, true);
};
const CardTitle = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("h3", mergeProps({
    get ["class"]() {
      return cn("font-semibold text-lg leading-none tracking-tight", local.class);
    }
  }, others), void 0, true);
};
const CardContent = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("div", mergeProps({
    get ["class"]() {
      return cn("p-6 pt-0", local.class);
    }
  }, others), void 0, true);
};
const CardFooter = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return ssrElement("div", mergeProps({
    get ["class"]() {
      return cn("flex items-center p-6 pt-0", local.class);
    }
  }, others), void 0, true);
};

export { Card as C, CardHeader as a, CardTitle as b, CardContent as c, CardFooter as d };
//# sourceMappingURL=card-l2fL6499.mjs.map
