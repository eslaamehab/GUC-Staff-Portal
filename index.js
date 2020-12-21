const express= require('express')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('./user.js');
const location=require('./location.js');
const departements =require('./departements')

//const attendance = require('./attendance.js');
const { isNullOrUndefined } = require('util');
const key = 'jsvjdxbvjkdbuifhdwalsknvk';

let signedin = false;

let inhour=0;
let inmin=0;
let outhour=0;
let outmin=0;
let diffhour=0;
let diffmin=0;
let totalmin=0;
//hjfjg

var firstTime;

var emailTest='';

let ACcounter =1;
let HRcounter =1; 

const app= express();

//app.use(express.json());

// latest test
//test999
// ess gamed N
//this is sparta

mongoose.connect('mongodb+srv://dbUser:password328@cluster0.yt28z.mongodb.net/<dbname>?retryWrites=true&w=majority')
.then(()=>{
    app.use(express.json());

    app.post('/register', async (req,res)=>{
        //validate data first
       

        const salt = await bcrypt.genSalt(12);
        const hashedPassword= await bcrypt.hash(req.body.password,salt);
        if(req.body.type=="HR"){
           //var idv = "HR" + HRcounter;
           var idv2 = HRcounter.toString();
           var idv = "HR" + idv2;
           HRcounter=HRcounter+1;
           var df="saturday";
        }
        else{
            var idv2 = ACcounter.toString();
            var idv = "AC" + idv2;
            ACcounter=ACcounter+1;
            df=req.body.dayoff;
        }
        const o = await location.findOne({roomName:req.body.officelocation});
        console.log(o.roomName);
        let locationCount= o.Count + 1;
        console.log('locationCount '+locationCount);
        console.log("Capacity" + o.Capacity);

        if(o.type=="office" && locationCount>o.Capacity){

            console.log("Capacity "+ o.Capacity);
            res.send("office location unavailable")
             //u.officelocation=o.roomName;
             //o.Count=locationCount;
    
           }
           else{
            o.Count=locationCount;
            console.log("o.Count "+ o.Count);

           }


        var u = new user({
            Email: req.body.Email,
            name: req.body.name,
            ID: idv,
            type: req.body.type,
            password: hashedPassword,
            salary:req.body.salary,
            faculty:req.body.faculty,
            department:req.body.department,
            gender:req.body.gender,
            officelocation:req.body.officelocation,
            firstTime:req.body.firstTime,
            newpassword:req.body.newpassword,
            dayoff:df
            

        })

              
       
        res.send('Registration successful');
        //res.send(ID);
        await u.save();

         u =await user.findOne({Email: req.body.Email})
          //Initialize attendance for user
         
          var stringg = (new Date().toLocaleDateString());
          u.attendance[0] = {date: stringg, minsspent: 0};
          console.log(u.attendance[0].date);
          console.log(u.attendance[0].minsspent);
  
          var datecount=1;
  
          for(let i =1; i<30; i++){
              var olddate=new Date();
              olddate.setDate(olddate.getDate()+datecount); // .toString().substring(1, 10);;
              //var dates=olddate.toString();
              var dates=olddate.toLocaleDateString();
  
              u.attendance[i] =  {date: dates, minsspent: 0}; // new Date(u.attendance[i-1].date +1);
              datecount=datecount+1;
              
              console.log(u.attendance[i].date);
              console.log(u.attendance[i].minsspent);
  
              
          }  
          await u.save();    

    })

    app.post('/login', async(req,res)=>{
        //validate first
      // timestamp=(new Date()).toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

      
        const u =await user.findOne({Email: req.body.Email})
        if (!u)
        return res.status(403).send('Not found')

        const equal =await bcrypt.compare(req.body.password,u.password)
        if(!equal)
        return res.status(403).send('Wrong Pass')

        if(u.firstTime==0){   

            if(req.body.newpassword!=null){
                u.firstTime=1;
                console.log('update')
                const salt = await bcrypt.genSalt(12);
                const hashedPassword= await bcrypt.hash(req.body.newpassword,salt);
                u.password=hashedPassword;
                res.send("your password has been updated successfully, please try to login with your new password");
                u.save();
            }
            else
            res.send("You need to enter your new password at first login!");
            

    
    }




        
        
        
       // await user.findOne({Email: req.body.Email}).update({$set:
           // {signintime: timestamp}});
            

        //u.signintime = current.toLocaleDateString() + current.toLocaleTimeString();
       
        const payload={
            ID: u.ID,
            type: u.type
         }
       // const mail = u.Email;
        emailTest = u.Email;
        //res.header('Email',mail);
        u.save;
        const token = jwt.sign(payload,key);
        res.header('auth-token',token);
        res.send(`login successful`);
        

    })

    

    app.use(authenticate); //works on  any route under it

    app.get('/profile', async(req,res)=>{

        try{
           // const u =await user.findOne({Email: req.header('Email')});
            const u =await user.findOne({Email: emailTest});
            //console.log(u.name);
            //res.send(`login successful ${u.name}`);
            res.send('Here is your profile' + '\n' + u.name + ' ' +  u.ID);
            }
            catch(err){
            console.log('err');
            } 
    })

    app.post('/logout', async(req,res)=>{
        const u =await user.findOne({Email: req.body.Email})

       // timestamp=(new Date()).toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

        //await user.findOne({Email: req.body.Email}).update({$set:
           // {signouttime: timestamp}});
       // u.signouttime = current.toLocaleDateString() + current.toLocaleTimeString()
       // res.send("Sign out time: " + signouttime);
       u.save;
        res.send(`logout successful`);
    })

    app.post('/updateProfile', async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
        const u2 =await user.findOne({Email: req.body.Email}); //User to be updated
        const o = await location.findOne({roomName:req.body.officelocation});
        console.log(o.roomName);
        if(u.type=="HR"){
            console.log("inside HR condition");
            let locationCount= o.Count + 1;
            console.log('locationCount '+locationCount);
            console.log("Capacity" + o.Capacity);
        if(u2.officelocation==o.roomName){
            res.send("staff member is already located in this office");
        } 
        if(o.type=="office" && locationCount<=o.Capacity){

            console.log("Capacity "+ o.Capacity);
 
             u2.officelocation=o.roomName;
             o.Count=locationCount;
 
             
             
             o.save();
           }  
           else{
             res.send("this room cannot accomodate your staff member")
 
           }
            // await user.findOne({Email: req.body.Email}).update({$set:{signintime: timestamp}});
           // u2.update({$set:{officelocation: req.body.officelocation}})
    
            u2.department=req.body.deaprtment;
            u2.faculty=req.body.faculty;
            u2.salary=req.body.salary;
            u2.ID=req.body.ID;
            u2.name=req.body.name;
            u2.save();
            res.send('update successful');
        }

        
    
    
    res.send('This action can only be done if you are an HR member');
    
})

    app.post('/updatePassword', async(req,res)=>{
        const u =await user.findOne({Email: emailTest});
        var oldpassword = req.body.oldpassword;
       

        const equal =await bcrypt.compare(req.body.oldpassword,u.password)
        if(equal){
            const salt = await bcrypt.genSalt(12);
            const hashedPassword= await bcrypt.hash(req.body.newpassword,salt);
            u.password=hashedPassword;
            u.save();
            res.send('Update successful');
        }

      
        res.send('Update not successful');
       // u.password= new password
    })

    app.post('/attendance', async(req,res)=>{
        const u =await user.findOne({Email: req.body.Email});
        for(let i =0; i<30; i++){
            //input month
            //compared with first or second elemnts of date string (u.attendance[i].date)
            var m = (u.attendance[i].date); //month in array
            var d = new Date(u.attendance[i].date).getMonth();
            d=d+1;

            var month = req.body.month; //month we want
           

            if(d==month){
               // console.log(x);
                console.log(u.attendance[i].date)
                //console.log(u.attendance[i].minsspent)

                var num = u.attendance[i].minsspent; 
                var hours = Math.floor(num / 60);  
                var minutes = num % 60;
                //return hours + ":" + minutes;     
                console.log("hours: " + hours + " minutes: " + minutes);

            }

           
            
        }
        
        res.send(u.attendance);
       // res.send('This is your attendance');
    })

    app.get('/missingdays', async(req,res)=>{
        const u = await user.findOne({Email: emailTest});
        let day;
        
        switch (u.dayoff) {
            case "sunday":
              day = 0;
              break;
            case "monday":
                day = 1;
              break;
            case "tuesday":
                day = 2;
              break;
            case "wednesday":
              day = 3;
              break;
            case "thursday":
              day = 4;
              break;
            case "friday":
              day = 5;
              break;
            case "saturday":
              day = 6;
          }

        for(let i =0; i<30; i++){
            var x = new Date(u.attendance[i].date).getDay();
            if(u.attendance[i].minsspent == 0 )
                if( day != x){
                    console.log(u.attendance[i].date);
                    console.log('Absent');
                }


        }

        res.send('These are your missing days');
    })

    app.get('/missinghours', async(req,res)=>{
        //each day lazem 8hrs 24mins = 504 mins
        //missing hours for each day = 504-totalmins
        //missing hours can be compensated throughout the month
        const u = await user.findOne({Email: emailTest});

        for(let i =0; i<30; i++){
            var x = new Date(u.attendance[i].date).getDay();
            var misshours=504-(u.attendance[i].minsspent);
            
            console.log(u.attendance[i].date);

            var num = misshours; 
            var hours = Math.floor(num / 60);  
            var minutes = num % 60;
            //return hours + ":" + minutes;     
            console.log("missing hours: " + hours + " missing minutes: " + minutes);





        }

        res.send('These are your hours');
    })

    app.delete('/deleteUser', (req,res)=>{
        const payload = jwt.verify(req.header('auth-token'),key);
        if(payload.type!='HR')
        return res.status(403).send("youre not HR Staff")

        res.send('User Deleted');
    })

    app.post('/signin', async(req,res)=>{
        timestamp=(new Date()).toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
        var x = timestamp.split(' ');
        var y = x[1].split(':');
        //console.log(y[0]);

        if(!(y[0]<7)){
            const u =await user.findOne({Email: req.body.Email})
        if (!u)
        return res.status(403).send('Not found')

        //signin.split(' ');
        //signin.split(':');
        

        await user.findOne({Email: req.body.Email}).update({$set:
            {signintime: timestamp}});

            inhour = new Date().getHours();
            inmin = new Date().getMinutes();

        

        u.save; 
        signedin=true;
        res.send(`Signin successful ${u.signintime}`);  
        }

        else{
            res.send('Cannot sign in before 7 AM');
        }
        
         

    })

    app.post('/signout', async(req,res)=>{
        if(signedin==false){
        res.send('You need to sign in first')
        }
        const u =await user.findOne({Email: req.body.Email});

        timestamp=(new Date()).toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

        var x = timestamp.split(' ');
        var y = x[1].split(':');

        if(!(y[0]>7)){
            await user.findOne({Email: req.body.Email}).update({$set:
                {signouttime: timestamp}});
    
            outhour = new Date().getHours();
            outmin = new Date().getMinutes();
                
            diffhour = outhour-inhour;
            diffmin=outmin-inmin;
            totalmin=(diffhour*60) + diffmin;
            
            //To fill attendance
            for(let i =0; i<30; i++){
                var stringd = u.attendance[i].date;//.toLocaleDateString(); //Date in index i
                var stringt = new Date().toLocaleDateString(); //Todays date
    
                //console.log(stringd);
                //console.log(stringt);
    
               
                if (stringd == stringt){ //if date in index i == todays date
                   // u.hours[i] = {date: new Date().toLocaleDateString(), minsspent: u.hours[i].minsspent+totalmin};
                   //u.hours[i] = {date: stringt, minsspent: 5};
                   //u.hours[i].minsspent=5;
                   u.attendance[i].minsspent = u.attendance[i].minsspent+totalmin
    
                   var num = u.attendance[i].minsspent; 
                   var hours = Math.floor(num / 60);  
                   var minutes = num % 60;
                   //return hours + ":" + minutes;     
                   console.log("hours: " + hours + " minutes: " + minutes);
    
    
                    u.update();
                    u.save();
                   
                   
                } 
            }
            //console.log(u.hours[x].date);
            //console.log(u.hours[x].minsspent);
                  
            
             u.save;
            signedin=false;
           // console.log(diffhour);
           // res.send(`signout successful ${diffmin}`);
            res.send(`signout successful ${u.signouttime}`);
        }

        else{
            res.send('Cannot sign out after 7 PM');
        }


        

    })

    app.post('/manualsigninout', async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR USER 

        if(emailTest != req.body.Email && u.type == 'HR'){
            const u2 =await user.findOne({Email: req.body.Email}); //User to be updated
            //Take Date
            //Take SigninTime
            //Take SignoutTime
            //Add to attendance of u2
            var date = req.body.date;
            var signin = req.body.signin;
            var signout = req.body.signout;
    
            //console.log(date); //12/20/2020
            //console.log(signin); //4:57:13 PM
            //console.log(signout);
    
            u2.signintime = signin;
            u2.signouttime = signout;
            
            
    
            var signi = signin.split(':');
            inhour = signi[0];
            inmin = signi[1];
            var signo = signout.split(':');
            outhour = signo[0];
            outmin = signo[1];
    
            diffhour = outhour-inhour;
            diffmin=outmin-inmin;
            totalmin=(diffhour*60) + diffmin;
    
    
    
            for(let i =0; i<30; i++){
                var stringd = u2.attendance[i].date;//.toLocaleDateString(); //Date in index i
                var stringt = date; //Date to edit
    
                //console.log(stringd);
                //console.log(stringt);
    
               
                if (stringd == stringt){ //if date in index i == todays date
                   // u.hours[i] = {date: new Date().toLocaleDateString(), minsspent: u.hours[i].minsspent+totalmin};
                   //u.hours[i] = {date: stringt, minsspent: 5};
                   //u.hours[i].minsspent=5;
                   u2.attendance[i].minsspent = u2.attendance[i].minsspent+totalmin;
    
                   var num = u2.attendance[i].minsspent; 
                   var hours = Math.floor(num / 60);  
                   var minutes = num % 60;
                   //return hours + ":" + minutes; 
                   console.log("Date: " + date);    
                   console.log("hours: " + hours + " minutes: " + minutes);
                   
                } 
            }
    
            u2.update();
            u2.save();
           
    
            
    
            res.send('Updated Successfuly');

        }
        
        else{
            if(u.type == 'HR')
                res.send("Are you trying to sign yourself in for real??");
            else
                res.send("You are not HR member");
        }
        

        })

    app.delete('/deleteMember', async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
         //User to be deleted
        if(u.type=="HR"){
            const u2 =await user.deleteOne({Email: req.body.Email});
            res.send('Deleted')
        }
        res.send('Not Deleted')
    }
    )

    app.post('/AddLocation',async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
        //const f =await Faculties.findById({FacultyName:req.body.FacultyName})
        
            if(u.type=="HR"){
        const u=new location({

            roomName:req.body.roomName,
            Capacity:req.body.Capacity,

           Count:req.body.Count,
            type:req.body.type
        })
        await u.save();
        res.send('location has been created ');
        }
        else{
            res.send("HR ONLY") ;
        }

      
      


    }) 
     
   app.post('/updateLocation',async(req,res)=>{
    const u =await user.findOne({Email: emailTest});
    const l = await location.findById(req.body.id)
    if(l){

    }
    else{
        res.send("not found")
    }
    if(u.type =="HR"){
        l.roomName = req.body.roomName,
        l.Capacity =req.body.Capacity,
        l.Count =req.body.Count,
         l.type=req.body.type

      await l.save()
      res.send("Location Updated")
    }
    else{
        res.send("HR ONLY")
    }
   })

   app.delete('/DeleteLocation', async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
         //User to be deleted
        if(u.type=="HR"){
            const l =await location.deleteOne({roomName: req.body.roomName});
            res.send('Deleted')
        }
        res.send('Not Deleted')
    })

        
   app.post('/AddFaculty', async(req,res)=>{
            const u =await user.findOne({Email: emailTest}); //HR User
            //const f =await Faculties.findOne({FacultyName:req.body.FacultyName})
            
                if(u.type=="HR"){
                const u = new faculties({
                 facultyId:req.body.facultyId,
                facultyName:req.body.facultyName,
                departmentsInFaculties:req.body.departmentsInFaculties,
               //{$push{departmentsInfaculties:name}} ,
               
                })
                res.send("faculty created");
                await u.save();
                    }

            else{
                res.send("HR ONLY");
            }
        
        
            })   
   app.post('/UpdateFaculty', async(req,res)=>{
              /*  
               
                 await Faculties.findByIdAndUpdate(
                    req.body.id,
                    {
                        $push : {
                        departmentsInFaculties : req.body.departmentName
                    }}
                )*/
                

    const u =await user.findOne({Email: emailTest}); //HR User
    const c = await faculties.findById(req.body.id)
    if(u.type=="HR"){
        
        c.facultyName = req.body.facultyName
        //c.Departmentid = req.body.Departmentid
        console.log(c.facultyName)
        await c.save()
    res.send("faculty updated")
    }
    else{
        res.send("HR ONLY")
    }
   })
   
   app.delete('/deleteFaculty', async(req,res)=>{
            const u =await user.findOne({Email: emailTest}); //HR User
            
            //User to be deleted
           if(u.type=="HR"){
               const l =await Faculties.deleteOne({facultyName: req.body.facultyName});
               res.send('Deleted')
           }
           res.send('HR ONLY')
       })
    
    app.post('/addDepartments' ,async(req,res)=>{
            const u =await user.findOne({Email: emailTest}); //HR User
              /*let fId = await Faculties.findById({Facultyid: req.body.Facultyid})
                if( fId){
               
                }
                else{
                    res.send("not found")
                }*/
            if(u.type=="HR"){
                const d = await new departements({
                    DepartmentName:req.body.DepartmentName,
                    FacultyName:req.body.FacultyName,
                    Facultyid:req.body.Facultyid
            })
            res.send("Department Added")
            await  d.save();
        }
            else{
                res.send("HR ONLY")
            }
        
        })
    app.post('/UpdateDepartment',async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
        const d = await departements.findById(req.body.id)
    if(d){

    }
    else{
        res.send("not found")
    }
    if(u.type=="HR"){
        // await courses.updateOne({courseName: req.body.courseName})
          //await courses.updateOne({DepartmentName: req.body.DepartmentName})
        d.DepartmentName = req.body.DepartmentName
        d.FacultyName =req.body.FacultyName
        console.log(d.FacultyName)
        //c.Departmentid = req.body.Departmentid
    console.log(d.DepartmentName)
    await d.save()
    await d.save()
    res.send("department updated")
    }
    else{
        res.send("HR ONLY")
    }
   })
    
    app.delete('/deleteDepartement', async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
        const l =await departements.findOne({Facultyid:req.body.Facultyid})
        if(l){

        }
        else{
            res.send("not found")
        }
       if(u.type=="HR"){
           const l =await departements.deleteOne({Facultyid: req.body.Facultyid});
           res.send('Deleted')
       }
       res.send('HR ONLY')
   })

   app.post('/Addcourses', async(req,res)=>{
    const u =await user.findOne({Email: emailTest}); //HR User
   
        if(u.type=="HR"){
            
            const x = await new courses({
                courseName:req.body.courseName,
                DepartmentName:req.body.DepartmentName,
                Departmentid:req.body.Departmentid
                
            })
            res.send("course added");
            await x.save();
                }
    
        else{
            res.send("HR ONLY");
        }
        }) 
    
   app.post('/updateCourse',async(req,res)=>{
    const u =await user.findOne({Email: emailTest}); //HR User
    const c = await courses.findById(req.body.id)
    if(c){

    }
    else{
        res.send("not found")
    }
    if(u.type=="HR"){
        // await courses.updateOne({courseName: req.body.courseName})
          //await courses.updateOne({DepartmentName: req.body.DepartmentName})
        c.courseName = req.body.courseName
        c.DepartmentName =req.body.DepartmentName
        c.Departmentid = req.body.Departmentid
    console.log(c.DepartmentName)
    await c.save()
    await c.save()
    res.send("course updated")
    }
    else{
        res.send("HR ONLY")
    }
   })

   app.delete('/deleteCourse',async(req,res)=>{
    const u =await user.findOne({Email: emailTest}); //HR User
    const c = await courses.findOne({Departmentid: req.body.Departmentid})
    if(c){

    }
    else{
        res.send("not found")
    }
    //User to be deleted
     if(u.type=="HR"){
       const c =await courses.deleteOne({courseName: req.body.courseName});
       res.send('Deleted')
   }
   res.send('HR ONLY')
})

    app.post('/accessAttendance' ,async(req,res)=>{
        const u =await user.findOne({Email: emailTest});
        if(u.type=="HR"){
            const u2 =await user.findOne({Email: req.body.Email});
            for(let i =0; i<30; i++){
                //input month
                //compared with first or second elemnts of date string (u.attendance[i].date)
                var m = (u2.attendance[i].date); //month in array
                //console.log(m);
                var d = new Date(u2.attendance[i].date).getMonth();
                d=d+1;
                //console.log(d);
    
                var month = req.body.month; //month we want
               
    
                if(d==month){
                   // console.log(x);
                    console.log(u2.attendance[i].date)
                    //console.log(u.attendance[i].minsspent)
    
                    var num = u2.attendance[i].minsspent; 
                    var hours = Math.floor(num / 60);  
                    var minutes = num % 60;
                    //return hours + ":" + minutes;     
                    console.log("hours: " + hours + " minutes: " + minutes);
    
                }
    
               
                
            }
                res.send(u2.attendance);
            
        }
        else
            res.send('Only HR members can access attendance record!');
    })

    app.post('/accessMissingHours' ,async(req,res)=>{
        const u = await user.findOne({Email: emailTest});
        const u2 = await user.findOne({Email: req.body.Email});

        if(u.type=="HR"){

        

        for(let i =0; i<30; i++){
            var x = new Date(u2.attendance[i].date).getDay();
            var misshours=504-(u2.attendance[i].minsspent);
            
            console.log(u2.attendance[i].date);

            var num = misshours; 
            var hours = Math.floor(num / 60);  
            var minutes = num % 60;
            //return hours + ":" + minutes;     
            console.log("missing hours: " + hours + " missing minutes: " + minutes);  

        }

        res.send('These are the hours');

    }
    else
        res.send('Only HR members can acceess missing hours!');
    })

    app.post('/accessMissingDays' ,async(req,res)=>{
        const u = await user.findOne({Email: emailTest});
        const u2 = await user.findOne({Email: req.body.Email});

        if(u.type=="HR"){

        

            let day;
        
            switch (u2.dayoff) {
                case "sunday":
                  day = 0;
                  break;
                case "monday":
                    day = 1;
                  break;
                case "tuesday":
                    day = 2;
                  break;
                case "wednesday":
                  day = 3;
                  break;
                case "thursday":
                  day = 4;
                  break;
                case "friday":
                  day = 5;
                  break;
                case "saturday":
                  day = 6;
              }
    
            for(let i =0; i<30; i++){
                var x = new Date(u2.attendance[i].date).getDay();
                if(u2.attendance[i].minsspent == 0 )
                    if( day != x){
                        console.log(u2.attendance[i].date);
                        console.log('Absent');
                    }
    
    
            }
    
            res.send('These are your missing days');

    }
    else
        res.send('Only HR members can acceess missing days!');
    })

    app.post('/updateSalary' ,async(req,res)=>{
        const u = await user.findOne({Email: emailTest});
        const u2 = await user.findOne({Email: req.body.Email});
        
        if(u.type=="HR"){
            //up to 2 hours 59 mins per month --> no deduction

            //for each missing day per month --> salary = salary - salary/60

            //for more than 2 hours 59 mins per month --> Every Hour --> salary = salary - salary/180
            //                                            Every Min  --> salary = salary - salary/(180*60)
            let day;
        switch (u2.dayoff) {
            case "sunday":
              day = 0;
              break;
            case "monday":
                day = 1;
              break;
            case "tuesday":
                day = 2;
              break;
            case "wednesday":
              day = 3;
              break;
            case "thursday":
              day = 4;
              break;
            case "friday":
              day = 5;
              break;
            case "saturday":
              day = 6;
          }
            
            var totalh=0, totalm=0;

            for(let i =0; i<30; i++){
                var x = new Date(u2.attendance[i].date).getDay();
                var misshours=504-(u2.attendance[i].minsspent);
                
                console.log(u2.attendance[i].date);
    
                var num = misshours; 
                var hours = Math.floor(num / 60);  
                totalh += hours;
                var minutes = num % 60;
                totalm += minutes;    
                //console.log("missing hours: " + hours + " missing minutes: " + minutes); 
                console.log("total missing hours: " + totalh + " total missing minutes: " + totalm);  
    
            }

            var totalt = totalm + 60*totalh;

            if(totalt <= ((2*60)+59) )
                u2.updatedSalary = u2.salary;

            if(totalt > ((2*60)+59) ){
                //Every Min  --> salary = salary - salary/(180*60)
                //Every Hour --> salary = salary - salary/180
                u2.updatedSalary = u2.salary - (totalh * (u2.salary/180) - totalm *(u2.salary/(180*60)));
                
            }
            
            
        for(let j =0; j<30; j++){
            var y = new Date(u2.attendance[j].date).getDay();
            if(u2.attendance[j].minsspent == 0 )
                if( day != y){
                    // console.log(u2.attendance[i].date);
                    // console.log('Absent');
                    u2.updatedSalary -= u2.updatedSalary/60;
                }
            }
            
            u2.update();
            u2.save();
            console.log(u2.updatedSalary);
            res.send('Salary Updated Successfully!');
        }
        else
            res.send('Only HR members can acceess missing days!');

    })
        
    function authenticate (req,res,next){
        const token = req.header('auth-token');
        if(!token)
        return res.status(403).send("fein el token")

        try{
            jwt.verify(token,key);
            next();
        }

        catch(err){
            return res.status(403).send("token madroob")
        }
    }

    app.listen(3000, ()=>{
        console.log('server started at port 3000');
    })

})
.catch((err)=>{
    console.log(err);
})