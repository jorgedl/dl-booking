import { addDays } from 'date-fns';
import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { Input } from '@/components/Input';

import * as S from './RangePicker.styles';

export const RangePicker: React.FC<{
  onChange?: (dateRange: [Date | undefined, Date | undefined]) => void;
}> = ({ onChange }) => {
  const [startDate, setStartDate] = React.useState<Date | undefined>();
  const [endDate, setEndDate] = React.useState<Date | undefined>();

  const onDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start || undefined);
    setEndDate(end || undefined);
  };

  React.useEffect(() => {
    typeof onChange !== 'undefined' && onChange([startDate, endDate]);
  }, [onChange, startDate, endDate]);

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
        customInput={<Input label="When" placeholder="Select the date range" />}
      />
    </S.Field>
  );
};
