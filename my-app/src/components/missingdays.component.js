import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
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
            <div>
            <h1 style={{backgroundColor: "lightblue"}}>Your missing days</h1>
            <table style={{'backgroundColor': "lightblue"},{'border':" 1px solid black"}}>

               <tbody style={{'border':" 1px solid black"}} >
                  {this.renderTableData()}
               </tbody>
            </table>
            </div>
        )
      }  

    

}