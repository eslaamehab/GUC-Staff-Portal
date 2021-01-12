import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class submitdayoffInfo extends Component {
    constructor(props){
        super(props);

        this.onChangehodMail = this.onChangehodMail.bind(this);
        this.onChangeday = this.onChangeday.bind(this);
        this.onChangeReason = this.onChangeReason.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            headOfDepartementEmail: '',
            requestedDayOff:'',
            reasonOfrequest: ''
        }
    }

    onChangehodMail(e){
        this.setState({
            headOfDepartementEmail: e.target.value
        });
    }

    onChangeday(e){
        this.setState({
            requestedDayOff: e.target.value,
            //v:String
        });
    }

    onChangeReason(e){
        this.setState({
            reasonOfrequest: e.target.value,
            v:String
        });
    }

    

   

    
    onSubmit(e){
        e.preventDefault();

        const DOR = {
            headOfDepartementEmail:this.state.headOfDepartementEmail,
            requestedDayOff:this.state.requestedDayOff,
            reasonOfrequest:this.state.reasonOfrequest
        }

        

        //console.log(reg);

            axios.post('http://localhost:3000/submitdayoffrequest',DOR)
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
              <label>HOD Email: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.headOfDepartementEmail}
                  onChange={this.onChangehodMail}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Day you wish to choose: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.requestedDayOff}
                  onChange={this.onChangeday}
                  /> 
            </div>

            <div className="form-group"> 
              <label>Reason</label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.reasonOfrequest}
                  onChange={this.onChangeReason}
                  /> 
            </div>

            

           


            <div className="form-group">
              <input type="submit" value="submit " className="btn btn-primary" />
            </div>
          </form>

<div>
<h1>{this.state.v}</h1>
</div>
</div>

        )
      }
    }