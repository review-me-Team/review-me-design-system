import styled, { css } from 'styled-components';

const defaultButtonStyle = css`
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.color.accent.bg.default};
  border-radius: 10px;
  color: ${({ theme }) => theme.color.neutral.text.weak};
`;

const outlineButtonStyle = css`
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border: 1px solid ${({ theme }) => theme.color.accent.bd.strong};
  border-radius: 10px;
  color: ${({ theme }) => theme.color.accent.text.strong};
`;

const ghostButtonStyle = css`
  background-color: transparent;
  color: ${({ theme }) => theme.color.accent.text.strong};
`;

type variant = 'default' | 'outline' | 'ghost';
type size = 's' | 'm' | 'l';

const ButtonLayout = styled.button<{
  variant: variant;
  size: size;
  width?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  overflow: hidden;

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
  ${({ width }) => width && `width: ${width}`};
  ${({ variant }) => {
    switch (variant) {
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
