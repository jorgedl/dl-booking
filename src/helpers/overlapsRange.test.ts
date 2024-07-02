import { describe, it, expect } from 'vitest';

import { overlapsRange } from './overlapsRange';

describe('overlapsRange', () => {
  it('should return true if a locked date is within the range', () => {
    const start = new Date('2024-01-01T00:00:00.000');
    const end = new Date('2024-01-10T00:00:00.000');
    const lockedDates = [new Date('2024-01-05T00:00:00.000')];

    const result = overlapsRange(start, end, lockedDates);
    expect(result).toBe(true);
  });

  it('should return false if no locked dates are within the range', () => {
    const start = new Date('2024-01-01T00:00:00.000');
    const end = new Date('2024-01-10T00:00:00.000');
    const lockedDates = [new Date('2024-01-11T00:00:00.000')];

    const result = overlapsRange(start, end, lockedDates);
    expect(result).toBe(false);
  });

  it('should return true if a locked date is exactly on the start date', () => {
    const start = new Date('2024-01-01T00:00:00.000');
    const end = new Date('2024-01-10T00:00:00.000');
    const lockedDates = [new Date('2024-01-01T00:00:00.000')];

    const result = overlapsRange(start, end, lockedDates);
    expect(result).toBe(true);
  });

  it('should return true if a locked date is exactly on the end date', () => {
    const start = new Date('2024-01-01T00:00:00.000');
    const end = new Date('2024-01-10T00:00:00.000');
    const lockedDates = [new Date('2024-01-10T00:00:00.000')];

    const result = overlapsRange(start, end, lockedDates);
    expect(result).toBe(true);
  });

  it('should return false if there are no locked dates', () => {
    const start = new Date('2024-01-01T00:00:00.000');
    const end = new Date('2024-01-10T00:00:00.000');
    const lockedDates: Date[] = [];

    const result = overlapsRange(start, end, lockedDates);
    expect(result).toBe(false);
  });

  it('should return true if multiple locked dates are within the range', () => {
    const start = new Date('2024-01-01T00:00:00.000');
    const end = new Date('2024-01-10T00:00:00.000');
    const lockedDates = [
      new Date('2024-01-02T00:00:00.000'),
      new Date('2024-01-08T00:00:00.000'),
    ];

    const result = overlapsRange(start, end, lockedDates);
    expect(result).toBe(true);
  });
});
