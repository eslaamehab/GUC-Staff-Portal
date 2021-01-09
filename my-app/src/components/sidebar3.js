import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";

//HOD



function Sidebar2() {
  const history = useHistory();

  const routeAttendance = () =>{ 
    let path = '/attendance'; 
    history.push(path);
  }

  const routeMissHours = () =>{ 
    let path = '/missinghours'; 
    history.push(path);
  }

  const routeMissDays = () =>{ 
    let path = '/missingdays'; 
    history.push(path);
  }

  const routeUpdatePassword = () =>{ 
    let path = '/updatePassword'; 
    history.push(path);
  }


  const routeLogout = () =>{ 
    let path = '/logout'; 
    history.push(path);
  }

  
 


  return (
    <List disablePadding dense>
      <ListItem button>
        <ListItemText>Home</ListItemText>
      </ListItem>

      

      <ListItem button>
        <ListItemText>Access Staff Attendance</ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>Access Staff Missing Days</ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>Access Staff Missing Hours</ListItemText>
      </ListItem>

      <ListItem button onClick={routeAttendance}>
        <ListItemText>View Attendance</ListItemText>
      </ListItem>
      <ListItem button onClick={routeMissDays}>
        <ListItemText>View Missing Days</ListItemText>
      </ListItem>
      <ListItem button onClick={routeMissHours}>
        <ListItemText>View Missing Hours</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>View Leave Reqeuests</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Send Leave Reqeuest</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>View Replacement Reqeuests</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Send Replacement Reqeuest</ListItemText>
      </ListItem>
      <ListItem button onClick={routeUpdatePassword}>
        <ListItemText>Reset Password</ListItemText>
      </ListItem>
      <ListItem button onClick={routeLogout}>
        <ListItemText>Logout</ListItemText>
      </ListItem>


      <ListItem button>
        <ListItemText>Add course instructors</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Update course instructors</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Delete course instructors</ListItemText>
      </ListItem>


      
      <ListItem button>
        <ListItemText>View Teaching Assignments</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>View Coverage</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>View Requests</ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>View Staff</ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>View Staff Day off</ListItemText>
      </ListItem>

    </List>
  )
}

export default Sidebar2