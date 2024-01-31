import React, { ComponentPropsWithoutRef, MouseEventHandler, PropsWithChildren } from 'react';

import { LabelLayout } from './style';

interface Props extends ComponentPropsWithoutRef<'div'> {
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  px?: string;
  py?: string;
}

const Label = ({
  onClick,
  isActive,
  children,
  px = '1.25rem',
  py = '0.5rem',
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <LabelLayout
      onClick={onClick}
      $clickable={onClick !== undefined}
      $isActive={isActive}
      $px={px}
      $py={py}
      {...props}
    >
      {children}
    </LabelLayout>
  );
};

export default Label;
