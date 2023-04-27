import React, { createContext, useReducer } from 'react';
import { reducer } from '../reducers/reducer';


// Crea il tuo contesto
const SiteContext = createContext();



const initialState = 
  {
    currentSectionIndex: 0,
    prevTouchY: 0
  }

// Crea un provider che conterrà lo stato globale
const SiteContextProvider = ({ children }) => {

  // Funzioni o logiche per gestire lo stato globale

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SiteContext.Provider value={[state, dispatch]}>
      {children}
    </SiteContext.Provider>
  );
};

export { SiteContext, SiteContextProvider };