import { format } from 'date-fns';
import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { Input } from '@/components/Input';
import { useRangePicker } from '@/hooks/useRangePicker';
import { DateOrRange, DateRange } from '@/types';

import * as S from './RangePicker.styles';

const DATE_FORMAT = 'MM-dd-yyyy';

const formatDate = (date: Date | undefined) => {
  if (date) {
    return format(date, DATE_FORMAT);
  }
};

export const RangePicker: React.FC<{
  onChange?: (dateRange: DateRange) => void;
  placeholder: string;
  excludeDates?: DateOrRange[];
  defaultValue?: DateRange;
}> = ({ onChange, placeholder, excludeDates, defaultValue }) => {
  const {
    startDate,
    endDate,
    onClose,
    onChange: onDateChange,
    toString,
    lockedDates,
  } = useRangePicker({
    defaultValue,
    excludeDates,
  });

  React.useEffect(() => {
    typeof onChange !== 'undefined' &&
      onChange([formatDate(startDate), formatDate(endDate)]);
  }, [startDate, endDate]);

  return (
    <S.Field>
      <DatePicker
        selected={startDate}
        onChange={onDateChange}
        startDate={startDate}
        endDate={endDate}
        excludeDates={lockedDates}
        selectsRange
        selectsDisabledDaysInRange
        placeholderText={placeholder}
        customInput={<Input renderValue={toString} />}
        minDate={new Date()}
        isClearable={true}
        onCalendarClose={onClose}
      />
    </S.Field>
  );
};
