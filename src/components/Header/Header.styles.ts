import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary);
  height: 100%;
`;

export const Nav = styled.nav`
  border-bottom: solid var(--outline) 1px;
  position: sticky;
  top: 0;
  z-index: 4;
  background: var(--background);
`;

export const InnerNav = styled.nav`
  padding: var(--padding-md) 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: var(--margin-md);

  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
