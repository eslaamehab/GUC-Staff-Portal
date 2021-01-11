import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewAvailableSlotsInfo extends Component {
    constructor(props){
        super(props);
        this.onChangeC = this.onChangeC.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
         slot:[{_id:'',Email:'',day:'',type:'',no:'',time:'',location:'',course:'',date:''}]
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

    onChangeC(e){
        this.setState({
          course: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const reg = {course:this.state.course};
        axios.post('http://localhost:3000/viewAvailableSlots',reg)
        .then(response => {
            this.setState({slot: response.data})
            console.log(response)
          }
            )
        .catch(error => console.log(error));
          }
   
    

  
        
    
    
      render() {
      const  zeft=            this.state.slot.map((invoice, index) => {
                
            return (<div>
                
                
                
                
                
                <table>

                <tr key={invoice.course}>
                    <tr>
                    <th scope="col">Course ID</th>

<th scope="col">  DAY</th>

<th scope="col">  Number</th>


<th scope="col">  Timing</th>

<th scope="col">  Location</th>


<th scope="col">  Course</th>
</tr>
<tr><th scope="row">{invoice._id}</th>
<td> {invoice.day}</td>

                    <td> {invoice.no}</td>
                    <td> {invoice.time}</td>
                    <td> {invoice.location}</td>
                    <td> {invoice.course}</td>
    </tr>

                    

                </tr> </table>


      </div>





            )
        })
        return (
            <div>
            <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>Enter the name of the course you wish to view its available slots : </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.course}
                  onChange={this.onChangeC}
                  /> 
            </div>
            <div className="form-group">
                        <input type="submit" value="view" className="btn btn-primary" />
                      </div>
                    </form>,
            {zeft}
                    </div>
            
        )




      }  
    

}