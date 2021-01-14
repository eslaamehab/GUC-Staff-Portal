import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class updatePassword extends Component {
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onChangeFaculty = this.onChangeFaculty.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state= {
           
            name:'',
            faculty:'',
            department:'',
            salary:'',
            
        }
    }

        onChangeName(e){
            this.setState({
                name: e.target.value
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

        onChangeSalary(e){
            this.setState({
                salary: e.target.value
            });
        }

        onSubmit(e){
            e.preventDefault();
    
            const upd = {
                name:this.state.name,
                salary:this.state.salary,
                faculty:this.state.faculty,
                department:this.state.department
            }
    
    
            axios.post('http://localhost:3000/updateProfile',upd)
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
                <Navbar/>
              <h3>Update Profile</h3>
              <form onSubmit={this.onSubmit}>


    
              <div className="form-group"> 
                  <label>New Name: </label>
                  <input  type="text"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>

                
              <div className="form-group"> 
                  <label>New Salary: </label>
                  <input  type="text"
                      className="form-control"
                      value={this.state.salary}
                      onChange={this.onChangeSalary}
                      />
                </div>

                <div className="form-group"> 
                  <label>New Department: </label>
                  <input  type="text"
                      className="form-control"
                      value={this.state.department}
                      onChange={this.onChangeDepartment}
                      />
                </div>

                <div className="form-group"> 
                  <label>New Faculty: </label>
                  <input  type="text"
                      className="form-control"
                      value={this.state.faculty}
                      onChange={this.onChangeFaculty}
                      />
                </div>
    
                
    


    
    
                <div className="form-group">
                  <input type="submit" value="Update" className="btn btn-primary" />
                </div>
              </form>
            </div>
            )
        }

}
