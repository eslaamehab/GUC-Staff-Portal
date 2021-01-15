import React, {Component} from 'react';
import Navbar from './layouts/Navbar';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class deletecoursesInfo extends Component {

    constructor(props){
        super(props);

        this.onChangecourseName = this.onChangecourseName.bind(this);
       

        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            courseName : '',
            
        }

    }

    onChangecourseName(e){
        this.setState({
            courseName: e.target.value
        });
    }

   
   

  

    onSubmit(e){
        e.preventDefault();

        const Loc = {
            courseName:this.state.courseName,
           
          
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/deletecourse',Loc)
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
        <div  className ="alla">
             <Navbar />
             
          <h3>delete courses</h3>
          <form className = "textbox" onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>  courseName: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.courseName}
                  onChange={this.onChangecourseName}
                  /> 
            </div>

           

           

            <div className="form-group">
              <input type="submit" value="Delete courses" className="btn btn-info" />
            </div>

            <div> 
              
              <p  className ="alert">{this.state.v}</p>
             </div>
          </form>
        </div>
        )
      }
    }