import React, { ComponentPropsWithoutRef } from 'react';
import { createPortal } from 'react-dom';

import { BackDrop, Description, ModalLayout, Title } from './style';

interface Props extends ComponentPropsWithoutRef<'div'> {
  isOpen: boolean;
  onClose: React.MouseEventHandler<HTMLElement>;
  modalRootId: string;
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
  return createPortal(
    <>
      {isOpen && (
        <>
          <ModalLayout $width={width} $height={height} $padding={padding}>
            {children}
          </ModalLayout>
          <BackDrop onClick={onClose} />
        </>
      )}
    </>,
    document.getElementById(modalRootId) as HTMLElement,
  );
};

Modal.Title = Title;
Modal.Description = Description;

export default Modal;
