import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";

//General User

function SidebarItem({ label, items, depthStep = 10, depth = 0, ...rest }) {
  return (
    <>
      <ListItem button dense {...rest}>
        <ListItemText style={{ paddingLeft: depth * depthStep }}>
          <span>{label}</span>
        </ListItemText>
      </ListItem>
      {Array.isArray(items) ? (
        <List disablePadding dense>
          {items.map((subItem) => (
            <SidebarItem
              key={subItem.name}
              depth={depth + 1}
              depthStep={depthStep}
              {...subItem}
            />
          ))}
        </List>
      ) : null}
    </>
  )
}

function Sidebar({ items, depthStep, depth }) {

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
    <div className="sidebar">
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <SidebarItem
            key={`${sidebarItem.name}${index}`}
            depth={depth}
            depthStep={depthStep}
            
            {...sidebarItem}
          />
        ))}
      </List>
    </div>

    


  )
}



export default Sidebar