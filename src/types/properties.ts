export interface Property {
  id: string;
  cover: string;
  label: string;
  price: number;
  description: string;
  lat: number;
  lng: number;
}

export type Properties = Property[];
