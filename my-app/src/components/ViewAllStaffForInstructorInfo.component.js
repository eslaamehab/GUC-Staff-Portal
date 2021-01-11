import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class ViewAllStaffForInstructorInfo extends Component {
    constructor(props){
        super(props);
        this.onChangedepartment = this.onChangedepartment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
           

                  User:[{courses:[],id:'',Email: '',name:'',ID: '',type: '',password:'',salary:'',faculty:'',department:'',gender:'',officelocation:'',firstTime:0, dayoff:''}  ]
      
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

    onChangedepartment(e){
        this.setState({
            department: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const reg = {department:this.state.department};
        axios.post('http://localhost:3000/ViewAllStaffForInstructor',reg)
        .then(response => {
            this.setState({User: response.data})
            console.log(response.data)
          }
            )
        .catch(error => console.log(error));
          }
   
    

  
        
    
    
      render() {
      const  zeft=            this.state.User.map((invoice, index) => {
                
            return (<div>
                
                
                
                
                
                <table>

                <tr key={invoice.department}>
                    <tr>
<th scope="col">Courses</th>

<th scope="col">|</th>
<th scope="col">Email</th>
<th scope="col">|</th>
<th scope="col">name</th>
<th scope="col">|</th>
<th scope="col">ID</th>
<th scope="col">|</th>
<th scope="col">type</th>
<th scope="col">|</th>
<th scope="col" >salary</th>
<th scope="col">|</th>
<th scope="col" >faculty</th>
<th scope="col">|</th>
<th scope="col" >gender</th>
<th scope="col">|</th>
<th scope="col" >officelocation</th>
<th scope="col">|</th>
<th scope="col" >FirstTime</th>
<th scope="col">|</th>
<th scope="col" >dayoff</th>
<th scope="col">|</th>
</tr>
<tr><th scope="row">{invoice.courses}</th>
                    <td> {" |"}</td>
                  
                    <td> {invoice.Email}</td>
                    <td> {" |"}</td>

                    <td> {invoice.name}</td>
                    <td> {" |"}</td>
                    <td> {invoice.ID}</td>
                    <td> {" |"}</td>
                    <td> {invoice.type}</td>
                    <td> {" |"}</td>
                   
                    <td>{invoice.salary}</td>
                    <td> {" |"}</td>
                    <td> {invoice.faculty}</td>
                    <td> {" |"}</td>
                    <td> {invoice.gender}</td>
                    <td> {" |"}</td>
                    <td> {invoice.officelocation}</td>
                    <td> {" |"}</td>
                    <td> {invoice.firstTime}</td>
                    <td> {" |"}</td>
                    <td> {invoice.dayoff}</td>
                    <td> {" |"}</td>

    </tr>

                    

                </tr> </table>


      </div>





            )
        })
        return (
            <div>
            <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>Enter your department: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.department}
                  onChange={this.onChangedepartment}
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
    

