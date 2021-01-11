import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewTeachingAssignmentsInfo extends Component {
    constructor(props){
        super(props);

        this.onChangedate = this.onChangedate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
         slot:[{Email:'',day:'',type:'',no:'',time:'',location:'',course:'',date:''}]
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

    onChangedate(e){
        this.setState({
            date: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();


        const reg = {date:this.state.date};
        axios.post('http://localhost:3000/viewTeachingAssignments',reg)
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

                <tr key={invoice.Email}>
                    <tr>
<th scope="col">DAY</th>
<th scope="col">|</th>
<th scope="col">Number</th>
<th scope="col">|</th>
<th scope="col">Timing</th>
<th scope="col">|</th>
<th scope="col">Location</th>
<th scope="col">|</th>
<th scope="col">Course</th>
<th scope="col">|</th>
<th scope="col">Date</th>
<th scope="col">|</th>
<th scope="col" >Type</th>
<th scope="col">|</th>
</tr>
<tr><th scope="row">{invoice.day}</th>
                   <td> {"|"}</td>
                    <td> {invoice.no}</td>
                    <td> {"|"}</td>
                    <td> {invoice.time}</td>
                    <td> {"|"}</td>
                    <td> {invoice.location}</td>
                    <td> {"|"}</td>
                    <td> {invoice.course}</td>
                    <td> {"|"}</td>
                    <td>{invoice.date}</td>
                    <td> {"|"}</td>
                    <td> {invoice.type}</td>
                    <td> {"|"}</td>

    </tr>

                    

                </tr> </table>


      </div>





            )
        })
        return (
            <div>
            <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>Date   </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.date}
                  onChange={this.onChangedate}
                  /> 
            </div>
            <div className="form-group">
                        <input type="submit" value="View" className="btn btn-primary" />
                      </div>
                    </form>,
            {zeft}
                    </div>
            
        )




      }  
    
    
}