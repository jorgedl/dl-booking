import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--item-width), 1fr));
  gap: 2rem;
`;
