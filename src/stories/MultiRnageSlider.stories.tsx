import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';

import MultiRangeSlider from '@components/MultiRangeSlider/MultiRangeSlider';

const meta: Meta<typeof MultiRangeSlider> = {
  title: 'MultiRangeSlider',
  component: MultiRangeSlider,
  tags: ['autodocs'],
  argTypes: {
    min: {
      description: '최솟값을 설정합니다.',
      control: 'number',
    },
    max: {
      description: '최댓값을 설정합니다.',
      control: 'number',
    },
    width: {
      description: '슬라이더의 너비를 설정합니다.',
      control: 'text',
    },
    step: {
      description: '증가/감소 단위를 설정합니다.',
      control: 'number',
    },
    range: {
      description: '슬라이더의 범위를 설정합니다. 범위의 최솟값과 최댓값을 객체로 설정합니다.',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MultiRangeSlider>;

export const Default: Story = {
  render: ({ width, step }) => {
    const [range, setRange] = useState({ min: 0, max: 10 });

    return (
      <MultiRangeSlider width={width} step={step} min={0} max={10} range={range} onRangeChange={setRange} />
    );
  },
};
