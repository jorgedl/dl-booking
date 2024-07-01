import { isValid, parse } from 'date-fns';

export const DATE_FORMAT = 'MM-dd-yyyy'; // Format for parsing dates

// Helper function to parse a default value date string into a Date object
export const parseStringToDate = (value: string | undefined) => {
  if (value) {
    try {
      const parsedDate = parse(value, DATE_FORMAT, new Date());
      if (isValid(parsedDate)) {
        return parsedDate;
      }
    } catch (e) {
      return undefined;
    }
  }
};
