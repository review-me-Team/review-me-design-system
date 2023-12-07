import type { Meta, StoryObj } from '@storybook/react';

import Label from '@components/Label/Label';

export default {
  title: 'Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    isActive: {
      description: '라벨의 활성화를 나타냅니다.',
      control: 'boolean',
    },
    px: {
      description: '라벨의 padding-left, padding-right 값을 지정합니다',
      control: 'number',
    },
    py: {
      description: '라벨의 padding-top, padding-bottom 값을 지정합니다.',
      control: 'number',
    },
  },
  args: {
    isActive: false,
  },
} satisfies Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    isActive: false,
  },
};
