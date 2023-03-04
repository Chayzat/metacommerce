import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, Paper, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";
import { CardActionArea } from "@mui/material";
import { useNotes } from "../contexts/NoteContext";

export const BlockItem = ({ note, onActiveBlock }: any) => {
  return (
    <>
      <Card
      onClick={onActiveBlock}
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
          {new Date(note.lastModified).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </small>
      </div>
    </>
  );
};
