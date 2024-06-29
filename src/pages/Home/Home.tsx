import React from 'react';

import { useAutoComplete } from '@/api/useAutoComplete';
// import { useProperties } from '@/api/useProperties';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Properties } from '@/components/Properties';
import { Search } from '@/components/Search';
import { DateRange, type Properties as PropertiesType } from '@/types';

export const Home: React.FC = () => {
  const [query, setQuery] = React.useState<string>();

  const [dateRange, setDateRange] = React.useState<DateRange>();

  React.useEffect(() => {
    console.log({ dateRange });
  }, [dateRange]);

  const autoComplete = useAutoComplete({
    params: {
      query,
      dateRange,
    },
  });

  const onDateChange = React.useCallback(([start, end]: DateRange) => {
    setDateRange([start, end]);
  }, []);

  React.useEffect(() => {
    console.log({ query });
  }, [query]);

  return (
    <>
      <Header>
        <Search<PropertiesType>
          onSearch={setQuery}
          onDateChange={onDateChange}
          items={autoComplete?.data}
          autoCompletePlaceholder="Search destinations"
          rangePickerPlaceholder="Select dates"
        />
      </Header>
      <Container>
        <Properties
          items={autoComplete?.data}
          isLoading={autoComplete.isLoading}
          dateRange={dateRange}
        />
      </Container>
    </>
  );
};
