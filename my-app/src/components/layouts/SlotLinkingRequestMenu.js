import React from 'react'
import {Nav, NavDropdown, DropdownButton,MenuItem, Dropdown, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";

function SlotLinkingRequestMenu() {

  const history = useHistory();

  const goToSendSlotLinking = () => {
    history.push('/sendslotlinkingrequest')
  }
  const goToViewSlotLinking = () => {
    history.push('/viewslotlinkingrequest')
  }
  const goToAcceptSlotLinkingOptions = () => {
    history.push('/acceptslotlinkingrequest')
  }

  const goToSLStatus = () => {
    history.push('/viewslotlinkingstatus')
  }
  const goToRSL = () => {
    history.push('/rejectSlotLinkingRequest')
  }
  return (
    <List disablePadding dense>
      <ListItem button  onClick = {goToSendSlotLinking}  >
        <ListItemText> Send Slot Linking Requests</ListItemText>
        
      </ListItem>

      <ListItem button onClick = {goToViewSlotLinking} >
        <ListItemText> View Slot Linking Requests</ListItemText>
      </ListItem>

      <ListItem button onClick = {goToAcceptSlotLinkingOptions} >
        <ListItemText> Accept Slot Linking Requests</ListItemText>
      </ListItem>

      
      <ListItem button onClick = {goToRSL} >
        <ListItemText>Reject Slot Linking Request </ListItemText>
      </ListItem>

      <ListItem button onClick = {goToSLStatus} >
        <ListItemText>View Slot Linking Request Status</ListItemText>
      </ListItem>


     

    </List>
  )}
export default SlotLinkingRequestMenu;
