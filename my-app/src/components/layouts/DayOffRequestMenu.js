import React from 'react'
import {Nav, NavDropdown, DropdownButton,MenuItem, Dropdown, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";

function DayOffRequestMenu() {

  const history = useHistory();

  const goToSubmitDayOff = () => {
    history.push('/submitdayoffrequest')
  }
  const goToViewDayOff = () => {
    history.push('/viewdayoffrequests')
  }
  const goToAcceptDayOff = () => {
    history.push('/acceptdayoffrequests')
  }

  const goToDayOffStatus = () => {
    history.push('/viewdayoffrequeststatus')
  }

  return (
    <List disablePadding dense>
      <ListItem button  onClick = {goToSubmitDayOff}  >
        <ListItemText> Send Day Off Requests</ListItemText>
        
      </ListItem>

      <ListItem button onClick = {goToViewDayOff} >
        <ListItemText> View Day Off Requests</ListItemText>
      </ListItem>

      <ListItem button onClick = {goToAcceptDayOff} >
        <ListItemText> Accept Day Off Requests</ListItemText>
      </ListItem>

      <ListItem button onClick = {goToDayOffStatus} >
        <ListItemText> View Day Off Request Status</ListItemText>
      </ListItem>

     

    </List>
  )}
export default DayOffRequestMenu;
