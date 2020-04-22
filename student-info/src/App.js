import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StudentInformation from "./components/StudentInformation";
import AddStudentInformation from "./components/AddStudentInformation";
import { saveStudentInformation } from './actions/saveStudentInformation';
import { deleteStudentInformation } from './actions/deleteStudentInformation';
import formatPhoneNumber from './shared/formatPhoneNumber';
import Header from "./components/Header";
import './App.css';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      studentInformation: {},
      isDisabled: true
    };
  };

  UUIDGenerater = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  handleOnOpen = () => {
    this.setState({ isOpen: true });
  };

  handleOnClose = () => {
    this.setState({ isOpen: false });
  };
  
  handleOnDelete = (info) => {
    this.props.deleteStudentInformation(info);
  };

  enableSaveButton = ()=>{
    const { studentInformation } = this.state;
    if((studentInformation.firstName !== undefined && studentInformation.lastName !== undefined && studentInformation.city !==undefined && studentInformation.gpa !== undefined && studentInformation.phoneNumber !== undefined && studentInformation.streetName !== undefined)){
      this.setState({ isDisabled: false});
    }
  };

  handleOnChange = (e) => {
    let studentInformation = Object.assign({}, this.state.studentInformation);
    e.target.name === "phoneNumber" ? studentInformation[e.target.name] = formatPhoneNumber(e.target.value) : studentInformation[e.target.name] = e.target.value;
    this.setState({ studentInformation }, () => {this.enableSaveButton()});
  }

  handleOnSave = () => {
    let studentInformation = Object.assign({}, this.state.studentInformation);
    studentInformation.id = this.UUIDGenerater();
    this.setState({ isDisabled: true, isOpen: false, studentInformation}, ()=>{this.props.saveStudentInformation(this.state.studentInformation)});
  }

  navigateToDetails = (information) => {
    this.props.history.push({
      pathname: '/student-details',
      state: information
    })
  }

  render() {
    return (
      <div>
        <Header name="University" />
        {this.state.isOpen ? <AddStudentInformation
          {...this.state}
          handleOnChange={this.handleOnChange}
          handleOnSave={this.handleOnSave}
          handleOnClose={this.handleOnClose}
        /> : null}
        <StudentInformation
          studentInfo={this.props.studentInfo}
          handleOnDelete={this.handleOnDelete}
          handleOnOpen={this.handleOnOpen}
          navigateToDetails={this.navigateToDetails}
        />
      </div>
    )
  }
}


export const mapStateToProps = state => ({
  studentInfo:  state.saveStudentInformationReducer.studentInfo || state.saveStudentInformationReducer
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      saveStudentInformation,
      deleteStudentInformation
    },
    dispatch,
  );

export default connect(
  mapStateToProps, mapDispatchToProps,
)(App);