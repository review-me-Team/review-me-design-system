import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import useOutsideClick from '@hooks/useOutsideClick';

import { useSelectContext } from '@contexts/SelectContext';

import { OptionList as OptionListLayout } from './style';

export interface Props extends ComponentPropsWithoutRef<'ul'> {
  maxHeight?: string;
}

const OptionList = ({ children, maxHeight }: PropsWithChildren<Props>) => {
  const { isOpen, onOpenChange, listRef, triggerRef } = useSelectContext();

  useOutsideClick({ listRef, triggerRef, isOpen, onClick: () => onOpenChange(false) });

  return (
    <OptionListLayout
      ref={listRef}
      $maxHeight={maxHeight}
      $isOpen={isOpen}
      onClick={() => onOpenChange(false)}
    >
      {children}
    </OptionListLayout>
  );
};

export default OptionList;
