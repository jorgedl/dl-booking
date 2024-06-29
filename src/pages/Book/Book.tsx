import { useParams, useNavigate } from '@tanstack/react-router';
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

  const { data, isFetched, isLoading } = useProperty({
    params: { id: propertyId },
  });

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isFetched && !data) {
      navigate({ to: '/' });
    }
  }, [isFetched, data, navigate]);

  console.log({ data });

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
                      onChange={([start, end]: DateRange) =>
                        console.log([start, end])
                      }
                      excludeDates={data.lockedDays}
                    />
                    <div>
                      <Button>Book Now</Button>
                    </div>
                  </S.Body>
                )}
              </Container>
            </>
          )}
        </S.SidePanel>
        <Map
          markerCoordinates={
            {
              lat: data?.lat || 0,
              lng: data?.lng || 0,
            } as LngLat
          }
        />
      </S.Container>
    </>
  );
};
