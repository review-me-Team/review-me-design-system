import React, { ComponentPropsWithRef } from 'react';

import { useOptionContext } from '@contexts/OptionContext';

import { Option } from './Select.types';
import { OptionItem as OptionItemLayout } from './style';

export interface Props extends ComponentPropsWithRef<'li'> {
  option: Option;
}

const OptionItem = ({ option, children }: Props) => {
  const { selectedOption, onSelectOption, setListItemsRef } = useOptionContext();

  return (
    <OptionItemLayout
      ref={setListItemsRef}
      value={option}
      $isSelected={selectedOption === option}
      onMouseDown={() => onSelectOption(option)}
    >
      {children}
    </OptionItemLayout>
  );
};

OptionItem.displayName = 'OptionItem';

export default OptionItem;
