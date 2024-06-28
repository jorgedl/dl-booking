import { QueryClientProvider } from '@tanstack/react-query';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import * as React from 'react';
import { BallTriangle } from 'react-loader-spinner';

import { queryClient } from '@/lib/react-query';
import { BookingsProvider } from '@/reducers/bookings';

import { GlobalStyle } from './globalStyles';

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <TanStackRouterDevtools />
      <QueryClientProvider client={queryClient}>
        <BookingsProvider>
          <React.Suspense fallback={<BallTriangle />}>
            {children}
          </React.Suspense>
        </BookingsProvider>
      </QueryClientProvider>
    </>
  );
};
