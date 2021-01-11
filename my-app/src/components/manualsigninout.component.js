import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class manualsigninout extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
      
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            Email: '',
            date:'',
            signin:'',
            signout:''
        }
    }

    onChangeEmail(e){
        this.setState({
            Email: e.target.value
        });
    }

    onChangeIn(e){
        this.setState({
            signin: e.target.value
        });
    }

    onChangeOut(e){
        this.setState({
            signout: e.target.value
        });
    }

    onChangeDate(e){
        this.setState({
            date: e.target.value
        });
    }



    onSubmit(e){
        e.preventDefault();

        const reg = {
            Email:this.state.Email,
            signin:this.state.signin,
            signout:this.state.signout,
            date:this.state.date

        }

        

        console.log(reg);

            axios.post('http://localhost:3000/manualsigninout',reg)
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
            <h1>Manual Sign in/out</h1>
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
                <label>Signin Time: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.signin}
                    onChange={this.onChangeIn}
                    />
                  
              </div>

              <div className="form-group"> 
                <label>Signout Time: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.signout}
                    onChange={this.onChangeOut}
                    />
                  
              </div>

              <div className="form-group"> 
                <label>Date: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.date}
                    onChange={this.onChangeDate}
                    />
                  
              </div>
  
              <div className="form-group">
                <input type="submit" value="Submit" className="btn btn-primary" />
              </div>
            </form>
          </div>
       
        )
      }
    }