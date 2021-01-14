import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';
export default class deletemember extends Component {
    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
       

        this.state= {
            Email: ""
        }
    }

    onChangeEmail(e){
        this.setState({
            Email: e.target.value
        });
    }


    onSubmit(e){
        e.preventDefault();

      /* const x= {
            Email:this.state.Email
        }*/

      

        //console.log(log);

            axios.delete('http://localhost:3000/deleteMember')
        .then(res=> {
            console.log(res.data)
           // window.location = '/profile'; 
        })
        .catch((error)=>{
            console.log('x');
            
        })
    }





    render() {
        return (
        <div>
          <Navbar/>
          <h3>Delete member</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Email: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.Email}
                  onChange={this.onChangeEmail}
                  />
                
            </div>
            

            <div className="form-group">
              <input type="submit" value="Confirm Delete" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }