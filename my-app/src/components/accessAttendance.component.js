import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class accessAttendance extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMonth = this.onChangeMonth.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            attendance:[{_id:'',date:'',minsspent:0}],
            
        }
      }

      onChangeEmail(e){
        this.setState({
            Email: e.target.value
        });
    }

    onChangeMonth(e){
        this.setState({
            month: e.target.value
        });
    }

        onSubmit(e){
          e.preventDefault();
  
          const log = {
              Email:this.state.Email,
              month:this.state.month
          }

          axios.post('http://localhost:3000/accessAttendance',log)
  .then(response => {
      this.setState({attendance: response.data})
      console.log(response)
    }
      )
  .catch(error => console.log(error));

    }

 
      render() {
        
        const x= this.state.attendance;
        //console.log(x[0].date);
        return (
            
            <div>
            <h1>This is {this.state.Email}'s Attendance Record</h1>
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Staff Email: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.Email}
                  onChange={this.onChangeEmail}
                  
                  />

            <div className="form-group"> 
              <label>Month: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.month}
                  onChange={this.onChangeMonth}
                  
                  />

            <div className="form-group">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
            </div>
                
            </div>
            </form>
            
            
           

           

            <div id="gallery-text">
            <div class="gallery-text">
            <p>Mins Spent: </p>
            {x.map(item => <div>{item.minsspent}</div>)}
            </div>
            </div>
            <p> Attendance : </p>
            {x.map(item => <div>{item.date}</div>)}

           
        
            </div>
        )
      }  



}