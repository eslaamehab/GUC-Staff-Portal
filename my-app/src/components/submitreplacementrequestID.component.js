import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
export default class submitreplacementrequestID extends Component {
    constructor(props){
        super(props);

        this.onChangeid = this.onChangeid.bind(this);
       
        this.onChangeaccepted = this.onChangeaccepted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

       /* this.state= {
            id: ''
        }*/
        this.state= {
            id:'',
            accepted:''}
        }
    

    onChangeid(e){
        this.setState({
            v:String,
            id: e.target.value
        });
    }

    
    onChangeaccepted(e){
        this.setState({
            accepted: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const log = {
            id:this.state.id,
            accepted:this.state.accepted
        }
        

        //console.log(log);

         axios.post('http://localhost:3000/viewReplacementRequestbyID',log)
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
          <h3>Enter ID of replacement request that you want to view</h3>
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
              <label>Accepting bit </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.accepted}
                  onChange={this.onChangeaccepted}
                  />
                
            </div>

            <div className="form-group">
              <input type="submit" value="accept or reject" className="btn btn-primary" />
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