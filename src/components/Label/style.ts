import styled, { css } from 'styled-components';

const defaultLabelStyle = css`
  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border: 0.125rem solid ${({ theme }) => theme.color.accent.bd.weak};
  color: ${({ theme }) => theme.color.neutral.text.default};

  & > svg {
    fill: ${({ theme }) => theme.color.neutral.text.default};
  }
`;

const activeLabelStyle = css`
  background-color: ${({ theme }) => theme.color.accent.bg.default};
  border: 0.125rem solid transparent;
  color: ${({ theme }) => theme.palette.white};

  & > svg {
    fill: ${({ theme }) => theme.palette.white};
  }
`;

const LabelLayout = styled.button<{ $isActive: boolean; $px: string; $py: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: ${({ $py, $px }) => `${$py} ${$px}`};
  border-radius: 1rem;

  ${({ $isActive }) => ($isActive ? activeLabelStyle : defaultLabelStyle)}
  ${({ theme }) => theme.font.label}
  
  &:hover {
    border: 0.125rem solid ${({ theme }) => theme.palette.green200};
  }
`;

export { LabelLayout };
