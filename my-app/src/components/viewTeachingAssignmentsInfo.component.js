import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewTeachingAssignmentsInfo extends Component {
    constructor(props){
        super(props);

        this.onChangedate = this.onChangedate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
          v:'',
         slot:[{Email:'',day:'',type:'',no:'',time:'',location:'',course:'',date:''}]
        //replacementrequest:[{Email:'',replacingTAEmail:'',date:'',slot:'',course:'',location:'',time:'',status:'',reasonOfrejection:''}]

        }


    /* axios.get('/profile', {
        params: {
          emailTest: 'Slim@gmail.com'
        }
    }).then(function (response) {
        console.log(response);
      })
    
    
    }*/
    
    }

    onChangedate(e){
        this.setState({
            date: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();


        const reg = {date:this.state.date};
        axios.post('http://localhost:3000/viewTeachingAssignments',reg)
        .then(response => {
          if(response.data!="Date not available"&&response.data!="HOD ONLY"){
            this.setState({slot: response.data})
            console.log(response)}

            else{
              this.setState({v: response.data})


            }
          }
            )
        .catch(error => console.log(error));
          }
   
    

  
  
    
    
      render() {


      if(this.state.slot!="Date not available"&&this.state.slot!="HOD ONLY")  {
      const  zeft=            this.state.slot.map((invoice, index) => {
                
            return (<div className ="alla">
                
                
                
                
                <table>

                <tr key={invoice.Email}>
                    <tr>
<h4>DAY: {invoice.day}</h4>
<h4>Number:{invoice.no}</h4>
<h4>Timing:{invoice.time}</h4>


<h4>Location:{invoice.location}</h4>


<h4>Course:{invoice.course}</h4>


<h4>Date:{invoice.date}</h4>


<h4 >Type:{invoice.type}</h4>

<h4>---------------------------------------------</h4>
</tr>

             

                    

                </tr> </table>


      </div>





            )
        })
        return (
            <div className ="alla">
              <Navbar/>
            <form  className = "textbox" onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>Date   </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.date}
                  onChange={this.onChangedate}
                  /> 
            </div>
            <div className="form-group">
                        <input type="submit" value="View" className="btn btn-primary" />
                      </div>
                    </form>,
            {zeft}
                    </div>
            
        )
        }
      else{
        return(
<div>
  <Navbar/>
            <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>Date   </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.date}
                  onChange={this.onChangedate}
                  /> 
            </div>
            <div className="form-group">
                        <input type="submit" value="View" className="btn btn-info" />
                      </div>
                    </form>,
            {this.state.v}
                    </div>)

      }



      }  
    
    
}