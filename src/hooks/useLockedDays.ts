import React from 'react';

import { Booking, BookingStatus, DateOrRange, Property } from '@/types';

export const useLockedDays = (property?: Property, bookings?: Booking[]) => {
  // Once again generating memoized invalid dates. This should be done by the server
  return React.useMemo(() => {
    // Locked dates from server
    if (!property) {
      return;
    }
    let lockedDaysOrRanges: DateOrRange[] = [];
    if (Array.isArray(property?.lockedDays)) {
      lockedDaysOrRanges = [...property.lockedDays];
    }

    // Locked days from state
    if (bookings) {
      const properties = bookings.filter(
        ({ propertyId, status }) =>
          propertyId === property?.id && status === BookingStatus.BOOKED,
      );
      if (properties) {
        properties.forEach(
          ({ startDate, endDate }) =>
            startDate &&
            endDate &&
            lockedDaysOrRanges.push([startDate, endDate]),
        );
      }
    }

    return lockedDaysOrRanges;
  }, [property, bookings]);
};
