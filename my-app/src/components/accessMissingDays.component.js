import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

//import Dropdown from './dropdownmenu/Dropdown';
export default class missingdays extends Component {
    constructor(props){
        super(props);
        
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            Email:'',
         v:[Date]
        }}

    /* axios.get('/profile', {
        params: {
          emailTest: 'Slim@gmail.com'
        }
    }).then(function (response) {
        console.log(response);
      })
    
    
    }*/
    
    onChangeEmail(e){
        this.setState({
           Email:e.target.value
        });
    }

    
    
    onSubmit(e){
        e.preventDefault();

        const log = {
            Email:this.state.Email        }
        

        //console.log(log);

         axios.post('http://localhost:3000/accessMissingDays',log)
        .then(res=> {
            //this.setState({: res.data})
            
            this.setState({v: res.data})
            console.log(res.data)

           //window.location = '/replacementRequestIDResponse'; 
        })
        .catch((error)=>{
            console.log('Wrong Email or password');
            
        })
    }

    

    
         
     
    
      render() {
          const zeft=this.state.v.map((Date, index) => {
            return (<tr key={missingdays}>
                  <td>{Date}</td></tr>
            )
         })
        return (
            <div className ="alla" >
            <Navbar/>
          <h3>Enter the Email of the staff member you 
            want to view his/her missing days</h3>
          <form   className = "textbox" onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label></label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.Email}
                  onChange={this.onChangeEmail}
                  />
                
            </div>

          </form>
          <form onSubmit={this.onSubmit}>
           
            <div className="form-group">
              <input type="submit" value="view" className="btn btn-info" />
            </div>
          </form>

          {zeft}
            </div>
        )
      }  

    }