import { renderHook } from '@testing-library/react';

import { BookingStatus } from '@/types';

import { useLockedDays } from './useLockedDays';

describe('useLockedDays', () => {
  it('should return locked days from property', () => {
    const property = {
      id: '1',
      lockedDays: ['2024-01-01', '2024-01-10', '2024-01-15'],
    };

    const { result } = renderHook(() => useLockedDays(property, []));
    expect(result.current).toEqual(property.lockedDays);
  });

  it('should return locked days from bookings', () => {
    const property = { id: '1', lockedDays: [] };
    const bookings = [
      {
        id: 'booking1',
        propertyId: '1',
        status: BookingStatus.BOOKED,
        startDate: '2024-01-01',
        endDate: '2024-01-02',
      },
    ];

    const { result } = renderHook(() => useLockedDays(property, bookings));
    expect(result.current).toEqual([['2024-01-01', '2024-01-02']]);
  });

  it('should combine locked days from property and bookings', () => {
    const property = {
      id: '1',
      lockedDays: ['2024-01-01', '2024-01-10', '2024-01-15'],
    };
    const bookings = [
      {
        id: 'book1',
        propertyId: '1',
        status: BookingStatus.BOOKED,
        startDate: '2024-01-20',
        endDate: '2024-01-25',
      },
    ];

    const { result } = renderHook(() => useLockedDays(property, bookings));

    expect(result.current).toEqual([
      '2024-01-01',
      '2024-01-10',
      '2024-01-15',
      ['2024-01-20', '2024-01-25'],
    ]);
  });

  it('should return undefined if property is not provided', () => {
    const { result } = renderHook(() => useLockedDays(undefined, []));
    expect(result.current).toBeUndefined();
  });
});
