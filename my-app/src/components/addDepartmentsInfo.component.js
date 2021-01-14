import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';
//import Dropdown from './dropdownmenu/Dropdown';
export default class addDepartmentsInfo extends Component {

    constructor(props){
        super(props);

        this.onChangeDepartmentName = this.onChangeDepartmentName.bind(this);
        this.onChangeFacultyName = this.onChangeFacultyName.bind(this);
        this.onChangeid = this.onChangeid.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            FacultyName: '',
            DepartmentName: '',
            id:''
        }

    }

    onChangeDepartmentName(e){
        this.setState({
            DepartmentName: e.target.value
        });
    }

    onChangeFacultyName(e){
        this.setState({
            FacultyName: e.target.value
        });
    }

    onChangeid(e){
        this.setState({
            id: e.target.value
        });
    }

 
   

  

    onSubmit(e){
        e.preventDefault();

        const Loc = {
            DepartmentName:this.state.DepartmentName,
            FacultyName:this.state.FacultyName,
            id:this.state.id
          
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/addDepartments',Loc)
        .then(res=> {
            this.setState({v: res.data})
            console.log(res.data)
           // window.roomName = '/profile'; 
        })
        .catch((error)=>{
            console.log('Error');
            
        })
    }





    render() {
        return (
        <div>
            <Navbar />
          <h3>ADD Department</h3>
          <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>  DepartmentName: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.DepartmentName}
                  onChange={this.onChangeDepartmentName}
                  /> 
            </div>

            
            

            <div className="form-group"> 
              <label>  FacultyName: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.FacultyName}
                  onChange={this.onChangeFacultyName}
                  /> 
            </div>


            <div className="form-group"> 
              <label>  id ( from faculty db): </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.id}
                  onChange={this.onChangeid}
                  /> 
            </div>


           

            <div className="form-group">
              <input type="submit" value="AddDepartments" className="btn btn-primary" />
            </div>

            <div> 
              
              <p>{this.state.v}</p>
             </div>

          </form>
        </div>
        )
      }
    }