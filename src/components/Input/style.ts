import styled from 'styled-components';

const StyledInput = styled.input<{ $isValid: boolean }>`
  padding: 0.5rem 0.75rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border-radius: 0.25rem;
  border: 0.0625rem solid
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
