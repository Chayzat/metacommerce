import { TextField } from "@mui/material";
import { createRef, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { useNotes } from "../contexts/NoteContext";
import styles from "./EditNote.module.css";

export const EditNote = ({ setOpenMD, openMD, isList }: any) => {
  const { getActiveNote, onEditNote, onBodySelection } = useNotes();
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const onEditField = (value: string) => {
    onEditNote({
      ...getActiveNote,
      title:
        value.length > 0 ? String(value).substring(0, 20) : "Без заголовка",
      body: value,
      date: Date.now(),
    });
  };

  if (!getActiveNote) return <div>Нет заметки</div>;

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', height: '85vh', width: '100%'}}>
      <p style={{ textAlign: "center" }}>
        {new Date(getActiveNote.date).toLocaleDateString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <div
        onClick={setOpenMD}
        style={{ display: (openMD === false) ? "block" : "none", height: "85vh" }}
      >
        <ReactMarkdown className={styles.color}>
          {getActiveNote.body}
        </ReactMarkdown>
      </div>
      <div
        onClick={setOpenMD}
        style={{ display: openMD === false ? "none" : "block" }}
      >
        <TextField
        inputRef={bodyRef}
        onSelect={() =>onBodySelection(bodyRef)}
          multiline
          minRows={5}
          maxRows={30}
          value={getActiveNote.body}
          variant="standard"
          onChange={(e) => {
            onEditField(e.target.value);
          }}
          sx={{
            width: isList ?
            'clamp(19.688rem, 11.652rem + 40.18vw, 47.813rem)' : 'clamp(19.688rem, 4.777rem + 74.55vw, 71.875rem)'
          }}
          placeholder="..."
        />
      </div>
    </div>
    </>
  );
};
