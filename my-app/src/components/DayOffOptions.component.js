import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

import DayOffRequestMenu from './layouts/DayOffRequestMenu';

import '../profileInfo.css'
//import Dropdown from './dropdownmenu/Dropdown';
export default class DayOffOptions extends Component {
    constructor(props){
        super(props);

        

   


    
        

        //console.log(reg);

            axios.get('http://localhost:3000/viewAllD')
        .then(res=> {
            console.log(res.data)
            //window.location = '/profile'; 
        })
        .catch((error)=>{
            console.log('Error');
            
        })
    }





    render() {
        return (
        <div>
            <Navbar/>
         <h1 className="y"> <DayOffRequestMenu/></h1>
         
        </div>
        )
      }
    }