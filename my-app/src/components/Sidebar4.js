import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";



//HR

function Sidebar4() {
  const history = useHistory();

 
  const goToLocations1 = () => {
    history.push('/AddLocation')
  }
  const goToLocations2 = () => {
    history.push('/updateLocation')
  }
  const goToLocations3 = () => {
    history.push('/DeleteLocation')
  }
  
 


  return (
    <List disablePadding dense>
     

     <ListItem button onClick={goToLocations1}>
        <ListItemText>Add Location </ListItemText>
      </ListItem>
      <ListItem button onClick={goToLocations2}>
        <ListItemText>Update Location</ListItemText>
      </ListItem>
      <ListItem button onClick={goToLocations3}>
        <ListItemText>Delete Location</ListItemText>
      </ListItem>

    </List>
  )
}

export default Sidebar4