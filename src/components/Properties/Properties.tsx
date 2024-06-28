import { Link } from '@tanstack/react-router';

import { Property } from '@/components/Property';
import { type Properties as PropertiesType } from '@/types';

import * as S from './Properties.styles';

export const Properties: React.FC<{ items?: PropertiesType }> = ({ items }) => {
  return (
    <S.List>
      {items?.map((property) => (
        <Link
          key={property.id}
          to="/book/$propertyId"
          params={{ propertyId: property.id }}
        >
          <Property {...property} />
        </Link>
      ))}
    </S.List>
  );
};
