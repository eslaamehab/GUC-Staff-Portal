import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";



//HR

function SidebarProfile() {
  const history = useHistory();

 
  const viewmynotification = () => {
    history.push('/viewmynotification')
  }
  const Logout = () => {
    history.push('/logout')
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

  
  
 


  return (
    <List disablePadding dense>
     

     
      <ListItem button onClick={viewmynotification}>
        <ListItemText>view My Notification</ListItemText>
      </ListItem>
      <ListItem button onClick={signin}>
        <ListItemText>Sign In</ListItemText>
      </ListItem>

      <ListItem button onClick={signout}>
        <ListItemText>Sign Out</ListItemText>
      </ListItem>

      <ListItem button onClick={manualsigninout}>
        <ListItemText>Manual  Sign in and out</ListItemText>
      </ListItem>

      
      <ListItem button onClick={Logout}>
        <ListItemText>Logout</ListItemText>
      </ListItem>

      
      

    </List>
  )
}

export default SidebarProfile