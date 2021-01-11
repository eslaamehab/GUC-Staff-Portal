import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
export default class sendLeaveRequest extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeType = this.onChangeType.bind(this);

        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);

        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeDepartmentName = this.onChangeDepartmentName.bind(this);

        this.onChangeReplacementDay = this.onChangeReplacementDay.bind(this);
        this.onChangeReplacementStaffMember = this.onChangeReplacementStaffMember.bind(this);

        this.onChangeReplacementStaffEmail = this.onChangeReplacementStaffEmail.bind(this);
        this.onChangeDocument = this.onChangeDocument.bind(this);



        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            Email: '',
            type: '',
            startDate:'',
            endDate:'',
            courseName:'',
            departmentName:'',
            replacementDay:'',
            replacementStaffMember:'',
            replacementStaffEmail:'',
            document:''
        }
    }

    onChangeEmail(e){
        this.setState({
            Email: e.target.value
        });
    }

    onChangeType(e){
        this.setState({
            type: e.target.value
        });
    }

    onChangeStartDate(e){
        this.setState({
            startDate: e.target.value
        });
    }

    onChangeEndDate(e){
        this.setState({
            endDate: e.target.value
        });
    }
    
    onChangeCourseName(e){
        this.setState({
            courseName: e.target.value
        });
    }

    onChangeDepartmentName(e){
        this.setState({
            departmentName: e.target.value
        });
    }

    onChangeReplacementDay(e){
        this.setState({
            replacementDay: e.target.value
        });
    }

    onChangeReplacementStaffMember(e){
        this.setState({
            replacementStaffMember: e.target.value
        });
    }

    onChangeReplacementStaffEmail(e){
        this.setState({
            replacementStaffEmail: e.target.value
        });
    }

    onChangeDocument(e){
        this.setState({
            document: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const log = {
            Email:this.state.Email,
            type:this.state.type,
            startDate:this.state.startDate,
            endDate:this.state.endDate,

            courseName:this.state.courseName,
            departmentName:this.state.departmentName,

            replacementDay:this.state.replacementDay,
            replacementStaffMember:this.state.replacementStaffMember,
            replacementStaffEmail:this.state.replacementStaffEmail,
            document:this.state.document


        }

        

        console.log(log);

            axios.post('http://localhost:3000/sendLeaveRequest',log)
        .then(res=> {
            console.log(res.data)
            //window.location = '/profile'; 
        })
        .catch((error)=>{
            console.log('Not Successful');
            
        })
    }

    render() {
        return (
        <div>
          <h3>Send Leave Request</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Email: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.Email}
                  onChange={this.onChangeEmail}
                  />
                
            </div>

            
        
            <div className="form-group"> 
              <label>Leave Type: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.type}
                  onChange={this.onChangeType}
                  />
            </div>


            <div className="form-group"> 
              <label>Start Date: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.startDate}
                  onChange={this.onChangeStartDate}
                  />
            </div>

            <div className="form-group"> 
              <label>End Date: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.endDate}
                  onChange={this.onChangeEndDate}
                  />
            </div>

            <div className="form-group"> 
              <label>Course Name: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.courseName}
                  onChange={this.onChangeCourseName}
                  />
            </div>

            <div className="form-group"> 
              <label>Department Name: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.departmentName}
                  onChange={this.onChangeDepartmentName}
                  />
            </div>

            <div className="form-group"> 
              <label>Replacement Day: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.replacementDay}
                  onChange={this.onChangeReplacementDay}
                  />
            </div>

            <div className="form-group"> 
              <label>Replacement Staff Member: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.replacementStaffMember}
                  onChange={this.onChangeReplacementStaffMember}
                  />
            </div>

            <div className="form-group"> 
              <label>Replacement Staff Email: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.replacementStaffEmail}
                  onChange={this.onChangeReplacementStaffEmail}
                  />
            </div>

            <div className="form-group"> 
              <label>Document: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.document}
                  onChange={this.onChangeDocument}
                  />
            </div>
            

            <div className="form-group">
              <input type="submit" value="Submit Leave Request" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }