import React, { TextareaHTMLAttributes, forwardRef } from 'react';

import { StyledTextarea } from './style';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isValid?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ isValid = true, ...props }, ref) => {
  return <StyledTextarea ref={ref} $isValid={isValid} {...props} />;
});

Textarea.displayName = 'Textarea';

export default Textarea;
