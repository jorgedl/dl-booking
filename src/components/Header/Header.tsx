import { Link } from '@tanstack/react-router';

import UfoIcon from '@/assets/ufo.svg?react';
import { Container } from '@/components/Container';

import * as S from './Header.styles';

export const Header: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <S.Nav>
    <Container>
      <S.InnerNav>
        <Link to="/">
          <S.Logo>
            <UfoIcon />
            <h1>DLBooking</h1>
          </S.Logo>
        </Link>
        {children}
        <div />
      </S.InnerNav>
    </Container>
  </S.Nav>
);
