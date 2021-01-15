import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

import SidebarAttendance from './SidebarAttendance';

import '../profileInfo.css'
//import Dropdown from './dropdownmenu/Dropdown';
export default class empty2Info extends Component {
    constructor(props){
        super(props);

        

   


    
        

        //console.log(reg);

            axios.get('http://localhost:3000/empty2')
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
         <h1 className="y"> <SidebarAttendance/></h1>
         
        </div>
        )
      }
    }