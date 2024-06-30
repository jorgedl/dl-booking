import { Link } from '@tanstack/react-router';

import UfoIcon from '@/assets/ufo.svg?react';
import { Container } from '@/components/Container';
import { Flex } from '@/components/Flex';

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
            <S.Title>DLBOOKING</S.Title>
          </S.Logo>
        </Link>
        {children || <div />}
        <Flex $align="center" $justify="end">
          <Link to="/reservations">My reservations</Link>
        </Flex>
      </S.InnerNav>
    </Container>
  </S.Nav>
);
