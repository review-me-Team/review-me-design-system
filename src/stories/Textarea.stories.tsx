import type { Meta, StoryObj } from '@storybook/react';

import Textarea from '@components/Textarea/Textarea';

export default {
  title: 'Textarea',
  component: Textarea,
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
} satisfies Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'placeholder',
    isValid: true,
  },
};
