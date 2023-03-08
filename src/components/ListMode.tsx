import {
  List,
  Grid,
  ListSubheader,
} from "@mui/material";
import { useNotes } from "../contexts/NoteContext";
import { ListItem } from "./ListItem";
import { EditNote } from "./EditNote";

export const ListMode = ({isList}: any) => {
  const {onFilteredNotes} = useNotes()

  return (
      <Grid container spacing={2} >
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
            {onFilteredNotes.map((note: any) => (
             <ListItem note={note} key={note.id}/>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={4} md={8}>
          <EditNote/>
        </Grid>
      </Grid>
  )
}
