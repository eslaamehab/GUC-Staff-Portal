import React from 'react'
import {Nav, NavDropdown, DropdownButton,MenuItem, Dropdown, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import {useHistory} from   'react-router'; 
//import Navbar from './src/components/Navbar';
import './Navbar.css'


 function Navbar() {
   const history = useHistory();

   const goToCourses = () => {
     history.push('/Addcourses')
   }

   const goToProfile = () => {
    history.push('/profile')
  }
    return (
       
         
              

              <nav className="navbar navbar-expand-lg navbar-light bg-dark">
 
    <a className="  navbar-brand text-white text-uppercase m-auto " href="#">Profile&nbsp;  <i class="fas fa-university"></i> </a>

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
          <a class="nav-link text-white text-uppercase ml-2" href="#">Register</a>
        </li>
          
        <li className="nav-item  m-auto">
          <a class="nav-link text-white text-uppercase ml-2" href="#">Attendance</a>
        </li>
        
        <li className="nav-item  m-auto">
          <a class="nav-link text-white text-uppercase ml-2" href="#">Slots</a>
        </li>
        
        <li className="nav-item  m-auto">
          <a class="nav-link text-white text-uppercase ml-2" href="#">Requests</a>
        </li>
       
       
          <DropdownButton id="dropdown-basic-button m-auto ml-2" title=" Faculties ">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>







<DropdownButton  id="dropdown-basic-button bg-dark  m-auto ml-5" title=" Departments ">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>

<DropdownButton id="dropdown-basic-button   m-auto ml-5" title=" Courses ">
  <Dropdown.Item onClick = {goToCourses}  >Add Course</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>

<DropdownButton id="dropdown-basic-button   m-auto ml-5" title=" Locations ">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>


   


        
          <li className="nav-item ">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"> </a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success " type="submit">Search</button>
      </form>

      </div>

    </nav>



    );

}

export default Navbar;
