import {Card, CardContent, Typography, CardActionArea} from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useNotes } from "../contexts/NoteContext";
import { useToggle } from "../contexts/ToggleContext";

export const BlockItem = ({ note }: any) => {
  const { onSetActiveNote } = useNotes();
  const {setSelected} = useToggle()
  return (
    <>
      <Card
      onClick={() => {
        setSelected(false)
        onSetActiveNote(note.id);
      }}
        sx={{
          backgroundColor: "#0b0a0a",
          borderRadius: "10px",
          position: "relative",
          "&:hover": {
            border: '2px solid #f9c20cbd'
          }
        }}
      >
        <CardActionArea sx={{ height: "200px", display: 'flex', alignItems: 'baseline', justifyContent: 'flex-start' }}>
          <CardContent>
            <ReactMarkdown>{note.body}</ReactMarkdown>
          </CardContent>
        </CardActionArea>
      </Card>
      <div style={{textAlign: 'center'}}>
        <Typography sx={{fontSize: ".85rem", paddingTop: "1rem"}} gutterBottom variant="h5" component="div">
          {note.title}
        </Typography>
        <small>
          {new Date(note.date).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </small>
      </div>
    </>
  );
};
