import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class sendSlotLinkingInfo extends Component {
    constructor(props){
        super(props);

        this.onChangeCourseCoordinatorEmail = this.onChangeCourseCoordinatorEmail.bind(this);
        this.onChangeday = this.onChangeday.bind(this);
        this.onChangeSlot = this.onChangeSlot.bind(this);
        this.onChangeCourse = this.onChangeCourse.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            CourseCoordinatorEmail: '',
            day:'',
            slot: '',
            course: ''
        }
    }

    onChangeCourseCoordinatorEmail(e){
        this.setState({
            CourseCoordinatorEmail: e.target.value
        });
    }

    onChangeday(e){
        this.setState({
            day: e.target.value,
            v:String
        });
    }

    onChangeSlot(e){
        this.setState({
            slot: e.target.value
        });
    }

    onChangeCourse(e){
        this.setState({
            course: e.target.value
        });
    }

   

    
    onSubmit(e){
        e.preventDefault();

        const slotLinkingreq = {
            CourseCoordinatorEmail:this.state.CourseCoordinatorEmail,
            day:this.state.day,
            slot:this.state.slot,
            course:this.state.course
        }

        

        //console.log(reg);

            axios.post('http://localhost:3000/sendslotlinkingrequest',slotLinkingreq)
        .then(res=> {
            console.log(res.data)
            this.setState({v: res.data})

            //window.location = '/profile'; 
        })
        .catch((error)=>{
            console.log('Error');
            
        })
    }





    render() {
        return (
        <div>
          <h3>Slot Linking Request</h3>
          <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>Course Coordinator Email: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.CourseCoordinatorEmail}
                  onChange={this.onChangeCourseCoordinatorEmail}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Day of the slot you wish to choose: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.day}
                  onChange={this.onChangeday}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Number of the slot you wish to choose </label>
              <input  type="Number"
                  required
                  className="form-control"
                  value={this.state.slot}
                  onChange={this.onChangeSlot}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Name of course you wish to choose </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.course}
                  onChange={this.onChangeCourse}
                  />
            </div>

           


            <div className="form-group">
              <input type="submit" value="submit slotlinking request to course coordinator" className="btn btn-primary" />
            </div>
          </form>

<div>
<h1>{this.state.v}</h1>
</div>
</div>

        )
      }
    }