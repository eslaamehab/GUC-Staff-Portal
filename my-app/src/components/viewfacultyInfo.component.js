import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';
import Sidebar2 from './sidebar2';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewfacultyInfo extends Component {
    constructor(props){
        super(props);
       

        this.state= {
         loc:[{_id:'',departmentsInFaculties:[],facultyName:''}]
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
    axios.get('http://localhost:3000/viewfaculty')
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
                <h4> ID : {invoice._id}</h4>
                <h4> Department Name: {invoice.departmentsInFaculties}</h4>
                <h4> Faculty Name: {invoice.FacultyName}</h4>
                
               
                
                
            </tr>
        )
    }

  )
    

           
           return(
             <div className = "all">
               <div >
                    <Navbar />
                    <h1 className ="sidebar">
                      <Sidebar2 />
                      </h1>
                   <h1> All Faculties
                       { zeft}
                   </h1>


               </div>
               </div>
           )
}
}

