import React, {Component} from 'react';
import Navbar from './layouts/Navbar';
import axios from 'axios';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class deleteinstructorInfo extends Component {

    constructor(props){
        super(props);

        this.onChangeid = this.onChangeid.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            id:'' 
        }

    }

   

    onChangeid(e){
        this.setState({
            id: e.target.value
        });
    }

 
   

  

    onSubmit(e){
        e.preventDefault();

        const Loc = {
            id:this.state.id
           
          
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/deleteinstructor',Loc)
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
             
          <h3>DELETE Instructor</h3>
          <form   className = "textbox" onSubmit={this.onSubmit}>

        
            <div className="form-group"> 
              <label>  id (id from courses db): </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.id}
                  onChange={this.onChangeid}
                
                  /> 
            </div>

        

            <div className="form-group">
              <input type="submit" value="deleteinstructor" className="btn btn-info" />
            </div>

            <div> 
              
              <p  className ="alert">{this.state.v}</p>
             </div>
          </form>
        </div>
        )
      }
    }