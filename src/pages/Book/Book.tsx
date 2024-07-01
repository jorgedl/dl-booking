import { useParams, useSearch, useNavigate } from '@tanstack/react-router';
import { LngLat } from 'maplibre-gl';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { useProperty } from '@/api/useProperty';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Map } from '@/components/Map';
import { RangePicker } from '@/components/RangePicker';
import { Title } from '@/components/Title';
import { useLockedDays } from '@/hooks/useLockedDays';
import { BookingsContext } from '@/reducers/bookings';
import { BookingActions, DateRange } from '@/types';

import * as S from './Book.styles';

export const Book: React.FC = () => {
  const { propertyId } = useParams({ from: '/book/$propertyId' });

  const { startDate, endDate }: { startDate?: string; endDate?: string } =
    useSearch({ from: '/book/$propertyId' });

  const { data, isFetched, isLoading } = useProperty({
    params: { id: propertyId },
  });

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isFetched && !data) {
      navigate({ to: '/' });
    }
  }, [isFetched, data, navigate]);

  const bookingsContext = React.useContext(BookingsContext);

  const markerCoordinates = React.useMemo(() => {
    return {
      lat: data?.lat || 0,
      lng: data?.lng || 0,
    } as LngLat;
  }, [data]);

  // In a production scenario these dates should be calculated and retrieved by the server. I'm using memoized objects to mock it in this project
  const excludeDates = useLockedDays(data, bookingsContext?.state.bookings);

  const isInvalid = React.useMemo(() => {
    return !(startDate && endDate);
  }, [startDate, endDate]);

  const onBook = React.useCallback(async () => {
    if (startDate && endDate && data) {
      // On a real scenario this would be a react query mutation
      await bookingsContext?.dispatch({
        type: BookingActions.BOOK,
        payload: { propertyId: data.id, startDate, endDate },
      });
      navigate({ to: '/reservations' });
    }
  }, [startDate, endDate, data, bookingsContext, navigate]);

  return (
    <>
      <Header />
      <S.Container>
        <S.SidePanel>
          {isLoading && (
            <>
              <S.ImageCover>
                <Skeleton height="20rem" width="100%" />
              </S.ImageCover>
              <Container>
                <S.Body>
                  <Skeleton height={32} />
                  <Skeleton count={2} />
                  <Skeleton height={48} width={120} />
                </S.Body>
              </Container>
            </>
          )}

          {!isLoading && (
            <>
              {data?.cover && (
                <S.ImageCover>
                  <img src={data?.cover} alt={`${data?.label} cover`} />
                </S.ImageCover>
              )}
              <Container>
                {data && (
                  <S.Body>
                    <Title>{data?.label}</Title>
                    <p>{data?.description}</p>
                    <RangePicker
                      placeholder={`Select the dates you wish to stay in ${data.label}`}
                      defaultValue={[startDate, endDate]}
                      onChange={([start, end]: DateRange) =>
                        navigate({
                          to: '/book/$propertyId',
                          params: {
                            propertyId: data.id,
                          },
                          search: {
                            startDate: start || '',
                            endDate: end || '',
                          },
                        })
                      }
                      excludeDates={excludeDates}
                    />
                    <div>
                      <Button disabled={isInvalid} onClick={onBook}>
                        Book Now
                      </Button>
                    </div>
                  </S.Body>
                )}
              </Container>
            </>
          )}
        </S.SidePanel>
        <Map markerCoordinates={markerCoordinates} />
      </S.Container>
    </>
  );
};
