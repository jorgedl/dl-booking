import { useParams, useNavigate } from '@tanstack/react-router';
import { LngLat } from 'maplibre-gl';
import React from 'react';

import { useProperty } from '@/api/useProperty';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Map } from '@/components/Map';

import * as S from './Book.styles';

export const Book: React.FC = () => {
  const { propertyId } = useParams({ from: '/book/$propertyId' });

  const { data, isFetched } = useProperty({ params: { id: propertyId } });

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isFetched && !data) {
      navigate({ to: '/' });
    }
  }, [isFetched, data, navigate]);

  return (
    <>
      <Header />
      <S.Container>
        <S.SidePanel>
          <Container>
            {data && (
              <>
                <S.Title>{data?.label}</S.Title>
                <p>{data?.description}</p>
              </>
            )}
          </Container>
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
