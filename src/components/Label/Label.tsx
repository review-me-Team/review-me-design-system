import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { LabelLayout } from './style';

interface Props extends ComponentPropsWithoutRef<'button'> {
  isActive: boolean;
  px?: string;
  py?: string;
}

const Label = ({ isActive, children, px = '1.25rem', py = '0.5rem', ...props }: PropsWithChildren<Props>) => {
  return (
    <LabelLayout $isActive={isActive} $px={px} $py={py} {...props}>
      {children}
    </LabelLayout>
  );
};

export default Label;
