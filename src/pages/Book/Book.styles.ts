import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Card = styled.div`
  pointer-events: auto;
  padding: 1rem;
`;

export const SidePanel = styled.div`
  max-width: 50vw;
  min-width: 20rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    min-height: 60vh;
    border-top-radius: 1rem;
  }
`;
