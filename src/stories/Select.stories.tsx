import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';

import Select from '@components/Select/Select';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    width: {
      description: 'Select 컴포넌트의 너비를 설정합니다.',
    },
    children: {
      description: 'option 태그들을 포함합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    const [, setSelectedOption] = useState<string>('none');
    const options = [
      { id: 'apple', name: '사과' },
      { id: 'graph', name: '포도' },
      { id: 'banana', name: '바나나' },
    ];

    return (
      <div>
        <label htmlFor="fruit">과일</label>
        <Select
          id="fruit"
          name="fruit"
          defaultValue={'none'}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
        >
          <option value="none" disabled />
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </Select>
      </div>
    );
  },
};
