import { addDays, eachDayOfInterval, format, isValid, parse } from 'date-fns';
import React from 'react';

import { getLastAvailableDay } from '@/helpers/getLastAvailableDay';
import { overlapsRange } from '@/helpers/overlapsRange';
import { DateOrRange, DateRange } from '@/types';

const TO_STRING_FORMAT = 'MMMM d, yyyy'; // Format for displaying dates as strings
const DATE_FORMAT = 'MM-dd-yyyy'; // Format for parsing dates

// Helper function to parse a default value date string into a Date object
const parseDefaultValue = (defaultValue: string | undefined) => {
  if (defaultValue) {
    const parsedDate = parse(defaultValue, DATE_FORMAT, new Date());
    if (isValid(parsedDate)) {
      return parsedDate;
    }
  }
};

// Custom hook for handling range picker logic
export const useRangePicker = ({
  excludeDates,
  defaultValue,
}: {
  excludeDates?: (string | DateOrRange)[];
  defaultValue?: DateRange;
}) => {
  // State for the start and end dates
  const [startDate, setStartDate] = React.useState<Date | undefined>(
    defaultValue?.[0] ? parseDefaultValue(defaultValue?.[0]) : undefined,
  );
  const [endDate, setEndDate] = React.useState<Date | undefined>(
    defaultValue?.[1] ? parseDefaultValue(defaultValue?.[1]) : undefined,
  );

  // If initial startDate and endDate are overlapping with locked dates, unset them
  React.useEffect(() => {
    if (
      startDate &&
      endDate &&
      overlapsRange(startDate, endDate, lockedDates)
    ) {
      setStartDate(undefined);
      setEndDate(undefined);
    }
  }, []);

  // Memoized array of locked dates based on excludeDates
  const lockedDates = React.useMemo(() => {
    if (!Array.isArray(excludeDates)) return [];

    return excludeDates.reduce((accum: Date[], dateOrRange) => {
      const validDates: Date[] = [];

      if (Array.isArray(dateOrRange)) {
        // If dateOrRange is an array, it represents a range of dates
        const dateIntervals = dateOrRange.map((date) => {
          const parsedDate = parse(date, DATE_FORMAT, new Date());
          if (isValid(parsedDate)) {
            return parsedDate;
          }
        });

        // Add all dates within the interval to validDates
        if (dateIntervals[0] && dateIntervals[1]) {
          eachDayOfInterval({
            start: dateIntervals[0],
            end: dateIntervals[1],
          }).forEach((validDate) => validDates.push(validDate));
        }
      } else {
        // If dateOrRange is a single date, add it to validDates
        const parsedDate = parse(dateOrRange, DATE_FORMAT, new Date());
        if (isValid(parsedDate)) {
          validDates.push(parsedDate);
        }
      }

      // Accumulate all valid dates
      return validDates.length ? [...accum, ...validDates] : accum;
    }, []);
  }, [excludeDates]);

  // Callback function for handling date range changes
  const onChange = React.useCallback(
    (dates: [Date | null, Date | null]) => {
      const [start, end] = dates;

      let validEnd: Date | null = end;
      let validStart: Date | null = start;

      if (start && end) {
        // Check if the selected range overlaps with any locked dates
        const isOverlapping = overlapsRange(start, end, lockedDates);

        if (isOverlapping) {
          // Adjust the end date to the last available day before overlapping
          validEnd = getLastAvailableDay(start, lockedDates);
          if (!validEnd) {
            validStart = null;
          }
        }
      }

      // Update state with valid start and end dates
      setStartDate(validStart || undefined);
      setEndDate(validEnd || undefined);
    },
    [lockedDates],
  );

  // Function to handle onClose event, adjusting the end date if necessary
  const onClose = () => {
    if (startDate && !endDate) {
      onChange([startDate, addDays(startDate, 1)]);
    }
  };

  // Function to convert start and end dates to string format
  const toString = () => {
    if (startDate) {
      const startString = format(startDate, TO_STRING_FORMAT);
      const endString = endDate
        ? format(endDate, TO_STRING_FORMAT)
        : 'Check-out';
      return `${startString} - ${endString}`;
    }
    return '';
  };

  // Return state and functions for external use
  return { startDate, endDate, toString, onChange, onClose, lockedDates };
};
