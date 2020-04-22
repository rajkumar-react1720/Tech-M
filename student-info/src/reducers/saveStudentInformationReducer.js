import studentInfo from '../shared/studentData';

const defaultState = {
  studentInfo
}

const saveStudentInformationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SAVE_STUDENT_INFORMATION':
      return state.studentInfo !== undefined ? state.studentInfo.concat(action.payload) : state.concat(action.payload);
    case 'DELETE_STUDENT_INFORMATION':
      const studentInfo1 = state.studentInfo !== undefined? 
                            state.studentInfo.filter( (item) => item.id !== action.payload.id):
                            state.filter( (item, index) => item.id !== action.payload.id);
      return studentInfo1;
    default:
      return state;
  }
}

export default saveStudentInformationReducer;