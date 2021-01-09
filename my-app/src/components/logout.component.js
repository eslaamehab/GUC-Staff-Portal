import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
export default class loginInfo extends Component {
    constructor(props){
        super(props);

       

        this.state= {
           
        }

        axios.post('http://localhost:3000/logout')
        .then(res=> {
            //console.log(res.data)
            window.location = '/login'; 
        })
        .catch((error)=>{
            console.log('Wrong Email or password');
            
        })

    }

    

    render() {
        return (
        <div>
          <h3>Successfuly Logged Out!</h3>
        </div>
        )
      }
}