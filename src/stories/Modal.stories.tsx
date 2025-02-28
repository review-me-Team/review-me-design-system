import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';

import Button from '@components/Button/Button';
import Modal from '@components/Modal/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: '모달이 현재 표시되고 있는지 여부를 나타냅니다.',
    },
    modalRootId: {
      description: '모달이 위치할 element의 id를 적어주세요. (기본값은 body에 위치합니다.)',
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
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: ({ width, height, padding, modalRootId }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="default" size="m" onClick={() => setIsOpen(true)}>
          open
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          modalRootId={modalRootId}
          width={width}
          height={height}
          padding={padding}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
            <Modal.Title>title</Modal.Title>
            <Modal.Description>description</Modal.Description>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <Button variant="default" size="m" onClick={() => setIsOpen(false)}>
              close
            </Button>
            <Button variant="outline" size="m" onClick={() => console.log('wow')}>
              wow
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};
