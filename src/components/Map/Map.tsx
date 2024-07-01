import maplibregl, { type LngLat, type Map as MapType } from 'maplibre-gl';
import React from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

import * as S from './Map.styles';

export const Map: React.FC<{ markerCoordinates?: LngLat }> = ({
  markerCoordinates,
}) => {
  const mapRef = React.useRef<MapType | null>(null);

  React.useEffect(() => {
    mapRef.current = new maplibregl.Map({
      container: 'map',
      style: `https://api.maptiler.com/maps/bright-v2/style.json?key=${import.meta.env.VITE_MAP_TILER_KEY}`,
      center: [-74.5, 40],
      zoom: 9,
    });

    // The cleanup were causing a console error, so I'm commenting it
    // return () => {
    //   mapRef.current?.remove();
    //   mapRef.current = null;
    // };
  }, []);

  React.useEffect(() => {
    console.log(markerCoordinates);
    mapRef.current?.flyTo({
      center: markerCoordinates,
    });
  }, [markerCoordinates]);

  return <S.MapContainer id="map" />;
};
