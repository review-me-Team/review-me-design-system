import React, { ReactNode } from 'react';

import { LabelLayout } from './style';

interface Props {
  isActive: boolean;
  children: ReactNode;
  px?: string;
  py?: string;
}

const Label = ({ isActive, children, px = '1.25rem', py = '0.5rem' }: Props) => {
  return (
    <LabelLayout $isActive={isActive} $px={px} $py={py}>
      {children}
    </LabelLayout>
  );
};

export default Label;
