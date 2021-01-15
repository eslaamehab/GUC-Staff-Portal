import React, {Component} from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Navbar from './layouts/Navbar';

// slotlinkingrequest from '../../../slotlinkingrequest';
//import replacementrequest from '../../../replacementrequest';
//import dayoffrequest from '../../../dayoffrequest';
//import slotlinkingrequest from '../../../slotlinkingrequest';
//import slotlinkingrequest from '../../../slotlinkingrequest';
//import slotLinkingStatusInfo from './slotLinkingStatusInfo.component';

//import slotLinkingStatusInfo from './slotLinkingStatusInfo.component';
//import replacemt from '../../../replacementrequest';
//import dayoffrequest from '../../../dayoffrequest';
//import replacementrequest from '../../../replacementrequest';
//import Dropdown from './dropdownmenu/Dropdown';
export default class acceptedRequestsInfo extends Component {
    constructor(props){
        super(props);

        this.state= {
            slotlinkingrequest:[{_id:'',Email:'',CourseCoordinatorEmail:'',day:'',slot:'',course:'',accepted:'',status:''}],

            dayoffrequest:[{_id:'',Email:'',headOfDepartementEmail:'',requestedDayOff:'',accepted:'',status:'',reasonOfrequest:'',reasonOfRejection:''}],


            replacementrequest:[{Email:'',replacingTAEmail:'',date:'',slot:'',course:'',location:'',time:'',status:'',reasonOfrejection:''}]            
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
    
        axios.get('http://localhost:3000/viewAcceptedDayOffRequests')
        .then(response => {
            this.setState({dayoffrequest:response.data})
            /*for(let i=0;i<response.length;i++){
                if (response[i].data.CourseCoordinatorEmail!=null){
                    s[sc]=response[i].data
                    sc++;
                   // this.setState({ slotlinkingrequest: this.state.slotlinkingrequest.push(response[i].data) })

                    

                }
                if(response[i].data.replacingTAEmail!=null){
                    //console.log(response[i].data);
                        r[rc]=response[i].data;
                        rc++;
                   // this.setState({  replacementrequest: this.state.replacementrequest.push(response[i].data) })

                }
                if(response[i].data.headOfDepartementEmail!=null && response[i].data.replacingTAEmail==null){
                    d[dc]=response[i].data;
                    dc++
                    //this.setState({ dayoffrequest: this.state.dayoffrequest.push(response[i].data) })

                   // dayoffrequest.push(response[i].data);
                }
                
            }*/
           // this.setState({slotlinkingrequest: s});
            //this.setState({replacementrequest: r});
            //this.setState({dayoffrequest: d});


            console.log(response)
          }
            )
        .catch(error => console.log(error));



        axios.get('http://localhost:3000/viewAcceptedSlotLinkingRequests')
        .then(response => {
            this.setState({slotlinkingrequest:response.data})
            /*for(let i=0;i<response.length;i++){
                if (response[i].data.CourseCoordinatorEmail!=null){
                    s[sc]=response[i].data
                    sc++;
             //this.setState({ slotlinkingrequest: this.state.slotlinkingrequest.push(response[i].data) })

                    

                }
                if(response[i].data.replacingTAEmail!=null){
                    //console.log(response[i].data);
                        r[rc]=response[i].data;
                        rc++;
                   // this.setState({  replacementrequest: this.state.replacementrequest.push(response[i].data) })

                }
                if(response[i].data.headOfDepartementEmail!=null && response[i].data.replacingTAEmail==null){
                    d[dc]=response[i].data;
                    dc++
                    //this.setState({ dayoffrequest: this.state.dayoffrequest.push(response[i].data) })

                   // dayoffrequest.push(response[i].data);
                }
                
            }*/
           // this.setState({slotlinkingrequest: s});
            //this.setState({replacementrequest: r});
            //this.setState({dayoffrequest: d});


            console.log(response)
          }
            )
        .catch(error => console.log(error));



        
        axios.get('http://localhost:3000/viewAcceptedReplacementRequests')
        .then(response => {
            this.setState({replacementrequest:response.data})
            /*for(let i=0;i<response.length;i++){
                if (response[i].data.CourseCoordinatorEmail!=null){
                    s[sc]=response[i].data
                    sc++;
             //this.setState({ slotlinkingrequest: this.state.slotlinkingrequest.push(response[i].data) })

                    

                }
                if(response[i].data.replacingTAEmail!=null){
                    //console.log(response[i].data);
                        r[rc]=response[i].data;
                        rc++;
                   // this.setState({  replacementrequest: this.state.replacementrequest.push(response[i].data) })

                }
                if(response[i].data.headOfDepartementEmail!=null && response[i].data.replacingTAEmail==null){
                    d[dc]=response[i].data;
                    dc++
                    //this.setState({ dayoffrequest: this.state.dayoffrequest.push(response[i].data) })

                   // dayoffrequest.push(response[i].data);
                }
                
            }*/
           // this.setState({slotlinkingrequest: s});
            //this.setState({replacementrequest: r});
            //this.setState({dayoffrequest: d});


            console.log(response)
          }
            )
        .catch(error => console.log(error));
        }
   
    
/*<h4>Message: {invoice.Message}   
 </h4>
              <h4>Course:  {invoice.course}
              
              </h4>
              <h4>Requested Day Off:  {invoice.requestedDayOff}
              
              </h4>
              <h4>Date:  {invoice.date}
              
              </h4>
              <h4>Location:  {invoice.location}
              
              </h4>
              <h4>Time:  {invoice.time}
              
              </h4>
              <h4>status:  {invoice.status}
              
              </h4>
</h4>

<h4>Coordinator's Email: {invoice.courseCoordinatorEmail}
              
              </h4>
              <h4>Head Of Department's Email: {invoice.headOfDepartementEmail}
              
              </h4>
  
        */
    
    
      render() {
        const  dayoffreq=            this.state.dayoffrequest.map((invoice, index) => {
                
            return (<div>
                
                
                
                
                
                <table>
    
                <tr key={invoice.headOfDepartementEmail}>
                    <tr>
                    <th scope="col">Request ID  </th>
    
    <th scope="col">Teacher's Assistant Email     </th>
    
    <th scope="col">Requested Day off      </th>
    <th scope="col">Request Status     </th>
    <th scope="col">Reason for request     </th>
    <th scope="col">Reason of Rejection     </th>
    </tr>
    <tr><th scope="row">{invoice._id}</th>
                    <td> {invoice.Email}      </td>
                    <td> {invoice.requestedDayOff}     </td>
                    <td> {invoice.status}     </td>
                    <td> {invoice.reasonOfrequest}    </td>
                    <td>{invoice.reasonOfRejection}    </td>
    
    </tr>
    
                    
    
                </tr> </table>
    
    
      </div>
    
    
    
    
    
            )
        })
        const  slotLinkingreq=            this.state.slotlinkingrequest.map((i, index) => {
                
            return (<div>
                
                
                
                
                
                <table>

                <tr key={i.Email}>
                    <tr>
<th scope="col">DAY</th>

<th scope="col">Number</th>
<th scope="col">Timing</th>
<th scope="col">Location</th>
<th scope="col">Course</th>
<th scope="col">Date</th>
<th scope="col" >Type</th>
</tr>
<tr><th scope="row">{i.day}</th>
                    <td> {i.no}</td>
                    <td> {i.time}</td>
                    <td> {i.location}</td>
                    <td> {i.course}</td>
                    <td>{i.date}</td>
                    <td> {i.type}</td>

    </tr>

                    

                </tr> </table>


      </div>





            )
        })
          
    
      
 
        const repreq=   this.state.replacementrequest.map((inv, index) => {
        return (
            <tr key={inv.replacingTAEmail}>

                <h4>Sending TA: {inv.Email}</h4>
                <h4>Date of slot: {inv.date}</h4>
                <h4>Slot number: {inv.slot}</h4>
                <h4>Course for slot: {inv.course}</h4>
                <h4>Request status: {inv.status}</h4>
                <h4>Time of slot:{inv.time}</h4>
                <h4>Reason of rejection:{inv.reasonOfrejection}</h4>
                
            </tr>
        )
    })













        return (
            <div  className ="alla"> 
                            <Navbar/>

<h3>Your accepted Day Off Requests</h3>            
            {dayoffreq}

            <h3>
                
                
                
                
                Your Accepted slot linking Request:
                
                
                
                
                </h3>            

           {slotLinkingreq}
           <h3>
                
                
                
                
                Your Accepted Replacement Request:
                
                
                
                
                </h3>   
            {repreq}

                    </div>
            
        )




      }  
    

    }
    