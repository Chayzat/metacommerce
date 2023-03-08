import { useNotes } from "../contexts/NoteContext";
import { Grid } from "@mui/material";
import { Link} from "react-router-dom";
import { BlockItem } from "./BlockItem";
export const BlockMode = () => {
  const { onFilteredNotes } = useNotes();

  return (
    <>
      <p>Сегодня</p>
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {onFilteredNotes.map((note: any) => (
          <Grid item xs={2} sm={4} md={3} key={note.id}>
            <Link to={`/blocks/:${note.id}`} style={{color: '#fff', textDecoration: "none"}}>
              <BlockItem note={note} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
