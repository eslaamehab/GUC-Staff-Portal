import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

//import Dropdown from './dropdownmenu/Dropdown';
export default class deleteSlot extends Component {

    constructor(props){
        super(props);

        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangeDay = this.onChangeDay.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            Email: '',
            day:'',
            no:''
           
        }

    }

    onChangeMail(e){
        this.setState({
            Email: e.target.value
        });
    }
    onChangeDay(e){
        this.setState({
            day: e.target.value
        });
    }
    onChangeNumber(e){
        this.setState({
            no: e.target.value
        });
    }

   

  

    onSubmit(e){
        e.preventDefault();

        const Loc = {
            Email:this.state.Email,
            day:this.state.day,
            no:this.state.no           
        }

        

        console.log(Loc);

            axios.post('http://localhost:3000/deleteSlot',Loc)
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
            <Navbar/>
          <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>  Email: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.Email}
                  onChange={this.onChangeMail}
                  /> 
            </div>

            <div className="form-group"> 
              <label>  Day: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.day}
                  onChange={this.onChangeDay}
                  /> 
            </div>

            <div className="form-group"> 
              <label>  Slot Number: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.no}
                  onChange={this.onChangeNumber}
                  /> 
            </div>

          

          

            <div className="form-group">
              <input type="submit" value="Delete Slot" className="btn btn-primary" />
            </div>

            <div> 
              
              <p>{this.state.v}</p>
             </div>

          </form>
        </div>
        )
      }
    }