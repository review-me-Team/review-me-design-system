import React from 'react';

import { useSelectContext } from '@contexts/SelectContext';

import { OptionList as OptionListLayout } from './style';

interface Props {
  children: React.ReactNode;
  maxHeight?: string;
}

const OptionList = ({ children, maxHeight }: Props) => {
  const { isOpen, onOpenChange } = useSelectContext();

  if (!isOpen) return null;

  return (
    <OptionListLayout maxHeight={maxHeight} onClick={() => onOpenChange(false)}>
      {children}
    </OptionListLayout>
  );
};

export default OptionList;
