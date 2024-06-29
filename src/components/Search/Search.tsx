import React from 'react';

import { AutoComplete } from '@/components/AutoComplete';
import { RangePicker } from '@/components/RangePicker';
import { DateRange } from '@/types';

import * as S from './Search.styles';

interface SearchProps {
  rangePickerPlaceholder?: string;
}

interface WithAutocomplete<T> {
  onSearch(query: string): void;
  onDateChange(range: DateRange): void;
  autoCompletePlaceholder: string;
  items?: T;
}

interface WithRangePicker {
  rangePickerPlaceholder: string;
}

export const Search = <T,>({
  onSearch,
  onDateChange,
  items,
  autoCompletePlaceholder,
  rangePickerPlaceholder,
}: SearchProps & WithAutocomplete<T> & WithRangePicker) => {
  return (
    <S.Container>
      {typeof onSearch === 'function' && (
        <AutoComplete<T>
          items={items}
          onSearch={onSearch}
          placeholder={autoCompletePlaceholder}
        />
      )}
      <RangePicker
        placeholder={rangePickerPlaceholder}
        onChange={([start, end]: DateRange) =>
          start && end && onDateChange([start, end])
        }
      />
    </S.Container>
  );
};
