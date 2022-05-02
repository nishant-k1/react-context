import React, { createContext, useContext } from 'react';
import './style.css';

export const SomeSpecificComponentContext = createContext('Nishant Kumar');

export default function App() {
  const data = useContext(SomeSpecificComponentContext);

  return (
    <SomeSpecificComponentContext.Provider>
      <div>
        <h1>{data}</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    </SomeSpecificComponentContext.Provider>
  );
}
