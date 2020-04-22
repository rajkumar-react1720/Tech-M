import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './Header';

const StudentDetails = (props) => (
  console.log("Hello Props in details", props),
  <>
    <Header name="Student Details" />
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={1}/>
        <Grid item xs={6} sm={3}>
          <Paper>
          xs=6 sm=3
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper >xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper >xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  </>
)

export default StudentDetails;