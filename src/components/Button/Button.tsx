import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonLayout } from './style';

type variant = 'default' | 'outline' | 'ghost';
type size = 's' | 'm' | 'l';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: variant;
  size: size;
  width?: string;
  children: ReactNode;
}

const Button = ({ variant, size, width, children, ...props }: Props) => {
  return (
    <ButtonLayout variant={variant} size={size} width={width} {...props}>
      {children}
    </ButtonLayout>
  );
};

export default Button;
