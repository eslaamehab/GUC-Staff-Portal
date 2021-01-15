import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';


//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewAssignedSlotsInfo extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
         slot:[{_id:'',Email:'',day:'',type:'',no:'',time:'',location:'',course:'',date:''}]
        //replacementrequest:[{Email:'',replacingTAEmail:'',date:'',slot:'',course:'',location:'',time:'',status:'',reasonOfrejection:''}]

        }}
       onChangeEmail(e){
        this.setState({
            Email: e.target.value
        });
    }


    /* axios.get('/profile', {
        params: {
          emailTest: 'Slim@gmail.com'
        }
    }).then(function (response) {
        console.log(response);
      })
    
    
    }*/
    
    
    onSubmit(e){
      e.preventDefault();
      const s = {
        // Email:this.state.Email,
         Email:this.state.Email

     }

        axios.post('http://localhost:3000/viewAssignedSlots',s)
        .then(response => {
            this.setState({slot: response.data})
            console.log(response)
          }
            )
        .catch(error => console.log(error));
          
    

  
    }
    
    
      render() {
      const zeft =this.state.slot.map((invoice, index) => {
        return (
            
            <tr key={invoice._id}>
                
  
              <h4>ID: {invoice._id}</h4>
              <h4>Email: {invoice.Email}</h4>
              <h4>Day: {invoice.day}</h4>
              <h4>type: {invoice.type}</h4>
              <h4>Date of slot:{invoice.date}</h4>

              <h4>Slot number: {invoice.no}</h4>
              <h4>Course for slot: {invoice.course}</h4>
              <h4>Time of slot:{invoice.time}</h4>
              <h4>Location of slot:{invoice.location}</h4>
              <h4>----------------------------------------------------------</h4>

          </tr>



            )
        })


        return (
            <div className ="alla">
            <Navbar />
            <form onSubmit={this.onSubmit}>

           

<div className="form-group"> 
  <label>Email: </label>
  <input  type="text"
      required
      className="form-control"
      value={this.state.Email}
      onChange={this.onChangeEmail}
      /> 
</div>
<div className="form-group">
              <input type="submit" value="Create Slot" className="btn btn-info" />
            </div>

            {zeft}
            </form>
                    </div>
                    
        )




      }  
    

}