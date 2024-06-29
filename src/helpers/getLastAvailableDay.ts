import { isAfter, isBefore, subDays } from 'date-fns';

/**
 * Returns the last available day before the start of a locked date.
 * @param start The start date for the search.
 * @param locked An array of locked dates.
 * @returns The last available day before the start of a locked date, or null if none is found.
 */
export const getLastAvailableDay = (
  start: Date,
  locked: Date[],
): Date | null => {
  const lastAvailable = locked.reduce((accum: Date | null, current) => {
    if (!accum || isBefore(current, accum)) {
      return current;
    }
    return accum;
  }, null);

  // Check if there is a day before the last available locked date
  const yesterday = lastAvailable ? subDays(lastAvailable, 1) : null;

  // Return yesterday if it's after the start date, otherwise return null
  return yesterday && isAfter(yesterday, start) ? yesterday : null;
};
