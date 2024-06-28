import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 48px;
  border: solid var(--outline) 1px;
  padding: var(--padding-sm);
  border-radius: var(--border-radius);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
