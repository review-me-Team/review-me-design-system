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
  args: {
    isActive: false,
    children: 'Label',
  },
} satisfies Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    isActive: false,
    children: 'Label',
  },
};
