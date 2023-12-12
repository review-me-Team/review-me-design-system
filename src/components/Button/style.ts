import styled, { css } from 'styled-components';

const defaultButtonStyle = css`
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.color.accent.bg.default};
  border: 0.0625rem solid transparent;
  border-radius: 0.75rem;

  color: ${({ theme }) => theme.color.neutral.text.weak};

  &:hover {
    opacity: 0.9;
    border: 0.0625rem solid ${({ theme }) => theme.palette.green200};
  }
`;

const outlineButtonStyle = css`
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border: 0.0625rem solid ${({ theme }) => theme.color.accent.bd.strong};
  border-radius: 0.75rem;

  color: ${({ theme }) => theme.color.accent.text.strong};

  &:hover {
    border: 0.0625rem solid ${({ theme }) => theme.palette.green200};
  }
`;

const ghostButtonStyle = css`
  background-color: transparent;

  color: ${({ theme }) => theme.color.accent.text.strong};
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

  ${({ theme, size }) => {
    switch (size) {
      case 's':
        return theme.font.button.weak;
      case 'm':
        return theme.font.button.default;
      case 'l':
        return theme.font.button.strong;
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
