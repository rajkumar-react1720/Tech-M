import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const StudentInformation = (props) => (
  <>
    <Button style={{float: "right", marginBottom: "5px"}} variant="contained" color="primary" onClick={props.handleOnOpen}>Add Student</Button>
    <TableContainer component={Paper}>
      <Table aria-label="student-inf0 table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Phone Number&nbsp;</StyledTableCell>
            <StyledTableCell align="right">GPA&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Delete&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.studentInfo.map((row, index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row" onClick={ () => {props.navigateToDetails(row)}}>
                {row.firstName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.lastName}</StyledTableCell>
              <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
              <StyledTableCell align="right">{row.gpa}</StyledTableCell>
              <StyledTableCell align="right"> <DeleteRoundedIcon onClick={() => { props.handleOnDelete(row) }} /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
)
export default StudentInformation;