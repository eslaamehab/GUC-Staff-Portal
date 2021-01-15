import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';
import SidebarLeaves from './SidebarLeaves';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewAllLeavesInfo extends Component {
    constructor(props){
        super(props);
       

        this.state= {
         leaves:[{_id:'',Email:'',ID:'',type:'',startDate:'',endDate:'',submissionDate:'',status:'',replacementStatus:'',replacementDay:'',replacementStaffMember:'',departmentName:'',courseName:'',document:'',skippedDay:'',HODemail:'',replacementStaffEmail:''}]
        //replacementrequest:[{Email:'',replacingTAEmail:'',date:'',slot:'',course:'',location:'',time:'',status:'',reasonOfrejection:''}]


      
  
        }


    /* axios.get('/profile', {
        params: {
          emailTest: 'Slim@gmail.com'
        }
    }).then(function (response) {
        console.log(response);
      })
    
    
    }*/
    axios.post('http://localhost:3000/viewAllLeaves')
    .then(response => {
        this.setState({leaves: response.data})

        console.log(response)
      }
        )
    .catch(error => console.log(error));
    }

   
       
          
   
    

  
        
    
    
      render() {
     
       const zeft=    
            this.state.leaves.map((invoice, index) => {
                  return (
            <tr >

                <h1> -----------------------------------</h1>
                <h4> _id: {invoice._id}</h4>
                <h4> Email: {invoice.Email}</h4>
                <h4> ID: {invoice.ID}</h4>
                <h4> type: {invoice.type}</h4>
                <h4> startDate: {invoice.startDate}</h4>
                <h4> endDate: {invoice.endDate}</h4>
                <h4> submissionDate: {invoice.submissionDate}</h4>
                <h4> status: {invoice.status}</h4>
                <h4> replacementStatus: {invoice.replacementStatus}</h4>
                <h4> replacementDay: {invoice.replacementDay}</h4>
                <h4> replacementStatus: {invoice.replacementStatus}</h4>
                <h4> replacementStaffMember: {invoice.replacementStaffMember}</h4>
                <h4> departmentName: {invoice.departmentName}</h4>

                <h4> courseName: {invoice.courseName}</h4>

                <h4> document: {invoice.document}</h4>
                <h4> skippedDay: {invoice.skippedDay}</h4>
                <h4> HODemail: {invoice.HODemail}</h4>
                <h4> replacementStaffEmail: {invoice.replacementStaffEmail}</h4>
              
               
                
                
            </tr>
        )
    }

  )
    

           
           return(
               <div className ="all">
                    <Navbar />

                    <h1 className ="sidebar">
                      <SidebarLeaves />
                      </h1>
                      <h1>
                      All Leaves for  {this.state.leaves[0].HODemail}

                      </h1>
                   <h1>
                       { zeft}
                   </h1>


               </div>
           )
}
}

