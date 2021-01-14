
import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

//import replacementrequest from '../../../replacementrequest';
export default class RejectRepReqTA extends Component {
    constructor(props){
        super(props);

        this.onChangeid = this.onChangeid.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

       /* this.state= {
            id: ''
        }*/
        this.state= {
            id:''}
        }
    

    onChangeid(e){
        this.setState({
            v:String,
            id: e.target.value
        });
    }

    
    
    onSubmit(e){
        e.preventDefault();

        const log = {
            id:this.state.id        }
        

        //console.log(log);

         axios.post('http://localhost:3000/RejectReplacementRequestTA',log)
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
        <div>
            <Navbar/>
          <h3>Enter ID of replacement request that you want to Reject</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>ID </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.id}
                  onChange={this.onChangeid}
                  />
                
            </div>

          </form>
          <form onSubmit={this.onSubmit}>
           
            <div className="form-group">
              <input type="submit" value="reject" className="btn btn-primary" />
            </div>
          </form>


          <div>
            <h1>Here is your response</h1>
            <p>{this.state.v} </p>
            </div>
        </div>
        )
      }
    }