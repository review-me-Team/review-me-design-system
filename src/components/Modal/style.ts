import styled from 'styled-components';

const ModalLayout = styled.div<{ $width?: string; $height?: string; $padding?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: ${({ $width }) => ($width ? $width : 'fit-content')};
  height: ${({ $height }) => ($height ? $height : 'fit-content')};
  padding: ${({ $padding }) => ($padding ? $padding : '1.25rem')};

  background-color: ${({ theme }) => theme.color.neutral.bg.default};
  border-radius: 0.75rem;
  box-shadow: 0 0 24px -4px rgba(16, 24, 40, 0.1);
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
  min-height: 100vh;
`;

const Title = styled.span`
  ${({ theme }) => theme.font.title.default}
  color: ${({ theme }) => theme.color.neutral.text.strong};
`;

const Description = styled.span`
  ${({ theme }) => theme.font.body.default}
  color: ${({ theme }) => theme.color.neutral.text.default};
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;

  background-color: rgb(0 0 0 / 0.5);

  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export { ModalLayout, ModalWrapper, Title, Description, BackDrop };
