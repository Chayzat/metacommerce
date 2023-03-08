import { createContext, useContext, useState } from 'react'

const ToggleContext = createContext<any>(false)

export function useToggle() {
  return useContext(ToggleContext)
}

export const ToggleProvider = ({children}: any) => {
  const [selected, setSelected] = useState(false);
  return (
    <ToggleContext.Provider value={{selected, setSelected}}>
      {children}
    </ToggleContext.Provider>
  )
}
