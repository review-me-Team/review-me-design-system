import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { ComponentList, ComponentListItem } from '@styles/storyStyle';

import Button from '@components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '버튼의 종류를 설정합니다.',
      control: 'select',
      options: ['default', 'outline', 'ghost'],
    },
    size: {
      description: '버튼의 크기를 설정합니다.',
      control: 'radio',
    },
    width: {
      description: '버튼의 가로 길이입니다. (반드시 단위를 끝에 붙여야 합니다.)',
      control: 'text',
    },
    children: {
      description: '버튼에 들어갈 컨텐츠를 표시합니다.',
      control: 'text',
    },
  },
  args: {
    variant: 'default',
    size: 'm',
    children: 'button',
    width: '',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'm',
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'default | outline | ghost 중 선택',
      },
    },
  },
  argTypes: {
    variant: { control: { disable: true } },
  },
  render: ({ size, width }) => {
    return (
      <ComponentList direction="column">
        <ComponentListItem direction="column">
          <h3>default</h3>
          <Button variant="default" size={size} width={width}>
            button
          </Button>
        </ComponentListItem>
        <ComponentListItem direction="column">
          <h3>outline</h3>
          <Button variant="outline" size={size} width={width}>
            button
          </Button>
        </ComponentListItem>
        <ComponentListItem direction="column">
          <h3>ghost</h3>
          <Button variant="ghost" size={size} width={width}>
            button
          </Button>
        </ComponentListItem>
      </ComponentList>
    );
  },
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 's | m | l 중 선택',
      },
    },
  },
  argTypes: {
    size: { control: { disable: true } },
  },
  render: ({ variant, width }) => {
    return (
      <ComponentList direction="column">
        <ComponentListItem direction="column">
          <h3>s</h3>
          <Button variant={variant} size="s" width={width}>
            button
          </Button>
        </ComponentListItem>
        <ComponentListItem direction="column">
          <h3>m</h3>
          <Button variant={variant} size="m" width={width}>
            button
          </Button>
        </ComponentListItem>
        <ComponentListItem direction="column">
          <h3>l</h3>
          <Button variant={variant} size="l" width={width}>
            button
          </Button>
        </ComponentListItem>
      </ComponentList>
    );
  },
};
