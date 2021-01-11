//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import loginInfo from "./components/loginInfo.component";
import regInfo from "./components/regInfo.component";
import profile from "./components/profile.component";

import attendanceInfo from "./components/attendanceInfo.component";
import AddLocationInfo from "./components/AddLocationInfo.component";
import updatedLocationInfo from "./components/updateLocationInfo.component";
import DeleteLocationInfo from "./components/DeleteLocationInfo.component";
import AddFacultyInfo from "./components/AddFacultyInfo.component";
import UpdateFacultyInfo from "./components/UpdateFacultyInfo.component";
import deleteFacultyInfo from "./components/deleteFacultyInfo.component";
import addDepartmentsInfo from "./components/addDepartmentsInfo.component";
import UpdateDepartmentInfo from "./components/UpdateDepartmentInfo.component";
import deleteDepartementInfo from "./components/deleteDepartementInfo.component";
import AddcoursesInfo from "./components/AddcoursesInfo.component";
import updateCourseInfo from "./components/updateCourseInfo.component";
import deletecourseInfo from "./components/deletecourseInfo.component";
import AddUpdateInstructorInfo from "./components/AddUpdateInstructorInfo.component";
import deleteinstructorInfo from "./components/deleteinstructorInfo.component";
import AssignUpdateDeleteTAInfo from "./components/AssignUpdateDeleteTAInfo.component";
import AssignCoordinatorInfo from "./components/AssignCoordinatorInfo.component";
import viewCoverageInfo from "./components/viewCoverageInfo.component";
import viewCoverageOfAssignedCourseInfo from "./components/viewCoverageOfAssignedCourseInfo.component";
import viewAssignedSlotsInfo from "./components/viewAssignedSlotsInfo.component";
import ViewStaffdayoffInfo from "./components/ViewStaffdayoffInfo.component";
import ViewStaffByDepartmentInfo from "./components/ViewStaffByDepartmentInfo.component";
import viewTeachingAssignmentsInfo from "./components/viewTeachingAssignmentsInfo.component";
import ViewAllStaffForInstructorInfo from "./components/ViewAllStaffForInstructorInfo.component";
import missingdays from "./components/missingdays.component";
import missinghours from "./components/missinghours.component";
import deletemember from './components/deletemember.component';
import sendReplacementRequest from './components/sendReplacementRequest.component';
import viewReplacementRequest from './components/viewReplacementRequest.component';
import submitreplacementrequestID from './components/submitreplacementrequestID.component';
import forwardrepreqtoHOD from './components/forwardrepreqtoHOD.component';
import viewrepreqasHOD from './components/viewrepreqasHOD.component';
import VerifyReplacementRequestsasHOD from './components/VerifyReplacementRequestsasHOD.component';
import Signin from './components/signin.component';
import Signout from './components/signout.component';
import ManualSigninout from './components/manualsigninout.component';
import Attendance from './components/attendanceInfo.component';
import Logout from './components/logout.component';
import updatePass from './components/updatePassword.component';
import updateProfile from './components/updateProfile.component';
import NewTest from './components/newtest.component';
import SendLeaveRequest from './components/sendLeaveRequest.component';
import ViewLeaveRequests from './components/viewLeaveRequests.component';
import ViewReplacementRequests from './components/viewReplacementRequests.component';

import replacementRequestResponse from './components/replacementRequestResponse.component';
import leaveRequestResponse from './components/leaveRequestResponse.component';
import accessAttendance from './components/accessAttendance.component';
function App() {
  return (
    <Router>
      <br/>
      <Route path = "/login" exact component = {loginInfo}/>
      <Route path = "/register" exact component = {regInfo}/>
      <Route path = "/profile" exact component = {profile}/>
      <Route path = "/attendance" exact component = {attendanceInfo}/>
      <Route path = "/AddLocation" exact component = {AddLocationInfo}/>
      <Route path = "/updateLocation" exact component = {updatedLocationInfo}/>
      <Route path = "/DeleteLocation" exact component = {DeleteLocationInfo}/>
      <Route path = "/AddFaculty" exact component = {AddFacultyInfo}/>
      <Route path = "/UpdateFaculty" exact component = {UpdateFacultyInfo}/>
      <Route path = "/deleteFaculty" exact component = {deleteFacultyInfo}/>
      <Route path = "/addDepartments" exact component = {addDepartmentsInfo}/>
      <Route path = "/UpdateDepartment" exact component = {UpdateDepartmentInfo}/>
      <Route path = "/deleteDepartement" exact component = {deleteDepartementInfo}/>
      <Route path = "/Addcourses" exact component = {AddcoursesInfo}/>
      <Route path = "/updateCourse" exact component = {updateCourseInfo}/>
      <Route path = "/deletecourse" exact component = {deletecourseInfo}/>
      <Route path = "/AddUpdateInstructor" exact component = {AddUpdateInstructorInfo}/>
      <Route path = "/deleteinstructor" exact component = {deleteinstructorInfo}/>
      <Route path = "/AssignUpdateDeleteTA" exact component = {AssignUpdateDeleteTAInfo}/>
      <Route path = "/AssignCoordinator" exact component = {AssignCoordinatorInfo}/>
      <Route path = "/viewCoverage" exact component = {viewCoverageInfo}/>
      <Route path = "/viewCoverageOfAssignedCourse" exact component = {viewCoverageOfAssignedCourseInfo}/>
      <Route path = "/viewAssignedSlots" exact component = {viewAssignedSlotsInfo}/>
      <Route path = "/ViewStaffByDepartment" exact component = {ViewStaffByDepartmentInfo}/>
      <Route path = "/ViewStaffdayoff" exact component = {ViewStaffdayoffInfo}/>
      <Route path = "/viewTeachingAssignments" exact component = {viewTeachingAssignmentsInfo}/>
      <Route path = "/ViewAllStaffForInstructor" exact component = {ViewAllStaffForInstructorInfo}/>
      <Route path = "/missingdays" exact component = {missingdays}/>
      <Route path = "/missinghours" exact component = {missinghours}/>
      <Route path = "/deleteMember" exact component = {deletemember}/>
      <Route path = "/sendReplacementRequest" exact component = {sendReplacementRequest}/>
      <Route path = "/viewReplacementRequests" exact component = {viewReplacementRequest}/>
      <Route path = "/viewReplacementRequestbyID" exact component={submitreplacementrequestID}/>
      <Route path = "/ForwardReplacementReqtoHOD" exact component={forwardrepreqtoHOD}/>
      <Route path = "/ViewReplacementRequestsAsHOD" exact component={viewrepreqasHOD}/>
      <Route path = "/HODReplacementRequestsVerify" exact component={VerifyReplacementRequestsasHOD}/>
      <Route path = "/signin" exact component={Signin}/>
      <Route path = "/signout" exact component={Signout}/>
      <Route path = "/manualsigninout" exact component={ManualSigninout}/>
      <Route path = "/attendance" exact component={Attendance}/>
      <Route path = "/updatePassword" exact component={updatePass}/>
      <Route path = "/logout" exact component={Logout}/>
      <Route path = "/updateProfile" exact component={updateProfile}/>
      <Route path = "/newtest" exact component={NewTest}/>
      <Route path = "/sendleaverequest" exact component={SendLeaveRequest}/>
      <Route path = "/viewleaverequests" exact component={ViewLeaveRequests}/>
      <Route path = "/viewreplacementrequest" exact component={ViewReplacementRequests}/> 
      <Route path = "/replacementrequestresponse" exact component={replacementRequestResponse}/> 
      <Route path = "/leaverequestresponse" exact component={leaveRequestResponse}/> 
      <Route path = "/accessattendance" exact component={accessAttendance}/> 

    </Router>
  );
}

export default App;
