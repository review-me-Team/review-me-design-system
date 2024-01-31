import React, { forwardRef } from 'react';

import { useOptionContext } from '@contexts/OptionContext';

import { Name, Value } from './Select.types';
import { OptionItem as OptionItemLayout } from './style';

export interface Props {
  value: Value;
  name: Name;
  children: React.ReactNode;
}

const OptionItem = forwardRef<HTMLLIElement, Props>(({ value, name, children }, ref) => {
  const { selectedOption, onSelectOption } = useOptionContext();

  return (
    <OptionItemLayout
      ref={ref}
      value={value}
      $isSelected={selectedOption?.value === value}
      onMouseDown={() => onSelectOption({ value, name })}
    >
      {children}
    </OptionItemLayout>
  );
});

OptionItem.displayName = 'OptionItem';

export default OptionItem;
