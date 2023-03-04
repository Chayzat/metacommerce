import { createContext, useContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

const NoteContext = createContext<any>(null)

export function useNotes() {
  return useContext(NoteContext);
}

export const NoteProvider = ({children}: any) => {
  const [notes, setNotes] = useLocalStorage("notes", []);
  return (
    <NoteContext.Provider value={{notes}}>
      {children}
    </NoteContext.Provider>
  )
}
