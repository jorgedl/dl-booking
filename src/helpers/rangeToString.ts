import { format } from 'date-fns';

export const TO_STRING_FORMAT = 'MMMM d, yyyy'; // Format for displaying dates as strings

export const rangeToString = (startDate: Date, endDate: Date | undefined) => {
  try {
    const startString = format(startDate, TO_STRING_FORMAT);
    const endString = endDate ? format(endDate, TO_STRING_FORMAT) : 'Check-out';
    return `${startString} - ${endString}`;
  } catch (e) {
    return '';
  }
};
