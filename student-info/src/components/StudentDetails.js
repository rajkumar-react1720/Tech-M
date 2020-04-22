import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import avatar from '../resource/images/avatarImage.png';
import Header from './Header';

const StudentDetails = (props) => {
  const { state } = props.location;
  return (
    <>
      <Header name="Student Details" />
      {state !== undefined ? <div>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={1} />
          <Grid item xs={6} sm={1}>
            <img style={{width: "200px"}} src={avatar} alt="avatar" />
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography>First Name :</Typography>
            <Typography>Last Name :</Typography>
            <Typography>Street Name :</Typography>
            <Typography>City :</Typography>
            <Typography>Phone Number:</Typography>
            <Typography>GPA :</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography>{state.firstName}</Typography>
            <Typography>{state.lastName}</Typography>
            <Typography>{state.streetName}</Typography>
            <Typography>{state.city}</Typography>
            <Typography>{state.phoneNumber}</Typography>
            <Typography>{state.gpa}</Typography>
          </Grid>
        </Grid>
      </div> : <Typography style={{fontFamily: "Lato", fontSize: "25px", fontWeight: 'bold', textAlign:"center", color:"red"}}>Student Record Not Found</Typography>}
    </>
  );
}

export default StudentDetails;