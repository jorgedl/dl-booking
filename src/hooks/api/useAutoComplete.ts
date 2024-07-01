import { useQuery } from '@tanstack/react-query';

import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { autoCompleteProperties } from '@/mock/fetchProperties';
import { DateRange, type Properties } from '@/types';

type Params = {
  query?: string;
  dateRange?: DateRange;
};

const autoComplete = (params?: Params): Promise<Properties> => {
  return autoCompleteProperties(params);
};

type QueryFnType = typeof autoComplete;

type UseAutoCompleteOptions = {
  config?: QueryConfig<QueryFnType>;
  params?: Params;
};

export const useAutoComplete = ({
  config,
  params,
}: UseAutoCompleteOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['autoComplete', params],
    queryFn: () => autoComplete(params),
  });
};
