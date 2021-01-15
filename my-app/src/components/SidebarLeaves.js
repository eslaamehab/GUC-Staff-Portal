import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";



//HR

function SidebarLeaves() {
  const history = useHistory();

 
  const viewAllLeaves = () => {
    history.push('/viewAllLeaves')
  }
  const sendLeaveRequest = () => {
    history.push('/sendLeaveRequest')
  }
  const viewLeaveRequests = () => {
    history.push('/viewLeaveRequests')
  }

  const leaveRequestResponse = () => {
    history.push('/leaveRequestResponse')
  }

  
  
 


  return (
    <List disablePadding dense>
     

     
      <ListItem button onClick={sendLeaveRequest}>
        <ListItemText>send Leave Request</ListItemText>
      </ListItem>
      <ListItem button onClick={viewLeaveRequests}>
        <ListItemText>view Leave Request</ListItemText>
      </ListItem>

      <ListItem button onClick={leaveRequestResponse}>
        <ListItemText>Leave Request Response</ListItemText>
      </ListItem>

      
      

    </List>
  )
}

export default SidebarLeaves