import { Grid, TextField } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useNotes } from "../contexts/NoteContext";
import styles from "./EditNote.module.css";
import { useToggle } from "../contexts/ToggleContext";

export const EditNote = ({ isList}: any) => {
  const { getActiveNote, bodyRef, onEditField } = useNotes();
  if (!getActiveNote) return <div>Нет заметки</div>;
  const {selected, setSelected} = useToggle()
  console.log(selected)
  return (
    <Grid container sx={{ height: "90vh" }}>
    <div style={{display: 'flex', flexDirection: 'column', height: '85vh', width: '100%'}}>
      <p style={{ textAlign: "center" }}>
        {new Date(getActiveNote.date).toLocaleDateString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <div className={selected ? styles.close : ''} onClick={() => setSelected(true)}>
        <ReactMarkdown className={styles.color}>
          {getActiveNote.body}
        </ReactMarkdown>
      </div>
      { selected && (
         <div>
         <TextField
           inputRef={bodyRef}
           multiline
           minRows={5}
           maxRows={30}
           value={getActiveNote.body}
           variant="standard"
           onChange={(e) => {
             onEditField(e.target.value)}}
           sx={{
             width: '20vw'
           }}
           placeholder="..."/>
         </div>
      )
      }
    </div>
    </Grid>
  );
};
