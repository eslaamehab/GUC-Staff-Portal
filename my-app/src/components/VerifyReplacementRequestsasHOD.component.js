import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
export default class VerifyReplacementRequestsasHOD extends Component {
    constructor(props){
        super(props);

        this.onChangeid = this.onChangeid.bind(this);
       
        this.onChangeVerifiedBit = this.onChangeVerifiedBit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

       /* this.state= {
            id: ''
        }*/
        this.state= {
            id:'',
            verifiedByHOD:''}
        }
    

    onChangeid(e){
        this.setState({
            v:String,
            id: e.target.value,
        });
    }

    
    onChangeVerifiedBit(e){
        this.setState({
            verifiedByHOD: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const log = {
            id:this.state.id,
            verifiedByHOD:this.state.verifiedByHOD
        }
        

        //console.log(log);

         axios.post('http://localhost:3000/HODReplacementRequestsVerify',log)
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
          <h3>Verify a replacement request by ID </h3>
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
              <label>Verified Bit</label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.verifiedByHOD}
                  onChange={this.onChangeVerifiedBit}
                  />
                
            </div>

            <div className="form-group">
              <input type="submit" value="Verify" className="btn btn-primary" />
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