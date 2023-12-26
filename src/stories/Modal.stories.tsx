import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import useModal from '@hooks/useModal';

import Button from '@components/Button/Button';
import Modal from '@components/Modal/Modal';

export default {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: '모달이 현재 표시되고 있는지 여부를 나타냅니다.',
    },
    modalRootId: {
      description: '모달이 위치할 element의 id를 적어주세요.',
    },
    children: {
      description: '모달의 컨텐츠를 설정합니다.',
    },
    width: {
      description: '모달의 가로 길이를 설정합니다. (기본값은 content에 맞게 설정)',
    },
    height: {
      description: '모달의 세로 길이를 설정합니다. (기본값은 content에 맞게 설정)',
    },
    padding: {
      description: '모달의 padding을 설정합니다. (기본값은 1.25rem)',
    },
  },
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  argTypes: {
    modalRootId: { control: { disable: true } },
  },
  render: ({ width, height, padding }) => {
    const { isOpen, open, close } = useModal();

    return (
      <>
        <Button variant="default" size="m" onClick={open}>
          open
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={close}
          modalRootId="modal-root"
          width={width}
          height={height}
          padding={padding}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Modal.Title>title</Modal.Title>
            <Modal.Description>description</Modal.Description>
          </div>
        </Modal>
      </>
    );
  },
};
