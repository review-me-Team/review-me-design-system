import React, { forwardRef } from 'react';

import { useOptionContext } from '@contexts/OptionContext';

import { Label, Value } from './Select.types';
import { OptionItem as OptionItemLayout } from './style';

export interface Props {
  value: Value;
  label: Label;
  children: React.ReactNode;
}

const OptionItem = forwardRef<HTMLLIElement, Props>(({ value, label, children }, ref) => {
  const { selectedOption, onSelectOption } = useOptionContext();

  return (
    <OptionItemLayout
      ref={ref}
      value={value}
      $isSelected={selectedOption?.value === value}
      onMouseDown={() => onSelectOption({ value, label })}
    >
      {children}
    </OptionItemLayout>
  );
});

OptionItem.displayName = 'OptionItem';

export default OptionItem;
