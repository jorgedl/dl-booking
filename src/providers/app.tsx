import { QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container } from '@/components/Container';
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
      <QueryClientProvider client={queryClient}>
        <BookingsProvider>
          <React.Suspense
            fallback={
              <Container>
                <Skeleton width={200} />
              </Container>
            }
          >
            {children}
          </React.Suspense>
        </BookingsProvider>
      </QueryClientProvider>
    </>
  );
};
