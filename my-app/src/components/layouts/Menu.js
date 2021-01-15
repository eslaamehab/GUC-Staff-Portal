import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";

function Menu() {

  const history = useHistory();


   
  const goToUS = () => {
   history.push('/updateSlot')
 }

 const goToCS = () => {
  history.push('/createSlot')
}


const goToDS = () => {
  history.push('/deleteSlot')
}


  return (
    <List disablePadding dense>
      <ListItem  button onClick = {goToCS} >
        <ListItemText>Create Slot</ListItemText>
      </ListItem>

      <ListItem button onClick = {goToUS}>
        <ListItemText>Update Slot</ListItemText>
      </ListItem>

      <ListItem button onClick = {goToDS}>
        <ListItemText>Delete Slot</ListItemText>
      </ListItem>

     

    </List>
  )}
export default Menu;
