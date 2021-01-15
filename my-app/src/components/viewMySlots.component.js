import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewMySlot extends Component {
    constructor(props){
        super(props);
       

        this.state= {
         slot:[{Email:'',day:'',type:'',no:'',time:'',location:'',course:'',date:''}]
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
    axios.get('http://localhost:3000/viewMySlots')
    .then(response => {
        this.setState({slot: response.data})
        console.log(response)
      }
        )
    .catch(error => console.log(error));
    }

   
       
          
   
    

  
        
    
    
      render() {
      const  zeft=            this.state.slot.map((invoice, index) => {
                
            return (<div>
                
                
                
                
                
                <table>

                <tr key={invoice.Email}>
                    <tr>
<th scope="col">DAY</th>

<th scope="col">Number</th>
<th scope="col">Timing</th>
<th scope="col">Location</th>
<th scope="col">Course</th>
<th scope="col">Date</th>
<th scope="col" >Type</th>
</tr>
<tr><th scope="row">{invoice.day}</th>
                    <td> {invoice.no}</td>
                    <td> {invoice.time}</td>
                    <td> {invoice.location}</td>
                    <td> {invoice.course}</td>
                    <td>{invoice.date}</td>
                    <td> {invoice.type}</td>

    </tr>

                    

                </tr> </table>


      </div>





            )
        })
        return (
            <div  className ="alla">
              <Navbar/>
            {zeft}
                    </div>
            
        )




      }  
    

}