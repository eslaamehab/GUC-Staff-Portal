import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

//import replacementrequest from '../../../replacementrequest';
export default class viewLeaveRequests extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

       /* this.state= {
            id: ''
        }*/
    this.state= {
        
        leaves:[{_id:'',Email:'',ID:'',type:'',startDate:'',endDate:'',submissionDate:'',status:'',replacementStatus:'',replacementDay:'',replacementStaffMember:'',departmentName:'',courseName:'',document:'',skippedDay:'',HODemail:'',replacementStaffEmail:''}]
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

         axios.post('http://localhost:3000/vlr',log)
        .then(res=> {
            //this.setState({: res.data})
            
            this.setState({leaves: res.data})
            console.log(res.data)

           //window.location = '/replacementRequestIDResponse'; 
        })
        .catch((error)=>{
            console.log('Wrong Email or password');
            
        })
    }





    render() {
        const zeft = this.state.leaves.map((invoice, index) => {
            return (
                <tr >
                    
                    <h1> -----------------------------------</h1>
                <h4> _id: {invoice._id}</h4>
                <h4> Email: {invoice.Email}</h4>
                <h4> ID: {invoice.ID}</h4>
                <h4> type: {invoice.type}</h4>
                <h4> startDate: {invoice.startDate}</h4>
                <h4> endDate: {invoice.endDate}</h4>
                <h4> submissionDate: {invoice.submissionDate}</h4>
                <h4> status: {invoice.status}</h4>
                <h4> replacementStatus: {invoice.replacementStatus}</h4>
                <h4> replacementDay: {invoice.replacementDay}</h4>
                <h4> replacementStatus: {invoice.replacementStatus}</h4>
                <h4> replacementStaffMember: {invoice.replacementStaffMember}</h4>
                <h4> departmentName: {invoice.departmentName}</h4>

                <h4> courseName: {invoice.courseName}</h4>

                <h4> document: {invoice.document}</h4>
                <h4> skippedDay: {invoice.skippedDay}</h4>
                <h4> HODemail: {invoice.HODemail}</h4>
                <h4> replacementStaffEmail: {invoice.replacementStaffEmail}</h4>
                    
                </tr>
            )
        }
        )                


        return (
        <div className ="alla">
            <Navbar/>
          <h3>Enter Email of Academic Member to Show Their Leave Requests</h3>
          <form  className = "textbox" onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Email </label>
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
              <input type="submit" value="show" className="btn btn-info" />
            </div>
          </form>


          <div>
            
            <p>{zeft} </p>
            </div>
        </div>
        )
      }
    }