import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

//import Dropdown from './dropdownmenu/Dropdown';
export default class missinghours extends Component {
    constructor(props){
        super(props);

        this.state= {
            v:String
        }

    /* axios.get('/profile', {
        params: {
          emailTest: 'Slim@gmail.com'
        }
    }).then(function (response) {
        console.log(response);
      })
    
    
    }*/

    axios.get('http://localhost:3000/missinghours')
  .then(response => {
      this.setState({v: response.data})
      //console.log(response)
    }
      )
  .catch(error => console.log(error));
    }
    

    
    
      render() {
        return (
            <div  className ="alla">
              <Navbar/>
            <h1 className ="alert">You have missed {this.state.v}</h1>
            </div>
        )
      }  

    
    }
