import { Link } from '@tanstack/react-router';

import UfoIcon from '@/assets/ufo.svg?react';
import { Container } from '@/components/Container';

import * as S from './Header.styles';

export const Header: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <S.Nav>
    <Container $noColumn>
      <S.InnerNav>
        <Link to="/">
          <S.Logo>
            <UfoIcon />
            <S.Title>DLBooking</S.Title>
          </S.Logo>
        </Link>
        {children}
      </S.InnerNav>
    </Container>
  </S.Nav>
);
