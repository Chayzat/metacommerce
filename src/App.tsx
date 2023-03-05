import { NoteList } from "./components/NoteList";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { NoteProvider } from "./contexts/NoteContext";
import { EditNoteBlock } from "./components/EditNoteBlock";
import { ToggleProvider, useToggle } from "./contexts/ToggleContext";
import { BlockMode } from "./components/BlockMode";
import { Header } from "./components/Header";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: [
        'San Francisco',
        'sans-serif',
      ].join(','),
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ToggleProvider>
        <NoteProvider>
          <Container >
            <Header/>
            <Routes>
              <Route path="/" element={<NoteList />} />
              <Route path="/lists" element={<NoteList />} />
              <Route path="/blocks" element={<BlockMode />} />
              <Route path="/blocks/:id" element={<EditNoteBlock/>}/>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Container>
        </NoteProvider>
      </ToggleProvider>
    </ThemeProvider>
  );
}

export default App;
