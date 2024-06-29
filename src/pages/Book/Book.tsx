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
import { DateRange } from '@/types';

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

  const isInvalid = React.useMemo(() => {
    return !(startDate && endDate);
  }, [startDate, endDate]);

  const onBook = React.useCallback(() => {
    if (isInvalid) {
      return;
    }

    console.log({
      id: data?.id,
      startDate,
      endDate,
    });
  }, [isInvalid]);

  const markerCoordinates = React.useMemo(() => {
    return {
      lat: data?.lat || 0,
      lng: data?.lng || 0,
    } as LngLat;
  }, [data]);

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
                    <S.Title>{data?.label}</S.Title>
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
                      excludeDates={data.lockedDays}
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
