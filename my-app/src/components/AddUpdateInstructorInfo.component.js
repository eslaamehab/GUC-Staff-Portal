import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class AddUpdateInstructorInfo extends Component {

    constructor(props){
        super(props);

        this.onChangeid = this.onChangeid.bind(this);
        this.onChangeCourseInstructor = this.onChangeCourseInstructor.bind(this);
       
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            id:'',
            CourseInstructor:''
        }

    }

   

    onChangeid(e){
        this.setState({
            id: e.target.value
        });
    }

    onChangeCourseInstructor(e){
        this.setState({
            CourseInstructor: e.target.value
        });
    }
   

  

    onSubmit(e){
        e.preventDefault();

        const Loc = {
            id:this.state.id,
            CourseInstructor:this.state.CourseInstructor
          
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/AddUpdateInstructor',Loc)
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
          <h3>ADD or UPDATE course Instructor</h3>
          <form onSubmit={this.onSubmit}>

        

           

            <div className="form-group"> 
              <label>  Course ID (from db) </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.id}
                  onChange={this.onChangeid}
                
                  /> 
            </div>

            <div className="form-group"> 
              <label>  Course Instructor: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.CourseInstructor}
                  onChange={this.onChangeCourseInstructor}
                
                  /> 
            </div>

           

            <div className="form-group">
              <input type="submit" value="Done" className="btn btn-primary" />
            </div>
            <div> 
              
              <p>{this.state.v}</p>
             </div>
          </form>
        </div>
        )
      }
    }