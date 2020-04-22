import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const AddStudentInformation = (props) => (
  <>
    <Dialog open={props.isOpen}>
      <MuiDialogTitle id="customized-dialog-title">
        Create Student Information
        </MuiDialogTitle>
      <MuiDialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField className='textFieldStyles' name="firstName" label="First Name" variant="outlined" onChange={props.handleOnChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="lastName" label="Last Name" variant="outlined" onChange={props.handleOnChange} />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField name="streetName" label="Street Name" variant="outlined" onChange={props.handleOnChange} />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField name="city" label="City" variant="outlined" onChange={props.handleOnChange} />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField name="phoneNumber" value = {props.studentInformation.phoneNumber} inputProps={{maxLength: 10}} label="Phone Number" variant="outlined" onChange={props.handleOnChange}/>
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField name="gpa" label="GPA" inputProps={{maxLength: 3}} variant="outlined" onChange={props.handleOnChange}/>
          </Grid>
        </Grid>
      </MuiDialogContent>
      <MuiDialogActions>
        <Button variant="contained" color="primary" onClick={() => { props.handleOnClose() }}>Close</Button>
        <Button disabled={props.isDisabled} variant="contained" color="primary" onClick={() => { props.handleOnSave() }}>Save</Button>
      </MuiDialogActions>
    </Dialog>
  </>
)

export default AddStudentInformation;