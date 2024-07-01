import React, { createContext, useReducer, Dispatch } from 'react';
import { v4 as uuid } from 'uuid';

import { Booking, BookingStatus } from '@/types';
import { BookingActions } from '@/types/actions';

interface State {
  bookings: Booking[];
}

type NewBooking = Omit<Booking, 'id' | 'status'>;

type EditingBooking = Omit<Booking, 'status' | 'propertyId'>;

type Action =
  | {
      type: BookingActions.BOOK;
      payload: NewBooking;
    }
  | {
      type: BookingActions.UNBOOK;
      payload: string;
    }
  | {
      type: BookingActions.EDIT;
      payload: EditingBooking;
    };

type ContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

const initialState: State = {
  bookings: [],
};

// Criar o contexto com um valor inicial opcional
export const BookingsContext = createContext<ContextType | null>(null);

const add = (bookingState: State['bookings'], booked: NewBooking) => {
  const newBooking = {
    ...booked,
    id: uuid(),
    status: BookingStatus.BOOKED,
  };
  return [...bookingState, newBooking];
};

const remove = (bookingState: State['bookings'], bookingId: string) => {
  return bookingState.map((booking) => {
    if (booking.id === bookingId) {
      return {
        ...booking,
        status: BookingStatus.CANCELED,
      };
    }
    return booking;
  });
};

const edit = (
  bookingState: State['bookings'],
  editingBooking: EditingBooking,
) => {
  return bookingState.map((booking) => {
    if (booking.id === editingBooking.id) {
      return {
        ...booking,
        startDate: editingBooking.startDate,
        endDate: editingBooking.endDate,
      };
    }
    return booking;
  });
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case BookingActions.BOOK:
      return {
        ...state,
        bookings: add(state.bookings, action.payload),
      };
    case BookingActions.UNBOOK:
      return {
        ...state,
        bookings: remove(state.bookings, action.payload),
      };
    case BookingActions.EDIT:
      return {
        ...state,
        bookings: edit(state.bookings, action.payload),
      };
    default:
      return state;
  }
}

export const BookingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BookingsContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingsContext.Provider>
  );
};
