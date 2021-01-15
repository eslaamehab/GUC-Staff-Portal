import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class updatePassword extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onChangeFaculty = this.onChangeFaculty.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state= {
           Email:'',
            name:'',
            faculty:'',
            department:'',
            salary:'',
            
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
                Email:this.state.Email,
                name:this.state.name,
                salary:this.state.salary,
                faculty:this.state.faculty,
                department:this.state.department
            }
    
    
            axios.post('http://localhost:3000/updateProfile',upd)
            .then(res=> {
                this.setState({v: res.data})
                console.log(res.data)
               
            })
            .catch((error)=>{
                console.log('Error');
                
            })
        }
            
          

    
      render() {
        return (
            <div   className ="alla" >
                <Navbar/>
              <h3>Update Profile</h3>
              <form  className = "textbox" onSubmit={this.onSubmit}>



              <div className="form-group"> 
              <label> Enter Staff Member Email </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.Email}
                  onChange={this.onChangeEmail}
                
                  /> 
            </div>
    
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
                  <input type="submit" value="Update" className="btn btn-info" />
                </div>
                <p className ="alert">{this.state.v}</p>
              </form>















              
            </div>






            )
        }

}
