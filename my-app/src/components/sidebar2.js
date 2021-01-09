import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";



//HR

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
        <ListItemText>Register New Staff</ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>Update Staff Member</ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>Delete Staff Member</ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>Update Staff Member Salary</ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>Manual Sign in/out</ListItemText>
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
        <ListItemText>Add location</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Update location</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Delete location</ListItemText>
      </ListItem>


      <ListItem button>
        <ListItemText>Add faculty</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Update faculty</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Delete faculty</ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>Add department</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Update department</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Delete department</ListItemText>
      </ListItem>

      <ListItem button>
        <ListItemText>Add course</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Update course</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Delete course</ListItemText>
      </ListItem>

    </List>
  )
}

export default Sidebar2