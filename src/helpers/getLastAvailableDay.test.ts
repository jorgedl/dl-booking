import { describe, it, expect } from 'vitest';

import { getLastAvailableDay } from './getLastAvailableDay';

describe('getLastAvailableDay', () => {
  it('should return the last available day before the first locked date', () => {
    const start = new Date('2024-01-01T00:00:00.000');
    const lockedDates = [
      new Date('2024-01-05T00:00:00.000'),
      new Date('2024-01-10T00:00:00.000'),
    ];
    const expectedDate = new Date('2024-01-04T00:00:00.000');

    const result = getLastAvailableDay(start, lockedDates);

    expect(result).toEqual(expectedDate);
  });

  it('should return null if no locked dates are after the start date', () => {
    const start = new Date('2024-01-01T00:00:00.000');
    const lockedDates = [
      new Date('2023-12-31T00:00:00.000'),
      new Date('2023-12-30T00:00:00.000'),
    ];

    const result = getLastAvailableDay(start, lockedDates);

    expect(result).toBeNull();
  });

  it('should return null if there are no locked dates', () => {
    const start = new Date('2024-01-01T00:00:00.000');
    const lockedDates: Date[] = [];

    const result = getLastAvailableDay(start, lockedDates);

    expect(result).toBeNull();
  });

  it('should return null if the last available day is before the start date', () => {
    const start = new Date('2024-01-01T00:00:00.000');
    const lockedDates = [new Date('2024-01-02T00:00:00.000')];

    const result = getLastAvailableDay(start, lockedDates);

    expect(result).toBeNull();
  });
});
