import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
export default class acceptDayOff extends Component {
    constructor(props){
        super(props);

        this.onChangeid = this.onChangeid.bind(this);
       
        this.onChangeVerifiedBit = this.onChangeVerifiedBit.bind(this);
        this.onChangeReasonOfRej=this.onChangeReasonOfRej.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

       /* this.state= {
            id: ''
        }*/
        this.state= {
            id:'',
            accepted:'',
            reasonOfRejection:''
        }
        }
    

    onChangeid(e){
        this.setState({
            v:String,
            id: e.target.value,
        });
    }

    
    onChangeVerifiedBit(e){
        this.setState({
            accepted: e.target.value
        });
    }
    onChangeReasonOfRej(e){
        this.setState({
            reasonOfRejection:e.target.value

        })
    }

    onSubmit(e){
        e.preventDefault();

        const log = {
            id:this.state.id,
            accepted:this.state.accepted,
            reasonOfRejection:this.state.reasonOfRejection
        }
        

        //console.log(log);

         axios.post('http://localhost:3000/acceptdayoffrequests',log)
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
          <h3>Verify a Dayoff request by ID </h3>
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
              <label>Accept Bit</label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.accepted}
                  onChange={this.onChangeVerifiedBit}
                  />
                
            </div>
            </form>
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Please state a reason in case you reject:</label>
              <input  type="text"
                  
                  className="form-control"
                  value={this.state.reasonOfRejection}
                  onChange={this.onChangeReasonOfRej}
                  />
                
            </div>
            <div className="form-group">
              <input type="submit" value="Verify" className="btn btn-primary" />
            </div>
          </form>


          <div>
            <p>{this.state.v} </p>
            </div>
        </div>
        )
      }
    }