import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class deleteFacultyInfo extends Component {

    constructor(props){
        super(props);

        this.onChangefacultyName = this.onChangefacultyName.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            facultyName: '',
           
        }

    }

    onChangefacultyName(e){
        this.setState({
            facultyName: e.target.value
        });
    }

 

    onSubmit(e){
        e.preventDefault();

        const Loc = {
            facultyName:this.state.facultyName
           
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/deleteFaculty',Loc)
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
          <h3>Delete Faculty</h3>
          <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>  FacultyName: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.facultyName}
                  onChange={this.onChangefacultyName}
                  /> 
            </div>

          

            <div className="form-group">
              <input type="submit" value="DeleteFaculty" className="btn btn-primary" />
            </div>

            <div> 
              
              <p>{this.state.v}</p>
             </div>
          </form>
        </div>
        )
      }
    }