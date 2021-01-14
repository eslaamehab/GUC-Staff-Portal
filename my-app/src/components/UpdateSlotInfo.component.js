import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

//import Dropdown from './dropdownmenu/Dropdown';
export default class regInfo extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeday = this.onChangeday.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeNewDay = this.onChangeNewDay.bind(this);
        this.onChangeNewNumber = this.onChangeNumber.bind(this);
        this.onChangeNewTime = this.onChangeNewTime.bind(this);
        this.onChangeNewLocation = this.onChangeNewLocation.bind(this);
        this.onChangeNewCourse = this.onChangeNewCourse.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            Email: '',
            day:'',
            no: '',
            newday: '',
            newno:'',
            newtime:'',
            newlocation:'',
            newcourse:''
        }
    }

    onChangeEmail(e){
        this.setState({
            Email: e.target.value
        });
    }

    onChangeday(e){
        this.setState({
            day: e.target.value
        });
    }

    onChangeNumber(e){
        this.setState({
            no: e.target.value
        });
    }

    onChangeNewDay(e){
        this.setState({
            newday: e.target.value
        });
    }

   

    onChangeNewNumber(e){
        this.setState({
            newno: e.target.value
        });
    }

    onChangeNewTime(e){
        this.setState({
            newtime: e.target.value
        });
    }

    onChangeNewLocation(e){
        this.setState({
            newlocation: e.target.value
        });
    }

    onChangeNewCourse(e){
        this.setState({
            newcourse: e.target.value
        });
    }



    onSubmit(e){
        e.preventDefault();

        const upd = {
            Email:this.state.Email,
            day:this.state.day,
            no:this.state.no,
            newday:this.state.newday,
            newno:this.state.newno,
            newtime:this.state.newtime,
            newlocation:this.state.newlocation,
            newcourse:this.state.newcourse
        }

        

        //console.log(reg);

            axios.post('http://localhost:3000/updateSlot',upd)
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
            <Navbar/>
          <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>Enter email of TA teaching the slot you want to update: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.Email}
                  onChange={this.onChangeEmail}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Enter Day of the slot you want to update: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.day}
                  onChange={this.onChangeday}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Enter Number of the slot you want to update:  </label>
              <input  type="Number"
                  className="form-control"
                  value={this.state.no}
                  onChange={this.onChangeNumber}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Enter the day you wish to change the slot to:  </label>
              <input  type="day"
                  className="form-control"
                  value={this.state.newday}
                  onChange={this.onChangeNewDay}
                  />
            </div>

            <div className="form-group"> 
              <label>Enter the slot number you wish to change the slot to:   </label>
              <input  type="Number"
    
                  className="form-control"
                  value={this.state.newno}
                  onChange={this.onChangeNewNumber}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Enter the time you wish to change the slot to:  </label>
              <input  type="text"
    
                  className="form-control"
                  value={this.state.newtime}
                  onChange={this.onChangeNewTime}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Enter the location you wish to change the slot to:</label>
              <input  type="text"
                  
                  className="form-control"
                  value={this.state.newlocation}
                  onChange={this.onChangeNewLocation}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Enter the course you wish to change the slot to: </label>
              <input  type="text"
                  className="form-control"
                  value={this.state.newcourse}
                  onChange={this.onChangeNewCourse}
                  /> 
            </div>

  

            <div className="form-group">
              <input type="submit" value="Update Slot" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }