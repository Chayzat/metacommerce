import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme, Container, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { NoteProvider } from "./contexts/NoteContext";
import { ToggleProvider} from "./contexts/ToggleContext";
import { BlockMode } from "./components/BlockMode";
import { Header } from "./components/Header";
import { ListMode } from "./components/ListMode";
import { EditNote } from "./components/EditNote";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["San Francisco", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ToggleProvider>
        <NoteProvider>
          <Container>
            <Header />
            <Box sx={{ flexGrow: 1, height: "90vh" }}>
              <Routes>
                <Route path="/" element={<ListMode />} />
                <Route path="/lists" element={<ListMode />} />
                <Route path="/blocks" element={<BlockMode />} />
                <Route path="/blocks/:id" element={<EditNote />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Box>
          </Container>
        </NoteProvider>
      </ToggleProvider>
    </ThemeProvider>
  );
}

export default App;
