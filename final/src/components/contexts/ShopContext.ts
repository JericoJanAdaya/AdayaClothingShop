import { createContext } from 'react';

export const initialState = {
  total: 0,
  products: [],
};

export const CounterContext = createContext(initialState);
