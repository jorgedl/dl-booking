import { Link } from '@tanstack/react-router';
import Skeleton from 'react-loading-skeleton';

import { useProperty } from '@/api/useProperty';
import { Flex } from '@/components/Flex';
import { parseStringToDate } from '@/helpers/parseDate';
import { rangeToString } from '@/helpers/rangeToString';

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
            <h3>{`${data.label} - ${rangeToString(parseStringToDate(startDate) as Date, parseStringToDate(endDate) as Date)}`}</h3>

            <div>
              <Link to="/book/$propertyId" params={{ propertyId }}>
                <S.Cover src={data.cover} alt={`${data.label} cover`} />
              </Link>
            </div>
            {typeof renderActions === 'function' && renderActions()}
          </>
        )}
      </Flex>
    </S.Container>
  );
};
