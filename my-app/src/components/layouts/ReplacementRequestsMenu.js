import React from 'react'
import {Nav, NavDropdown, DropdownButton,MenuItem, Dropdown, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from "react-router-dom";

function ReplacementRequestsMenu() {

  const history = useHistory();

  const goToSubmitReplacement = () => {
    history.push('/sendReplacementRequest')
  }
  const goToViewReplacement = () => {
    history.push('/viewReplacementRequests')
  }
  const goToViewReplacementbyID = () => {
    history.push('/AcceptReplacementRequestbyID')
  }
  const goToRRRTA = () => {
    history.push('/RejectReplacementRequestTA')
  }


  

  const ForwardHOD = () => {
    history.push('/ForwardReplacementReqtoHOD')
  }

  const viewHOD = () => {
    history.push('/ViewReplacementRequestsAsHOD')
  }
  const verifyHOD = () => {
    history.push('/HODReplacementRequestsVerify')
  }
  const CancelPending = () => {
    history.push('/cancelPendingReplacement')
  }
  const CancelUpcoming = () => {
    history.push('/cancelUpcomingReplacementRequest')
  }
  
  const goToRRRHOD= () => {
    history.push('/HODRepReqRej')
  }
  return (
    <List disablePadding dense>
      <ListItem button  onClick = {goToSubmitReplacement}  >
        <ListItemText> Send Replacement Requests</ListItemText>
        
      </ListItem>

      <ListItem button onClick = {goToViewReplacement} >
        <ListItemText> View Replacement Requests</ListItemText>
      </ListItem>

      <ListItem button onClick = {goToViewReplacementbyID} >
        <ListItemText> Accept Replacement Requests by ID(TA)</ListItemText>
      </ListItem>

      <ListItem button onClick = {goToRRRTA} >
        <ListItemText> Reject Replacement Requests by ID(TA)</ListItemText>
      </ListItem>
      
      <ListItem button onClick = {ForwardHOD} >
        <ListItemText> Forward Replacement Requests to HOD</ListItemText>
      </ListItem>
      <ListItem button onClick = {viewHOD} >
        <ListItemText> View Replacement Requests(Head Of Departement)</ListItemText>
      </ListItem>
      <ListItem button onClick = {verifyHOD} >
        <ListItemText> Verify Replacement Requests(Head Of Departement)</ListItemText>
      </ListItem>
      <ListItem button onClick = {goToRRRTA} >
        <ListItemText> Reject Replacement Requests(Head Of Departement)</ListItemText>
      </ListItem>
     
      <ListItem button onClick = {CancelPending} >
        <ListItemText> Cancel Pending Replacement Requests</ListItemText>
      </ListItem>
      <ListItem button onClick = {CancelUpcoming} >
        <ListItemText> Cancel Upcoming Replacement Requests</ListItemText>
      </ListItem>



     
     

    </List>
  )}
export default ReplacementRequestsMenu;
