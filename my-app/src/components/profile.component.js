import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Sidebar from './sidebar'
import Sidebar2 from './sidebar2';


export default class profile extends Component {

  
    constructor(props){
        super(props);

        this.state= {
            user:{Email: '',name:'',type: '',password: '',faculty:'',department:'',gender:'',officelocation:'',firstTime:0,courses:[], dayoff:''}  
        }

    /* axios.get('/profile', {
        params: {
          emailTest: 'Slim@gmail.com'
        }
    }).then(function (response) {
        console.log(response);
      })
    
    
    }*/

    axios.get('http://localhost:3000/profile')
  .then(response => {
      this.setState({user: response.data})
      console.log(response)
    }
      )
  .catch(error => console.log(error));
    }
    

    
    
    
    
    
      render() {
        const x = this.state.user.courses;
        const items = [
            { name: 'home', label: 'Home' },
            { name: 'attendance', label: 'View Attendance',
            items: [
                { name: 'missingDays', label: 'View Missing Days' },
                { name: 'missingHours', label: 'View Missing Hours' },
              ],
             },

            { name: 'missingDays', label: 'View Missing Days' },
            { name: 'missingHours', label: 'View Missing Hours' },
            { name: 'viewLeaveRequests', label: 'View Leave Requests' },
            { name: 'sendLeaveRequest', label: 'Send Leave Request' },
            { name: 'viewReplacementRequests', label: 'View Replacement Requests' },
            { name: 'sendReplacementRequest', label: 'Send Replacement Request' },
            { name: 'resetPassword', label: 'Reset Password' },
          ]
      
            
        return (
            
            <div>
            <h1>This is your profile</h1>

            <div id="gallery-text">
            <div class="gallery-text">
            <Sidebar items={items} />
            </div>
            </div>

            <p>Welcome {this.state.user.name}</p>
            <p>ID: {this.state.user.ID}</p>
            <p>Type: {this.state.user.type}</p>
            <p>Faculty: {this.state.user.faculty}</p>  
            <p>Department: {this.state.user.department}</p>
            <p>Gender: {this.state.user.gender}</p>
            <p>Office Location: {this.state.user.officelocation}</p>
            <p>Day off: {this.state.user.dayoff}</p>
            <p>Annual Leave Balance: {this.state.user.annualLeaveBalance}</p>
            <p>Accidental Leave Balance: {this.state.user.accidentalLeaveBalance}</p>

            <p>Courses: </p>
            <ul>
            {x.map(item => {
            return <li>{item}</li>;
            })}
            </ul>

           
            </div>
        )
      }  

    

}