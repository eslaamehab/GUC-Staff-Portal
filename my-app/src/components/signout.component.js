import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class signout extends Component {
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

            axios.post('http://localhost:3000/signout',reg)
        .then(res=> {
            this.setState({v: res.data})
            console.log(res.data)
            //window.location = '/profile'; 
        })
        .catch((error)=>{
            console.log('Error');
            
        })
    }





    render() {
        return (
            <div  className ="alla">
                <Navbar/>
            <h1>Sign out</h1>
            <form  className = "textbox" onSubmit={this.onSubmit}>
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
                <input type="submit" value="Sign out" className="btn btn-info" />
              </div>
            </form>
            <p className ="alert">{this.state.v}</p>
          </div>
       
        )
      }
    }