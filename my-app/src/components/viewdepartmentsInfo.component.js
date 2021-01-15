import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';
import Sidebar from './sidebar';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewdepartmentsInfo extends Component {
    constructor(props){
        super(props);
       

        this.state= {
         loc:[{_id:'',DepartmentName:'',FacultyName:'',Facultyid:''}]
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
    axios.get('http://localhost:3000/viewdepartments')
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
                <h4> Department Name: {invoice.DepartmentName}</h4>
                <h4> Faculty Name: {invoice.FacultyName}</h4>
                <h4> Faculty ID: {invoice.Facultyid}</h4>
               
                
                
            </tr>
        )
    }

  )
    

           
           return(
               <div className = "all">
                    <Navbar />
                    <h1 className ="sidebar">
                      <Sidebar />
                      </h1>
                   <h1> All Departments
                       { zeft}
                   </h1>


               </div>
           )
}
}

