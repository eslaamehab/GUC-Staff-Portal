import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
export default class sendLeaveRequest extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeReplacementStatus = this.onChangeReplacementStatus.bind(this);

  

        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            Email: '',
            replacementStatus: '',
            
        }
    }

    onChangeEmail(e){
        this.setState({
            Email: e.target.value
        });
    }

    onChangeReplacementStatus(e){
        this.setState({
            replacementStatus: e.target.value
        });
    }

    
    onSubmit(e){
        e.preventDefault();

        const log = {
            Email:this.state.Email,
            replacementStatus:this.state.replacementStatus,

        }

        

        console.log(log);

            axios.post('http://localhost:3000/replacementRequestResponse',log)
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
        <div>
          <h3>Replacement Request Response</h3>
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
              <label>Replacement Status: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.replacementStatus}
                  onChange={this.onChangeReplacementStatus}
                  />
            </div>


           

            <div className="form-group">
              <input type="submit" value="Send Replacement Request Response" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }