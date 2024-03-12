import React, { ComponentPropsWithRef } from 'react';

import { useOptionContext } from '@contexts/OptionContext';

import { Value } from './Select.types';
import { OptionItem as OptionItemLayout } from './style';

export interface Props extends ComponentPropsWithRef<'li'> {
  value: Value;
}

const OptionItem = ({ value, children }: Props) => {
  const { selectedOption, onSelectOption, setListItemsRef } = useOptionContext();

  return (
    <OptionItemLayout
      ref={setListItemsRef}
      value={value}
      $isSelected={selectedOption?.value === value}
      onMouseDown={() => onSelectOption({ value })}
    >
      {children}
    </OptionItemLayout>
  );
};

OptionItem.displayName = 'OptionItem';

export default OptionItem;
