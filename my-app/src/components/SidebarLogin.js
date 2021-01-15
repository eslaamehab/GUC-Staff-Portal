import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";



//HR

function SidebarLogin() {
  const history = useHistory();

 
 
  const login2 = () => {
    history.push('/login2')
  }
 


  return (
    <List disablePadding dense>
     

        


        
      <ListItem button onClick={login2}>
        <ListItemText>First Time Login</ListItemText>
      </ListItem>

    </List>
  )
}

export default SidebarLogin