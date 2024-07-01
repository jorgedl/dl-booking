import styled from 'styled-components';

export const Container = styled.div`
  border-radius: var(--border-radius);
  border: solid var(--outline) 1px;
  padding: var(--padding-md);
`;

export const Cover = styled.div`
  width: 100%;
  max-height: 15rem;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
