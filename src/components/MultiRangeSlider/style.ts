import styled, { css } from 'styled-components';

import { theme } from '@styles/theme';

const THUMB_SIZE = 2;
const THUMB_TOP = -0.75;

const MultiRangeSliderLayout = styled.div<{ $width?: string }>`
  position: relative;
  width: ${({ $width }) => $width || '100%'};
`;

const thumbStyles = css`
  width: ${THUMB_SIZE}rem;
  height: ${THUMB_SIZE}rem;

  &:active {
    cursor: grabbing;
  }
`;

const Thumb = styled.input`
  position: absolute;
  width: 100%;
  top: ${THUMB_TOP}rem;
  left: 0;

  // 기본 스타일 초기화
  -webkit-appearance: none;
  // 가려진 input 이벤트 비활성화
  pointer-events: none;

  z-index: 2;
  opacity: 0;

  &::-webkit-slider-thumb {
    // thumb 스타일 초기화
    -webkit-appearance: none;
    // thumb 모두 활성화
    pointer-events: all;
    cursor: pointer;

    ${thumbStyles}
  }
  &::-moz-range-thumb {
    pointer-events: all;
    cursor: pointer;

    ${thumbStyles}
  }
`;

const Slider = styled.div`
  position: relative;
  height: 0.5rem;

  z-index: 1;
`;

const Track = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.palette.gray400};
  border-radius: 0.5rem;

  z-index: 1;
`;

const Range = styled.div<{ $left: string; $width: string }>`
  position: absolute;
  left: ${({ $left }) => $left};
  width: ${({ $width }) => $width};
  top: 0;
  bottom: 0;

  background-color: ${theme.color.accent.bg.strong};

  z-index: 2;
`;

const valueStyles = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.color.neutral.bg.default};
  border: 2px solid ${theme.color.accent.bd.strong};
  border-radius: 50%;

  ${theme.font.body.default}
  color: ${theme.color.neutral.text.default};

  cursor: pointer;
  z-index: 3;
`;

const LeftValue = styled.div<{ $left: string }>`
  ${valueStyles}
  top: ${THUMB_TOP}rem;
  left: ${({ $left }) => $left};
  transform: translateX(-50%);

  ${thumbStyles}
`;

const RightValue = styled.div<{ $right: string }>`
  ${valueStyles}
  top: ${THUMB_TOP}rem;
  right: ${({ $right }) => $right};
  transform: translateX(50%);

  ${thumbStyles}
`;

export { MultiRangeSliderLayout, Thumb, Slider, Track, Range, LeftValue, RightValue };
