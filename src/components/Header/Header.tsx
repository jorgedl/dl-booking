import { Link } from '@tanstack/react-router';

import UfoIcon from '@/assets/ufo.svg?react';

import * as S from './Header.styles';

export const Header: React.FC = () => (
  <S.Nav>
    <Link to="/">
      <S.Logo>
        <UfoIcon />
        <h1>DLBooking</h1>
      </S.Logo>
    </Link>
  </S.Nav>
);
