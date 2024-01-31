import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import OptionProvider from '@contexts/OptionContext';
import { SelectProvider } from '@contexts/SelectContext';

import OptionItem from './OptionItem';
import OptionList from './OptionList';
import { Option } from './Select.types';
import { SelectLayout } from './style';
import TriggerButton from './TriggerButton';

interface Props extends ComponentPropsWithoutRef<'div'> {
  defaultOption?: Option;
  onSelectOption?: (option?: Option) => void;
  width?: string;
}

const Select = ({ defaultOption, onSelectOption, width = '100%', children }: PropsWithChildren<Props>) => {
  return (
    <SelectProvider>
      <OptionProvider store={{ defaultOption, onSelectOption }}>
        <SelectLayout $width={width}>{children}</SelectLayout>
      </OptionProvider>
    </SelectProvider>
  );
};

Select.TriggerButton = TriggerButton;
Select.OptionList = OptionList;
Select.OptionItem = OptionItem;

export default Select;
