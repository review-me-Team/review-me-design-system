import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';

import Select from '@components/Select/Select';
import { Option } from '@components/Select/Select.types';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    defaultOption: {
      description: '기본으로 선택된 option입니다. (label: option의 text, value: option의 value)',
      control: 'object',
    },
    onSelectOption: {
      description: 'option을 선택했을 때의 handler입니다.',
    },
    width: {
      description: 'Select 컴포넌트의 가로 길이 입니다.',
      control: 'text',
    },
    children: {
      component: 'Select 컴포넌트에 들어갈 content를 넣어줍니다.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Select 컴포넌트는 Compound Component Pattern을 적용합니다. `<Select.TriggerButton>` 혹은 `<Select.TriggerInput>` 다음에 `<Select.OptionList>`를 선언해주세요.\n- `<Select.TriggerButton>`은 option 목록을 여닫는 버튼 컴포넌트입니다.\n- `<Select.TriggerInput>`은 입력한 검색어에 해당하는 option 목록을 보여주는 input 컴포넌트입니다.\n- `<Select.OptionList>`는 option 목록에 해당하는 컴포넌트입니다. maxHeight prop을 통해 높이를 정할 수 있습니다.\n- `<Select.OptionItem>`은 option에 해당하는 컴포넌트입니다. prop으로 value에 option의 value를, label에 option의 text를 입력해주세요.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

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
