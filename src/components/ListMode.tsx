import {
  List,
  Grid,
  ListSubheader,
} from "@mui/material";
import { useNotes } from "../contexts/NoteContext";
import { ListItem } from "./ListItem";
import { EditNote } from "./EditNote";
import {useState} from 'react'

export const ListMode = () => {
  const {notes} = useNotes()
  const [openMD, setOpenMD] = useState(false)
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              height: "85vh",
              "&::-webkit-scrollbar": {
                visibility: "hidden",
              },
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Сегодня
              </ListSubheader>
            }
          >
            {notes.map((note: any) => (
             <ListItem setOpenMD={() => setOpenMD(false)} openMD={openMD} note={note} key={note.id}/>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={8}>
          <EditNote setOpenMD={() => setOpenMD(true)} openMD={openMD}/>
        </Grid>
      </Grid>
    </div>
  )
}
