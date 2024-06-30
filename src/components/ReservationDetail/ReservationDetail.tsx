import { useProperty } from '@/api/useProperty';

import * as S from './ReservationDetail.styles';

export const ReservationDetail: React.FC<{
  propertyId: string;
  startDate: string;
  endDate: string;
}> = ({ propertyId, startDate, endDate }) => {
  const { data, isLoading, error } = useProperty({
    params: { id: propertyId },
  });

  if (isLoading) return <div>Loading property details...</div>;
  if (error) return <div>Error loading property details</div>;

  return (
    data && (
      <div>
        <h3>{`${data.label} ${startDate} - ${endDate}`}</h3>
        <div>
          <S.Cover src={data.cover} alt={`${data.label} cover`} />
        </div>
      </div>
    )
  );
};
