//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route ,redirect} from "react-router-dom";
import loginInfo from "./components/loginInfo.component";
import regInfo from "./components/regInfo.component";
import profile from "./components/profile.component";
import emptyInfo from "./components/emptyInfo.component";

import empty2Info from "./components/empty2Info.component";
import viewAllLeavesInfo from "./components/viewAllLeavesInfo.component";

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
import viewAllReplacementRequest from './components/viewAllReplacementRequest.component';
import submitreplacementrequestID from './components/submitreplacementrequestID.component';
import forwardrepreqtoHOD from './components/forwardrepreqtoHOD.component';
import viewrepreqasHOD from './components/viewrepreqasHOD.component';
import VerifyReplacementRequestsasHOD from './components/VerifyReplacementRequestsasHOD.component';
import createSlot from './components/createSlot.component';
import viewMySlots from './components/viewMySlots.component';
import UpdateSlotInfo from './components/UpdateSlotInfo.component';
import viewAvailableSlotsInfo from './components/viewAvailableSlotsInfo.component';
import sendSlotLinkingInfo from './components/sendSlotLinkingInfo.component';
import viewSlotLinkingInfo from './components/viewSlotLinkingInfo.component';
import acceptSlotLinking from './components/acceptSlotLinking.component';
import submitdayoffInfo from './components/submitdayoffInfo.component';
import viewDayOffInfo from './components/viewDayOffInfo.component';
import acceptDayOff from './components/acceptDayOff.component';
import notificationInfo from './components/notificationInfo.component';
import dayOffStatusInfo from './components/dayOffStatusInfo.component';
import slotLinkingStatusInfo from './components/slotLinkingStatusInfo.component';
import acceptedRequestsInfo from './components/acceptedRequestsInfo.component';
import rejectedRequestsInfo from './components/rejectedRequestsInfo.component';
import pendingRequestInfo from './components/pendingRequestsInfo.component';
import cancelPendingSlotLinkingRequest from './components/cancelPendingSlotLinkingInfo.component';
import cancelPendingReplacementReq from './components/cancelPendingReplacementReq.component';
//import replacementRequestIDResponse from './components/replacementRequestIDResponse.component';
//      <Route path = "/viewReplacementRequestbyID" exact component={replacementRequestIDResponse}/>
import cancelPendingDayOff from './components/cancelPendingDayOff.component';
import login2 from './components/login2.component';

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

import viewLocationsInfo from './components/viewLocationsInfo.component';
import viewCoursesInfo from './components/viewCoursesInfo.component';
import viewfacultyInfo from './components/viewfacultyInfo.component';
import viewdepartmentsInfo from './components/viewdepartmentsInfo.component';
import viewusersInfo from './components/viewusersInfo.component';

import viewAllSlotsInDB from './components/viewAllSlotsInDB.component';
import deleteSlot from './components/deleteSlot.component';
import AllRequests from './components/AllRequests.component';
import SlotLinkingOptions from './components/SlotLinkingOptions.component';
import DayOffOptions from './components/DayOffOptions.component';
import RepOptions from './components/RepOptions.component';
import cancelUpcomingRep from './components/cancelUpcomingRep.component'
import rejectDayOff from './components/rejectDayOff.component';
import rejectSlotLinking from './components/rejectSlotLinking.component';
import RejectRepReqTA from './components/RejectRepReqTA.component';
import RejectRepReqHOD from './components/RejectRepReqHOD.component';


import accessMissingHours from'./components/accessMissingHours.component';
import accessMissingDays from './components/accessMissingDays.component';






function App() {
  return (



    <Router>
      <br/>
      <Route path = "/" exact component = {loginInfo}/>
      <Route path = "/login" exact component = {loginInfo}/>
      <Route path = "/login2" exact component = {login2}/>
      <Route path = "/viewAllLeaves" exact component = {viewAllLeavesInfo}/>
      <Route path = "/empty" exact component = {emptyInfo}/>

      <Route path = "/empty2" exact component = {empty2Info}/>
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
      <Route path = "/viewReplacementRequests" exact component = {viewAllReplacementRequest}/>
      <Route path = "/AcceptReplacementRequestbyID" exact component={submitreplacementrequestID}/>
      <Route path = "/ForwardReplacementReqtoHOD" exact component={forwardrepreqtoHOD}/>
      <Route path = "/ViewReplacementRequestsAsHOD" exact component={viewrepreqasHOD}/>
      <Route path = "/HODReplacementRequestsVerify" exact component={VerifyReplacementRequestsasHOD}/>
      <Route path = "/createSlot" exact component={createSlot}/>
      <Route path = "/viewMySlots" exact component={viewMySlots}/>
      <Route path = "/UpdateSlot" exact component={UpdateSlotInfo}/>
      <Route path = "/viewAvailableSlots" exact component={viewAvailableSlotsInfo}/>
      <Route path="/sendslotlinkingrequest" exact component={sendSlotLinkingInfo}/>
      <Route path="/viewslotlinkingrequest" exact component={viewSlotLinkingInfo}/>
      <Route path="/acceptslotlinkingrequest" exact component={acceptSlotLinking}/>
      <Route path="/submitdayoffrequest" exact component={submitdayoffInfo}/>
      <Route path="/viewdayoffrequests" exact component={viewDayOffInfo}/>
      <Route path="/acceptdayoffrequests" exact component={acceptDayOff}/>
      <Route path="/viewmynotification" exact component={notificationInfo}/>
      <Route path="/viewdayoffrequeststatus" exact component={dayOffStatusInfo}/>
      <Route path="/viewslotlinkingstatus" exact component={slotLinkingStatusInfo}/>
      <Route path="/viewslotlinkingstatus" exact component={slotLinkingStatusInfo}/>
      <Route path="/cancelPendingReplacement" exact component={cancelPendingReplacementReq}/>
      <Route path="/cancelPendingSlotLinkingRequest" exact component={cancelPendingSlotLinkingRequest}/>
      <Route path={["/viewAcceptedDayOffRequests", "/viewAcceptedSlotLinkingRequests", "/viewAcceptedReplacementRequests"]} component={acceptedRequestsInfo} />
      <Route path={["/viewRejectedDayOffRequests", "/viewRejectedSlotLinkingRequests", "/viewRejectedReplacementRequests"]} component={rejectedRequestsInfo} />
      <Route path={["/viewPendingDayOffRequests", "/viewPendingSlotLinkingRequests", "/viewPendingReplacementRequests"]} component={pendingRequestInfo} />
      <Route path="/cancelPendingDayOffRequest" exact component={cancelPendingDayOff}/>

      <Route path="/viewLocations" exact component={viewLocationsInfo}/>
      <Route path="/viewCourses" exact component={viewCoursesInfo}/>
      <Route path="/viewfaculty" exact component={viewfacultyInfo}/>
      <Route path="/viewdepartments" exact component={viewdepartmentsInfo}/>
      <Route path="/viewusers" exact component={viewusersInfo}/>
    
      <Route path="/accessMissingHours" exact component={accessMissingHours}/>
      <Route path="/accessMissingDays" exact component={accessMissingDays}/>
    
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
      <Route path="/viewAllSlots" exact component={viewAllSlotsInDB}/>
      <Route path="/deleteSlot" exact component={deleteSlot}/>
      <Route path="/viewAllReqs" exact component={AllRequests}/>
      <Route path="/viewAllS" exact component={SlotLinkingOptions}/>
      <Route path="/viewAllD" exact component={DayOffOptions}/>
      <Route path="/viewAllR" exact component={RepOptions}/>
      <Route path="/cancelUpcomingReplacementRequest" exact component={cancelUpcomingRep}/>
      <Route path="/rejectdayoffrequests" exact component={rejectDayOff}/>
      <Route path="/rejectSlotLinkingRequest" exact component={rejectSlotLinking}/>
      <Route path="/RejectReplacementRequestTA" exact component={RejectRepReqTA}/>
      <Route path="/HODRepReqRej" exact component={RejectRepReqHOD}/>
    </Router>
   
  );
}
/*<Route path="/viewAcceptedDayOffRequests" exact component={acceptedRequestsInfo}/>
      <Route path="/viewAcceptedSlotLinkingRequests" exact component={acceptedRequestsInfo}/>
      <Route path="/viewAcceptedReplacementRequests" exact component={acceptedRequestsInfo}/>*/
export default App;
