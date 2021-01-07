import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class profile extends Component {
    constructor(props){
        super(props);

     axios.get('/profile', {
        params: {
          emailTest: 'Slim@gmail.com'
        }
    }).then(function (response) {
        console.log(response);
      })
    
    
    }

    
      render() {
        return (
          <ul>
            
          </ul>
        )
      }  

    

}




    
