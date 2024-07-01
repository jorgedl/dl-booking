import React from 'react';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Flex } from '@/components/Flex';
import { Header } from '@/components/Header';
import { RangePicker } from '@/components/RangePicker';
import { ReservationDetails } from '@/components/ReservationDetails';
import { Title } from '@/components/Title';
import { useProperty } from '@/hooks/api/useProperty';
import { useLockedDays } from '@/hooks/useLockedDays';
import { BookingsContext } from '@/reducers/bookings';
import { Booking, BookingActions, BookingStatus, DateRange } from '@/types';

import * as S from './Reservations.styles';

export const Reservations: React.FC = () => {
  const bookingsContext = React.useContext(BookingsContext);

  const [newDates, setNewDates] = React.useState<DateRange>([
    undefined,
    undefined,
  ]);
  const [editing, setEditing] = React.useState<Booking | undefined>();

  const { data, isLoading } = useProperty({
    params: { id: editing?.propertyId ?? '' },
    config: {
      enabled: !!editing?.propertyId,
    },
  });

  // Once again generating memoized invalid dates. This should be done by the server
  const excludeDates = useLockedDays(data, bookingsContext?.state.bookings);

  return (
    <>
      <Header />
      <Container>
        <Flex $vertical $gap="medium">
          <Title>My reservations</Title>
          <S.List>
            {Array.isArray(bookingsContext?.state.bookings) &&
              bookingsContext?.state.bookings.map((booked) => (
                <ReservationDetails
                  isLoading={isLoading}
                  key={booked.id}
                  {...booked}
                  renderActions={() => {
                    if (booked.status === BookingStatus.CANCELED)
                      return <>Canceled</>;
                    return (
                      <>
                        {!(editing?.id === booked.id) && (
                          <Flex $gap="medium">
                            <Button
                              type="warning"
                              onClick={() =>
                                bookingsContext.dispatch({
                                  type: BookingActions.UNBOOK,
                                  payload: booked.id,
                                })
                              }
                            >
                              Cancel reservation
                            </Button>
                            <Button
                              type="text"
                              onClick={() => setEditing(booked)}
                            >
                              Edit reservation
                            </Button>
                          </Flex>
                        )}
                        {editing?.id === booked.id && (
                          <Flex $gap="medium">
                            <RangePicker
                              placeholder="Select new dates"
                              excludeDates={excludeDates}
                              forceValidDates={[
                                [editing.startDate, editing.endDate],
                              ]}
                              onChange={setNewDates}
                            />
                            <Button
                              type="primary"
                              onClick={() => {
                                newDates[0] &&
                                  newDates[1] &&
                                  bookingsContext.dispatch({
                                    type: BookingActions.EDIT,
                                    payload: {
                                      id: editing.id,
                                      startDate: newDates[0],
                                      endDate: newDates[1],
                                    },
                                  });
                                setEditing(undefined);
                              }}
                              disabled={!newDates[0] || !newDates[1]}
                            >
                              Save
                            </Button>
                          </Flex>
                        )}
                      </>
                    );
                  }}
                />
              ))}
            {Array.isArray(bookingsContext?.state.bookings) &&
              bookingsContext?.state.bookings.length === 0 &&
              'No reservations found.'}
          </S.List>
        </Flex>
      </Container>
    </>
  );
};
