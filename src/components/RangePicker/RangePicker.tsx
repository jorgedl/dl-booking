import { addDays, format } from 'date-fns';
import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { Input } from '@/components/Input';
import { DateRange } from '@/types';

import * as S from './RangePicker.styles';

const formatDate = (date: Date | undefined) => {
  if (date) {
    return format(date, 'MM-dd-yyyy');
  }
};

export const RangePicker: React.FC<{
  onChange?: (dateRange: DateRange) => void;
  placeholder: string;
}> = ({ onChange, placeholder }) => {
  const [startDate, setStartDate] = React.useState<Date | undefined>();
  const [endDate, setEndDate] = React.useState<Date | undefined>();

  const onDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start || undefined);
    setEndDate(end || undefined);
  };

  React.useEffect(() => {
    typeof onChange !== 'undefined' &&
      onChange([formatDate(startDate), formatDate(endDate)]);
  }, [onChange, startDate, endDate]);

  const renderValue = (value: string) => {
    if (value) {
      const [start, end] = value.split(' - ');
      return `${start} - ${end || 'Check-out'}`;
    }
    return '';
  };

  const onCalendarClose = () => {
    if (startDate && !endDate) {
      startDate && setEndDate(addDays(startDate, 1));
    }
  };

  return (
    <S.Field>
      <DatePicker
        selected={startDate}
        onChange={onDateChange}
        startDate={startDate}
        endDate={endDate}
        excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
        selectsRange
        selectsDisabledDaysInRange
        placeholderText={placeholder}
        customInput={<Input renderValue={renderValue} />}
        isClearable={true}
        dateFormat="MMMM d, yyyy"
        onCalendarClose={onCalendarClose}
      />
    </S.Field>
  );
};
