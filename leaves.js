const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const leavesSchema = new schema({

    Email: String,
    ID: String,
    type:String, //Leave type (Annual, Accidental , Maternity, Compensation, Sick)
    startDate:String, 
    endDate:String,
    submissionDate:String,
    status: String, //Accepted or Rejected
    replacementStatus:String, //Zeina
    replacementDay:String, //in Case of annual leave (zeina)
    replacementStaffMember:String, //(zeina)
    departmentName:String,
    courseName:String,
    document: String, //(maternity/sick)
    skippedDay: String,//in Case of compensation leave 
    HODemail: String,
    replacementStaffEmail:String


    // Leaves and their cases and conditions
    // Each Staff Member get 2.5 days off each month (0.5 cannot be used unless combined with another 0.5 from another month)
   // 
   // 1.Annual Leave
        // Submitted before Targeted Day (submissionDate < startDate)
        // Must find replacement staff member if they have teaching activities on that day (Replacement Member from same department teaching the same course)
        // Replacement Member has to be notified
            //if they accept then the requesting member has to be notified
        //In case of acceptance, the request is sent to HOD (also stating who will be the replacement staff)
        //In case of not finding a replacement, request can still be submitted to HOD and he can decide to accept or reject
        //Consumed from annual leaves obviously (annualLeaveBalance>=1 Then decremented by 1 if accepted)

        // CODE:
            
            /*
            const u =await user.findOne({Email: req.body.Email})
             if(submissionDate < startDate){
                if(u.annualLeaveBalance>=1){
                    Find Replacement Staff Member (Display applicable members first)
                    
                    for(let i=0; i<users.size; i++){ //Display Staff Member in same Department Teaching Same Course
                        var u2 = users[i]; //load user into var u2
                        if(u2.department == l.departmentName){
                            for(let j=0; j<u2.courses.size; j++){
                                if(u2.courses[j] == courseName){
                                    console.log("Staff Member: " + u2.name + "Email: " + u2.Email)
                                    //And Display schedule

                                }
                            }
                            
                        }
                    }
                    
                    // Choose Desired Staff Member
                    replacementStaffMember = req.body.replacementStaffMember;
                    // Send replacement Request
                    // Replacement status is modified when reply is received from replacement member
                    if(replacementStatus == "Accepted"){
                        console.log("Replacement Accepted")
                    }
                    else{
                        console.log("Replacement Rejected")
                    }
                    // Requesting member is notified

                    //Request submitted to HOD in both cases to determine status
                    if(status= "accepted"){
                        u.annualLeaveBalance = u.annualLeaveBalance-1;
                        endDate = startDate +1;
                        console.log("Leave Accepted")
                    }
                    else{
                        console.log("Leave Rejected")
                    }
                }

            }

            */


   // 2.Sick Leave
        // Not consumed from the annual leaves ()
        // Submitted maximum 3 days after targeted day (sick day)
        // Proper Document required to prove medical condition
        // No day limit

        // CODE:

        /*

        const u =await user.findOne({Email: req.body.Email})
        if( (submissionDate - startDate) <=3){ //startDate = 20/12/2020  SubmissionDate must be max StartDate +3
            startDate = req.body.startDate;
            endDate = req.body.endDate;
            doucment = req.body.document;
        }  

        */
    
   // 3.Maternity Leave
        // Only female members (u.gender == female)
        // Not consumed from annual leaves
        // Proper document required to prove medical condition 


        // CODE:

        /*
        const u =await user.findOne({Email: req.body.Email})
        if( (u.gender == "female" ){ //Member is a female
            startDate = req.body.startDate;
            endDate = req.body.endDate;
            doucment = req.body.document;
        }  

         */

    // 4.Accidental Leave
        // Each member has up to 6 Days
        // Submitted any time after targeted day
        // Consumed from annual leaves

         // CODE:

        /*
        const u =await user.findOne({Email: req.body.Email})
        if(submissionDate > startDate){ 
            if(endDate - startDate <=6){
                startDate = req.body.startDate;
                endDate = req.body.endDate;
                u.annualLeaveBalance = u.annualLeaveBalance - (endDate - startDate);

            }
            
        }  

         */
        
    // 5.Compensation Leave
        //In case of abscence on working day
        //Request Compensation leave in order to avoid salary deduction
        //Has to be on the member's day off during the same month he was abscent in  

         // CODE:

        /*
        const u =await user.findOne({Email: req.body.Email})
        if(u.dayOff == startDay.getDay){ // Members day off  //skippedDay within the same month
            //Send request to HOD
            //Update status (usually accepted (logically))
            //Adjust Salary to avoid deduction (Loop on days off to find if there are any hours, if found add them to total hours in the month (global variable))

        }

        */


})
module.exports=mongoose.model('leaves', leavesSchema)