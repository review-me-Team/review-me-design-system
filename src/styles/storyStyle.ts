import styled from 'styled-components';

export const ComponentList = styled.ul<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'row' || direction === 'column' ? direction : 'column'};
  gap: 24px;
`;
export const ComponentListItem = styled.li<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'row' || direction === 'column' ? direction : 'column'};
  gap: 8px;
`;
