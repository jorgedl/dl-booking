export interface Booking {
  id: string;
  propertyId: string;
  startDate: string;
  endDate: string;
  status: BookingStatus;
}

export enum BookingStatus {
  BOOKED = 'BOOKED',
  CANCELED = 'CANCELED',
}

export type NewBooking = Omit<Booking, 'id' | 'status'>;

export type EditingBooking = Omit<Booking, 'status' | 'propertyId'>;
