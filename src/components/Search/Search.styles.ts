import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
