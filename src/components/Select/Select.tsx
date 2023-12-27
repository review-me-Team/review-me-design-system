import React, { useState } from 'react';

import Icon from '@components/Icon/Icon';

import { OptionItem, OptionList, SelectLayout, SelectedValue, TriggerButton } from './style';

interface Option {
  id: number | string;
  value: string;
}

interface Props {
  options: Option[];
  defaultOption?: Option;
  width?: string;
}

const Select = ({ options, defaultOption, width = '100%' }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(defaultOption);

  return (
    <SelectLayout $width={width}>
      <TriggerButton onClick={() => setIsOpen((prev) => !prev)}>
        <SelectedValue>{selectedOption?.value ?? ''}</SelectedValue>
        {isOpen ? <Icon iconName="upArrow" /> : <Icon iconName="downArrow" />}
      </TriggerButton>

      {isOpen && (
        <OptionList onClick={() => setIsOpen(false)}>
          {options.map((option) => (
            <OptionItem
              key={option.id}
              $isSelected={selectedOption?.id === option.id}
              onClick={() => {
                setSelectedOption(option);
              }}
            >
              {option.value}
            </OptionItem>
          ))}
        </OptionList>
      )}
    </SelectLayout>
  );
};

export default Select;
