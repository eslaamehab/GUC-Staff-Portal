import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
export default class viewReplacementRequests extends Component {
    constructor(props){
        super(props);


        this.state= {
            leaves: {Email: '',ID: '',     type:'', startDate:'', endDate:'',submissionDate:'',status: '',replacementStatus:'',replacementDay:'', replacementStaffMember:'', departmentName:'', courseName:'',document: '', skippedDay: '',  HODemail: '',replacementStaffEmail:''}
            


        }
        axios.get('http://localhost:3000/viewReplacementRequest')
        .then(res=> {
            this.setState({leaves: res.data})
            console.log(res)
        })
        .catch((error)=>{
            console.log('Not Successful');
            
        })

    }

    

    render() {
        return (
        <div>
          <h3>View Replacement Requests</h3>
          
            
            </div>
    
        )
      }
    }



 
            