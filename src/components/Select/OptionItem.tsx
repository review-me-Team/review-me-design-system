import React from 'react';

import { useOptionContext } from '@contexts/OptionContext';

import { Label, Value } from './Select.types';
import { OptionItem as OptionItemLayout } from './style';

export interface Props {
  value: Value;
  label: Label;
  children: React.ReactNode;
}

const OptionItem = ({ value, label, children }: Props) => {
  const { selectedOption, onSelectOption } = useOptionContext();

  return (
    <OptionItemLayout
      value={value}
      $isSelected={selectedOption?.value === value}
      onMouseDown={() => onSelectOption({ value, label })}
    >
      {children}
    </OptionItemLayout>
  );
};

export default OptionItem;
