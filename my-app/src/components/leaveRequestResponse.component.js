import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Dropdown from 'react-dropdown';
import Navbar from './layouts/Navbar';
import 'react-dropdown/style.css';
export default class sendLeaveRequest extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);

  

        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            Email: '',
            status: '',
            
        }
    }

    onChangeEmail(e){
        this.setState({
            Email: e.target.value
        });
    }

    onChangeStatus(e){
        this.setState({
            status: e.target.value
        });
    }

    
    onSubmit(e){
        e.preventDefault();

        const log = {
            Email:this.state.Email,
            status:this.state.status,

        }

        

        console.log(log);

            axios.post('http://localhost:3000/leaveRequestResponse',log)
        .then(res=> {
            console.log(res.data)
            //window.location = '/profile'; 
        })
        .catch((error)=>{
            console.log('Not Successful');
            
        })
    }

    render() {
        return (
        <div className ="alla">
            <Navbar/>
          <h3>Leave Request Response</h3>
          <form    className = "textbox" onSubmit={this.onSubmit}>
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
              <label>Status: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.status}
                  onChange={this.onChangeStatus}
                  />
            </div>


           

            <div className="form-group">
              <input type="submit" value="Send Leave Request Response" className="btn btn-info" />
            </div>
          </form>
        </div>
        )
      }
    }