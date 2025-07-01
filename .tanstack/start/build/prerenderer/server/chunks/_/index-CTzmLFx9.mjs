import { i as createControllableBooleanSignal } from './input-DKjd3ZUC.mjs';
import { access as access$1 } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/utils/dist/index.js';
import { createMemo, createSignal, createEffect, untrack, onCleanup } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/solid-js/dist/server.js';

function createToggleState(props = {}) {
  const [isSelected, _setIsSelected] = createControllableBooleanSignal({
    value: () => access$1(props.isSelected),
    defaultValue: () => !!access$1(props.defaultIsSelected),
    onChange: (value) => {
      var _a;
      return (_a = props.onSelectedChange) == null ? void 0 : _a.call(props, value);
    }
  });
  const setIsSelected = (value) => {
    if (!access$1(props.isReadOnly) && !access$1(props.isDisabled)) {
      _setIsSelected(value);
    }
  };
  const toggle = () => {
    if (!access$1(props.isReadOnly) && !access$1(props.isDisabled)) {
      _setIsSelected(!isSelected());
    }
  };
  return {
    isSelected,
    setIsSelected,
    toggle
  };
}
var access = (v) => typeof v === "function" ? v() : v;
var createPresence = (props) => {
  const refStyles = createMemo(() => {
    const element = access(props.element);
    if (!element) return;
    return getComputedStyle(element);
  });
  const getAnimationName = () => {
    var _a2;
    var _a;
    return (_a2 = (_a = refStyles()) == null ? void 0 : _a.animationName) != null ? _a2 : "none";
  };
  const [presentState, setPresentState] = createSignal(access(props.show) ? "present" : "hidden");
  let animationName = "none";
  createEffect((prevShow) => {
    const show = access(props.show);
    untrack(() => {
      var _a;
      if (prevShow === show) return show;
      const prevAnimationName = animationName;
      const currentAnimationName = getAnimationName();
      if (show) {
        setPresentState("present");
      } else if (currentAnimationName === "none" || ((_a = refStyles()) == null ? void 0 : _a.display) === "none") {
        setPresentState("hidden");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (prevShow === true && isAnimating) {
          setPresentState("hiding");
        } else {
          setPresentState("hidden");
        }
      }
    });
    return show;
  });
  createEffect(() => {
    const element = access(props.element);
    if (!element) return;
    const handleAnimationStart = (event) => {
      if (event.target === element) {
        animationName = getAnimationName();
      }
    };
    const handleAnimationEnd = (event) => {
      const currentAnimationName = getAnimationName();
      const isCurrentAnimation = currentAnimationName.includes(event.animationName);
      if (event.target === element && isCurrentAnimation && presentState() === "hiding") {
        setPresentState("hidden");
      }
    };
    element.addEventListener("animationstart", handleAnimationStart);
    element.addEventListener("animationcancel", handleAnimationEnd);
    element.addEventListener("animationend", handleAnimationEnd);
    onCleanup(() => {
      element.removeEventListener("animationstart", handleAnimationStart);
      element.removeEventListener("animationcancel", handleAnimationEnd);
      element.removeEventListener("animationend", handleAnimationEnd);
    });
  });
  return {
    present: () => presentState() === "present" || presentState() === "hiding",
    state: presentState,
    setState: setPresentState
  };
};
var presence_default = createPresence;
var src_default = presence_default;

export { access as a, createToggleState as c, src_default as s };
//# sourceMappingURL=index-CTzmLFx9.mjs.map
