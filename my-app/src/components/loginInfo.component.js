import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavDropdown, DropdownButton,MenuItem, Form , LabelDropdown, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import '../loginInfo.css'

export default class loginInfo extends Component {
    
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state= {
            Email: '',
            password: ''
        }
    }

    onChangeEmail(e){
        this.setState({
            Email: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const log = {
            Email:this.state.Email,
            password:this.state.password
        }

        

        console.log(log);

            axios.post('http://localhost:3000/login',log)
        .then(res=> {
            console.log(res.data)
            window.location = '/profile'; 
        })
        .catch((error)=>{
            console.log('Wrong Email or password');
            
        })
    }





    render() {
        return (


    <div  className = "App-header">
    
            <form  onSubmit={this.onSubmit}>
              <div className="font-weight-bold"> 
                <label>Email: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.Email}
                    onChange={this.onChangeEmail}
                    />
                  
              </div>
              <div className="font-weight-bold"> 
                <label>password: </label>
                <input  type="password"
                    required
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    />
              </div>
  
              <div className="App-link">
              <button className ="btn-lg btn-dark btn-block" input type="submit "> 
              LOGIN
               </button>
              </div>
            </form>
         
          
            </div>
            
           

        )
      }
    }