import {
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  IconButton,
  TextField,
  AppBar,
  Box,
} from "@mui/material";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";

type HeaderProps = {
  view: string,
  handleChange: (event: React.MouseEvent<HTMLElement>, nextView: string) => void
}

export const Header = ({view, handleChange}: HeaderProps) => {
  return (
    <AppBar position="static">
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <ToggleButtonGroup
              orientation="horizontal"
              value={view}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton value="list" aria-label="list">
                <AiOutlineUnorderedList />
              </ToggleButton>
              <ToggleButton value="module" aria-label="module">
                <HiOutlineViewGrid />
              </ToggleButton>
            </ToggleButtonGroup>
            <IconButton
              sx={{ fontSize: "1.25rem" }}
            >
              <BsTrash />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", gap: "3rem" }}>
            <IconButton>
              <MdEditNote />
            </IconButton>
            <IconButton sx={{ paddingLeft: "1rem" }}>
              <RxLetterCaseCapitalize />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <TextField label="Поиск" variant="outlined" />
        </Grid>
      </Grid>
    </AppBar>
  );
};
