import styled, { css } from 'styled-components';

const defaultLabelStyle = css`
  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border: 2px solid ${({ theme }) => theme.color.accent.bd.weak};
  color: ${({ theme }) => theme.color.neutral.text.default};
  & > svg {
    fill: ${({ theme }) => theme.color.neutral.text.default};
  }
`;

const activeLabelStyle = css`
  background-color: ${({ theme }) => theme.color.accent.bg.default};
  border: 2px solid transparent;
  color: ${({ theme }) => theme.palette.white};
  & > svg {
    fill: ${({ theme }) => theme.palette.white};
  }
`;

const LabelLayout = styled.div<{ isActive: boolean; px: number; py: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: ${({ py }) => py}px ${({ px }) => px}px;
  border-radius: 16px;

  ${({ isActive }) => (isActive ? activeLabelStyle : defaultLabelStyle)}
  ${({ theme }) => theme.font.label}
  
  &:hover {
    border: 2px solid ${({ theme }) => theme.palette.green200};
  }
`;

export { LabelLayout };
