import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

//import replacementrequest from '../../../replacementrequest';
export default class accessMissingHours extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

       /* this.state= {
            id: ''
        }*/
    this.state= {
        
v:String
    }
    }


    onChangeEmail(e){
        this.setState({
           Email:e.target.value
        });
    }

    
    
    onSubmit(e){
        e.preventDefault();

        const log = {
            Email:this.state.Email        }
        

        //console.log(log);

         axios.post('http://localhost:3000/accessMissingHours',log)
        .then(res=> {
            //this.setState({: res.data})
            
            this.setState({v: res.data})
            console.log(res.data)

           //window.location = '/replacementRequestIDResponse'; 
        })
        .catch((error)=>{
            console.log('Wrong Email or password');
            
        })
    }





    render() {
      return (
            <div   className ="alla">
            <Navbar/>
          <h3>Enter the Email of the staff member you 
            want to view his/her missing days</h3>
          <form   className = "textbox"onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label></label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.Email}
                  onChange={this.onChangeEmail}
                  />
                
            </div>

          </form>
          <form onSubmit={this.onSubmit}>
           
            <div className="form-group">
              <input type="submit" value="view" className="btn btn-info" />
            </div>
          </form>
          <h1>{this.state.v}</h1>
          </div>
      )
    }  
    }