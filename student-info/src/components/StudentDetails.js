import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import avatar from '../resource/images/avatarImage.png';
import Header from './Header';

const StyledTypography = withStyles((theme) => ({
  root: {
    fontFamily: "Lato"
  },
}))(Typography);

const StudentDetails = (props) => {
  const { state } = props.location;
  return (
    <>
      <Header name="Student Details" />
      {state !== undefined ? <div>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={1} />
          <Grid item xs={6} sm={1}>
            <img style={{ width: "200px" }} src={avatar} alt="avatar" />
          </Grid>
          <Grid item xs={6} sm={2}>
            <StyledTypography>First Name :</StyledTypography>
            <StyledTypography>Last Name :</StyledTypography>
            <StyledTypography>Street Name :</StyledTypography>
            <StyledTypography>City :</StyledTypography>
            <StyledTypography>Phone Number:</StyledTypography>
            <StyledTypography>GPA :</StyledTypography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <StyledTypography>{state.firstName}</StyledTypography>
            <StyledTypography>{state.lastName}</StyledTypography>
            <StyledTypography>{state.streetName}</StyledTypography>
            <StyledTypography>{state.city}</StyledTypography>
            <StyledTypography>{state.phoneNumber}</StyledTypography>
            <StyledTypography>{state.gpa}</StyledTypography>
          </Grid>
        </Grid>
      </div> : <Typography style={{ fontFamily: "Lato", fontSize: "25px", fontWeight: 'bold', textAlign: "center", color: "red" }}>Student Record Not Found</Typography>}
    </>
  );
}

export default StudentDetails;