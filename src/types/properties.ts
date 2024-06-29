export interface Property {
  id: string;
  cover: string;
  label: string;
  price: number;
  description: string;
  lat: number;
  lng: number;
  category: string;
  lockedDays?: string[];
}

export type Properties = Property[];

export enum Categories {
  BEACH = 'BEACH',
  LAKE = 'LAKE',
  CITY = 'CITY',
  CABIN = 'CABIN',
  LUXE = 'LUXE',
  FARM = 'FARM',
}
