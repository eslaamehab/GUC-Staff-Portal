import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';
import Sidebar3 from './sidebar3';
import Sidebar2 from './sidebar2';
import Sidebar from './sidebar';
import '../profileInfo.css'
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class viewCoursesInfo extends Component {
    constructor(props){
        super(props);
       

        this.state= {
         loc:[{_id:'',courseName:'',DepartmentName:'',CourseInstructor:'',Departmentid:''}]
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
    axios.get('http://localhost:3000/viewCourses')
    .then(response => {
        this.setState({loc: response.data})
        console.log(response)
      }
        )
    .catch(error => console.log(error));
    }

   
       
          
   
    

  
        
    
    
      render() {
       const zeft=    
            this.state.loc.map((invoice, index) => {
                  return (
            <tr >
                <h1> -----------------------------------</h1>
                <h4> ID : {invoice._id}</h4>
                <h4>Course Name: {invoice.courseName}</h4>
                <h4>Department Name: {invoice.DepartmentName}</h4>
                <h4>Course Instructor: {invoice.CourseInstructor}</h4>
                <h4>Department ID: {invoice.Departmentid}</h4>
                
                
            </tr>
        )
    }

  )
    

           
           return(
               <div>
                    <Navbar /> 

                    <h1 className ="sidebar">
                      <Sidebar3 />
                      </h1>
                    
                   
                   <h1> All Courses
                       { zeft}
                   </h1>


               </div>
           )
}
}

