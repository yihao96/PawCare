import React, {createContext, useEffect} from 'react';

export const Context = createContext({});

export const ContextProvider = ({children}: any) => {
  useEffect(() => {}, []);

  const values = {};

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
