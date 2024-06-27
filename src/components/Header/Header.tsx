import UfoIcon from '@/assets/ufo.svg?react';

import * as S from './Header.styles';

export const Header: React.FC = () => (
  <S.Nav>
    <S.Logo>
      <UfoIcon />
      <h1>DLBooking</h1>
    </S.Logo>
  </S.Nav>
);
