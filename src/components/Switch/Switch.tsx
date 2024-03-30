import React from 'react';

import { SwitchLabel } from './style';

interface Props {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Switch = ({ label, checked, onChange }: Props) => {
  return (
    <SwitchLabel>
      <input role="switch" type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </SwitchLabel>
  );
};

export default Switch;
