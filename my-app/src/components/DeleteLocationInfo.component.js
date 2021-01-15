import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './layouts/Navbar';
import { render } from 'react-dom';
//import Dropdown from './dropdownmenu/Dropdown';
export default class DeleteLocationInfo extends Component {

    constructor(props){
        super(props);

        this.onChangeroomName = this.onChangeroomName.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            roomName: '',
           
        }

    }

    onChangeroomName(e){
        this.setState({
            roomName: e.target.value
        });
    }

   

  

    onSubmit(e){
        e.preventDefault();

        const Loc = {
            roomName:this.state.roomName
           
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/DeleteLocation',Loc)
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
             <Navbar />
             
          <h3>Delete Location</h3>
          <form  className = "textbox" onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>  roomName: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.roomName}
                  onChange={this.onChangeroomName}
                  /> 
            </div>

          

            <div className="form-group">
              <input type="submit" value="DeleteLocation" className="btn btn-info" />
            </div>

            <div> 
              
            <p className ="alert">{this.state.v}</p>
             </div>

          </form>
        </div>
        )
      }
    }