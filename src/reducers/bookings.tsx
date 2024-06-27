import React, { createContext, useReducer, Dispatch } from 'react';

import { Actions } from '@/types/actions';

interface State {
  bookings: any;
}

interface Action {
  type: Actions;
}

type ContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

const initialState: State = {
  bookings: {},
};

// Criar o contexto com um valor inicial opcional
const StateContext = createContext<ContextType | undefined>(undefined);

function reducer(state: any, action: any) {
  switch (action.type) {
    case Actions.LOAD:
      return { ...state };
    default:
      return state;
  }
}

export const BookingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
