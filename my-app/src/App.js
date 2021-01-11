//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import loginInfo from "./components/loginInfo.component";
import regInfo from "./components/regInfo.component";
import profile from "./components/profile.component";
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

//import replacementRequestIDResponse from './components/replacementRequestIDResponse.component';
//      <Route path = "/viewReplacementRequestbyID" exact component={replacementRequestIDResponse}/>

function App() {
  return (
    <Router>
      <br/>
      <Route path = "/login" exact component = {loginInfo}/>
      <Route path = "/register" exact component = {regInfo}/>
      <Route path = "/profile" exact component = {profile}/>
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
