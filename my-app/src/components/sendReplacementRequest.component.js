import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class sendreplacementreq extends Component {
    constructor(props){
        super(props);

        this.onChangereplacingTAEmail = this.onChangereplacingTAEmail.bind(this);
        this.onChangedate = this.onChangedate.bind(this);
        this.onChangeslot = this.onChangeslot.bind(this);
        this.onChangeCourse = this.onChangeCourse.bind(this);
        this.onChangetime= this.onChangetime.bind(this);
        this.onChangelocation = this.onChangelocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            replacingTAEmail: '',
            date:'',
            slot: '',
            course: '',
            time:'',
            location:''
        }
    }

    onChangereplacingTAEmail(e){
        this.setState({
            replacingTAEmail: e.target.value
        });
    }

    onChangedate(e){
        this.setState({
            date: e.target.value
        });
    }

    onChangeslot(e){
        this.setState({
            slot: e.target.value
        });
    }

    onChangeCourse(e){
        this.setState({
            course: e.target.value
        });
    }

   

    onChangetime(e){
        this.setState({
            time: e.target.value
        });
    }

    onChangelocation(e){
        this.setState({
            location: e.target.value
        });
    }



    onSubmit(e){
        e.preventDefault();

        const repreq = {
            replacingTAEmail:this.state.replacingTAEmail,
            date:this.state.date,
            slot:this.state.slot,
            course:this.state.course,
            time:this.state.time,
            location:this.state.location

        }

        

        //console.log(reg);

            axios.post('http://localhost:3000/sendReplacementRequest',repreq)
        .then(res=> {
            console.log(res.data)
            //window.location = '/profile'; 
        })
        .catch((error)=>{
            console.log('Error');
            
        })
    }





    render() {
        return (
        <div>
          <h3>Replacement Request</h3>
          <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>Replacing TA Email: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.replacingTAEmail}
                  onChange={this.onChangereplacingTAEmail}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Date(mm/dd/yyyy): </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.date}
                  onChange={this.onChangedate}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Slot Number: </label>
              <input  type="Number"
                  required
                  className="form-control"
                  value={this.state.slot}
                  onChange={this.onChangeslot}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Course Name: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.course}
                  onChange={this.onChangeCourse}
                  />
            </div>

            <div className="form-group"> 
              <label>Time of the slot: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.time}
                  onChange={this.onChangetime}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Location of the slot: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.location}
                  onChange={this.onChangelocation}
                  /> 
            </div>




            <div className="form-group">
              <input type="submit" value="submit replacement request" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }