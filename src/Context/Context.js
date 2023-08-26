import React, { createContext } from 'react'
export const myContext = createContext();

export default function Context({children}) {
    const name = 'Rashi';
  return (
    <div>
        <myContext.Provider value={{name}}>
        {children}
        </myContext.Provider>
    </div>
  )
}
