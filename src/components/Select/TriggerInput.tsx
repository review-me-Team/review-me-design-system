import React, { InputHTMLAttributes, forwardRef } from 'react';

import { useSyncRef } from '@hooks/useSyncRef';

import { useSelectContext } from '@contexts/SelectContext';

import Input from '@components/Input/Input';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const TriggerInput = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  const { onOpenChange, triggerRef } = useSelectContext();

  const inputRef = useSyncRef(ref, triggerRef);

  return (
    <Input
      ref={inputRef}
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
