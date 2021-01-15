import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class ViewStaffInfoByDepartment extends Component {
    constructor(props){
        super(props);
        this.onChangedepartment = this.onChangedepartment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
           

                  User:[{courses:[],id:'',Email: '',name:'',ID: '',type: '',password:'',salary:'',faculty:'',department:'',gender:'',officelocation:'',firstTime:0, dayoff:''}  ],
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

    onChangedepartment(e){
        this.setState({
            department: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const reg = {department:this.state.department};
        axios.post('http://localhost:3000/ViewStaffByDepartment',reg)
        .then(response => {
           
            if(response.data=="department not found" ){
              this.setState({v:"department not found"})



            }
            else{
              this.setState({User: response.data})
            }

            console.log(response.data)
          }
            )
        .catch(error => console.log(error));
          }
   
    

  
        
    
    
      render() {
if(this.state.User!="department not found" && this.state.User!="instructors ONLY"){
      const  zeft=            this.state.User.map((invoice, index) => {
                
            return (<div className ="alla">
                
                
                
              
                
                <tr key={invoice.department}>
                 

                  <h4>Courses: {invoice.courses}</h4>
                  <h4>Email: {invoice.Email}</h4>
                  <h4>ID: {invoice.ID}</h4>
                  <h4>type: {invoice.type}</h4>
                  <h4>salary: {invoice.salary}</h4>
                  <h4>gender: {invoice.gender}</h4>
                  <h4>Office Location: {invoice.officelocation}</h4>
                  <h4>first Time: {invoice.firstTime}</h4>
                  <h4>dayOff: {invoice.dayoff}</h4>
                  <h4>

----------------------------------------------------------------------------------------------------------------

                  </h4>


                  
              </tr>

          


      </div>





            )
        })
      


        return (
            <div className ="alla">
              <Navbar/>
            <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>department: </label>
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

else if(this.state.User=="department not found" || this.state.User=="instructors ONLY" ){
  return (
    <div className ="alla">
      <Navbar/>
    <form onSubmit={this.onSubmit}>

    <div className="form-group"> 
      <label>department: </label>
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
   <h1> {this.state.v}</h1>
            </div>
    
)
        
        
        } 
 else{
    return (
      <div  className ="alla">
        <Navbar/>
      <form  className = "textbox" onSubmit={this.onSubmit}>

      <div className="form-group"> 
        <label>department: </label>
        <input  type="text"
            required
            className="form-control"
            value={this.state.department}
            onChange={this.onChangedepartment}
            /> 
      </div>
      <div className="form-group">
                  <input type="submit" value="View" className="btn btn-info" />
                </div>
              </form>,
     <h1 className ="alert"> {this.state.v}</h1>
              </div>
      
  )


  }  
    
    
    
    }



    }