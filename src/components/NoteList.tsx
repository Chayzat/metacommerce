import { Box } from "@mui/material"
import { ListMode } from "./ListMode"

export const NoteList = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, height:'90vh' }}>
          <ListMode isList='list'/>
      </Box>
    </div>
  )
}
