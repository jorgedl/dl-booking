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
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    min-height: 60vh;
    min-width: 100%;
    flex-direction: column-reverse;
  }
`;

export const ImageCover = styled.div`
  max-height: 20rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  // Skeleton's span
  span {
    flex: 1;
    margin-top: -3px;
  }

  img {
    flex: 1;
    height: auto;
    align-self: center;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--margin-md);
`;
