import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewAllReplacementRequest extends Component {
    constructor(props){
        super(props);
        this.state= {
         replacementrequest:[{_id:'',Email:'',replacingTAEmail:'',date:'',slot:'',course:'',location:'',time:'',status:'',reasonOfrejection:''}]
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

    axios.get('http://localhost:3000/viewReplacementRequests')
  .then(response => {
      this.setState({replacementrequest: response.data})
      console.log(response)
    }
      )
  .catch(error => console.log(error));
    }
    
    
   
    
      render() {
        const zeft = this.state.replacementrequest.map((invoice, index) => {
          return (
              <tr key={invoice.replacingTAEmail}>
                  
                  <h4>ID: {invoice._id}</h4>

                  <h4>Sending TA: {invoice.Email}</h4>
                  <h4>Date of slot: {invoice.date}</h4>
                  <h4>Slot number: {invoice.slot}</h4>
                  <h4>Course for slot: {invoice.course}</h4>
                  <h4>Request status: {invoice.status}</h4>
                  <h4>Time of slot:{invoice.time}</h4>
                  <h4>Reason of rejection:{invoice.reasonOfrejection}</h4>
                  
              </tr>
          )
      }
      )
        return (

          <div>
        <Navbar/>
<h1> YOUR REPLACEMENT REQUESTS:</h1>
{zeft}
          </div>
           
        )
      }  
    

}