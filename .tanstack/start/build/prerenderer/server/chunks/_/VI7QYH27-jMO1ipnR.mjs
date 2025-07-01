import { H as createControllableBooleanSignal } from './input-C-O6VnJe.mjs';
import { access } from 'file:///home/abourka/Desktop/Projects/anchkor/node_modules/@solid-primitives/utils/dist/index.js';

function createToggleState(props = {}) {
  const [isSelected, _setIsSelected] = createControllableBooleanSignal({
    value: () => access(props.isSelected),
    defaultValue: () => !!access(props.defaultIsSelected),
    onChange: (value) => {
      var _a;
      return (_a = props.onSelectedChange) == null ? void 0 : _a.call(props, value);
    }
  });
  const setIsSelected = (value) => {
    if (!access(props.isReadOnly) && !access(props.isDisabled)) {
      _setIsSelected(value);
    }
  };
  const toggle = () => {
    if (!access(props.isReadOnly) && !access(props.isDisabled)) {
      _setIsSelected(!isSelected());
    }
  };
  return {
    isSelected,
    setIsSelected,
    toggle
  };
}

export { createToggleState as c };
//# sourceMappingURL=VI7QYH27-jMO1ipnR.mjs.map
