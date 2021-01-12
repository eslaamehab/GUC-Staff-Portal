import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
export default class acceptSlotLinking extends Component {
    constructor(props){
        super(props);

        this.onChangeid = this.onChangeid.bind(this);
        this.onChangeAcceptedBit = this.onChangeAcceptedBit.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
       /* this.state= {
            id: ''
        }*/
        this.state= {
            id:'',
            accepted:''
        }
        }
    

    onChangeid(e){
        this.setState({
            id: e.target.value,
            v:String
        });
    }

    onChangeAcceptedBit(e){
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

         axios.post('http://localhost:3000/acceptslotlinkingrequest',log)
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
            <h3>Verify a slot linking request by ID </h3>
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
                <input  type="Number"
                    required
                    className="form-control"
                    value={this.state.accepted}
                    onChange={this.onChangeAcceptedBit}
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