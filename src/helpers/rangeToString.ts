import { format } from 'date-fns';

const TO_STRING_FORMAT = 'MMMM d, yyyy'; // Format for displaying dates as strings

export const rangeToString = (startDate: Date, endDate: Date | undefined) => {
  const startString = format(startDate, TO_STRING_FORMAT);
  const endString = endDate ? format(endDate, TO_STRING_FORMAT) : 'Check-out';
  return `${startString} - ${endString}`;
};
