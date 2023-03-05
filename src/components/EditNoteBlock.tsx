import { Grid } from "@mui/material";
import { EditNote } from "./EditNote";
import { Header } from "./Header";
import { useToggle } from "../contexts/ToggleContext";

export const EditNoteBlock = () => {
  const { openMD, setOpenMD } = useToggle();
  return (
    <div>
      <Grid container sx={{ height: "90vh" }}>
        {
          <EditNote
            setOpenMD={() => {
              setOpenMD(true);
            }}
            openMD={openMD}
          />
        }
      </Grid>
    </div>
  );
};
