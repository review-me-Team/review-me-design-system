import React, { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { BackDrop, Description, ModalLayout, ModalWrapper, Title } from './style';

interface Props extends ComponentPropsWithoutRef<'div'> {
  isOpen: boolean;
  onClose: () => void;
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

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modalElement = modalRef.current as HTMLDivElement;

    // focus가 가능한 요소들 모두 찾기
    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    /**
     * @description focus가 가능한 요소들 중 가장 첫번째, 마지막 요소 찾기
     * focus가 가능한 요소가 없을 경우 modalElement에 focus
     */
    const firstElement =
      focusableElements.length === 0 ? modalElement : (focusableElements[0] as HTMLElement);
    const lastElement =
      focusableElements.length === 0
        ? modalElement
        : (focusableElements[focusableElements.length - 1] as HTMLElement);

    firstElement.focus();

    const handleTabKeyPress = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      // document.activeElement는 현재 focus가 있는 요소를 참조
      // 모달 내 첫 번째 포커스 가능한 요소에 포커스된 상태에서 shift + tab 키를 누르면 마지막 포커스 가능한 요소로 이동
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      // 모달 내 마지막 포커스 가능한 요소에 포커스된 상태에서 tab 키를 누르면 첫 번째 포커스 가능한 요소로 이동
      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') handleTabKeyPress(event);
      if (event.key === 'Escape') handleEscapeKeyPress(event);
    };

    modalElement.addEventListener('keydown', handleKeyDown);

    return () => {
      modalElement.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <BackDrop
      onClick={(e) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          onClose();
        }
      }}
    >
      <ModalWrapper>
        <ModalLayout
          ref={modalRef}
          $width={width}
          $height={height}
          $padding={padding}
          tabIndex={-1}
          role="dialog"
          aria-modal={isOpen}
        >
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
