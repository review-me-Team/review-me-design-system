import React, { InputHTMLAttributes, forwardRef } from 'react';

import { StyledInput } from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(({ type, isValid = true, ...props }, ref) => {
  return <StyledInput type={type} ref={ref} $isValid={isValid} {...props} />;
});

Input.displayName = 'Input';

export default Input;
