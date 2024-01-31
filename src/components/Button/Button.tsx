import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { ButtonLayout } from './style';

type variant = 'default' | 'outline' | 'ghost';
type size = 's' | 'm' | 'l';

interface Props extends ComponentPropsWithoutRef<'button'> {
  variant: variant;
  size: size;
  width?: string;
}

const Button = ({ variant, size, width, children, ...props }: PropsWithChildren<Props>) => {
  return (
    <ButtonLayout $variant={variant} size={size} $width={width} {...props}>
      {children}
    </ButtonLayout>
  );
};

export default Button;
