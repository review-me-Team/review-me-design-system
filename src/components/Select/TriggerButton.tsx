import React, { forwardRef } from 'react';

import { useOptionContext } from '@contexts/OptionContext';
import { useSelectContext } from '@contexts/SelectContext';

import Icon from '@components/Icon/Icon';

import { TriggerButton as TriggerButtonLayout, SelectedValue } from './style';

interface Props {
  placeholder?: string;
}

const TriggerButton = forwardRef<HTMLButtonElement, Props>(({ placeholder }, ref) => {
  const { isOpen, onOpenChange } = useSelectContext();
  const { selectedOption } = useOptionContext();

  return (
    <TriggerButtonLayout ref={ref} onClick={() => onOpenChange(!isOpen)}>
      <SelectedValue>{selectedOption?.label ?? placeholder ?? ''}</SelectedValue>
      {isOpen ? <Icon iconName="upArrow" /> : <Icon iconName="downArrow" />}
    </TriggerButtonLayout>
  );
});

TriggerButton.displayName = 'TriggerButton';

export default TriggerButton;
