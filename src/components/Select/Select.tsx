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
}

const Select = ({ options, defaultOption }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(defaultOption);

  return (
    <SelectLayout>
      <TriggerButton onClick={() => setIsOpen((prev) => !prev)}>
        <SelectedValue>{selectedOption?.value ?? ''}</SelectedValue>
        {isOpen ? <Icon iconName="upArrow" /> : <Icon iconName="downArrow" />}
      </TriggerButton>

      {isOpen && (
        <OptionList>
          {options.map((option) => (
            <OptionItem
              key={option.id}
              $isSelected={selectedOption?.id === option.id}
              onClick={() => {
                setIsOpen(false);
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
