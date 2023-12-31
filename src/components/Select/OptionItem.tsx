import React from 'react';

import { useOptionContext } from '@contexts/OptionContext';

import { OptionItem as OptionItemLayout } from './style';

interface Props {
  value: string | number;
  label: string | number;
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
