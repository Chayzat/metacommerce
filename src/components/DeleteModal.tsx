import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import { useNotes } from '../contexts/NoteContext'

export const DeleteModal = ({open, handleClose, setOpen}: any) => {

    const {getActiveNote} = useNotes()

  return (
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
              Хотите удалить последний выбранный элемент {getActiveNote.title}
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
