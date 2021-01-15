import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewDayOffInfo extends Component {
    constructor(props){
        super(props);
       

        this.state= {
         dayoffrequest:[{_id:'',Email:'',headOfDepartementEmail:'',requestedDayOff:'',accepted:'',status:'',reasonOfrequest:'',reasonOfRejection:''}]
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
    axios.get('http://localhost:3000/viewdayoffrequests')
    .then(response => {
        this.setState({dayoffrequest: response.data})
        console.log(response)
      }
        )
    .catch(error => console.log(error));
    }

   
       
          
   
    

  
        
    
    
      render() {
      const  zeft=            this.state.dayoffrequest.map((invoice, index) => {
                
            return (<div>
                
                
                
                
                
                <table>

                <tr key={invoice.headOfDepartementEmail}>
                    <tr>
                    <th scope="col">Request ID  </th>

<th scope="col">Teacher's Assistant Email     </th>

<th scope="col">Requested Day off      </th>
<th scope="col">Request Status     </th>
<th scope="col">Reason for request     </th>
<th scope="col">Reason of Rejection     </th>
</tr>
<tr><th scope="row">{invoice._id}</th>
                    <td> {invoice.Email}      </td>
                    <td> {invoice.requestedDayOff}     </td>
                    <td> {invoice.status}     </td>
                    <td> {invoice.reasonOfrequest}    </td>
                    <td>{invoice.reasonOfRejection}    </td>

    </tr>

                    

                </tr> </table>


      </div>





            )
        })
        return (
            <div>
              <Navbar/>
            <h1>Your Recieved Day Off Requests </h1>
            {zeft}
                    </div>
            
        )




      }  
    

}