import React, { ComponentPropsWithRef, forwardRef } from 'react';

import { useSyncRef } from '@hooks/useSyncRef';

import { useOptionContext } from '@contexts/OptionContext';
import { useSelectContext } from '@contexts/SelectContext';

import Icon from '@components/Icon/Icon';

import { TriggerButton as TriggerButtonLayout, SelectedValue } from './style';

export interface Props extends ComponentPropsWithRef<'button'> {
  label?: string;
  height?: string;
}

const TriggerButton = forwardRef<HTMLButtonElement, Props>(({ label, height = 'fit-content' }, ref) => {
  const { isOpen, onOpenChange, triggerRef } = useSelectContext();
  const { selectedOptionName } = useOptionContext();

  const buttonRef = useSyncRef(triggerRef, ref);

  return (
    <TriggerButtonLayout
      ref={buttonRef}
      $height={height}
      onClick={() => {
        onOpenChange(!isOpen);
      }}
    >
      <SelectedValue>{`${selectedOptionName ?? label ?? ''}`}</SelectedValue>
      {isOpen ? <Icon iconName="upArrow" /> : <Icon iconName="downArrow" />}
    </TriggerButtonLayout>
  );
});

TriggerButton.displayName = 'TriggerButton';

export default TriggerButton;
