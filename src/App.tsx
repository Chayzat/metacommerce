import { NoteList } from "./components/NoteList";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { NoteProvider } from "./contexts/NoteContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NoteProvider>
        <Container>
          <Routes>
            <Route path="/" element={<NoteList />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </NoteProvider>
    </ThemeProvider>
  );
}

export default App;
