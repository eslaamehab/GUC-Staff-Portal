import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

import Menu from './layouts/Menu';

import '../profileInfo.css'

//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewAllSlotsInDB extends Component {
    constructor(props){
        super(props);

        this.state= {
         slot:[{_id:'',Email:'',day:'',type:'',no:'',time:'',location:'',course:'',date:''}]
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
    
    

    axios.get('http://localhost:3000/viewAllSlots')
    .then(response => {
        this.setState({slot: response.data})
        console.log(response)
      }
        )
    .catch(error => console.log(error));
      }
    
    
      render() {
      const  zeft=            this.state.slot.map((invoice, index) => {
                
            return ( 
            
            
            <tr key={invoice.replacingTAEmail}>
                
  
              <h4>ID: {invoice._id}</h4>
              <h4>Email: {invoice.Email}</h4>
              <h4>Day: {invoice.day}</h4>
              <h4>type: {invoice.type}</h4>
              <h4>Date of slot:{invoice.date}</h4>

              <h4>Slot number: {invoice.no}</h4>
              <h4>Course for slot: {invoice.course}</h4>
              <h4>Time of slot:{invoice.time}</h4>
              <h4>Location of slot:{invoice.location}</h4>
              <h4>----------------------------------------------------------</h4>

          </tr>



            )
        })


        return (
            <div  className ="alla">
              
            <Navbar />

            <h1 className="x"><Menu/></h1>
            {zeft}

                                     </div>

        )




      }  
    

}
