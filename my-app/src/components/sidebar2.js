import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";



//HR

function Sidebar2() {
  const history = useHistory();

 
  const goToFaculty1 = () => {
    history.push('/AddFaculty')
  }
  const goToFaculty2 = () => {
    history.push('/UpdateFaculty')
  }
  const goToFaculty3 = () => {
    history.push('/deleteFaculty')
  }
  
 


  return (
    <List disablePadding dense>
     

     <ListItem button onClick={goToFaculty1}>
        <ListItemText>Add Faculty </ListItemText>
      </ListItem>
      <ListItem button onClick={goToFaculty2}>
        <ListItemText>Update Faculty</ListItemText>
      </ListItem>
      <ListItem button onClick={goToFaculty3}>
        <ListItemText>Delete Faculty</ListItemText>
      </ListItem>

    </List>
  )
}

export default Sidebar2