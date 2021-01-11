import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
export default class viewLeaveRequests extends Component {
    constructor(props){
        super(props);
        


        this.state= {
            leave:[{Email: '',ID: '', type:'', startDate:'', endDate:'',submissionDate:'',status: '',replacementStatus:'',replacementDay:'', replacementStaffMember:'', departmentName:'', courseName:'',document: '', skippedDay: '',  HODemail: '',replacementStaffEmail:''}]
        }


        
        

        
                axios.get('http://localhost:3000/viewLeaveRequests')
        .then(response=> {
            const leave = response.data;
            this.setState({leave});
            
            console.log(this.state.leave);
            


            //console.log(this.state.leave)
           

            console.log('Successful');
        })
        .catch((error)=>{
            console.log('Not Successful');
            
        })
        

        

    }

    

     render() {
        
        const x = this.state.leave;
        
        
        return (
        <div>
          <h3>View Leave Requests</h3>
            <p>{this.state.leave[0].type}</p>
                      
            </div>
    
        )
      }
      
    }



 
   /* <ul>
    {x.map(item => {
    return <li>{item}</li>;
    })}
    </ul>*/