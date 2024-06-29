import { useQuery } from '@tanstack/react-query';

import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { fetchProperty } from '@/mock/fetchProperties';
import { type Property } from '@/types';

type Params = {
  id: string;
};

const getProperty = (params?: Params): Promise<Property> => {
  return fetchProperty(params);
};

type QueryFnType = typeof getProperty;

type UsePropertyOptions = {
  config?: QueryConfig<QueryFnType>;
  params?: Params;
};

export const useProperty = ({ config, params }: UsePropertyOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['property', params],
    queryFn: () => getProperty(params),
  });
};
