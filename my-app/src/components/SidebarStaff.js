import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";

//HOD



function SidebarStaff() {
  const history = useHistory();

  const register = () =>{ 
    let path = '/register'; 
    history.push(path);
  }

  const updateProfile = () =>{ 
    let path = '/updateProfile'; 
    history.push(path);
  }


  
  const deleteuser = () => {
    history.push('/deleteMember')
  }
  const resetpassword = () => {
    history.push('/updatePassword')
  }


  const ViewStaffByDepartment = () => {
    history.push('/ViewStaffByDepartment')
  }

  const ViewStaffdayoff = () => {
    history.push('/ViewStaffdayoff')
  }
  

  const ViewAllStaffForInstructor = () => {
    history.push('/ViewAllStaffForInstructor')
  }

  const AssignUTA = () => {
    history.push('/AssignUpdateDeleteTA')
  }
  const UpdateTA = () => {
    history.push('/AssignUpdateDeleteTA')
  }
  const DeleteTA = () => {
    history.push('/AssignUpdateDeleteTA')
  }

  const AssignCoordinator = () => {
    history.push('/AssignCoordinator')
  }
 
 
 
 



  return (
    <List disablePadding dense>
    
      
   

    <ListItem button onClick={register}>
        <ListItemText>Register </ListItemText>
      </ListItem>
      <ListItem button onClick={updateProfile}>
        <ListItemText>Update Profile</ListItemText>
      </ListItem>
      <ListItem button onClick={deleteuser}>
        <ListItemText>Delete User</ListItemText>
      </ListItem>

      <ListItem button onClick={resetpassword}>
        <ListItemText>reset Password</ListItemText>
      </ListItem>
      <ListItem button onClick={ViewStaffByDepartment}>
        <ListItemText>View Staff By Department</ListItemText>
      </ListItem>

      <ListItem button onClick={ViewStaffdayoff}>
        <ListItemText>view Staff Dayoff</ListItemText>
      </ListItem>

      <ListItem button onClick={ViewAllStaffForInstructor}>
        <ListItemText>View All Staff For Instructor</ListItemText>
      </ListItem>

      <ListItem button onClick={AssignCoordinator}>
        <ListItemText>Assign Coordinator</ListItemText>
      </ListItem>


      <ListItem button onClick={AssignUTA}>
        <ListItemText>Assign TA</ListItemText>
      </ListItem>

      <ListItem button onClick={UpdateTA}>
        <ListItemText>Update TA</ListItemText>
      </ListItem>
      <ListItem button onClick={DeleteTA}>
        <ListItemText>Delete TA</ListItemText>
      </ListItem>


      <ListItem button onClick={AssignCoordinator}>
        <ListItemText>Assign Coordianor </ListItemText>
      </ListItem>

      

     
      

    </List>
  )
}

export default SidebarStaff