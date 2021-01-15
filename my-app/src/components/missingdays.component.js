import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

//import Dropdown from './dropdownmenu/Dropdown';
export default class missingdays extends Component {
    constructor(props){
        super(props);
        this.state= {
         v:[Date]
        }

    /* axios.get('/profile', {
        params: {
          emailTest: 'Slim@gmail.com'
        }
    }).then(function (response) {
        console.log(response);
      })
    
    
    }*/

    axios.get('http://localhost:3000/missingdays')
  .then(response => {
    this.setState({v: response.data})

      console.log(response)
    }
      )
  .catch(error => console.log(error));
    }
    

    renderTableData() {
        return this.state.v.map((Date, index) => {
           return (<tr key={missingdays}>
                 <td>{Date}</td></tr>
           )
        })
     }
    
      render() {
        return (
            <div  className ="alla">
              <Navbar/>
            <h1>Your missing days</h1>
            <table >

               <tbody >
                  {this.renderTableData()}
               </tbody>
            </table>
            </div>
        )
      }  

    

}