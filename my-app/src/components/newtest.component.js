import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class NewTest extends Component {
    constructor(props){
        super(props);
        this.onChangeMonth = this.onChangeMonth.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
         
         attendance:[{_id:'',date:'',minsspent:0}]

        }


    
    
    }

    onChangeMonth(e){
        this.setState({
            month: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const reg = {month:this.state.month};
        axios.get('http://localhost:3000/attendance')
        .then(response => {
            this.setState({attendance: response.data})
            console.log(response)
          }
            )
        .catch(error => console.log(error));
          }
   
    

  
        
    
    
      render() {
      const  zeft= this.state.attendance.map((invoice, index) => {
                
            return (<div>
                

                <table>

                <tr key={invoice.month}>
                    <tr>
<th scope="col">DAY</th>
</tr>
<tr><th scope="row">{invoice.date}</th>
                    <td> {invoice.minsspent}</td>
                    <td> {invoice.month}</td>
                   

         </tr>

                </tr> </table>

      </div>
            )
        })
        return (
            <div>
            <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>Month: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.month}
                  onChange={this.onChangeMonth}
                  /> 
            </div>
            <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary" />
                      </div>
                    </form>,
            {zeft}
                    </div>
            
        )




      }  
    

}