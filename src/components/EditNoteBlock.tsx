import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useNotes } from "../contexts/NoteContext";
import { EditNote } from "./EditNote";
import { Header } from "./Header";
import {Link} from 'react-router-dom'
import { ListMode } from "./ListMode";
import { BlockMode } from "./BlockMode";

export const EditNoteBlock = ({ setOpenMD, openMD }: any) => {
  const [view, setView] = useState("list");
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setView(nextView);
  };

  const { notes, getActiveNote, findActiveNote, onSetActiveNote } = useNotes();
  return (
    <div>
      <Header view={view} handleChange={handleChange} />
      <Grid container sx={{ height: "90vh" }}>
        <Link to={'/'}>
        back
        </Link>
        {
          <EditNote
            ssetOpenMD={() => {
              setOpenMD(true);
            }}
            openMD={openMD}
          />
        }
      </Grid>
    </div>
  );
};
