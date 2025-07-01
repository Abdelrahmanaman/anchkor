import { createComponent, mergeProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/web/dist/server.js';
import { m as mergeDefaultProps, b as createTagName, P as Polymorphic, _ as __export } from './cn-Z8LgDN0F.mjs';
import { splitProps } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';

var separator_exports = {};
__export(separator_exports, {
  Root: () => SeparatorRoot,
  Separator: () => Separator
});
function SeparatorRoot(props) {
  let ref;
  const mergedProps = mergeDefaultProps({
    orientation: "horizontal"
  }, props);
  const [local, others] = splitProps(mergedProps, ["ref", "orientation"]);
  const tagName = createTagName(() => ref, () => "hr");
  return createComponent(Polymorphic, mergeProps({
    as: "hr",
    get role() {
      return tagName() !== "hr" ? "separator" : void 0;
    },
    get ["aria-orientation"]() {
      return local.orientation === "vertical" ? "vertical" : void 0;
    },
    get ["data-orientation"]() {
      return local.orientation;
    }
  }, others));
}
var Separator = SeparatorRoot;

export { SeparatorRoot as S, Separator as a };
//# sourceMappingURL=T4C3DMHT-DuXXLj3J.mjs.map
