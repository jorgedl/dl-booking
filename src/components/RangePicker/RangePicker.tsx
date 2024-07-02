import { addMonths, format } from 'date-fns';
import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { Input } from '@/components/Input';
import { DATE_FORMAT } from '@/helpers/parseDate';
import { useRangePicker } from '@/hooks/useRangePicker';
import { DateOrRange, DateRange } from '@/types';

import * as S from './RangePicker.styles';

const formatDate = (date: Date | undefined) => {
  if (date) {
    return format(date, DATE_FORMAT);
  }
};

export const RangePicker: React.FC<{
  onChange?: (dateRange: DateRange) => void;
  placeholder: string;
  excludeDates?: DateOrRange[];
  forceValidDates?: DateOrRange[];
  defaultValue?: DateRange;
}> = ({
  onChange,
  placeholder,
  excludeDates,
  defaultValue,
  forceValidDates,
}) => {
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
    forceValidDates,
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
        minDate={new Date()}
        // As I noticed in some booking systems, they all have a max date, usually from 6 to 12 months
        maxDate={addMonths(new Date(), 12)}
        selectsRange
        selectsDisabledDaysInRange
        placeholderText={placeholder}
        customInput={<Input renderValue={toString} type="range-picker" />}
        isClearable={true}
        onCalendarClose={onClose}
      />
    </S.Field>
  );
};
