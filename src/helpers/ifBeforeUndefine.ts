import { isBefore } from 'date-fns';

export const DATE_FORMAT = 'MM-dd-yyyy'; // Format for parsing dates

// Helper function to parse a default value date string into a Date object
export const ifBeforeUndefine = (day: Date | undefined) => {
  if (day && isBefore(new Date(), day)) {
    return day;
  }
  return undefined;
};
