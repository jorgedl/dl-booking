import { type Property as PropertyType } from '@/types';

import * as S from './Property.styles';

export const Property: React.FC<PropertyType> = ({ cover, label, price }) => {
  return (
    <div>
      <S.ImageContainer>
        <img src={cover} alt={`${label} cover`} height={'100%'} />
      </S.ImageContainer>
      <S.Label>{label}</S.Label>
      <S.Description>Teste</S.Description>
      <S.Price>
        {price?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </S.Price>
    </div>
  );
};
