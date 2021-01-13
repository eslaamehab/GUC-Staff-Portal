import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Sidebar from './sidebar'
import Sidebar2 from './sidebar2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layouts/Navbar';
import '../profileInfo.css'
//import style from './styles/style.css';

export default class profile extends Component {

  
    constructor(props){
        super(props);

        this.state= {
            user:{Email: '',name:'',type: '',ID: '',salary:'',faculty:'',department:'',gender:'',officelocation:'',firstTime:0,courses:[], dayoff:'',annualLeaveBalance:0,accidentalLeaveBalance:0}  
        }

        
          
 
          
          

    /* axios.get('/profile', {
        params: {
          emailTest: 'Slim@gmail.com'
        }
    }).then(function (response) {
        console.log(response);
      })
    
    
    }*/

    axios.get('http://localhost:3000/profile')
  .then(response => {
      this.setState({user: response.data})
      console.log(response)
    }
      )
  .catch(error => console.log(error));
    }
    
    
    
    
    
     render(){
      const x = this.state.user.courses;
      
       const zeft = <div className = "welcome"  >

            
       <h1   >
         WELCOME {this.state.user.name} 
         
         </h1>
       
      
       <p className = "welcome2" >
       <h10>
       <li classNalignleftame ="">ID: {this.state.user.ID}</li>
       <li>Type: {this.state.user.type}</li>
       <li>Faculty: {this.state.user.faculty}</li>  
       <li>Department: {this.state.user.department}</li>
       <li>Gender: {this.state.user.gender}</li>
       <li>Office Location: {this.state.user.officelocation}</li>
       <li>Day off: {this.state.user.dayoff}</li>
       <li>Annual Leave Balance: {this.state.user.annualLeaveBalance}</li>
       <li>Accidental Leave Balance: {this.state.user.accidentalLeaveBalance}</li>

       <li>Courses:{this.state.user.courses} </li>
       </h10>
      
       
       </p>

      
       </div>
       return(

         
         <div>
           <Navbar />

           {zeft}
         </div>
       )
     }

    

}




    
