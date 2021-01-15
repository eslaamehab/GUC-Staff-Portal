import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';
import Sidebar4 from './Sidebar4';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewLocationsInfo extends Component {
    constructor(props){
        super(props);
       

        this.state= {
         loc:[{_id:'',RoomName:'',type:'',Capacity:'',Count:''}]
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
    axios.post('http://localhost:3000/viewLocations')
    .then(response => {
        this.setState({loc: response.data})
        console.log(response)
      }
        )
    .catch(error => console.log(error));
    }

   
       
          
   
    

  
        
    
    
      render() {
       const zeft=    
            this.state.loc.map((invoice, index) => {
                  return (
            <tr >
                <h1> -----------------------------------</h1>
                <h4> ID: {invoice._id}</h4>
                <h4> Room Name: {invoice.RoomName}</h4>
                <h4> Type: {invoice.type}</h4>
                <h4> Capacity: {invoice.Capacity}</h4>
                <h4> Count: {invoice.Count}</h4>
                
                
            </tr>
        )
    }

  )
    

           
           return(
               <div className = "all">
                    <Navbar />

                    <h1 className ="sidebar">
                      <Sidebar4 />
                      </h1>
                   <h1> All Locations 
                       { zeft}
                   </h1>


               </div>
           )
}
}

