export enum BookingStatus {
  BOOKED = 'BOOKED',
  CANCELED = 'CANCELED',
}

export interface Booking {
  id: string;
  propertyId: string;
  startDate: string;
  endDate: string;
  status: BookingStatus;
}
