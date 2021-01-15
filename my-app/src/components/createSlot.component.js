import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

//import Dropdown from './dropdownmenu/Dropdown';
export default class createSlot extends Component {
    constructor(props){
        super(props);

        //this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDay = this.onChangeDay.bind(this);
        this.onChangeCourse = this.onChangeCourse.bind(this);

        //this.onChangeType = this.onChangeType.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        //this.onChangeDate = this.onChangeDate.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
           // Email: '',
            day:'',
            course:'',

            no: '',
            location: '',
            time:''
           
        }
    }

   /* onChangeEmail(e){
        this.setState({
            Email: e.target.value
        });
    }*/

    onChangeDay(e){
        this.setState({
            v:String,
            day: e.target.value
        });
    }

    onChangeNumber(e){
        this.setState({
            no: e.target.value
        });
    }

    onChangeLocation(e){
        this.setState({
            location: e.target.value
        });
    }

   

    onChangeCourse(e){
        this.setState({
            course: e.target.value
        });
    }

    onChangeTime(e){
        this.setState({
            time: e.target.value
        });
    }



    onSubmit(e){
        e.preventDefault();

        const slot = {
           // Email:this.state.Email,
            day:this.state.day,
            course:this.state.course,

            no:this.state.no,
            location:this.state.location,
            time:this.state.time,

        }

        

       // console.log(slot);

            axios.post('http://localhost:3000/createSlot',slot)
        .then(res=> {
            console.log(res.data)
            this.setState({v:res.data});
            //window.location = '/profile'; 
        })
        .catch((error)=>{
            console.log('Error');
            
        })
    }


/* <div className="form-group"> 
              <label>Email: </label>
              <input  type="text"
                  className="form-control"
                  value={this.state.Email}
                  onChange={this.onChangeEmail}
                  /> 
            </div>*/


    render() {
        return (
        <div>
            <Navbar/>
          <form onSubmit={this.onSubmit}>

           

            <div className="form-group"> 
              <label>Day of the week: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.day}
                  onChange={this.onChangeDay}
                  /> 
            </div>
            <div className="form-group"> 
              <label>Course to be taught: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.course}
                  onChange={this.onChangeCourse}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Slot number: </label>
              <input  type="Number"
                  required
                  className="form-control"
                  value={this.state.no}
                  onChange={this.onChangeNumber}
                  />
            </div>

            <div className="form-group"> 
              <label>Slot Location: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.location}
                  onChange={this.onChangeLocation}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Time: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.time}
                  onChange={this.onChangeTime}
                  /> 
            </div>

            

            


            <div className="form-group">
              <input type="submit" value="Create Slot" className="btn btn-primary" />
            </div>

            <div>
            <h2>{this.state.v} </h2>
            </div>



          </form>
        </div>
        
        
        )
      }
    }