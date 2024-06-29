import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { Input } from '@/components/Input';

import * as S from './AutoComplete.styles';

// Define a generic type for the component props
interface AutoCompleteProps<T> {
  onSearch(query?: string): void;
  items?: T;
  placeholder: string;
}

export const AutoComplete = <T,>({
  onSearch,
  placeholder,
}: AutoCompleteProps<T>) => {
  const [query, setQuery] = React.useState<string>();

  const debouncedSetQuery = useDebouncedCallback((value) => {
    setQuery(value);
  }, 300);

  React.useEffect(() => onSearch(query), [query]);

  return (
    <S.Container>
      <Input
        onChange={({ target: { value } }) => debouncedSetQuery(value)}
        placeholder={placeholder}
      />
    </S.Container>
  );
};
