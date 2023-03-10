import { ListItemText, ListItemButton } from "@mui/material";
import { useNotes } from "../contexts/NoteContext";
import { useToggle } from "../contexts/ToggleContext";

export const ListItem = ({ note }: any) => {
  const { onSetActiveNote } = useNotes();
  const {setSelected} = useToggle()

  return (
    <ListItemButton
      key={note.id}
      sx={{
        height: "5rem",
      }}
      onClick={() => {
        setSelected(false)
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
            hour: "2-digit",
            minute: "2-digit",
          })}
        </small>
        <small>
          {" "}
          {note.body
            ? note.body.substr(0, 35) + "..."
            : "нет дополнительного текста"}
        </small>
      </div>
    </ListItemButton>
  );
};
