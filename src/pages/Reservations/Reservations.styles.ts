import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: var(--margin-md);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
