import React, { ReactNode } from 'react';

import { LabelLayout } from './style';

interface Props {
  isActive: boolean;
  children: ReactNode;
  px?: number;
  py?: number;
}

const Label = ({ isActive, children, px = 20, py = 8 }: Props) => {
  return (
    <LabelLayout $isActive={isActive} $px={px} $py={py}>
      {children}
    </LabelLayout>
  );
};

export default Label;
