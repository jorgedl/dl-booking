import { useParams, useSearch, useNavigate } from '@tanstack/react-router';
import { isValid } from 'date-fns';
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
import { BookingsContext } from '@/reducers/bookings';
import { BookingActions, DateOrRange, DateRange } from '@/types';

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

  React.useEffect(() => {
    if (startDate && endDate) {
      console.log({ isValid: isValid(startDate) && isValid(endDate) });
    }
  }, [startDate, endDate]);

  const context = React.useContext(BookingsContext);

  React.useEffect(() => {
    console.log(context?.state);
  }, [context?.state]);

  const markerCoordinates = React.useMemo(() => {
    return {
      lat: data?.lat || 0,
      lng: data?.lng || 0,
    } as LngLat;
  }, [data]);

  // In a production scenario these dates should be calculated and retrieved by the server. I'm using memoized objects to mock it in this project
  const excludeDates = React.useMemo(() => {
    // Locked dates from server
    if (!data) {
      return;
    }
    let lockedDaysOrRanges: DateOrRange[] = [];
    if (Array.isArray(data?.lockedDays)) {
      lockedDaysOrRanges = [...data.lockedDays];
    }

    // Locked days from state
    if (context?.state.bookings) {
      const property = context?.state.bookings.filter(
        ({ propertyId }) => propertyId === data?.id,
      );
      if (property) {
        property.forEach(
          ({ startDate, endDate }) =>
            startDate &&
            endDate &&
            lockedDaysOrRanges.push([startDate, endDate]),
        );
      }
    }

    return lockedDaysOrRanges;
  }, [data, context?.state.bookings]);

  const isInvalid = React.useMemo(() => {
    return !(startDate && endDate);
  }, [startDate, endDate]);

  React.useEffect(() => {
    console.log({ excludeDates });
  }, [excludeDates]);

  const onBook = React.useCallback(async () => {
    if (startDate && endDate && data) {
      // On a real scenario this would be a react query mutation
      await context?.dispatch({
        type: BookingActions.BOOK,
        payload: { propertyId: data.id, startDate, endDate },
      });
      navigate({ to: '/reservations' });
    }
  }, [startDate, endDate, data, context, navigate]);

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
