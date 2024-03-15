import React from 'react';

import { MinValue, MultiRangeSliderLayout, Range, MaxValue, Slider, Thumb, Track } from './style';

interface Range {
  min: number;
  max: number;
}

interface Props {
  width?: string;
  min: number;
  max: number;
  step?: number;
  range: Range;
  onRangeChange: ({ min, max }: Range) => void;
  hasGreaterCheck?: boolean;
  hasLessCheck?: boolean;
}

const MultiRangeSlider = ({
  width,
  min,
  max,
  step = 1,
  range,
  onRangeChange,
  hasGreaterCheck,
  hasLessCheck,
}: Props) => {
  const getPercent = (value: number) => {
    return Math.round(((value - min) / (max - min)) * 100);
  };

  const minPercent = getPercent(range.min);
  const maxPercent = getPercent(range.max);

  return (
    <MultiRangeSliderLayout $width={width}>
      <Thumb
        type="range"
        min={min}
        max={max}
        value={range.min}
        step={step}
        onChange={(e) => {
          const value = Math.min(e.target.valueAsNumber, range.max);
          const isSameMinOfRange = value === range.min;

          if (!isSameMinOfRange) {
            onRangeChange({ min: value, max: range.max });
          }
        }}
      />
      <Thumb
        type="range"
        min={min}
        max={max}
        step={step}
        value={range.max}
        onChange={(e) => {
          const value = Math.max(+e.target.valueAsNumber, range.min);
          const isSameMaxOfRange = value === range.max;

          if (!isSameMaxOfRange) {
            onRangeChange({ min: range.min, max: value });
          }
        }}
      />

      <Slider>
        <Track />
        <Range $left={`${minPercent}%`} $width={`${maxPercent - minPercent}%`} />
        <MinValue>{hasLessCheck ? `${min}-` : min}</MinValue>
        <MaxValue>{hasGreaterCheck ? `${max}+` : max}</MaxValue>
      </Slider>
    </MultiRangeSliderLayout>
  );
};

export default MultiRangeSlider;
