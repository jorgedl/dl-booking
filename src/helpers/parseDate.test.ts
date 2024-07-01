// Helper function to format the date to match the expected output format
import { format } from 'date-fns';
import { describe, it, expect } from 'vitest';

import { parseStringToDate, DATE_FORMAT } from './parseDate';

describe('parseStringToDate', () => {
  it('should return a valid date object for a correct date string', () => {
    const dateString = '01-01-2024';
    const expectedDate = new Date('2024-01-01T00:00:00');

    const result = parseStringToDate(dateString);

    expect(result).toBeDefined();
    expect(format(result!, DATE_FORMAT)).toEqual(
      format(expectedDate, DATE_FORMAT),
    );
  });

  it('should return undefined for an incorrect date string', () => {
    const dateString = 'invalid-date';

    const result = parseStringToDate(dateString);

    expect(result).toBeUndefined();
  });

  it('should return undefined for a date string in the wrong format', () => {
    const dateString = '2024-01-01'; // Wrong format

    const result = parseStringToDate(dateString);

    expect(result).toBeUndefined();
  });

  it('should return undefined if the input is undefined', () => {
    const result = parseStringToDate(undefined);

    expect(result).toBeUndefined();
  });
});
