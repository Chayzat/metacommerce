import { ListItemText, ListItemButton } from "@mui/material";
import { useNotes } from "../contexts/NoteContext";


export const ListItem = ({note, setOpenMD}: any) => {
  const { onSetActiveNote, activeNote } = useNotes();

  return (
    <ListItemButton
      key={note.id}
      sx={{
        borderBottom: activeNote === note.id ? "1px solid #f9c20cbd" : "none",
        height: "5rem",
      }}
      onClick={() => {
        setOpenMD()
        onSetActiveNote(note.id);
      }}
    >
      <ListItemText primary={`${note.title}`} sx={{ position: "relative" }} />
      <div
        style={{
          position: "absolute",
          top: "45px",
          left: "15px",
        }}
      >
        <small>
          {new Date(note.date).toLocaleTimeString("en-GB", {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </small>
        <small> {note.body ? note.body.substr(0, 40) + "..." : 'нет дополнительного текста'}</small>
      </div>
    </ListItemButton>
  );
};
