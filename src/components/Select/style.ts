import styled, { css } from 'styled-components';

const SelectLayout = styled.div`
  position: relative;
`;

const TriggerButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1.25rem;

  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border: 0.0625rem solid ${({ theme }) => theme.color.accent.bd.weak};
`;

const SelectedValue = styled.span`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.color.neutral.text.default};
  ${({ theme }) => theme.font.title.default}
`;

const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 3.5rem;
  z-index: 10;

  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border: 0.0625rem solid ${({ theme }) => theme.color.accent.bd.weak};

  & li:last-child {
    border-bottom: none;
  }
`;

const defaultOptionStyle = css`
  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  color: ${({ theme }) => theme.color.accent.text.weak};

  &:hover {
    background-color: ${({ theme }) => theme.palette.green50};
  }
`;

const selectedOptionStyle = css`
  background-color: ${({ theme }) => theme.palette.green100};
  color: ${({ theme }) => theme.color.neutral.text.strong};
`;

const OptionItem = styled.li<{ $isSelected: boolean }>`
  display: flex;
  padding: 0.5rem 1.25rem;
  align-items: center;

  ${({ $isSelected }) => ($isSelected ? selectedOptionStyle : defaultOptionStyle)}
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.accent.bd.weak};

  ${({ theme }) => theme.font.title.default}
`;

export { SelectLayout, TriggerButton, SelectedValue, OptionList, OptionItem };
