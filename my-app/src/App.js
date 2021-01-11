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


import ViewStaffByDepartmentInfo from "./components/ViewStaffByDepartmentInfo.component";
import ViewStaffdayoffInfo from "./components/ViewStaffdayoffInfo.component";
import viewTeachingAssignmentsInfo from "./components/viewTeachingAssignmentsInfo.component";
import ViewAllStaffForInstructorInfo from "./components/ViewAllStaffForInstructorInfo.component";
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

    </Router>
  );
}

export default App;
