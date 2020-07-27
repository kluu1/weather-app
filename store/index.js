import React, { createContext, useReducer } from 'react';

const initialState = {
  city: 'Atlanta',
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_CITY':
        return { ...state, city: action.city };
      default:
        throw new Error();
    }
  }, initialState);

  return (
    <>
      <Provider value={{ state, dispatch }}>{children}</Provider>
    </>
  );
};

export { store, StateProvider };
