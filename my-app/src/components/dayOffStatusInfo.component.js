import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class dayOffStatusInfo extends Component {
    constructor(props){
        super(props);
        
        this.onChangeDay = this.onChangeDay.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            status:''
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
    onChangeDay(e){
        this.setState({
            requestedDayOff:e.target.value

        })
    }
    onSubmit(e){
        e.preventDefault();
        const reg = {requestedDayOff:this.state.requestedDayOff};
        axios.post('http://localhost:3000/viewdayoffrequeststatus',reg)
        .then(response => {
            this.setState({status: response.data})
            console.log(response)
          }
            )
        .catch(error => console.log(error));
          }
   
    

  
        
    
    
      render() {
        return (
            <div>
            <h1>View The Status of Your Day Off Request</h1>
            <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>Requested Day: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.requestedDayOff}
                  onChange={this.onChangeDay}
                  /> 
            </div>
            <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                      </div>
                    </form>,
            {this.state.status}
                    </div>
            
        )




      }  
    

}