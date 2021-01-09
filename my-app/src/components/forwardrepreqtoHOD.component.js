import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
export default class forwardrepreqtoHOD extends Component {
    constructor(props){
        super(props);

        this.onChangeid = this.onChangeid.bind(this);
       
        this.onChangeHOD = this.onChangeHOD.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

       /* this.state= {
            id: ''
        }*/
        this.state= {
            id:'',
            HeadOfDepartmentEmail:''}
        }
    

    onChangeid(e){
        this.setState({
            v:String,
            id: e.target.value,
        });
    }

    
    onChangeHOD(e){
        this.setState({
            HeadOfDepartmentEmail: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const log = {
            id:this.state.id,
            HeadOfDepartmentEmail:this.state.HeadOfDepartmentEmail
        }
        

        //console.log(log);

         axios.post('http://localhost:3000/ForwardReplacementReqtoHOD',log)
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
          <h3>Forward your replacement request to your Head of Department</h3>
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
              <label>Head of Department Email </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.HeadOfDepartmentEmail}
                  onChange={this.onChangeHOD}
                  />
                
            </div>

            <div className="form-group">
              <input type="submit" value="Forward" className="btn btn-primary" />
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