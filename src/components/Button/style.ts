import styled, { css } from 'styled-components';

const defaultButtonStyle = css`
  background-color: ${({ theme }) => theme.color.accent.bg.default};
  border: 0.0625rem solid transparent;

  color: ${({ theme }) => theme.color.neutral.text.weak};

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
    border: 0.0625rem solid ${({ theme }) => theme.palette.green200};
  }
  &:disabled {
    border: 0.0625rem solid transparent;
    transition: none;
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const outlineButtonStyle = css`
  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border: 0.0625rem solid ${({ theme }) => theme.color.accent.bd.strong};

  color: ${({ theme }) => theme.color.accent.text.strong};

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
    background-color: ${({ theme }) => theme.palette.green100};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.color.neutral.bg.default};
    border: 0.0625rem solid ${({ theme }) => theme.color.accent.bd.strong};
    opacity: 0.7;
    cursor: not-allowed;
    transition: none;
  }
`;

const ghostButtonStyle = css`
  background-color: transparent;

  color: ${({ theme }) => theme.color.accent.text.strong};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

type variant = 'default' | 'outline' | 'ghost';
type size = 's' | 'm' | 'l';

const ButtonLayout = styled.button<{
  $variant: variant;
  size: size;
  $width?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  overflow: hidden;
  width: fit-content;

  border-radius: 0.75rem;

  cursor: pointer;

  ${({ theme, size }) => {
    switch (size) {
      case 's':
        return css`
          ${theme.font.button.weak}
          padding: 0.5rem 0.75rem;
        `;
      case 'm':
        return css`
          ${theme.font.button.default}
          padding: 0.5rem 1rem;
        `;
      case 'l':
        return css`
          ${theme.font.button.strong}
          padding: 0.75rem 1.25rem;
        `;
    }
  }}
  ${({ $width }) => $width && `width: ${$width}`};
  ${({ $variant }) => {
    switch ($variant) {
      case 'default':
        return defaultButtonStyle;
      case 'outline':
        return outlineButtonStyle;
      case 'ghost':
        return ghostButtonStyle;
    }
  }}
`;

export { ButtonLayout };
