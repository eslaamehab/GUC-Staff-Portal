import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class deletemember extends Component {

    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            roomName: '',
           
        }

    }

    onChangeEmail(e){
        this.setState({
            Email: e.target.value
        });
    }

   

  

    onSubmit(e){
        e.preventDefault();

        const Loc = {
            Email:this.state.Email
           
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/deleteMember',Loc)
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
        <div>
             <Navbar />
             
          <h3>Delete Member</h3>
          <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>  Email: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.Email}
                  onChange={this.onChangeEmail}
                  /> 
            </div>

          

            <div className="form-group">
              <input type="submit" value="Delete" className="btn btn-primary" />
            </div>

            <div> 
              
              <p>{this.state.v}</p>
             </div>

          </form>
        </div>
        )
      }
    }