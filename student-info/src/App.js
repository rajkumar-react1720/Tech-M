import React from 'react';
import StudentInformation from "./components/StudentInformation";
import AddStudentInformation from "./components/AddStudentInformation";
import studentInfo from "./shared/studentData";
import Header from "./components/Header";
import './App.css';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      studentInformation: {
        id: this.UUIDGenerater(),
      }
    };
  };

  componentDidMount() {
    console.log("student Data", studentInfo);
  };

  UUIDGenerater = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  handleOnOpen = () => {
   this.setState({isOpen: true})
  };

  handleOnDelete = (info) => {
    console.log(" Delete Action", info);
  };

  handleOnChange = (e) => {
    let studentInformation = Object.assign({}, this.state.studentInformation);
    studentInformation[e.target.name] =  e.target.value
    this.setState({ studentInformation }, ()=>{console.log(" after change", this.state.studentInformation)})
  }

  handleOnSave = () => {
    console.log("Helo on Save", this.state.studentInformation)
    //call an Action function to save user Information
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
        <Header name="University"/>
        {this.state.isOpen ? <AddStudentInformation
          {...this.state}
          handleOnChange={this.handleOnChange}
          handleOnSave={this.handleOnSave}
        /> : null}
        <StudentInformation
          studentInfo={studentInfo}
          handleOnDelete={this.handleOnDelete}
          handleOnOpen={this.handleOnOpen}
          navigateToDetails={this.navigateToDetails}
        />
      </div>
    )
  }
}

export default App;