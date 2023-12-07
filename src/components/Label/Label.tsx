import React from 'react';

import { LabelLayout } from './style';

interface Props {
  isActive: boolean;
  px?: number;
  py?: number;
}

const Label = ({ isActive, px = 20, py = 8 }: Props) => {
  return (
    <LabelLayout isActive={isActive} px={px} py={py}>
      Label
    </LabelLayout>
  );
};

export default Label;
