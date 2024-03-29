import React from 'react'
import {Nav, NavDropdown, DropdownButton,MenuItem, Dropdown, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";

function RequestMenu() {

  const history = useHistory();


  const goToSlotLinkingOptions = () => {
    history.push('/viewAllS')
  }
  const goToDayOffOptions = () => {
    history.push('/viewAllD')
  }
  const goToRepOptions= () => {
    history.push('/viewAllR')
  }
  const viewP= () => {
    history.push('/viewPendingDayoffRequests')
  }
  const viewR= () => {
    history.push('/viewRejectedDayOffRequests')
  }
  const viewA= () => {
    history.push('/viewAcceptedDayOffRequests')
  }
  
  

  return (
    <List disablePadding dense>
      <ListItem  button onClick = {goToSlotLinkingOptions}  >
        <ListItemText>Slot Linking Requests</ListItemText>
      </ListItem>

      <ListItem button onClick = {goToDayOffOptions} >
        <ListItemText>Day Off Requests</ListItemText>
      </ListItem>

      <ListItem button onClick = {goToRepOptions}>
        <ListItemText>Replacement Requests</ListItemText>
      </ListItem>

      <ListItem button onClick = {viewA}>
        <ListItemText>View Accepted Requests</ListItemText>
      </ListItem>
      <ListItem button onClick = {viewR}>
        <ListItemText>View Rejected Requests</ListItemText>
      </ListItem>
      <ListItem button onClick = {viewP}>
        <ListItemText>View Pending Requests</ListItemText>
      </ListItem>

     

    </List>
  )}
export default RequestMenu;
