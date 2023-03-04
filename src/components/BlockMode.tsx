import { useState } from "react";
import { useNotes } from "../contexts/NoteContext";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, Paper, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";
import { Link, Route, Routes } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import { BlockItem } from "./BlockItem";
import Container from "@mui/material/Container/Container";
import { EditNote } from "./EditNote";
export const BlockMode = () => {
  const { notes, getActiveNote, findActiveNote, onSetActiveNote } = useNotes();
  const [openMD, setOpenMD] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{height: '90vh'}}>
        {<EditNote/>}
      </Grid>
      <p>Сегодня</p>
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {notes.map((note: any) => (
          <Grid item xs={2} sm={4} md={3} key={note.id}>
              <BlockItem onActiveBlock={() => findActiveNote(note.id) } note={note} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
