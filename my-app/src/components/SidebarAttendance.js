import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";



//HR

function SidebarAttendance() {
  const history = useHistory();

 
  const Attendance = () => {
    history.push('/attendance')
  }
  const missingdays = () => {
    history.push('/missingdays')
  }
  const missinghours = () => {
    history.push('/missinghours')
  }

  const signin = () => {
    history.push('/signin')
  }

  const signout = () => {
    history.push('/signout')
  }
  
  const manualsigninout = () => {
    history.push('/manualsigninout')
  }


  const accessAttendance = () => {
    history.push('/accessAttendance')
  }
  const accessMissingHours = () => {
    history.push('/accessMissingHours')
  }
  const accessMissingDays = () => {
    history.push('/accessMissingDays')
  }
  const updateSalary = () => {
    history.push('/updateSalary')
  }
  
 


  return (
    <List disablePadding dense>
     

     <ListItem button onClick={Attendance}>
        <ListItemText>View Attendance </ListItemText>
      </ListItem>
      <ListItem button onClick={missingdays}>
        <ListItemText>view missing days</ListItemText>
      </ListItem>
      <ListItem button onClick={missinghours}>
        <ListItemText>Delete missing hours</ListItemText>
      </ListItem>

      <ListItem button onClick={signin}>
        <ListItemText>sign in</ListItemText>
      </ListItem>

      
      <ListItem button onClick={signout}>
        <ListItemText>sign out</ListItemText>
      </ListItem>

       
      <ListItem button onClick={manualsigninout}>
        <ListItemText>Manual Sign in and sign out</ListItemText>
      </ListItem>

        
      <ListItem button onClick={accessAttendance}>
        <ListItemText> Access Attendance</ListItemText>
      </ListItem>
        
      <ListItem button onClick={accessMissingHours}>
        <ListItemText>Access Missing Hours</ListItemText>
      </ListItem>
        
      <ListItem button onClick={accessMissingDays}>
        <ListItemText>Access Missing Days</ListItemText>
      </ListItem>

        
      <ListItem button onClick={updateSalary}>
        <ListItemText>Update Salary</ListItemText>
      </ListItem>

    </List>
  )
}

export default SidebarAttendance