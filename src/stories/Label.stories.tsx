import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import Label from '@components/Label/Label';

const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    isActive: {
      description: '라벨의 활성화를 나타냅니다.',
      control: 'boolean',
    },
    children: {
      description: '라벨에 들어갈 컨텐츠를 표시합니다.',
      control: 'text',
    },
    px: {
      description: '라벨의 padding-left, padding-right 값을 지정합니다. (단위 필수)',
      control: 'text',
    },
    py: {
      description: '라벨의 padding-top, padding-bottom 값을 지정합니다. (단위 필수)',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: ({ isActive, px, py }) => {
    return (
      <Label isActive={isActive} onClick={() => console.log('click!')} px={px} py={py}>
        Label
      </Label>
    );
  },
};
