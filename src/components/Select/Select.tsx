import React, { useState } from 'react';

import Icon from '@components/Icon/Icon';
import Input from '@components/Input/Input';

import { OptionItem, OptionList, SelectLayout, SelectedValue, TriggerButton } from './style';

interface Option {
  id: number | string;
  value: string;
}

interface Props {
  options: Option[];
  defaultOption?: Option;
  onSelectOption: (option?: Option) => void;
  isSearch?: boolean;
  width?: string;
  maxHeight?: string;
}

const Select = ({
  options,
  defaultOption,
  onSelectOption,
  isSearch = false,
  width = '100%',
  maxHeight,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(defaultOption);
  const [typedValue, setTypedValue] = useState<string | null>(null);

  const filteredOptions = typedValue
    ? options.filter((option) => option.value.startsWith(typedValue))
    : options;

  return (
    <SelectLayout $width={width}>
      {isSearch ? (
        <Input
          value={typedValue ?? selectedOption?.value ?? ''}
          onFocus={() => setIsOpen(true)}
          onBlur={() => {
            setIsOpen(false);
          }}
          onChange={({ target }) => setTypedValue(target.value)}
        />
      ) : (
        <TriggerButton onClick={() => setIsOpen((prev) => !prev)}>
          <SelectedValue>{selectedOption?.value ?? ''}</SelectedValue>
          {isOpen ? <Icon iconName="upArrow" /> : <Icon iconName="downArrow" />}
        </TriggerButton>
      )}

      {isOpen && (
        <OptionList onClick={() => setIsOpen(false)} maxHeight={maxHeight}>
          {filteredOptions.map((option) => (
            <OptionItem
              key={option.id}
              $isSelected={selectedOption?.id === option.id}
              onMouseDown={() => {
                setSelectedOption(option);
                onSelectOption(option);
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
