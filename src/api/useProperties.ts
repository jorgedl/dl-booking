import { useQuery } from '@tanstack/react-query';

import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';
import { fetchProperties } from '@/mock/fetchProperties';

type Params = {
  start: string;
  end: string;
};

interface Properties {}

const getProperties = (params?: Params): Promise<Properties> => {
  return fetchProperties(params);
};

type QueryFnType = typeof getProperties;

type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
  params?: Params;
};

export const useProperties = ({ config, params }: UseUsersOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['properties', params],
    queryFn: () => getProperties(params),
  });
};
