import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewSlotLinkingInfo extends Component {
    constructor(props){
        super(props);
        this.state= {
         slotlinkingrequest:[{_id:'',Email:'',CourseCoordinatorEmail:'',day:'',slot:'',course:'',accepted:'',status:''}]
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

    axios.get('http://localhost:3000/viewslotlinkingrequest')
  .then(response => {
      this.setState({slotlinkingrequest: response.data})
      console.log(response)
    }
      )
  .catch(error => console.log(error));
    }
    

   
    
      render() {
          
      const  zeft=            this.state.slotlinkingrequest.map((invoice, index) => {
                
        return (<div>
            
            
            
            
            
            <table>

            <tr key={invoice.CourseCoordinatorEmail}>
                <tr>
                <th scope="col">Request id    </th>

<th scope="col">Sending TA  </th>

<th scope="col">Day of the slot  </th>
<th scope="col">Slot Number  </th>
<th scope="col">Course for Slot  </th>
<th scope="col">Request Status  </th>
</tr>
<tr><th scope="row">{invoice._id}</th>
<td> {invoice.Email}</td>

                <td> {invoice.day}</td>
                <td> {invoice.slot}</td>
                <td> {invoice.course}</td>
                <td>{invoice.status}</td>

</tr>

                

            </tr> </table>


  </div>





        )
    })
        return (
            <div>
              <Navbar/>
            <h1>Slot Linking requests</h1>
            {zeft}
                    </div>
        )
      }  
    

}