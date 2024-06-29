import React from 'react';

import { AutoComplete } from '@/components/AutoComplete';
import { RangePicker } from '@/components/RangePicker';
import { DateRange } from '@/types';

import * as S from './Search.styles';

interface SearchProps<T> {
  rangePickerPlaceholder: string;
  onSearch(query: string): void;
  onDateChange(range: DateRange): void;
  autoCompletePlaceholder: string;
  items?: T;
}

export const Search = <T,>({
  onSearch,
  onDateChange,
  items,
  autoCompletePlaceholder,
  rangePickerPlaceholder,
}: SearchProps<T>) => {
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
        onChange={([start, end]: DateRange) => onDateChange([start, end])}
      />
    </S.Container>
  );
};
