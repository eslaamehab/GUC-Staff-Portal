
import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class slotLinkingStatusInfo extends Component {
    constructor(props){
        super(props);
        this.onChangeCourse = this.onChangeCourse.bind(this);

        this.onChangeDay = this.onChangeDay.bind(this);
        this.onChangeSlot = this.onChangeSlot.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            v:String
        //replacementrequest:[{Email:'',replacingTAEmail:'',date:'',slot:'',course:'',location:'',time:'',status:'',reasonOfrejection:''}]

        }


    /* axios.get('/profile', {
        params: {
          emailTest: 'Slim@gmail.com'
        }
    }).then(function (response) {
        console.log(response);
      })
    
    
    }*/
    
    }
    onChangeCourse(e){
        this.setState({
            course:e.target.value

        })
    }


    onChangeDay(e){
        this.setState({
            day:e.target.value

        })
    }


    onChangeSlot(e){
        this.setState({
            slot:e.target.value

        })
    }
    onSubmit(e){
        e.preventDefault();
        const reg = {course:this.state.course,
        day:this.state.day,
    slot:this.state.slot};
        axios.post('http://localhost:3000/viewslotlinkingstatus',reg)
        .then(response => {
            this.setState({v: response.data})
            console.log(response)
          }
            )
        .catch(error => console.log(error));
          }
   
    

  
        
    
    
      render() {
        return (
            <div>
            <h1>View The Status of Your Slot Linking Request</h1>
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Requested Course: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.course}
                  onChange={this.onChangeCourse}
                  /> 
            </div>
            <div className="form-group"> 
              <label>Requested Day: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.day}
                  onChange={this.onChangeDay}
                  /> 
            </div>
            <div className="form-group"> 
              <label>Requested Slot: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.slot}
                  onChange={this.onChangeSlot}
                  /> 
            </div>
            <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                      </div>
                    </form>
                    <h1>{this.state.status}</h1>
            
     </div>
            
        )




      }  
    

}