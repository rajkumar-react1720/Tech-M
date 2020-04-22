import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const StyledHeader = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    height: 65,
    color: theme.palette.common.white,
    fontSize: 50,
    marginBottom: 30
  },
}))(Paper);

const StudentInformation = (props) => (
<StyledHeader> {props.name} </StyledHeader>
)
export default StudentInformation;