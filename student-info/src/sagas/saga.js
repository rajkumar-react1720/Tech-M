import { takeLatest } from 'redux-saga/effects';
import saveStudentInformationSaga from './saveStudentInfomationSaga';



export default function* saga() {
    yield takeLatest('SAVE_STUDENT_INFORMATION', saveStudentInformationSaga);
}