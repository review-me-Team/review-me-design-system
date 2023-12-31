import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';

import Select from '@components/Select/Select';

export default {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    defaultOption: {
      description: '기본으로 선택된 option입니다.',
    },
    onSelectOption: {
      description: 'option을 선택했을 때의 handler입니다.',
    },
    width: {
      description: 'Select 컴포넌트의 가로 길이 입니다.',
    },
    children: {
      description: 'Select 컴포넌트에 들어갈 content를 넣어줍니다.',
    },
  },
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;
interface Option {
  label: number | string;
  value: number | string;
}

export const Default: Story = {
  render: () => {
    const [, setSelectedOption] = useState<Option | undefined>();
    const options = [
      { value: 'apple', label: '사과' },
      { value: 'graph', label: '포도' },
      { value: 'banana', label: '바나나' },
    ];

    return (
      <Select onSelectOption={setSelectedOption}>
        <Select.TriggerButton />
        <Select.OptionList>
          {options.map((option) => {
            return (
              <Select.OptionItem key={option.value} value={option.value} label={option.label}>
                {option.label}
              </Select.OptionItem>
            );
          })}
        </Select.OptionList>
      </Select>
    );
  },
};

export const DefaultOption: Story = {
  parameters: {
    docs: {
      description: {
        story: '기본 option이 있는 경우 trigger에 기본값이 표시됩니다.',
      },
    },
  },
  render: () => {
    const [, setSelectedOption] = useState<Option | undefined>();
    const options = [
      { value: 'apple', label: '사과' },
      { value: 'graph', label: '포도' },
      { value: 'banana', label: '바나나' },
    ];
    const defaultOption = options[1];

    return (
      <Select defaultOption={defaultOption} onSelectOption={setSelectedOption}>
        <Select.TriggerButton />
        <Select.OptionList>
          {options.map((option) => {
            return (
              <Select.OptionItem key={option.value} value={option.value} label={option.label}>
                {option.label}
              </Select.OptionItem>
            );
          })}
        </Select.OptionList>
      </Select>
    );
  },
};

export const SearchInput: Story = {
  parameters: {
    docs: {
      description: {
        story: '검색 기능이 가능합니다.',
      },
    },
  },
  render: () => {
    const options = [
      { value: 'apple', label: '사과' },
      { value: 'graph', label: '포도' },
      { value: 'banana', label: '바나나' },
    ];

    const [selectedOption, setSelectedOption] = useState<Option | undefined>();
    const [typedValue, setTypedValue] = useState<string | number | undefined>();
    const typedValueString = String(typedValue ?? '');
    const filteredOptions =
      options.filter((option) => String(option.label).startsWith(typedValueString)).length > 0
        ? options.filter((option) => String(option.label).startsWith(typedValueString))
        : options;

    return (
      <Select
        onSelectOption={(option) => {
          setSelectedOption(option);
          setTypedValue(option?.label);
        }}
      >
        <Select.TriggerInput
          value={typedValue ?? selectedOption?.label ?? ''}
          onChange={({ target }) => {
            setTypedValue(target.value);
            if (target.value !== selectedOption?.label) setSelectedOption(undefined);
          }}
        />
        <Select.OptionList>
          {filteredOptions.map((option) => {
            return (
              <Select.OptionItem key={option.value} value={option.value} label={option.label}>
                {option.label}
              </Select.OptionItem>
            );
          })}
        </Select.OptionList>
      </Select>
    );
  },
};
