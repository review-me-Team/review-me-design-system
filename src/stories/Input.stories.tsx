import type { Meta, StoryObj } from '@storybook/react';

import Input from '@components/Input/Input';

export default {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    isValid: {
      description: '유효한 값이 아닌 경우 border의 색상이 바뀝니다.',
      control: 'boolean',
    },
    placeholder: {
      description: '입력할 값에 대한 짧은 안내글을 작성합니다.',
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'placeholder',
    isValid: true,
  },
};
