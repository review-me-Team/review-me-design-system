import React, { ComponentPropsWithRef, PropsWithChildren, forwardRef } from 'react';

import { useOptionContext } from '@contexts/OptionContext';

import { Name, Value } from './Select.types';
import { OptionItem as OptionItemLayout } from './style';

export interface Props extends ComponentPropsWithRef<'li'> {
  value: Value;
  name: Name;
}

const OptionItem = forwardRef<HTMLLIElement, PropsWithChildren<Props>>(({ value, name, children }, ref) => {
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
