import styled, { css } from 'styled-components';

const SelectLayout = styled.div<{ $width: string }>`
  position: relative;
  width: ${({ $width }) => $width};
`;

const TriggerButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 5.625rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;

  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border: 0.0625rem solid ${({ theme }) => theme.color.accent.bd.weak};

  & > svg {
    flex-shrink: 0;
  }
`;

const SelectedValue = styled.span`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.color.neutral.text.default};
  ${({ theme }) => theme.font.body.default}
`;

const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 5.625rem;
  position: absolute;
  top: calc(100% + 0.5rem);
  z-index: ${({ theme }) => theme.zIndex.floating};

  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border: 0.0625rem solid ${({ theme }) => theme.color.accent.bd.weak};

  & li:last-child {
    border-bottom: none;
  }
`;

const defaultOptionStyle = css`
  background-color: ${({ theme }) => theme.color.neutral.bg.default};

  &:hover {
    background-color: ${({ theme }) => theme.palette.green50};
  }
`;

const selectedOptionStyle = css`
  background-color: ${({ theme }) => theme.palette.green100};
`;

const OptionItem = styled.li<{ $isSelected: boolean }>`
  display: flex;
  padding: 0.5rem 1.25rem;
  align-items: center;

  ${({ $isSelected }) => ($isSelected ? selectedOptionStyle : defaultOptionStyle)}
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.accent.bd.weak};

  ${({ theme }) => theme.font.body.default}
  color: ${({ theme }) => theme.color.neutral.text.strong};
`;

export { SelectLayout, TriggerButton, SelectedValue, OptionList, OptionItem };
