import { addDays, format, isValid, parse } from 'date-fns';
import React from 'react';

import { getLastAvailableDay } from '@/helpers/getLastAvailableDay'; // Importing date helper functions
import { overlapsRange } from '@/helpers/overlapsRange';
import { DateRange } from '@/types';

const TO_STRING_FORMAT = 'MMMM d, yyyy'; // Date format for toString function

const DATE_FORMAT = 'MM-dd-yyyy'; // Date format for parsing excludeDates

const parseDefaultValue = (defaultValue: string | undefined) => {
  if (defaultValue) {
    const parsedDate = parse(defaultValue, DATE_FORMAT, new Date());
    if (isValid(parsedDate)) {
      return parsedDate;
    }
  }
};

export const useRangePicker = ({
  excludeDates,
  defaultValue,
}: {
  excludeDates?: string[];
  defaultValue?: DateRange;
}) => {
  const [startDate, setStartDate] = React.useState<Date | undefined>(
    defaultValue?.[1] ? parseDefaultValue(defaultValue?.[0]) : undefined,
  );
  const [endDate, setEndDate] = React.useState<Date | undefined>(
    defaultValue?.[1] ? parseDefaultValue(defaultValue?.[1]) : undefined,
  );

  // Memoized array of locked dates based on excludeDates
  const lockedDates = React.useMemo(() => {
    if (Array.isArray(excludeDates)) {
      return excludeDates.reduce((accum: Date[], current) => {
        const parsedDate = parse(current, DATE_FORMAT, new Date());
        if (isValid(parsedDate)) {
          return [...accum, parsedDate];
        }
        return accum;
      }, []);
    }
    return [];
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

          // If no valid end date, clear the start date
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
      startDate && onChange([startDate, addDays(startDate, 1)]);
    }
  };

  // Function to convert start and end dates to string format
  const toString = () => {
    if (startDate) {
      const startString = format(startDate, TO_STRING_FORMAT);
      const endString = endDate && format(endDate, TO_STRING_FORMAT);
      return `${startString} - ${endString || 'Check-out'}`;
    }
    return '';
  };

  // Return state and functions for external use
  return { startDate, endDate, toString, onChange, onClose, lockedDates };
};
