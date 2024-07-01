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
  rating: number;
  reviewCount: number;
}

export type Properties = Property[];
