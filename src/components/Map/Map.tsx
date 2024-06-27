import maplibregl, { Map as MapType } from 'maplibre-gl';
import React from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

import * as S from './Map.styles';

export const Map: React.FC = () => {
  const mapRef = React.useRef<MapType | null>(null);

  React.useEffect(() => {
    mapRef.current = new maplibregl.Map({
      container: 'map',
      style:
        'https://api.maptiler.com/maps/bright-v2/style.json?key=Y29zmknLKojSQBhXNpiN',
      center: [-74.5, 40],
      zoom: 9,
    });
  }, []);

  return <S.MapContainer id="map" />;
};
