import styled from 'styled-components';

const StyledInput = styled.input<{ $isValid: boolean }>`
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border-radius: 4px;
  border: 1px solid
    ${({ $isValid, theme }) => ($isValid ? theme.color.accent.bd.weak : theme.color.system.red)};

  ${({ theme }) => theme.font.placeholder}
  color: ${({ theme }) => theme.color.neutral.text.default};

  &::placeholder {
    color: ${({ theme }) => theme.color.accent.text.weak};
  }
  &:focus {
    color: ${({ theme }) => theme.color.neutral.text.default};
  }
`;

export { StyledInput };
