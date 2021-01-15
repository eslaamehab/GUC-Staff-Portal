import React, {Component} from 'react';
import Navbar from './layouts/Navbar';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class updatecoursesInfo extends Component {

    constructor(props){
        super(props);

        this.onChangecourseName = this.onChangecourseName.bind(this);
        this.onChangeDepartmentName = this.onChangeDepartmentName.bind(this);
       
        this.onChangeid = this.onChangeid.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            courseName : '',
            DepartmentName: '',
            id:''
        }

    }

    onChangecourseName(e){
        this.setState({
            courseName: e.target.value
        });
    }

    onChangeDepartmentName(e){
        this.setState({
            DepartmentName: e.target.value
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
            courseName:this.state.courseName,
            DepartmentName:this.state.DepartmentName,
            id:this.state.id
          
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/updatecourse',Loc)
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
        <div   className ="alla">
             <Navbar />
             
          <h3>update courses</h3>
          <form className = "textbox" onSubmit={this.onSubmit}>

              
            <div className="form-group"> 
              <label>  id (id from course db): </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.id}
                  onChange={this.onChangeid}
                
                  /> 
            </div>

            <div className="form-group"> 
              <label>  courseName: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.courseName}
                  onChange={this.onChangecourseName}
                  /> 
            </div>

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
              <input type="submit" value="updatecourses" className="btn btn-info" />
            </div>

            <div> 
              
              <p className ="alert">{this.state.v}</p>
             </div>
          </form>
        </div>
        )
      }
    }