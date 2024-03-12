import styled, { css } from 'styled-components';

const SelectLayout = styled.div<{ $width: string }>`
  position: relative;
  width: ${({ $width }) => $width};
`;

const TriggerButton = styled.button<{ $height: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ $height }) => $height};
  min-width: 5.625rem;
  padding: 0.25rem 0.75rem;
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

const OptionList = styled.ul<{ $maxHeight?: string; $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  min-width: 5.625rem;
  max-height: ${({ $maxHeight }) => $maxHeight ?? 'none'};
  position: absolute;
  top: calc(100% + 0.5rem);
  z-index: ${({ theme }) => theme.zIndex.floating};
  overflow-y: auto;

  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border: 0.0625rem solid ${({ theme }) => theme.color.accent.bd.weak};
  border-radius: 0.25rem;

  &::-webkit-scrollbar {
    width: 0.75rem;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.palette.green100};
    border-radius: 0.25rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.accent.bg.strong};
    border-radius: 0.5rem;
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
  padding: 0.5rem 0.75rem;
  align-items: center;

  ${({ $isSelected }) => ($isSelected ? selectedOptionStyle : defaultOptionStyle)}

  ${({ theme }) => theme.font.body.default}
  color: ${({ theme }) => theme.color.neutral.text.strong};
`;

export { SelectLayout, TriggerButton, SelectedValue, OptionList, OptionItem };
