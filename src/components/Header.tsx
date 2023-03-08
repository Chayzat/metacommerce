import {
  ToggleButtonGroup,
  Grid,
  IconButton,
  TextField,
  AppBar,
  Box,
  FormControl,
  NativeSelect,
} from "@mui/material";

import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { useNotes } from "../contexts/NoteContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToggle } from "../contexts/ToggleContext";
import { DeleteModal } from "./DeleteModal";

export const Header = () => {
  const {
    onDeleteNote,
    activeNote,
    onAddNote,
    getActiveNote,
    title,
    setTitle,
    bodyRef,
    onEditField,
  } = useNotes();
  const { setSelected } = useToggle();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    onDeleteNote(activeNote);
    setOpen(false);
  };

  const history = useNavigate();

  const formatOptions = ["aa", "AA"];
  const [formatValue, setFormatValue] = useState("");

  const options = formatOptions.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

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
            <ToggleButtonGroup orientation="horizontal" exclusive>
              <Link to={"/lists"}>
                <IconButton
                  onClick={() => {
                    setSelected(true);
                  }}
                >
                  <AiOutlineUnorderedList />
                </IconButton>
              </Link>
              <Link to={"/blocks"}>
                <IconButton
                  onClick={() => {
                    setSelected(true);
                  }}
                >
                  <HiOutlineViewGrid />
                </IconButton>
              </Link>

              <IconButton
                onClick={() => {
                  history(-1);
                  setSelected(true);
                }}
              >
                <IoIosArrowBack />
              </IconButton>
            </ToggleButtonGroup>

            <IconButton onClick={handleClickOpen} sx={{ fontSize: "1.25rem" }}>
              <BsTrash />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", gap: "3rem" }}>
            <IconButton onClick={onAddNote}>
              <MdEditNote />
            </IconButton>
            <FormControl sx={{ width: "20%" }}>
              <NativeSelect
                value={formatValue}
                onChange={(e) => {
                  setFormatValue(e.target.value);
                  if (
                    bodyRef.current.selectionStart ==
                    bodyRef.current.selectionEnd
                  ) {
                    return;
                  }
                  let selected = bodyRef.current.value.slice(
                    bodyRef.current.selectionStart,
                    bodyRef.current.selectionEnd
                  );
                  if (formatValue == "aa") {
                    bodyRef.current.setRangeText(selected.toUpperCase());
                  }
                  if (formatValue == "AA") {
                    bodyRef.current.setRangeText(selected.toLowerCase());
                  }
                  onEditField(bodyRef.current.value);
                }}
              >
                {options}
              </NativeSelect>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Поиск"
            variant="outlined"
            value={title}
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>
      </Grid>
      {getActiveNote && (
        <DeleteModal open={open} handleClose={handleClose} setOpen={setOpen} />
      )}
    </AppBar>
  );
};
