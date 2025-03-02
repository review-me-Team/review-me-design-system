import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import Icon from '@components/Icon/Icon';

import { ComponentList, ComponentListItem } from './storyStyle';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      description: 'Icon 이름에 따른 svg 파일을 보여줍니다.',
    },
    width: {
      description: 'Icon 컴포넌트의 가로 길이를 결정합니다. (단, 단위는 px기준입니다.)',
      control: 'number',
    },
    height: {
      description: 'Icon 컴포넌트의 세로 길이를 결정합니다. (단, 단위는 px기준입니다.)',
      control: 'number',
    },
    color: {
      description: 'Icon 컴포넌트의 색상을 결정합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    iconName: 'bookMark',
  },
};

export const IconNames: Story = {
  argTypes: {
    iconName: { control: { disable: true } },
  },
  render: ({ width, height, color }) => {
    return (
      <ComponentList direction="column">
        <ComponentListItem direction="column">
          <h3>clip</h3>
          <Icon iconName="clip" width={width} height={height} color={color} />
        </ComponentListItem>
        <ComponentList direction="row">
          <ComponentListItem direction="column">
            <h3>person</h3>
            <Icon iconName="person" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>menu</h3>
            <Icon iconName="menu" width={width} height={height} color={color} />
          </ComponentListItem>
        </ComponentList>

        <ComponentList direction="row">
          <ComponentListItem direction="column">
            <h3>communication</h3>
            <Icon iconName="communication" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>emoji</h3>
            <Icon iconName="emoji" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>more</h3>
            <Icon iconName="more" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>download</h3>
            <Icon iconName="download" width={width} height={height} color={color} />
          </ComponentListItem>
        </ComponentList>

        <ComponentList direction="row">
          <ComponentListItem direction="column">
            <h3>bookMark</h3>
            <Icon iconName="bookMark" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>filledBookMark</h3>
            <Icon iconName="filledBookMark" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>checkMark</h3>
            <Icon iconName="checkMark" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>filledCheckMark</h3>
            <Icon iconName="filledCheckMark" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>info</h3>
            <Icon iconName="info" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>filledInfo</h3>
            <Icon iconName="filledInfo" width={width} height={height} color={color} />
          </ComponentListItem>
        </ComponentList>

        <ComponentList direction="row">
          <ComponentListItem direction="column">
            <h3>plus</h3>
            <Icon iconName="plus" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>minus</h3>
            <Icon iconName="minus" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>xMark</h3>
            <Icon iconName="xMark" width={width} height={height} color={color} />
          </ComponentListItem>
        </ComponentList>

        <ComponentList direction="row">
          <ComponentListItem direction="column">
            <h3>leftArrow</h3>
            <Icon iconName="leftArrow" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>rightArrow</h3>
            <Icon iconName="rightArrow" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>downArrow</h3>
            <Icon iconName="downArrow" width={width} height={height} color={color} />
          </ComponentListItem>
          <ComponentListItem direction="column">
            <h3>upArrow</h3>
            <Icon iconName="upArrow" width={width} height={height} color={color} />
          </ComponentListItem>
        </ComponentList>
      </ComponentList>
    );
  },
};
