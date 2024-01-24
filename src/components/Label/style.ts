import styled, { css } from 'styled-components';

const getDefaultLabelStyle = (clickable: boolean) => css`
  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border: 0.125rem solid ${({ theme }) => theme.color.accent.bd.weak};
  color: ${({ theme }) => theme.color.neutral.text.default};

  & > svg {
    fill: ${({ theme }) => theme.color.neutral.text.default};
  }
  ${clickable &&
  css`
    &:hover {
      opacity: 0.9;
      background-color: ${({ theme }) => theme.palette.green100};
    }
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  `}
`;

const getActiveLabelStyle = (clickable: boolean) => css`
  background-color: ${({ theme }) => theme.color.accent.bg.default};
  border: 0.125rem solid transparent;
  color: ${({ theme }) => theme.color.neutral.text.weak};

  & > svg {
    fill: ${({ theme }) => theme.color.neutral.text.weak};
  }
  ${clickable &&
  css`
    &:hover {
      opacity: 0.9;
    }
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  `}
`;

const LabelLayout = styled.div<{ $clickable: boolean; $isActive: boolean; $px: string; $py: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: ${({ $py, $px }) => `${$py} ${$px}`};
  border-radius: 1rem;

  ${({ $clickable: $clickable, $isActive }) =>
    $isActive ? getActiveLabelStyle($clickable) : getDefaultLabelStyle($clickable)}
  ${({ theme }) => theme.font.label}
`;

export { LabelLayout };
