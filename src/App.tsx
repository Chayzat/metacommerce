import { NoteList } from "./components/NoteList";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { NoteProvider } from "./contexts/NoteContext";
import { EditNote } from "./components/EditNote";
import { EditNoteBlock } from "./components/EditNoteBlock";
import { ToggleProvider, useToggle } from "./contexts/ToggleContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  // const { openMD, setOpenMD } = useToggle();

  // console.log(openMD)
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ToggleProvider>
        <NoteProvider>
          <Container>
            <Routes>
              <Route path="/" element={<NoteList />} />
              <Route
                path="/:id"
                element={
                  <EditNoteBlock

                    // setOpenMD={() => {
                    //   setOpenMD(true);
                    // }}
                    // openMD={openMD}
                  />
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Container>
        </NoteProvider>
      </ToggleProvider>
    </ThemeProvider>
  );
}

export default App;
