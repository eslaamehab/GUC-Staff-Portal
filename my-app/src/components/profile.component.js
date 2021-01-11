import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class profile extends Component {
    constructor(props){
        super(props);

        this.state= {
            user:{Email: '',name:'',type: '',password: '',faculty:'',department:'',gender:'',officelocation:'',firstTime:0,courses:[], dayoff:''}  
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
    

    
    
      render() {
        return (
            <div>
            <h1>This is your profile</h1>
            <p>Welcome {this.state.user.Email}  </p>
            <p>            {this.state.user.type} </p>
                      
            </div>
        )
      }  

    

}




    
