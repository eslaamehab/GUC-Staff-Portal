import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';
//import Dropdown from './dropdownmenu/Dropdown';
export default class updatePassword extends Component {
    constructor(props){
        super(props);

        this.onChangeOld = this.onChangeOld.bind(this);
        this.onChangeNew = this.onChangeNew.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state= {
            oldpassword: '',
            newpassword:''
            
        }
    }

        onChangeOld(e){
            this.setState({
                oldpassword: e.target.value
            });
        }

        onChangeNew(e){
            this.setState({
                newpassword: e.target.value
            });
        }

        onSubmit(e){
            e.preventDefault();
    
            const upd = {
                oldpassword:this.state.oldpassword,
                newpassword:this.state.newpassword
            }
    
    
            axios.post('http://localhost:3000/updatePassword',upd)
            .then(res=> {
                this.setState({v: res.data})
                console.log(res.data)
               
            })
            .catch((error)=>{
                console.log('Error');
                
            })
        }
            
          

    
      render() {
        return (
            <div className ="alla">
                <Navbar/>
              <h3>Update Password</h3>
              <form className = "textbox" onSubmit={this.onSubmit}>


    
              <div className="form-group"> 
                  <label>Old password: </label>
                  <input  type="password"
                      required
                      className="form-control"
                      value={this.state.oldpassword}
                      onChange={this.onChangeOld}
                      />
                </div>

                
              <div className="form-group"> 
                  <label>New password: </label>
                  <input  type="password"
                      required
                      className="form-control"
                      value={this.state.newpassword}
                      onChange={this.onChangeNew}
                      />
                </div>
    
                
    


    
    
                <div className="form-group">
                  <input type="submit" value="Update" className="btn btn-info" />
                </div>
              </form>

              <p className ="alert">{this.state.v}</p>
            </div>
            )
        }

}
