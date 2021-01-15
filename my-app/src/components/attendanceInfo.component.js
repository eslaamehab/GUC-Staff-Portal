import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class attendanceInfo extends Component {
    constructor(props){
        super(props);

        this.onChangeMonth = this.onChangeMonth.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            attendance:[{_id:'',date:'',minsspent:0}],
            
        }
      }

      onChangeMonth(e){
        this.setState({
            month: e.target.value
        });
    }

        onSubmit(e){
          e.preventDefault();
  
          const log = {
              month:this.state.month
          }

          axios.post('http://localhost:3000/attendance',log)
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
          
          <div  className ="alla">
            <Navbar/>
          <h1>This is your Attendance Record</h1>
          <form  className = "textbox"onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Month: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.month}
                onChange={this.onChangeMonth}
                
                />

          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-info" />
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

         
          <p className ="alert">{this.state.v}</p>
          </div>
      )
    }

    }

 

    

    