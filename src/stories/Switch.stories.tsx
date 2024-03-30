import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';

import Switch from '@components/Switch/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Switch의 label입니다.',
    },
    checked: {
      description: 'Switch의 checked 상태입니다.',
    },
    onChange: {
      description: 'Switch의 checked 상태 변경하는 핸들러입니다.',
    },
  },
  args: {
    label: 'label',
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: ({ label }) => {
    const [checked, setChecked] = useState(false);

    return (
      <Switch
        label={label}
        checked={checked}
        onChange={() => {
          setChecked((prev) => !prev);
        }}
      />
    );
  },
};
