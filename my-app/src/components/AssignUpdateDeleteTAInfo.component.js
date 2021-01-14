import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class AssignUpdateDeleteTAInfo extends Component {

    constructor(props){
        super(props);

        this.onChangeday = this.onChangeday.bind(this);
        this.onChangetime = this.onChangetime.bind(this);
        this.onChangeno = this.onChangeno.bind(this);
        this.onChangedate = this.onChangedate.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            day:'' ,
            time:'' ,
            no:'' ,
            date:'' 
        }

    }

   

    onChangeday(e){
        this.setState({
            day: e.target.value,
            
        });
    }
    onChangetime(e){
        this.setState({
           
            time: e.target.value,
           
        });
    }
    onChangeno(e){
        this.setState({
           
            no: e.target.value,
           
        });
    }
    onChangedate(e){
        this.setState({
            
            date: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            
            Email: e.target.value
        });
    }

 
    onSubmit(e){
        e.preventDefault();

        const Loc = {
            day:this.state.day,
            time:this.state.time,
            no:this.state.no,
            date:this.state.date,
            Email:this.state.Email
           
          
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/AssignUpdateDeleteTA',Loc)
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
            <Navbar/>
          <h3> Assign or Update or delete TA </h3>
          <form onSubmit={this.onSubmit}>

        
          <div className="form-group"> 
              <label> Slot Day </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.day}
                  onChange={this.onChangeday}
                
                  /> 
            </div>

            <div className="form-group"> 
              <label>  Slot Time</label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.time}
                  onChange={this.onChangetime}
                
                  /> 
            </div>

            <div className="form-group"> 
              <label> slot Name </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.no}
                  onChange={this.onChangeno}
                
                  /> 
            </div>

            <div className="form-group"> 
              <label> slot Date </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.date}
                  onChange={this.onChangedate}
                
                  /> 
            </div>


            <div className="form-group"> 
              <label> TA Email </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.Email}
                  onChange={this.onChangeEmail}
                
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