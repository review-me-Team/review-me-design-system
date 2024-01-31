import React from 'react';

import useOutsideClick from '@hooks/useOutsideClick';

import { useSelectContext } from '@contexts/SelectContext';

import { OptionList as OptionListLayout } from './style';

export interface Props {
  children: React.ReactNode;
  maxHeight?: string;
}

const OptionList = ({ children, maxHeight }: Props) => {
  const { isOpen, onOpenChange, listRef, triggerRef } = useSelectContext();

  useOutsideClick({ listRef, triggerRef, isOpen, onClick: () => onOpenChange(false) });

  if (!isOpen) return null;

  return (
    <OptionListLayout ref={listRef} maxHeight={maxHeight} onClick={() => onOpenChange(false)}>
      {children}
    </OptionListLayout>
  );
};

export default OptionList;
