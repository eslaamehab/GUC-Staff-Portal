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
import createSlot from './components/createSlot.component';
import viewSlotInfo from './components/viewSlotInfo.component';
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
      <Route path = "/createSlot" exact component={createSlot}/>
      <Route path = "/viewSlot" exact component={viewSlotInfo}/>
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
    
    </Router>
   
  );
}
/*<Route path="/viewAcceptedDayOffRequests" exact component={acceptedRequestsInfo}/>
      <Route path="/viewAcceptedSlotLinkingRequests" exact component={acceptedRequestsInfo}/>
      <Route path="/viewAcceptedReplacementRequests" exact component={acceptedRequestsInfo}/>*/
export default App;
