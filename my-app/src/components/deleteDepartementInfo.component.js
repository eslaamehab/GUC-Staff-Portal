import React, {Component} from 'react';
import Navbar from './layouts/Navbar';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class deleteDepartementInfo extends Component {

    constructor(props){
        super(props);

        this.onChangeDepartmentName = this.onChangeDepartmentName.bind(this);
       
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            DepartmentName: '',
           
        }

    }

    onChangeDepartmentName(e){
        this.setState({
            DepartmentName: e.target.value
        });
    }

 

 
   

  

    onSubmit(e){
        e.preventDefault();

        const Loc = {
            DepartmentName:this.state.DepartmentName
          
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/deleteDepartement',Loc)
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
             
          <h3>delete Department</h3>
          <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>  DepartmentName: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.DepartmentName}
                  onChange={this.onChangeDepartmentName}
                  /> 
            </div>


            <div className="form-group">
              <input type="submit" value="deletedepartment" className="btn btn-primary" />
            </div>

            <div> 
              
              <p>{this.state.v}</p>
             </div>
          </form>
        </div>
        )
      }
    }