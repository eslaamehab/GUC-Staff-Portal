import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

//import replacementrequest from '../../../replacementrequest';
export default class rejectSlotLinking extends Component {
    constructor(props){
        super(props);

        this.onChangeid = this.onChangeid.bind(this);
        

        this.onSubmit = this.onSubmit.bind(this);
       /* this.state= {
            id: ''
        }*/
        this.state= {
            id:''
        }
        }
    

    onChangeid(e){
        this.setState({
            id: e.target.value,
            v:String
        });
    }

   
   

    onSubmit(e){
        e.preventDefault();

        const log = {
            id:this.state.id
        }
        

        //console.log(log);

         axios.post('http://localhost:3000/rejectSlotLinkingRequest',log)
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
            <h3>Reject a slot linking request by ID </h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Request ID </label>
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
                <input type="submit" value="Reject" className="btn btn-primary" />
              </div>
            </form>
  
  
            <div>
              <p>{this.state.v} </p>
              </div>
          </div>
        )
      }
    }