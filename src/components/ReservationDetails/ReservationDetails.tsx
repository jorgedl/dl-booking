import { useProperty } from '@/api/useProperty';
import { Flex } from '@/components/Flex';
import { parseStringToDate } from '@/helpers/parseDate';
import { rangeToString } from '@/helpers/rangeToString';

import * as S from './ReservationDetails.styles';

export const ReservationDetails: React.FC<{
  propertyId: string;
  startDate: string;
  endDate: string;
  renderActions?(): React.ReactNode;
}> = ({ propertyId, startDate, endDate, renderActions }) => {
  const { data, isLoading, error } = useProperty({
    params: { id: propertyId },
  });

  if (isLoading) return <div>Loading property details...</div>;
  if (error) return <div>Error loading property details</div>;

  return (
    data && (
      <S.Container>
        <Flex $vertical $gap="medium">
          <h3>{`${data.label} - ${rangeToString(parseStringToDate(startDate) as Date, parseStringToDate(endDate) as Date)}`}</h3>
          <div>
            <S.Cover src={data.cover} alt={`${data.label} cover`} />
          </div>
          {typeof renderActions === 'function' && renderActions()}
        </Flex>
      </S.Container>
    )
  );
};
