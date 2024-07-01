import { useQuery } from '@tanstack/react-query';

import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { fetchProperties } from '@/mock/fetchProperties';
import { type Properties } from '@/types';

type Params = {
  start: string;
  end: string;
};

const getProperties = (params?: Params): Promise<Properties> => {
  return fetchProperties(params);
};

type QueryFnType = typeof getProperties;

type UsePropertiesOptions = {
  config?: QueryConfig<QueryFnType>;
  params?: Params;
};

export const useProperties = ({
  config,
  params,
}: UsePropertiesOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['properties', params],
    queryFn: () => getProperties(params),
  });
};
