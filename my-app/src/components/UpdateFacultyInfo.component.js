import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';
//import Dropdown from './dropdownmenu/Dropdown';
export default class UpdateFacultyInfo extends Component {

    constructor(props){
        super(props);

        this.onChangeid = this.onChangeid.bind(this);
        this.onChangefacultyName = this.onChangefacultyName.bind(this);
        this.onChangedepartmentsInFaculties = this.onChangedepartmentsInFaculties.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            id: '',
            facultyName: '',
            departmentsInFaculties: []
            
        }

    }
    onChangeid(e){
        this.setState({
            id: e.target.value
        });
    }

    onChangefacultyName(e){
        this.setState({
            facultyName: e.target.value
        });
    }

    onChangedepartmentsInFaculties(e){
        let x= e.target.value.toString().split(",");
        let y = [];
        for(let i=0; i<x.length; i++){
            y.push(x[i]);
            
        }
        this.setState({
            departmentsInFaculties: y
        });
        //console.log(y);
    }
   

  

    onSubmit(e){
        e.preventDefault();

        const Loc = {
            id:this.state.id,
            facultyName:this.state.facultyName,
            departmentsInFaculties:this.state.departmentsInFaculties
          
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/UpdateFaculty',Loc)
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
             
          <h3>Update Faculty</h3>
          <form onSubmit={this.onSubmit}>

          <div className="form-group"> 
              <label>  ID (from db): </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.id}
                  onChange={this.onChangeid}
                  /> 
            </div>

            <div className="form-group"> 
              <label>  New facultyName: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.facultyName}
                  onChange={this.onChangefacultyName}
                  /> 
            </div>

            <div className="form-group"> 
              <label>  New departments In Faculties: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.departmentsInFaculties}
                  onChange={this.onChangedepartmentsInFaculties}
                  /> 
            </div>

           

            <div className="form-group">
              <input type="submit" value="UpdateFaculty" className="btn btn-primary" />
            </div>

            <div> 
              
              <p>{this.state.v}</p>
             </div>
          </form>
        </div>
        )
      }
    }