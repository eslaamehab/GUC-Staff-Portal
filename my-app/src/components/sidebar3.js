import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";

//HOD



function Sidebar3() {
  const history = useHistory();

  const AddUInstructor = () =>{ 
    let path = '/AddUpdateInstructor'; 
    history.push(path);
  }

  const UpdateInstructor = () =>{ 
    let path = '/AddUpdateInstructor'; 
    history.push(path);
  }


  const deleteinstructor = () =>{ 
    let path = '/deleteinstructor'; 
    history.push(path);
  }

  
  const goToCourses1 = () => {
    history.push('/Addcourses')
  }
  const goToCourses2 = () => {
    history.push('/updateCourse')
  }
  const goToCourses3 = () => {
    history.push('/deleteCourse')
  }


  const coverage = () => {
    history.push('/viewCoverage')
  }

  const coverage1 = () => {
    history.push('/viewCoverageOfAssignedCourse')
  }
 
 
 
 



  return (
    <List disablePadding dense>
    
      
   

    <ListItem button onClick={goToCourses1}>
        <ListItemText>Add Course </ListItemText>
      </ListItem>
      <ListItem button onClick={goToCourses2}>
        <ListItemText>Update Course</ListItemText>
      </ListItem>
      <ListItem button onClick={goToCourses3}>
        <ListItemText>Delete Delete</ListItemText>
      </ListItem>

      <ListItem button onClick={AddUInstructor}>
        <ListItemText>Add Instructor</ListItemText>
      </ListItem>
      <ListItem button onClick={UpdateInstructor}>
        <ListItemText>Update Instructor</ListItemText>
      </ListItem>
      <ListItem button onClick={deleteinstructor}>
        <ListItemText>Delete Instructor</ListItemText>
      </ListItem>


      <ListItem button onClick={coverage}>
        <ListItemText>View Coverage </ListItemText>
      </ListItem>

      <ListItem button onClick={coverage1}>
        <ListItemText>view Coverage Of Assigned Course </ListItemText>
      </ListItem>

     
      

    </List>
  )
}

export default Sidebar3