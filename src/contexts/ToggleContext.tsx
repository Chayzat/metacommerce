import { createContext, useContext, useState } from 'react'

const ToggleContext = createContext<any>(false)

export function useToggle() {
  return useContext(ToggleContext)
}

export const ToggleProvider = ({children}: any) => {
  const [openMD, setOpenMD] = useState(false)

  const onSetOpenMD = (value: any) => {
    setOpenMD(value)
  }

  return (
    <ToggleContext.Provider value={{openMD, setOpenMD,  onSetOpenMD}}>
      {children}
    </ToggleContext.Provider>
  )
}
