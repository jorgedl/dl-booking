import { Flex } from '@/components/Flex';
import { Rating } from '@/components/Rating';
import { type Property as PropertyType } from '@/types';

import * as S from './Property.styles';

export const Property: React.FC<PropertyType> = ({
  cover,
  label,
  price,
  description,
  reviewCount,
  rating,
}) => {
  return (
    <div>
      <S.ImageContainer>
        <img src={cover} alt={`${label} cover`} height={'100%'} />
      </S.ImageContainer>
      <S.Label>{label}</S.Label>
      <S.Description>{description}</S.Description>
      <S.Bottom>
        <Flex $justify="space-between">
          {price?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
          <Rating rating={rating} count={reviewCount} />
        </Flex>
      </S.Bottom>
    </div>
  );
};
