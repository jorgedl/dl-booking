import { describe, it, expect } from 'vitest';

import { rangeToString } from './rangeToString';

describe('rangeToString', () => {
  it('should return a formatted string for valid start and end dates', () => {
    const startDate = new Date('2024-01-01T00:00:00.000');
    const endDate = new Date('2024-01-10T00:00:00.000');
    const expectedString = `January 1, 2024 - January 10, 2024`;

    const result = rangeToString(startDate, endDate);

    expect(result).toEqual(expectedString);
  });

  it('should return a formatted string with "Check-out" for undefined end date', () => {
    const startDate = new Date('2024-01-01T00:00:00.000');
    const expectedString = `January 1, 2024 - Check-out`;

    const result = rangeToString(startDate, undefined);

    expect(result).toEqual(expectedString);
  });

  it('should return an empty string for invalid start date', () => {
    const startDate = new Date('invalid-date');
    const endDate = new Date('2024-01-10T00:00:00.000');

    const result = rangeToString(startDate, endDate);

    expect(result).toEqual('');
  });

  it('should return an empty string for invalid end date', () => {
    const startDate = new Date('2024-01-01T00:00:00.000');
    const endDate = new Date('invalid-date');

    const result = rangeToString(startDate, endDate);

    expect(result).toEqual('');
  });

  it('should return an empty string for both invalid dates', () => {
    const startDate = new Date('invalid-date');
    const endDate = new Date('invalid-date');

    const result = rangeToString(startDate, endDate);

    expect(result).toEqual('');
  });
});
