import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

import SlotLinkingRequestMenu from './layouts/SlotLinkingRequestMenu';

import '../profileInfo.css'
//import Dropdown from './dropdownmenu/Dropdown';
export default class SlotLinkingOptions extends Component {
    constructor(props){
        super(props);

        

   


    
        

        //console.log(reg);

            axios.get('http://localhost:3000/viewAllS')
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
         <h1 className="y"> <SlotLinkingRequestMenu/></h1>
         
        </div>
        )
      }
    }