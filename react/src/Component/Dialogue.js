import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({handleDeleteRecord , handleCloseDialogue , isOpen, selectedData}) {
  
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleCloseDialogue}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete Record
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do You want to delete record with name {selectedData.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogue}>Cancel</Button>
          <Button onClick={handleDeleteRecord} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
