import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";

//HOD



function Sidebar3() {
  const history = useHistory();

  const goToDepartment1 = () => {
    history.push('/addDepartments')
  }
   const goToDepartment2 = () => {
    history.push('/UpdateDepartment')
  }
  const goToDepartment3 = () => {
    history.push('/deleteDepartement')
  }

  
  
 
 



  return (
    <List disablePadding dense>
    
      
   

    <ListItem button onClick={goToDepartment1}>
        <ListItemText>Add Department </ListItemText>
      </ListItem>
      <ListItem button onClick={goToDepartment2}>
        <ListItemText>Update Department</ListItemText>
      </ListItem>
      <ListItem button onClick={goToDepartment3}>
        <ListItemText>Delete Department</ListItemText>
      </ListItem>

     


      

     
      

    </List>
  )
}

export default Sidebar3