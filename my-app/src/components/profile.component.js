import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Sidebar from './sidebar'
import SidebarProfile from './SidebarProfile';
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
      
       const zeft = <div className = "body"  >

            
       <h1   className = "titleb">
         WELCOME {this.state.user.name} 
         
         </h1>
       
      
       <p className = "title" >
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

         
         <div className ="bg">
           <Navbar />
           <h1 className ="sidebar">
                      <SidebarProfile />
                      </h1>

           {zeft}

           <h90>
        
        
       
<li className ="bg">
       Contact Us: GermanUniversityInCairo@gmail.com </li>
    <li className ="bg">   Address: tagamoa el talet</li>
    <li className ="bg">   Done by
    <li className ="bg">  mohamedyasser15999@gmail.com</li>
    <li className ="bg">  zeinashabaka@gmail.com</li>
    <li className ="bg">  AmrHesham@gmail.com</li>
    <li className ="bg">  EslamEhab@gmail.com</li>
    <li className ="bg">   Thank you</li>
    </li>
        </h90> 
         </div>
       )
     }

    

}




    
