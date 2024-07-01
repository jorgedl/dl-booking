import { Link } from '@tanstack/react-router';
import Skeleton from 'react-loading-skeleton';

import { Flex } from '@/components/Flex';
import { Rating } from '@/components/Rating';
import { parseStringToDate } from '@/helpers/parseDate';
import { rangeToString } from '@/helpers/rangeToString';
import { useProperty } from '@/hooks/api/useProperty';

import * as S from './ReservationDetails.styles';

export const ReservationDetails: React.FC<{
  propertyId: string;
  startDate: string;
  endDate: string;
  isLoading?: boolean;
  renderActions?(): React.ReactNode;
}> = ({
  propertyId,
  startDate,
  endDate,
  renderActions,
  isLoading: isLoadingProp,
}) => {
  const { data, isLoading, error } = useProperty({
    params: { id: propertyId },
  });

  return (
    <S.Container>
      <Flex $vertical $gap="medium">
        {error && <div>Error loading property details</div>}
        {(isLoading || isLoadingProp) && (
          <>
            <Skeleton height="2rem" style={{ maxWidth: '26rem' }} />
            <Skeleton height="12rem" style={{ maxWidth: '20rem' }} />
          </>
        )}
        {data && (
          <>
            <div>
              <Link to="/book/$propertyId" params={{ propertyId }}>
                <S.Cover>
                  <img src={data.cover} alt={`${data.label} cover`} />
                </S.Cover>
              </Link>
            </div>
            <h3>{`${data.label} - ${rangeToString(parseStringToDate(startDate) as Date, parseStringToDate(endDate) as Date)}`}</h3>
            <Rating count={data.reviewCount} rating={data.rating} />

            {typeof renderActions === 'function' && renderActions()}
          </>
        )}
      </Flex>
    </S.Container>
  );
};
