import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
export default class loginInfo extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
        <div>
          <h3>Login</h3>
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
              <label>password: </label>
              <input  type="password"
                  required
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  />
            </div>

            <div className="form-group">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }