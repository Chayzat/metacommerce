import { createContext, useContext, useMemo, useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";

const NoteContext = createContext<any>(null);

export function useNotes() {
  return useContext(NoteContext);
}

export type NoteData = {
  id: string;
  title: string;
  body: string;
  date: any;
};

export const NoteProvider = ({ children }: any) => {
  const [notes, setNotes] = useLocalStorage<any>("notes", []);
  const [activeNote, setActiveNote] = useState("");
  const [title, setTitle] = useState("");
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  notes.sort((a: any, b: any) => b.date - a.date)

  const onBodySelection = (value: any) => {
    let cursorStart = value.current.selectionStart;
    let cursorEnd = value.current.selectionEnd;
    return getActiveNote.body.substring(cursorStart,cursorEnd)
  }

  const onSetActiveNote = (id: string) => {
    setActiveNote(id);
  };

  const onAddNote = () => {
    setNotes((prevNotes: NoteData[]) => {
      return [
        ...prevNotes,
        { id: uuidV4(), title: "Без заголовка", body: "", date: Date.now() },
      ];
    });
  };

  const findActiveNote = () => {
    return notes.find((note: any) => {
      if (note.id === activeNote) return note.title;
    });
  };

  const getActiveNote = findActiveNote();

  const onEditNote = (editedNote: any) => {
    const editedNotes = notes.map((note: any) => {
      if (note.id === editedNote.id) return editedNote;
      return note;
    });
    setNotes(editedNotes);
  };

  const onDeleteNote = (id: string) => {
    setNotes(notes.filter((note: any) => note.id !== id));
  };

  const onFilteredNotes = useMemo(() => {
    return notes.filter((note: any) => {
      return title === '' || note.title.toLowerCase().includes(title.toLowerCase())
    })
  }, [title, notes])

  const onEditField = (value: string) => {
    onEditNote({
      ...getActiveNote,
      title:
        value.length > 0 ? String(value).substring(0, 20) : "Без заголовка",
      body: value,
      date: Date.now(),
    });
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        onSetActiveNote,
        activeNote,
        onAddNote,
        getActiveNote,
        onEditNote,
        onDeleteNote,
        title,
        setTitle,
        onFilteredNotes,
        onBodySelection,
        bodyRef,
        onEditField
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
