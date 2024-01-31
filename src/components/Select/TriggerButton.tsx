import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { useSyncRef } from '@hooks/useSyncRef';

import { useOptionContext } from '@contexts/OptionContext';
import { useSelectContext } from '@contexts/SelectContext';

import Icon from '@components/Icon/Icon';

import { TriggerButton as TriggerButtonLayout, SelectedValue } from './style';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder?: string;
}

const TriggerButton = forwardRef<HTMLButtonElement, Props>(({ placeholder }, ref) => {
  const { isOpen, onOpenChange, triggerRef } = useSelectContext();
  const { selectedOption } = useOptionContext();

  const buttonRef = useSyncRef(triggerRef, ref);

  return (
    <TriggerButtonLayout
      ref={buttonRef}
      onClick={() => {
        onOpenChange(!isOpen);
      }}
    >
      <SelectedValue>{selectedOption?.label ?? placeholder ?? ''}</SelectedValue>
      {isOpen ? <Icon iconName="upArrow" /> : <Icon iconName="downArrow" />}
    </TriggerButtonLayout>
  );
});

TriggerButton.displayName = 'TriggerButton';

export default TriggerButton;
