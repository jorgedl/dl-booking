import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary);
  height: 100%;
`;

export const Nav = styled.nav`
  border-bottom: solid var(--outline) 1px;
  margin-bottom: var(--margin-lg);
`;

export const InnerNav = styled.nav`
  padding: var(--padding-md) 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
