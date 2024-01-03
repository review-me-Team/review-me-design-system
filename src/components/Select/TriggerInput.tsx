import React, { InputHTMLAttributes, forwardRef } from 'react';

import { useSelectContext } from '@contexts/SelectContext';

import Input from '@components/Input/Input';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const TriggerInput = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  const { onOpenChange } = useSelectContext();

  return (
    <Input
      ref={ref}
      onFocus={() => onOpenChange(true)}
      onBlur={() => {
        onOpenChange(false);
      }}
      {...props}
    />
  );
});

TriggerInput.displayName = 'TriggerInput';

export default TriggerInput;
