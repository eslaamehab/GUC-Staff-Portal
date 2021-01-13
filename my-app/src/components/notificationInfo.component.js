import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class notificationInfo extends Component {
    constructor(props){
        super(props);

        this.state= {
         notification:[{Email:'',Message:'',courseCoordinatorEmail:'',headOfDepartementEmail:'',reasonOfRejection:''}]
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
    
    

   
        axios.get('http://localhost:3000/viewmynotification')
        .then(response => {
            this.setState({notification: response.data})
            console.log(response)
          }
            )
        .catch(error => console.log(error));
        }
   
    

  
        
    
    
      render() {
      const  zeft=            this.state.notification.map((invoice, index) => {
                
            return (<tr key={invoice.Email}>
              

             
              <h4>Message: {invoice.Message}</h4>
              <h4>Coordinator's Email: {invoice.courseCoordinatorEmail}</h4>
              <h4>Head Of Department's Email: {invoice.headOfDepartementEmail}</h4>
              <h4>Request status: {invoice.headOfDepartementEmail}</h4>
              <h4>Reason of rejection:{invoice.reasonOfrejection}</h4>
              <h1>


-------------------------------------------------------------------------------------------------

              </h1>
          </tr>



            )
        })













        return (
            <div> 
            <h1> YOUR REPLACEMENT REQUESTS:</h1>
            {zeft}
                    </div>
            
        )




      }  
    

    }