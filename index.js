const express= require('express')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('./user.js');
const location=require('./location.js');
const slotlinkingrequest=require('./slotlinkingrequest.js');
const dayoffrequest=require('./dayoffrequest.js');
const courses=require('./Courses.js');
const HOD = require('./HOD.js');
const faculties = require('./faculties');

const slot=require('./slot.js');

const departements =require('./departements.js');

//const attendance = require('./attendance.js');
const { isNullOrUndefined } = require('util');
const e = require('express');
const { update } = require('./user.js');
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

        const x = await user.findOne({Email:req.body.Email})
        if(x){
              res.send("already registered")
         }
         else{
             
            var c ;
            var f;
            if(req.body.type == "HR"){
                f = " "
                c = " "
                n = " "
            }
            else{
                f = req.body.faculty
                c = req.body.courses
            
            }

        //validate data first
        const salt = await bcrypt.genSalt(12);
        const hashedPassword= await bcrypt.hash("12345",salt);
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
        if(o){

        }
        else{
            res.send("Location not found")
        }
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
           var typetest= req.body.type;
           if(typetest=="Coordinator"){
               res.send("The course instructor only can register a course coordinator")
           }
        

        var u = new user({
            Email: req.body.Email,
            name: req.body.name,
            ID: idv,
            type:typetest,
            password: hashedPassword,
            salary:req.body.salary,
            faculty:f,
            department:req.body.department,
            gender:req.body.gender,
            officelocation:req.body.officelocation,
            firstTime:req.body.firstTime,
            newpassword:req.body.newpassword,
            dayoff:df,
            courses:c
        })
       
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
          res.send('Registration successful');
        }
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
///
    app.get('/profile', async(req,res)=>{

        try{
           // const u =await user.findOne({Email: req.header('Email')});
            const u =await user.findOne({Email: emailTest});
            //console.log(u.name);
            //res.send(`login successful ${u.name}`);
            res.send(u);
            }
            catch(err){
            console.log('err');
            } 
    })

//
    app.post('/logout', async(req,res)=>{
        const u =await user.findOne({Email: req.body.Email})

       // timestamp=(new Date()).toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

        //await user.findOne({Email: req.body.Email}).update({$set:
           // {signouttime: timestamp}});
       // u.signouttime = current.toLocaleDateString() + current.toLocaleTimeString()
       // res.send("Sign out time: " + signouttime);
      // u.save;
        res.send(`logout successful`);
    })

//
   

///
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

        })

//
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

//
    app.delete('/deleteMember', async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
        const u3 =await user.findOne({Email: req.body.Email});
        if(u3){

        }
        else{
            res.send("user not found")
        }
         //User to be deleted
        if(u.type=="HR"){
            const u2 =await user.deleteOne({Email: req.body.Email});
            res.send('Deleted')
        }
        res.send('Not Deleted')
    }
    )
//-------------------------------------------------------------------------------------------------------------------------------------------------
    app.post('/AddLocation',async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
        const l =await location.findOne({roomName:req.body.roomName})
        if(l){
            res.send("This Location is already created")
        }
        else{
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
        const m = await location.findOne({roomName: req.body.roomName})
        if(m){

        }
        else{
            res.send("Not found")
        }
         //User to be deleted
        if(u.type=="HR"){
            const l =await location.deleteOne({roomName: req.body.roomName});
            res.send('Deleted')
        }
        res.send('HR ONLY')
    })
    

        
   app.post('/AddFaculty', async(req,res)=>{
            const u =await user.findOne({Email: emailTest}); //HR User
            const f =await faculties.findOne({facultyName:req.body.facultyName})
            if(f){
                res.send("this faculty already created")
            }
            else{
                if(u.type=="HR"){
                const u = new faculties({
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
            }
        
            })   

   app.post('/UpdateFaculty', async(req,res)=>{
    const u =await user.findOne({Email: emailTest}); //HR User
    const c = await faculties.findById(req.body.id);
    if(c){

    }
    else{
        res.send("not Found")
    }
    if(u.type=="HR"){
        
        c.facultyName = req.body.facultyName
        c.departmentsInFaculties = req.body.departmentsInFaculties
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
            const m = await faculties.findOne({facultyName: req.body.facultyName})
            if(m){
    
            }
            else{
                res.send("Not found")
            }
            //User to be deleted
           if(u.type=="HR"){
               const l =await faculties.deleteOne({facultyName: req.body.facultyName});
               res.send('Deleted')
           }
           res.send('HR ONLY')
       })
    
    app.post('/addDepartments' ,async(req,res)=>{
            const u =await user.findOne({Email: emailTest}); //HR User
              const fId = await departements.findOne({DepartmentName: req.body.DepartmentName})
              const f = await faculties.findById(req.body.id)
              console.log(f)
              if(f){

              }
              else{
                  res.send("faculty Not Found")
              }

                if(fId){
                    res.send("this department is already created")
                }
                else{
                    
                
            if(u.type=="HR"){
                const d = await new departements({
                    DepartmentName:req.body.DepartmentName,
                    FacultyName:req.body.FacultyName,
                    Facultyid:req.body.id
            })
            res.send("Department Added")
            await  d.save();
        }
            else{
                res.send("HR ONLY")
            }
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
        const m =await departements.findOne({DepartmentName:req.body.DepartmentName})
        if(m){

        }
        else{
            res.send("not found")
        }
       if(u.type=="HR"){
           const l =await departements.deleteOne({DepartmentName:req.body.DepartmentName});
           res.send('Deleted')
       }
       res.send('HR ONLY')
   })

   app.post('/Addcourses', async(req,res)=>{
    const u =await user.findOne({Email: emailTest}); //HR User
    const x = await courses.findOne({courseName:req.body.courseName});
    const y = await departements.findById(req.body.id);
    if(y){

    }
    else{
        res.send(" department NOT FOUND")
    }
    if(x){
     res.send("this course already created")
    }
    else{
        if(u.type=="HR" ){
            
            const x = await new courses({
                courseName:req.body.courseName,
                DepartmentName:req.body.DepartmentName,
                CourseInstructor:" ",
                Departmentid:req.body.Departmentid
                
            })
            res.send("course added");
            await x.save();
                }
    
        else{
            res.send("HR ONLY");
        }
    }
        }) 
    
   app.post('/updateCourse',async(req,res)=>{
    const u =await user.findOne({Email: emailTest}); //HR User
    const c = await courses.findById(req.body.id)
    if(c){

    }
    else{
        res.send("course not found")
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
    const c = await courses.findOne({courseName: req.body.courseName})
    if(c){

    }
    else{
        res.send("course not found")
    }
    //User to be deleted
     if(u.type=="HR"){
       const m =await courses.deleteOne({courseName: req.body.courseName});
       res.send('Deleted')
   }
   res.send('HR ONLY')
})

  app.post('/AddUpdateInstructor', async(req,res)=>{
    const u =await user.findOne({Email: emailTest}); //HR User
    const c = await courses.findById(req.body.id)
    if(c){

    }
    else{
        res.send("not found")
    }
    if(u.type=="HOD"){
        c.CourseInstructor =req.body.CourseInstructor
        await c.save()
        res.send("Instructor Assigned")
    }
    else{
        res.send("HOD ONLY")
    }
})

app.post('/ADDHOD', async(req,res)=>{
    const u =await user.findOne({Email: emailTest}); //HR User
    if(u.type == "HR"){
    const h = await new HOD({ HODname:req.body.HODname,
                             HODdepartment:req.body.HODdepartment
                            })
        await h.save()
        res.send("HOD added")
                        }
    else{
        res.send("HR ONLY")
    }
})

app.delete('/deleteinstructor',async(req,res)=>{
    const u =await user.findOne({Email: emailTest}); //HR User
    const c = await courses.findById(req.body.id)
    if(c){

    }
    else{
        res.send("COURSE not found")
    }
    if(u.type=="HOD"){
        c.CourseInstructor =""
        await c.save()
        res.send("Instructor deleted")
    }
    else{
        res.send("HOD ONLY")
    }
})
  
app.get('/ViewStaffByDepartment',async(req,res)=>{
    const y =await user.findOne({Email: emailTest});
    const c  =  req.body.department//u.HODdepartment
   
   if(y.type == "HOD"){
      
     const x = await user.find({department:c})
     
     res.send(x)
    
    }
    else{
        res.send("HOD ONLY")
    }

})

app.get('/ViewStaffdayoff',async(req,res)=>{
    const y =await user.findOne({Email: emailTest});
    const u1 =await user.findOne({department: req.body.department});
   // if(u1.department == y.department){

   if(u1){

   }
   else{
       res.send("Department not found")
   }
   if(y.type == "HOD"){
    // const x = await user.find({department:c})
     res.send("Day OFF:  " + u1.dayoff)
    
    }
    else{
        res.send("HOD ONLY")
    }
    //}
    //else{
    //res.send("NOT IN YOUR DEPARTMENT")
    //}
})

app.get('/viewTeachingAssignments',async(req,res)=>{
    const u1 = await user.findOne({Email:emailTest})
    const u2 = await user.findOne({Email:req.body.Email})
    console.log(u1.Email)
     if(u1.type == "HOD"){
        if(u2.department == u1.department){
     const x  =  await slot.find({Email:u2.Email})

     console.log(x)
     res.send(x)
    }
    else{
        res.send("Not in your department")
    }
}
    else{
        res.send("HOD ONLY")
    }
})

app.get('/viewCoverage',async(req,res)=>{
    const u1 = await user.findOne({Email:emailTest})
    const u = await user.find({type:req.body.type,department:req.body.department})
    const s = await slot.find({course:req.body.course})
   
    if(u1.type == "HOD"){
    let Coverage =0;
    let x;
    if(u){
        if(s){
    for(let i = 0; i<= u.length;i++){
         x = i+1;
       // res.send(i)
      
    }
    console.log(x)
   
    let y;
    
    for(let i = 0;i<s.length;i++){
        y = i+1;
       
    }
    console.log(y);
    Coverage = (y/x)*100
    console.log(Coverage)
    res.send("Coverage" +"="+ Coverage +"%")
}
else{
    res.send("not found")
}
    }
    else{
    res("not found")

    }
}
else{
    res.send("HOD ONLY")
}
})

app.get('/viewCoverageOfAssignedCourse', async(req,res)=>{
    const u1 = await user.findOne({Email:emailTest})
    const u = await user.find({type:req.body.type,course:req.body.course})
    const s = await slot.find({course:req.body.course})

    if(u1.type == "Instructor"){
    let Coverage =0;
    let x;
    for(let i = 0; i<= u.length;i++){
         x = i+1;
       // res.send(i)
    }
    console.log(x)
   
    let y;
    
    for(let i = 0;i<s.length;i++){
        y = i+1;
       
    }
    console.log(y);
    Coverage = (y/x)*100
    console.log(Coverage)
    res.send("Coverage" +"="+ Coverage +"%")
}
else{
    res.send("INSTRUCTORS ONLY")
}
})

app.get('/viewAssignedSlots',async(req,res)=>{
    const u = await user.findOne({Email:emailTest})
    const s = await slot.find({Email:req.body.Email})
    const s1 = await slot.findOne({Email:req.body.Email})

    if(s1){
        
    }
    else{
         res.send("not found")
    }
    if(u.type == "Instructor"){
        res.send(s)
        }
        else{
            res.send("INSTRUCTORS ONLY")
        }

   
})

app.get('/ViewAllStaffForInstructor',async(req,res)=>{
const u = await user.findOne({Email:emailTest})
const u1 = await user.findOne({department:req.body.department})
const u2 = await user.find({department:req.body.department})
if(u1){
    
}
else{
    res.send("department not found")
}

  if(u.type == "Instructor"){
     console.log(u2)

   res.send(u2)
}
else{
    res.send("instructors ONLY")
}
})

app.post('/AssignUpdateDeleteTA',async(req,res)=>{//date:req.body.date,   time:  req.body.time,     no: req.body.no, 
    const u1 = await user.findOne({Email:emailTest})
   const u = await slot.findOne({ day: req.body.day, time:  req.body.time,     no: req.body.no ,date:req.body.date})

   if(u1.type == "Instructor"){
   if(u){
    
   }
   else{
       res.send("unavailable slot")
   }
   console.log(u)
   var x=req.body.Email;
   u.Email = x;
    u.save();
   res.send("DONE")
}
else{
    res.send("INSTRUCTORS ONLY")
}
   
})

app.post('/AssignCoordinator',async(req,res)=>{
const u1 = await user.findOne({Email:emailTest})
 const u = await user.findOne({Email:req.body.Email})
 if(u){

 }
 else{
     res.send("user not found")
 }
 if(u1.type == "Instructor"){
    u.type = "Coordinator"
    await u.save()
    console.log(u.type)
    res.send("Coordinator Assigned")
 }
 else{
     res.send("INSTRUCTOR ONLY")
 }
})

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


   app.post('/createSlot',async(req,res)=>{
    try{
    const u =await user.findOne({Email: emailTest}); //HR User
    
    if(u.type=="Coordinator"){
        console.log("creating")
        var emailz=req.body.Email;
        const u1=await user.findOne({Email: emailz});
        var dayoffz=u1.dayoff;
        var dayz=req.body.day;
        var noz=req.body.no;
        var locationz=req.body.location;
        const p =await slot.find({
         location:locationz, day:dayz, no:noz
        })

        console.log(p);

        if(p.length>0){

            res.send("this slot is already scheduled");
        }
        if(noz>5){
            res.send("you have maximum of 5 slots to choose from")
        }
        if(dayz==dayoffz){
            res.send("you cant schedule a slot on academic member's day off")
        }

        if(p.length==0 && noz<5 && dayz!=dayoffz){
        const s=new slot({
            Email:emailz,
            day:dayz,
            no:noz,
            time:req.body.time,
            location:locationz,
            course:req.body.course,
            date:req.body.date



        })
        console.log("creating"+s.Email)

        s.save();

        res.send("slot created");
    }
    }
res.send("you should be a course coordinator to be able to create an academic member's slot")
    }
    catch(error){
        console.log("err")
    }
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
    
    app.post('/createSchedule',async(req,res)=>{
        var v1=0;
        var v2=0;
        var v3=0;
        var v4=0;
        var v5=0;
        var v6=0;

        const u =await user.findOne({Email: emailTest}); //HR User
        if(u.type=="HR"){

            var sat=req.body.saturday;
            
            var satlen= sat.length;
            if(satlen>5){
                sat=[];
                v1=1;

            }

            

            var sun=req.body.sunday;
            var sunlen= sun.length;
            if(sunlen>5){
               sun=[];
                v2=2
            }

            var mon=req.body.monday;
            var monlen= mon.length;
            if(monlen>5){
               mon=[];
                //res.send("you cant exceed more than 5 slots per day");
                 v3=3;

            }

            var tues=req.body.tuesday;
            var tueslen= tues.length;
            if(tueslen>5){
                tues=[];
                //res.send("you cant exceed more than 5 slots per day");
                v4=4;

            }

             var wed=req.body.wednesday;
             var wedlen= wed.length;
             if(wedlen>5){
                 wed=[]
               // res.send("you cant exceed more than 5 slots per day");
                 v5=5;

            }
            var thurs=req.body.thursday;
            var thurslen= thurs.length;
            if(thurslen>5){
                thurs=[];
                v6=6
               // res.send("you cant exceed more than 5 slots per day");


            }
            

             console.log("sat.length "+ satlen)

          /* if(satlen>5 || sunlen>5 || monlen>5 || tueslen>5 || wedlen>5 || thurslen>5){
                res.send("you cant exceed more than 5 slots per day");

            }*/
            //else{
       
            


            const s = new schedule({
                Email:req.body.Email,

                saturday:sat,
                sunday:sun,
                monday:mon,
                tuesday:tues,
                wednesday:wed,
                thursday:thurs
               
                
                
        })




       
        let x="";
        if(v1==1){
           // sat=[];
            x="cant exceed more than 5 slots per day update saturday";
            //s.save();

        }
        if(v2==2){
            //sun=[];
            x=x+" update sunday"
            //s.save();
        }
        if(v3==3){
            //mon=[];
            x=x+" update monday";
            //s.save();
        }
        if(v4==4){
            //tues=[];
            x=x+" update tuesday";
            //s.save();
        }
        if(v5==5){
           // wed=[];
            x=x+" update wednesday";
            //s.save();
        }
        if(v6==6){
            //thurs=[];
            x=x+" update thursday";
            //s.save();
        }

        s.save();

        res.send(x+" schedule created")

            }

        




    })

   


    app.get('/viewSlot',async(req,res)=>{
    const o =await user.findOne({Email:emailTest})
    if(o.type=="HR" || o.type=="coursecoordinator"){
    const u =await slot.find({Email: req.body.Email}); //HR User
    let x=u.Email;
    res.send(u)
    console.log(u);
    }
    else{
    const u =await slot.find({Email: emailTest}); 
    let x=u.Email;
    res.send(u)
    console.log(u);


    }


    })



    app.post('/updateSlot',async(req,res)=>{
    var mail=req.body.Email;
    var dayz=req.body.day;
    var noz=req.body.no;
    var newday=req.body.newday;
    var newno=req.body.newno;
    var newtime=req.body.newtime;
    var newloc=req.body.newlocation;
    var newcourse=req.body.newcourse;
const o=await user.findOne({Email:emailTest});
const u =await slot.findOne({Email: mail,day:dayz,no:noz})
if(o.type=="coursecoordinator"){
   if(newday!=null){
       console.log("bamoottttt");
       u.day=newday;
   }    

    if(newno!=null){
        u.no=newno;
        }

    if(newtime!=null){
            u.time=newtime;
    }

     if(newloc!=null){
    u.location=newloc 
    }
    
     if(newcourse!=null){
    u.course=newcourse;    
    }
    //const x=u[0];
  /*  console.log(u.day);
    var timez=x.time;
    var locationz=x.location;
    var coursez=x.course
*/

     //   u.update();
   

        await u.save();
        res.send("updated")
}
else{
        res.send("you should be a course coordinator to be able to update an academic member's slot")}
        //console.log(d);
}

    )


    app.delete('/deleteSlot',async(req,res)=>{
    const c =await user.findOne({Email: emailTest});
    if(c.type=="coursecoordinator"){

        var mail=req.body.Email;
        var dayz=req.body.day;
        var noz=req.body.no;

    const u =await slot.findOneAndDelete({Email: mail,day:dayz,no:noz})
       

            u.save();
            res.send("deleted")
            //console.log(d);
    }
    else{
        res.send("you should be a course coordinator to be granted this privilege")
    }

        })

    app.delete('/deleteSchedule',async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
        if(u.type=="HR"){
            console.log("aho ha delete aho");
            const l =await schedule.findOneAndDelete({Email: req.body.Email});
            
            res.send('Deleted')
        }
        res.send('Not Deleted')

        
    })

   app.post('/updateSchedule',async(req,res)=>{
    var v1=0;
    var v2=0;
    var v3=0;
   var v4=0;
    var v5=0;
    var v6=0;

    const u =await user.findOne({Email: emailTest});
     //HR User
    if(u.type=="HR"){
        ///get the schedule of the ta with taNAme x
        const o=await schedule.findOne({Email: req.body.Email});
        ///ask for the day you want to update
        var day=req.body.day;
        console.log(day);
        /*if(day="saturday"||day="sunday"||day!="monday"||day!="tuesday"||day!="wednesday"||day!="thursday"){
            res.send("enter a valid day");
        }*/
        ///ask for slot you want to update
        slot=req.body.slot;
        //slot=slot-1;
        console.log(slot);
        if(slot<0 || slot>4){
            res.send("please choose a valid slot")
        }
        //ask for course to update with
        var x=req.body.course;
        console.log(x);
        //update
        
        switch(day) {
            case "saturday":
              o.saturday[slot]=x;
              break;
            case "sunday":
                let z =""+x+"";
                console.log(o.sunday);
                //var sun=o.sunday;
                //sun[slot]=z;
                o.sunday[slot]=z;
                //o.sunday.save();
                console.log("z: "+z);
                //console.log("sun: "+sun);
                console.log(o.sunday);
                o.update();
                o.save();

                
  
                
  

              break;
              case "monday":
                o.monday[slot]=x;

              break;
              case "tuesday":
                o.tuesday[slot]=x;

              break;
              case "wednesday":
                o.wednesday[slot]=x;

              break;
              case "thursday":
                o.thursday[slot]=x;

              break;
            default:
                res.send("updated");
          }



        
          
    res.send(" schedule updated");

        }






   })
   
   app.get('/viewSchedule',async(req,res)=>{
    
        try{// const u =await user.findOne({Email: req.header('Email')});
         const u =await schedule.findOne({Email: emailTest});
         const o=await user.findOne({Email:emailTest});
         console.log(o.type);
        if(o.type=="TA" || o.type=="instructor"){
         console.log(o.name);
         //res.send(`login successful ${u.name}`);
        var x= "saturday: " + u.saturday +'\n' + "sunday: " + u.sunday+'\n' +"monday: " + u.monday+'\n' + "tuesday: " +
         u.tuesday+ '\n' +"wednesday: " + u.wednesday+ '\n' +"thursday: " + u.thursday;
        console.log(x);
         res.send("here is your schedule " + '\n' + x);
         
        }
        else{
            res.send(" you should be academic staff to be able to view your schedule" )
        }
        }

        catch(err){
            console.log(err);
        }
    
    




   })

   app.post('/sendslotlinkingrequest',async(req,res)=>{
    const u =await user.findOne({Email: emailTest});
        if(u.type=="TA"){
        const s = new slotlinkingrequest({
        Email:emailTest,
        CourseCoordinatorEmail:req.body.CourseCoordinatorEmail,
        day:req.body.day,
        slot:req.body.slot,
        course:req.body.course,
        accepted:0
        
    })
    s.save();
    res.send("slot linking request sent")}
    else{
        res.send("you have to be an academic member to be able to send a slot linking request")}

    
    



   })
   app.get('/viewslotlinkingrequest',async(req,res)=>{
    const u =await user.findOne({Email: emailTest});

    if(u.type=="coursecoordinator"){

        const u1 =await slotlinkingrequest.find({CourseCoordinatorEmail: emailTest});
        res.send(u1);
    }

    res.send("you should be a course coordinator to be able to view slot linking requests")
   })


   app.get('/acceptslotlinkingrequest',async(req,res)=>{
    const u =await user.findOne({Email: emailTest});
    
    if(u.type=="coursecoordinator"){
//getting slot linking request
    const u1 =await slotlinkingrequest.findById(req.body.id);
   /* console.log(u1);
    for(let i=0;i<ux.length;i++){
     console.log("kosom acl")
    const u1=ux[i];*/

    var mailz= u1.Email; //ta mail
    var dayz=u1.day;//day of slot
    var slotz=u1.slot;//slot no
    var coursez=u1.course;//course
//getting day off
    const u2= await user.findOne({Email:mailz})

    var userdayoff=u2.dayoff; //getting dayoff

    console.log(mailz)
    console.log(userdayoff)
    
//checking to see if we have a slot at the sametime of the request     
    const u3 =await slot.findOne({Email: mailz,day:dayz,no:slotz})
    console.log("bakrah acl  "+u3);

    if(dayz==userdayoff){
        res.send("you cant add a slot on your dayoff")

    }

    if(u3!=null){
        res.send("you already have this slot scheduled")
        
    }






        var ax=req.body.accepted;
        u1.accepted=ax;
        console.log(ax);
        console.log(mailz);
        
        u1.update();
        u1.save();
        if(ax==1){
            
            const s=new slot({
                Email:mailz,
                day:dayz,
                no:slotz,
                time:req.body.time,
                location:req.body.location,
                course:coursez



            })
            s.save()
            res.send("viewed")


        }}
        res.send("you should be a course coordinator to be granted this privilege")
        


        
    



   })

   app.post('/submitdayoffrequest',async(req,res)=>{
    
    const u =await user.findOne({Email: emailTest});
        if(u.type=="TA"){
        const d = new dayoffrequest({
        Email:emailTest,
        headOfDepartementEmail:req.body.headOfDepartementEmail,
        requestedDayOff:req.body.requestedDayOff,
        accepted:0
        
    })
    d.save();
    res.send("day off request submiited")}
    else{
        res.send("you should be an academic member to be granted this privilege")

    }


   })

   app.get('/viewdayoffrequests',async(req,res)=>{
    const u =await user.findOne({Email: emailTest});
    if(u.type=="HOD"){
        const u1 =await dayoffrequest.find({headOfDepartementEmail: emailTest});

        res.send(u1);


    }
    else{

        res.send("Only the head of departement is granted this privilege")
    }


   })

   app.get('/acceptdayoffrequests',async(req,res)=>{
    const u =await user.findOne({Email: emailTest});
    
    if(u.type=="HOD"){
//getting slot linking request
    const u1 =await dayoffrequest.findById(req.body.id);     
    var mailz=u1.Email; 
    var dayoffz=u1.requestedDayOff;
    var accept=req.body.accepted;
    if(accept==1){
        const ta =await user.findOne({Email:mailz});     
        u1.accepted=accept;
        ta.dayoff=dayoffz;
        u1.save();
        ta.save();
        res.send("TA's day off has been accepted successfully")
    }
    res.send("TA's day off has been rejected successfully")



    }

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