import { Box } from "@mui/material"
import { useState } from "react"
import { BlockMode } from "./BlockMode"
import { Header } from "./Header"
import { ListMode } from "./ListMode"

export const NoteList = () => {
  const [view, setView] = useState("list");
  const handleChange = (event: React.MouseEvent<HTMLElement>,nextView: string) =>  {
    setView(nextView);
  };
  return (
    <div>
      <Header  view={view} handleChange={handleChange}/>
      <Box sx={{ flexGrow: 1, height:'90vh' }}>
          {view === "list" ? <ListMode/> : <BlockMode/>}
      </Box>
    </div>
  )
}
