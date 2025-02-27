import React, { ComponentPropsWithoutRef, useRef } from 'react';
import { createPortal } from 'react-dom';

import { BackDrop, Description, ModalLayout, ModalWrapper, Title } from './style';

interface Props extends ComponentPropsWithoutRef<'div'> {
  isOpen: boolean;
  onClose: React.MouseEventHandler<HTMLElement>;
  modalRootId?: string;
  width?: string;
  height?: string;
  padding?: string;
}

const Modal = ({
  isOpen,
  onClose,
  modalRootId,
  children,
  width = 'fit-content',
  height = 'fit-content',
  padding = '1.25rem',
}: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return createPortal(
    <BackDrop
      onClick={(e) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          onClose(e);
        }
      }}
    >
      <ModalWrapper>
        <ModalLayout ref={modalRef} $width={width} $height={height} $padding={padding}>
          {children}
        </ModalLayout>
      </ModalWrapper>
    </BackDrop>,
    modalRootId ? (document.getElementById(modalRootId) as HTMLElement) : document.body,
  );
};

Modal.Title = Title;
Modal.Description = Description;

export default Modal;
