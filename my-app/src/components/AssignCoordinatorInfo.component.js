import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class AssignCoordinatorInfo extends Component {

    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
          Email:''
                }

    }

   

   
    onChangeEmail(e){
        this.setState({
            v:String,
            Email: e.target.value
        });
    }

 
    onSubmit(e){
        e.preventDefault();

        const Loc = {
           
            Email:this.state.Email
           
          
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/AssignCoordinator',Loc)
        .then(res=> {
            this.setState({v: res.data})
            console.log(res.data)
           // window.roomName = '/profile'; 
        })
        .catch((error)=>{
            console.log('Error');
            
        })
    }





    render() {
        return (
        <div className ="alla">
          <Navbar/>
          <h3> Assign Coordinator</h3>
          <form  className = "textbox"  onSubmit={this.onSubmit}>


           
           
            <div className="form-group"> 
              <label>  Email </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.Email}
                  onChange={this.onChangeEmail}
                
                  /> 
            </div>
           
           
        

            <div className="form-group">
              <input type="submit" value="Done" className="btn btn-primary" />
            </div>


            <div> 
              
              <p className ="alert">{this.state.v}</p>
             </div>
          </form>
        </div>
        )
      }
    }