import {
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  IconButton,
  TextField,
  AppBar,
  Box,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button
} from "@mui/material";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { useNotes } from "../contexts/NoteContext";
import { useState } from "react";

type HeaderProps = {
  view: string,
  handleChange: (event: React.MouseEvent<HTMLElement>, nextView: string) => void,
}

export const Header = ({view, handleChange}: HeaderProps) => {

  const { onDeleteNote, activeNote, onAddNote, getActiveNote } = useNotes();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    onDeleteNote(activeNote)
    setOpen(false);
  };

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
            {

            }
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
            // onClick={() => onDeleteNote(activeNote)}
            onClick={handleClickOpen}
              sx={{ fontSize: "1.25rem" }}
            >
              <BsTrash />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", gap: "3rem" }}>
            <IconButton onClick={onAddNote}>
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
      {
        getActiveNote && (
          <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Удалить заметку?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {getActiveNote.title}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Отменить</Button>
            <Button onClick={handleClose} autoFocus>
              Удалить
            </Button>
          </DialogActions>
        </Dialog>
        )
      }

    </AppBar>
  );
};
