import styled from 'styled-components';

const StyledTextarea = styled.textarea<{ $isValid: boolean }>`
  padding: 0.5rem 0.75rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border-radius: 0.25rem;
  border: 0.0625rem solid
    ${({ $isValid, theme }) => ($isValid ? theme.color.accent.bd.weak : theme.color.system.red)};

  ${({ theme }) => theme.font.body.default}
  color: ${({ theme }) => theme.color.neutral.text.default};

  resize: none;

  &::placeholder {
    ${({ theme }) => theme.font.placeholder}
    color: ${({ theme }) => theme.color.accent.text.weak};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.accent.bd.strong};
    color: ${({ theme }) => theme.color.neutral.text.default};
  }
`;

export { StyledTextarea };
