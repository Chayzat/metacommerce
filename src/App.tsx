import { NoteList } from "./components/NoteList";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Routes>
            <Route path="/" element={<NoteList />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
    </ThemeProvider>
  );
}

export default App;