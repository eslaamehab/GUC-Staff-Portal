import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class attendanceInfo extends Component {
    constructor(props){
        super(props);

        this.state= {
            attendance:[{_id:'',date:'',minsspent:0}]
        }


    /* axios.get('/profile', {
        params: {
          emailTest: 'Slim@gmail.com'
        }
    }).then(function (response) {
        console.log(response);
      })
    
    
    }*/

    axios.get('http://localhost:3000/attendance')
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
            <h1>This is your Attendance Record</h1>
            
            
           

           

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