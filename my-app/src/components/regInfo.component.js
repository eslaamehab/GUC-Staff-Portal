import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class regInfo extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onChangeFaculty = this.onChangeFaculty.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeOfficeLocation = this.onChangeOfficeLocation.bind(this);
        this.onChangeCourses = this.onChangeCourses.bind(this);
        this.onChangeDayoff = this.onChangeDayoff.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            Email: '',
            name:'',
            type: '',
            password: '',
            faculty:'',
            department:'',
            gender:'',
            officelocation:'',
            firstTime:0,
            courses:[],
            dayoff:''
        }
    }

    onChangeEmail(e){
        this.setState({
            Email: e.target.value
        });
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeType(e){
        this.setState({
            type: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

   

    onChangeSalary(e){
        this.setState({
            salary: e.target.value
        });
    }

    onChangeFaculty(e){
        this.setState({
            faculty: e.target.value
        });
    }

    onChangeDepartment(e){
        this.setState({
            department: e.target.value
        });
    }

    onChangeGender(e){
        this.setState({
            gender: e.target.value
        });
    }

    onChangeOfficeLocation(e){
        this.setState({
            officelocation: e.target.value
        });
    }

    onChangeCourses(e){
        let x= e.target.value.toString().split(",");
        let y = [];
        for(let i=0; i<x.length; i++){
            y.push(x[i]);
            
        }
        this.setState({
            courses: y
        });
        console.log(y);
    }

    onChangeDayoff(e){
        this.setState({
            dayoff: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const reg = {
            Email:this.state.Email,
            name:this.state.name,
            type:this.state.type,
            password:this.state.password,
            salary:this.state.salary,
            faculty:this.state.faculty,
            department:this.state.department,
            gender:this.state.gender,
            officelocation:this.state.officelocation,
            dayoff:this.state.dayoff,
            courses:this.state.courses

        }

        

        console.log(reg);

            axios.post('http://localhost:3000/register',reg)
        .then(res=> {
            console.log(res.data)
            window.location = '/profile'; 
        })
        .catch((error)=>{
            console.log('Error');
            
        })
    }





    render() {
        return (
        <div>
          <h3>Registration</h3>
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
              <label>Name: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Type: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.type}
                  onChange={this.onChangeType}
                  /> 
            </div>

            <div className="form-group"> 
              <label>password: </label>
              <input  type="password"
                  required
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  />
            </div>

            <div className="form-group"> 
              <label>Salary: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.salary}
                  onChange={this.onChangeSalary}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Faculty: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.faculty}
                  onChange={this.onChangeFaculty}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Department: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.department}
                  onChange={this.onChangeDepartment}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Gender: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.gender}
                  onChange={this.onChangeGender}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Office Location: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.officelocation}
                  onChange={this.onChangeOfficeLocation}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Day Off: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.dayoff}
                  onChange={this.onChangeDayoff}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Courses: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.courses}
                  onChange={this.onChangeCourses}
                  /> 
            </div>


            <div className="form-group">
              <input type="submit" value="Register" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }