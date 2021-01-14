import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';
//import Dropdown from './dropdownmenu/Dropdown';
export default class AddLocationInfo extends Component {

    constructor(props){
        super(props);

        this.onChangeroomName = this.onChangeroomName.bind(this);
        this.onChangeCapacity = this.onChangeCapacity.bind(this);
        this.onChangeCount = this.onChangeCount.bind(this);
        this.onChangetype = this.onChangetype.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            roomName: '',
            Capacity: '',
            Count: '',
            type: '',
        }

    }

    onChangeroomName(e){
        this.setState({
            roomName: e.target.value
        });
    }

    onChangeCapacity(e){
        this.setState({
            Capacity: e.target.value
        });
    }
    onChangeCount(e){
        this.setState({
            Count: e.target.value
        });
    }
    onChangetype(e){
        this.setState({
            type: e.target.value
        });
    }

  

    onSubmit(e){
        e.preventDefault();

        const Loc = {
            roomName:this.state.roomName,
            Capacity:this.state.Capacity,
            Count:this.state.Count,
            type:this.state.type
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/AddLocation',Loc)
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
             
          <h3>ADD Location</h3>
          <form onSubmit={this.onSubmit}>

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
              <label>  Capacity: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.Capacity}
                  onChange={this.onChangeCapacity}
                  /> 
            </div>

            <div className="form-group"> 
              <label>  Count: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.Count}
                  onChange={this.onChangeCount}
                  /> 
            </div>

            <div className="form-group"> 
              <label>  type: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.type}
                  onChange={this.onChangetype}
                  /> 
            </div>

            <div className="form-group">
              <input type="submit" value="AddLocation" className="btn btn-primary" />
            </div>

            <div> 
              
              <p>{this.state.v}</p>
             </div>

          </form>
        </div>
        )
      }
    }