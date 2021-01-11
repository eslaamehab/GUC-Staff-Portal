import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class missinghours extends Component {
    constructor(props){
        super(props);

        this.state= {
            v:String
        }

  

    axios.get('http://localhost:3000/accessMissingHours')
  .then(response => {
      this.setState({v: response.data})
      //console.log(response)
    }
      )
  .catch(error => console.log(error));
    }
    

    
    
      render() {
        return (
            <div>
            <h1>You have missed</h1>
            <p>{this.state.v} </p>
            </div>
        )
      }  

    

}