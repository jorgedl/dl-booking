import { isWithinInterval } from 'date-fns';

/**
 * Checks if any of the locked dates overlap with the specified date range.
 * @param start The start date of the range.
 * @param end The end date of the range.
 * @param locked An array of locked dates.
 * @returns True if there is an overlap, false otherwise.
 */
export const overlapsRange = (
  start: Date,
  end: Date,
  locked: Date[],
): boolean => {
  return locked.some((lockedDate) =>
    isWithinInterval(lockedDate, { start, end }),
  );
};
