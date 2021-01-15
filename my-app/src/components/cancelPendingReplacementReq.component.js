import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
export default class cancelPendingReplacementRequest extends Component {
    constructor(props){
        super(props);

        this.onChangeid = this.onChangeid.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       

       /* this.state= {
            id: ''
        }*/
        this.state= {
            id:'',
        v:String}
        }
    

    onChangeid(e){
        this.setState({
            id: e.target.value
        });
    }

    
    
    onSubmit(e){
        e.preventDefault();

        const log = {
            id:this.state.id}
        

        //console.log(log);

         axios.post('http://localhost:3000/cancelPendingReplacement',log)
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
          <h3>Cancel pending Replacement request by </h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>id: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.id}
                  onChange={this.onChangeid}
                  />
                
            </div>
            

            <div className="form-group">
              <input type="submit" value="Confirm Delete" className="btn btn-primary" />
            </div>
          </form>
          <div>{this.state.v}</div>
        </div>
        )
      }
    }