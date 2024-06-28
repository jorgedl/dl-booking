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

export const SidePanel = styled.div`
  max-width: 50vw;
  min-width: 20rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    min-height: 60vh;
    min-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;
