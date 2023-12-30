import type { Meta, StoryObj } from '@storybook/react';

import Select from '@components/Select/Select';

export default {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'options는 option으로 이뤄진 배열입니다. (option은 id와 value로 이루어진 객체입니다.)',
    },
    defaultOption: {
      description: '기본값으로 할 option을 작성합니다. (option은 id와 value로 이루어진 객체입니다.)',
    },
    onSelectOption: {
      description: 'option을 선택했을 때 실행되는 handler입니다.',
    },
  },
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: [
      { id: 'apple', value: '사과' },
      { id: 'graph', value: '포도' },
      { id: 'banana', value: '바나나' },
    ],
    onSelectOption: (option) => console.log(option),
  },
};

export const DefaultOption: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '기본 option이 있는 경우 trigger에 기본값이 표시됩니다. 이 때, option은 id와 value로 이뤄진 객체로 작성해주세요. ',
      },
    },
  },
  args: {
    options: [
      { id: 'apple', value: '사과' },
      { id: 'graph', value: '포도' },
      { id: 'banana', value: '바나나' },
    ],
    defaultOption: { id: 'apple', value: '사과' },
    onSelectOption: (option) => console.log(option),
  },
};

export const SearchInput: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '기본 option이 있는 경우 trigger에 기본값이 표시됩니다. 이 때, option은 id와 value로 이뤄진 객체로 작성해주세요. ',
      },
    },
  },
  args: {
    options: [
      { id: 'apple', value: '사과' },
      { id: 'graph', value: '포도' },
      { id: 'banana', value: '바나나' },
    ],
    isSearch: true,
    onSelectOption: (option) => console.log(option),
  },
};
