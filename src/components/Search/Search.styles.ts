import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: var(--margin-md);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
