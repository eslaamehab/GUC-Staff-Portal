import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewrepreqasHOD extends Component {
    constructor(props){
        super(props);

        this.state= {
         replacementrequest:[{Email:'',replacingTAEmail:'',date:'',slot:'',course:'',location:'',time:'',status:'',reasonOfrejection:'',HeadOfDepartmentEmail:''}]
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

    axios.get('http://localhost:3000/ViewReplacementRequestsAsHOD')
  .then(response => {
      this.setState({replacementrequest: response.data})
      console.log(response)
    }
      )
  .catch(error => console.log(error));
    }
    

    
    
    
      render() {
        return (
            this.state.replacementrequest.map((invoice, index) => {
                return (
                    <tr key={invoice.HeadOfDepartmentEmail}>
                        <h1> YOUR REPLACEMENT REQUESTS:</h1>

                        <h4>Sending TA: {invoice.Email}</h4>
                        <h4>Date of slot: {invoice.date}</h4>
                        <h4>Slot number: {invoice.slot}</h4>
                        <h4>Course for slot: {invoice.course}</h4>
                        <h4>Request status: {invoice.status}</h4>
                        <h4>Time of slot:{invoice.time}</h4>
                        <h4>Reason of rejection:{invoice.reasonOfrejection}</h4>
                        
                    </tr>
                )
            })
        )
      }  
    

}