import { useProperty } from '@/api/useProperty';

// import * as S from './ReservationDetail.styles';

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
    <div>
      <h3>{`${startDate} - ${endDate}`}</h3>
      {data && (
        <div>
          <img src={data.cover} alt={`${data.label} cover`} />
          <p>Property Name: {data.label}</p>
          <p>Property Description: {data.description}</p>
        </div>
      )}
    </div>
  );
};
