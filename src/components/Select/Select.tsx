import React from 'react';

import OptionProvider from '@contexts/OptionContext';
import { SelectProvider } from '@contexts/SelectContext';

import OptionItem from './OptionItem';
import OptionList from './OptionList';
import { SelectLayout } from './style';
import TriggerButton from './TriggerButton';
import TriggerInput from './TriggerInput';

interface Option {
  label: number | string;
  value: number | string;
}

interface Props {
  defaultOption?: Option;
  onSelectOption?: (option?: Option) => void;
  width?: string;
  children: React.ReactNode;
}

const Select = ({ defaultOption, onSelectOption, width = '100%', children }: Props) => {
  return (
    <SelectProvider>
      <OptionProvider store={{ defaultOption, onSelectOption }}>
        <SelectLayout $width={width}>{children}</SelectLayout>
      </OptionProvider>
    </SelectProvider>
  );
};

Select.TriggerButton = TriggerButton;
Select.TriggerInput = TriggerInput;
Select.OptionList = OptionList;
Select.OptionItem = OptionItem;

export default Select;
