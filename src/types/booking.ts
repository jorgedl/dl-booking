export interface Booking {
  id: string;
  propertyId: string;
  startDate: string;
  endDate: string;
  status: (typeof BookingStatus)[keyof typeof BookingStatus];
}

export const BookingStatus = {
  BOOKED: 'BOOKED',
  CANCELED: 'CANCELED',
} as const;

export type NewBooking = Omit<Booking, 'id' | 'status'>;

export type EditingBooking = Omit<Booking, 'status' | 'propertyId'>;
