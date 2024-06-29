import { Link } from '@tanstack/react-router';
import Skeleton from 'react-loading-skeleton';

import { Property } from '@/components/Property';
import { DateRange, type Properties as PropertiesType } from '@/types';

import * as S from './Properties.styles';

export const Properties: React.FC<{
  items?: PropertiesType;
  isLoading: boolean;
  dateRange: DateRange | undefined;
}> = ({ items, isLoading, dateRange }) => {
  return (
    <S.List>
      {isLoading &&
        new Array(12).fill(undefined).map((_, i) => (
          <S.SkeletonContainer key={`propeties-skeleton-${i}`}>
            <S.SkeletonItem>
              <Skeleton style={{ paddingTop: '100%' }} height={'90%'} />
              <Skeleton count={2} />
            </S.SkeletonItem>
          </S.SkeletonContainer>
        ))}
      {!isLoading &&
        items?.map((property) => (
          <Link
            key={property.id}
            to="/book/$propertyId"
            params={{ propertyId: property.id }}
            search={{
              startDate: dateRange?.[0] ?? '',
              endDate: dateRange?.[1] ?? '',
            }}
          >
            <Property {...property} />
          </Link>
        ))}
    </S.List>
  );
};
