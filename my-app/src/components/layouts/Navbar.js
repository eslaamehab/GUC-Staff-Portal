import React from 'react'
import {Nav, NavDropdown, DropdownButton,MenuItem, Dropdown, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import {useHistory} from   'react-router'; 
//import Navbar from './src/components/Navbar';
import './Navbar.css'


 function Navbar() {
   const history = useHistory();

   const goToDepartment = () => {
     history.push('/viewdepartments')
   }
  

   const goToCourses = () => {
    history.push('/viewCourses')
  }
  


  const goToFaculty = () => {
    history.push('/viewfaculty')
  }

 


  const goToLocations = () => {
    history.push('/viewLocations')
  }
  


  const goToSlots = () => {
    history.push('/attendance')
  }
  const goToattendance = () => {
    history.push('/empty2')
  }

  const goToRegister = () => {
    history.push('/empty')
  }

  const goToDatabaseSlots = () => {
    history.push('/viewAllSlots')
  }


  const goToProfile = () => {
    history.push('/profile')
  }


  const goToleaves = () => {
    history.push('/viewAllLeaves')
  }

  const goToMyRequests = () => {
    history.push('/viewAllReqs')
  }
  
  const goToMyAvailableslots = () => {
    history.push('/viewAvailableSlots')
  }




  const goToAllSlots= () => {
    history.push('/viewAssignedSlots')
  }
  

  const goToMySlots = () => {
    history.push('/viewMySlots')
  }

  const viewTeachingAssignments = () => {
    history.push('/viewTeachingAssignments')
  }

  
    return (
       
         
              

              <nav className="navbar navbar-expand-lg navbar-light bg-dark">
 
    <a className="  navbar-brand text-white text-uppercase m-auto " href="#">GUC System&nbsp;  <i class="fas fa-university"></i> </a>

    <button className="navbar-toggler ml-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button> 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  m-auto">
        <li class="nav-item">




          <a className="nav-link active text-white text-uppercase ml-5"
           aria-current="page" href="#" onClick = {goToProfile}>Home   </a>
          
        </li>

        <li className="nav-item m-auto">
          <a class="nav-link text-white text-uppercase ml-2" onClick ={goToRegister}>UserInfo</a>
        </li>
          
        <li className="nav-item  m-auto">
          <a class="nav-link text-white text-uppercase ml-2" onClick ={goToattendance}>AttendanceInfo</a>
        </li>

        <li className="nav-item  m-auto">
          <a class="nav-link text-white text-uppercase ml-2" onClick ={goToFaculty}>Faculties</a>
        </li>

        <li className="nav-item  m-auto">
          <a class="nav-link text-white text-uppercase ml-2" onClick ={goToDepartment}>Departments</a>
        </li>
        
        <li className="nav-item  m-auto">
          <a class="nav-link text-white text-uppercase ml-2" onClick ={goToCourses}>Courses</a>
        </li>

        <li className="nav-item  m-auto">
          <a class="nav-link text-white text-uppercase ml-2" onClick ={goToLocations}>Locations</a>
        </li>
         
       

        <li className="nav-item  m-auto">
          <a class="nav-link text-white text-uppercase ml-2" href="#" onClick = {goToMyRequests}>Requests</a>
        </li>

        <li className="nav-item  m-auto">
          <a class="nav-link text-white text-uppercase ml-2" onClick ={goToleaves}>Leaves</a>
        </li>

        

        <DropdownButton  id="dropdown-basic-button   m-auto ml-5" title="slots">
       <Dropdown.Item onClick = {goToMySlots} href="#/action-1">View My Schedule</Dropdown.Item>
       <Dropdown.Item onClick = {goToMyAvailableslots} href="#/action-1">View Available Slots </Dropdown.Item>
       <Dropdown.Item onClick = {viewTeachingAssignments} href="#/action-1">View Teaching Assignment </Dropdown.Item>
      <Dropdown.Item  onClick = {goToAllSlots} href="#/action-2">View An academic member's slots</Dropdown.Item>
    <Dropdown.Item  onClick = {goToDatabaseSlots} href="#/action-2">View All slots in Database</Dropdown.Item>

</DropdownButton>

       
        
      
       
       
         





   


        
          
      </ul>
     

      </div>

    </nav>



    );

}

export default Navbar;
