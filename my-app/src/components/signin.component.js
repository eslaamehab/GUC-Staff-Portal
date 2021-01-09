import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class signin extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
      
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            Email: ''
        }
    }

    onChangeEmail(e){
        this.setState({
            Email: e.target.value
        });
    }



    onSubmit(e){
        e.preventDefault();

        const reg = {
            Email:this.state.Email

        }

        

        console.log(reg);

            axios.post('http://localhost:3000/signin',reg)
        .then(res=> {
            console.log(res.data)
            //window.location = '/profile'; 
        })
        .catch((error)=>{
            console.log('Error');
            
        })
    }





    render() {
        return (
            <div>
            <h1>Sign in</h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Email: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.Email}
                    onChange={this.onChangeEmail}
                    />
                  
              </div>
  
              <div className="form-group">
                <input type="submit" value="Sign in" className="btn btn-primary" />
              </div>
            </form>
          </div>
       
        )
      }
    }