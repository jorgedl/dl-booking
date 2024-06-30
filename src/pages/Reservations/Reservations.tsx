import React from 'react';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { ReservationDetail } from '@/components/ReservationDetail';
import { Title } from '@/components/Title';
import { BookingsContext } from '@/reducers/bookings';

// import * as S from './Reservations.styles';

export const Reservations: React.FC = () => {
  const context = React.useContext(BookingsContext);

  return (
    <>
      <Header />
      <Container>
        <Title>My reservations</Title>
        <div>
          {Array.isArray(context?.state.bookings) &&
            context?.state.bookings.map((booked) => (
              <ReservationDetail key={booked.id} {...booked} />
            ))}
        </div>
      </Container>
    </>
  );
};
