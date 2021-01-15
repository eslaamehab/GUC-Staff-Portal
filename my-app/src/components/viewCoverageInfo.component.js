import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewCoverageInfo extends Component {

    constructor(props){
        super(props);

        this.onChangetype = this.onChangetype.bind(this);
        this.onChangedepartment = this.onChangedepartment.bind(this);
        this.onChangecourse = this.onChangecourse.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
          type:'',
          department:'',
          course:''
                }

    }

   

   
    onChangetype(e){
        this.setState({
            v:String,
            type: e.target.value
        });
    }

    onChangedepartment(e){
        this.setState({
            v:String,
            department: e.target.value
        });
    }

    onChangecourse(e){
        this.setState({
            v:String,
            course: e.target.value
        });
    }

 
    onSubmit(e){
        e.preventDefault();

        const Loc = {
           
            type:this.state.type,
            department:this.state.department,
            course:this.state.course
           
          
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/viewCoverage',Loc)
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
        <div  className ="alla">
             <Navbar />
          <h3> View Course Coverage</h3>
          <form  className = "textbox" onSubmit={this.onSubmit}>


            <div className="form-group"> 
              <label>  Type  (Enter TA) </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.type}
                  onChange={this.onChangetype}
                
                  /> 
            </div>

            <div className="form-group"> 
              <label>  Department </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.department}
                  onChange={this.onChangedepartment}
                
                  /> 
            </div>

            <div className="form-group"> 
              <label>  Course </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.course}
                  onChange={this.onChangecourse}
                
                  /> 
            </div>
           
           
        

            <div className="form-group">
              <input type="submit" value="Done" className="btn btn-info" />
            </div>


            <div> 
              
            <p className ="alert"> {this.state.v}</p>
             </div>


          </form>
        </div>
        )
      }
    }