const express= require('express')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('./user.js');
const location=require('./location.js');
const slotlinkingrequest=require('./slotlinkingrequest.js');
const dayoffrequest=require('./dayoffrequest.js');
const leaves=require('./leaves.js');
const notification=require('./notification.js')
const replacementrequest=require('./replacementrequest.js')
const courses=require('./Courses.js');
const HOD = require('./HOD.js');
const faculties = require('./faculties');
const path = require('path');
const items =require('.routes/api/items');
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
mongoose.connect('mongodb+srv://dbUser:password328@cluster0.yt28z.mongodb.net/<dbname>?retryWrites=true&w=majority')
.then(()=>{
    app.use(express.json());

    var y = new Date().toLocaleDateString().split('/'); //Gets today's day
    //console.log(y[1]); 
    if(y[1] == '10'){ //today is the 11th (beginning of any month)
        //Loop on users and add 2.5 days to annualLeaveBalance
        for(let g = 0; g<user.length; g++){
           user[g].annualLeaveBalance = user[g].annualLeaveBalance + 2.5;
            user[g].update();
            user[g].save();
        }

    }
//----------------------------------------------------------------------------
    (async function(){
        var r = new Date().toLocaleDateString().split('/');
        if(r[1] == '10'){
            var userboyz = await user.find();
            console.log(userboyz[1]);

            for(let z = 0; z<user.length;z++){
                var userboy = userboyz[z];
                var day;
                
                switch (userboy.dayoff) {
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
                      var x = new Date(userboy.attendance[i].date).getDay();
                      var misshours=504-(userboy.attendance[i].minsspent);
                      
                      console.log(userboy.attendance[i].date);
          
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
                  userboy.updatedSalary = userboy.salary;
      
                  if(totalt > ((2*60)+59) ){
                      //Every Min  --> salary = salary - salary/(180*60)
                      //Every Hour --> salary = salary - salary/180
                      userboy.updatedSalary = userboy.salary - (totalh * (userboy.salary/180) - totalm *(userboy.salary/(180*60)));
                      
                  }
                  
                  
              for(let j =0; j<30; j++){
                  var y = new Date(userboy.attendance[j].date).getDay();
                  if(userboy.attendance[j].minsspent == 0 ){
                      if( day != y){
                          // console.log(u2.attendance[i].date);
                          // console.log('Absent');
                          userboy.updatedSalary -= userboy.updatedSalary/60;
                      }
                  }
                }
                  
                  userboy.update();
                  userboy.save();
                  console.log(userboy.updatedSalary);
                  console.log('Salary Updated Successfully!');
                  
        }}
        
       }
       
       )();
////////////////
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
            annualLeaveBalance:0,
            accidentalLeaveBalance:6,
            

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

///////////////
    app.post('/login', async(req,res)=>{
        //validate first
      // timestamp=(new Date()).toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

      
        const u =await user.findOne({Email: req.body.Email})
        if (!u)
        return res.send('Not found')

        const equal =await bcrypt.compare(req.body.password,u.password)
        if(!equal)
        return res.send('Wrong Pass')

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
            else{
            res.send("You need to enter your new password at first login!");
            }

    
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

    app.post('/login2', async(req,res)=>{
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

  // app.use(authenticate); //works on  any route under it
////////////
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



    ////////////////
    app.post('/updateProfile', async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
        const u2 =await user.findOne({Email: req.body.Email}); 
        if(u.type=="HR"){
            if(u2){}
            else{res.send("user not found")}
            console.log("inside HR condition");
            u2.department=req.body.department;
            u2.faculty=req.body.faculty;
            u2.salary=req.body.salary;
            u2.name=req.body.name;
            u2.save();
            res.send('update successful');
        }

        
    
    
    res.send('This action can only be done if you are an HR member');
    
})

///////////////
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
        const u =await user.findOne({Email: emailTest});
        let att =[];
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

                att.push(u.attendance[i]);

            }

           
            
        }
        
        res.send(att);
       // res.send('This is your attendance');
    })


    app.get('/missingdays', async(req,res)=>{
        const u = await user.findOne({Email: emailTest});
        let day;
        let v=[];
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
                        v[i]=u.attendance[i].date;
                    
                    //console.log('Absent');
                }


        }
        res.send(v);
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



        }
        let s= hours + " hours and " + minutes +"minutes"
        res.send(s)

        })

//
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

/////////////////////
    app.post('/deleteMember', async(req,res)=>{
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
  
    })
    
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

   app.post('/DeleteLocation', async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
        console.log(req.body)
        const m = await location.findOne({roomName: req.body.roomName})
        if(m){

        }
        else{
           return res.send("Not found")
        }
         //User to be deleted
        if(u.type=="HR"){
            const l =await location.deleteOne({roomName: req.body.roomName});
          return  res.send('Deleted')
        }
       return res.send('HR ONLY')
    })

    app.get('/viewusers', async(req,res)=>{
        const u = await user.findOne({emailTest})
        const l = await location.find()
      if(u.type == "HR"){
          return res.send(l)
      }
      else{
        return res.send(" HR ONLY")
      }
        
      
        })
      
  app.post('/viewLocations', async(req,res)=>{
  const l = await location.find()

  return res.send(l);

  })

  app.get('/viewCourses', async(req,res)=>{
    const l = await courses.find()
  
    return res.send(l);
  
    })
    
app.get('/viewfaculty', async(req,res)=>{
        const l = await faculties.find()
      
        return res.send(l);
      
        })
        
app.get('/viewdepartments', async(req,res)=>{
            const l = await departements.find()
          
            return res.send(l);
          
            })

app.get('/viewAllSlots', async(req,res)=>{
                const l = await slot.find()
              
                return res.send(l);
              
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
   
   app.post('/deleteFaculty', async(req,res)=>{
            const u =await user.findOne({Email: emailTest}); //HR User
            console.log(req.body)
            const m = await faculties.findOne({facultyName: req.body.facultyName})
            if(m){
    
            }
            else{
                return res.send("Not found")
            }
            //User to be deleted
           if(u.type=="HR"){
               const l =await faculties.deleteOne({facultyName: req.body.facultyName});
               return res.send('Deleted')
           }
           return res.send('HR ONLY')
       })
    
    app.post('/addDepartments' ,async(req,res)=>{
            const u =await user.findOne({Email: emailTest}); //HR User
            console.log(req.body)
              const fId = await departements.findOne({DepartmentName: req.body.DepartmentName})
              const f = await faculties.findById(req.body.id)
              console.log(f)
              if(f){

              }
              else{
                 return res.send("faculty Not Found")
              }

                if(fId){
                   return res.send("this department is already created")
                }
                else{
                    
                
            if(u.type=="HR"){
                const d = await new departements({
                    DepartmentName:req.body.DepartmentName,
                    FacultyName:req.body.FacultyName,
                   // Facultyid:req.body.id
            })
            res.send("Department Added")
            await  d.save();
        }
            else{
              return  res.send("HR ONLY")
            }
                }
        })


    app.post('/UpdateDepartment',async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
        console.log(req.body)
        const d = await departements.findById(req.body.id)
    if(d){

    }
    else{
       return res.send("not found")
    }
    if(u.type=="HR"){
        // await courses.updateOne({courseName: req.body.courseName})
          //await courses.updateOne({DepartmentName: req.body.DepartmentName})
        d.DepartmentName = req.body.DepartmentName
        d.FacultyName =req.body.FacultyName
        //console.log(d.FacultyName)
        //c.Departmentid = req.body.Departmentid
   // console.log(d.DepartmentName)
    await d.save()
    await d.save()
   return res.send("department updated")
    }
    else{
       return res.send("HR ONLY")
    }
   })
    
    app.post('/deleteDepartement', async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
        console.log(req.body)
        const m =await departements.findOne({DepartmentName:req.body.DepartmentName})
        if(m){

        }
        else{
          return  res.send("not found")
        }
       if(u.type=="HR"){
           const l =await departements.deleteOne({DepartmentName:req.body.DepartmentName});
         return  res.send('Deleted')
       }
      return res.send('HR ONLY')
   })

   app.post('/Addcourses', async(req,res)=>{
    const u =await user.findOne({Email: emailTest}); //HR User
    console.log(req.body);
    const x = await courses.findOne({courseName:req.body.courseName});
    const y = await departements.findById(req.body.id);
    if(y){

    }
    else{
        return res.send(" department NOT FOUND")
    }
    if(x){
      return res.send("this course already created")
    }
    else{
        if(u.type=="HR" ){
            
            const x = await new courses({
                courseName:req.body.courseName,
                DepartmentName:req.body.DepartmentName,
                CourseInstructor:" ",
                Departmentid:req.body.Departmentid
                
            })
         
            await x.save();
            return res.send("course added");
                }
    
        else{
           return res.send("HR ONLY");
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
        
    console.log(c.DepartmentName)
    await c.save()
    await c.save()
    res.send("course updated")
    }
    else{
        res.send("HR ONLY")
    }
   })

   app.post('/deleteCourse',async(req,res)=>{
    const u =await user.findOne({Email: emailTest}); //HR User
    console.log(req.body)
    const c = await courses.findOne({courseName: req.body.courseName})
    if(c){

    }
    else{
       return res.send("course not found")
    }
    //User to be deleted
     if(u.type=="HR"){
       const m =await courses.deleteOne({courseName: req.body.courseName});
      return  res.send('Deleted')
   }
   res.send('HR ONLY')
})


app.get('/empty', async(req,res)=>{
          
})//front end done

app.get('/empty2', async(req,res)=>{
          
})//front end done

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
//----Useless 
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
//////////
app.post('/deleteinstructor',async(req,res)=>{
    const u =await user.findOne({Email: emailTest}); //HR User
    console.log(req.body)
    const c = await courses.findById(req.body.id)
    if(c){

    }
    else{
        return res.send("COURSE not found")
    }
    if(u.type=="HOD"){
        c.CourseInstructor ="  "
        await c.save()
        return res.send("Instructor deleted")
    }
    else{
       return res.send("HOD ONLY")
    }
})


///////////
app.post('/ViewStaffByDepartment',async(req,res)=>{
    const y =await user.findOne({Email: emailTest});
    console.log(req.body)
    const c  =  req.body.department//u.HODdepartment
   
   if(y.type == "HOD"){
      
     const x = await user.find({department:c})
     if(x[0]){

     }
     else{
        return res.send("department not found")
     }
    return res.send(x)
    
    }
    else{
      return  res.send("HOD ONLY")
    }

})
/////////////
app.post('/ViewStaffdayoff',async(req,res)=>{
    const y =await user.findOne({Email: emailTest});
    const u1 =await user.findOne({Email: req.body.Email});
   // if(u1.department == y.department){

   if(u1){

   }
   else{
       res.send("User not found")
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

//////////
app.post('/viewTeachingAssignments',async(req,res)=>{
    const u1 = await user.findOne({Email:emailTest})
    console.log(req.body)
    const u2 = await slot.find({date:req.body.date})
    console.log(u1.Email)
     if(u1.type == "HOD"){
        if(u2[0]){

        }
        else{
            return res.send("Date not available")
        }
     //console.log(u2)
    return res.send(u2)
    
}
    else{
       return res.send("HOD ONLY")
    }
})
////////////
app.post('/viewCoverage',async(req,res)=>{
    const u1 = await user.findOne({Email:emailTest})
    console.log(req.body)
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
   return res.send("Coverage" +"="+ Coverage +"%")
}
else{
   return res.send("not found")
}
    }
    else{
    return res("not found")

    }
}
else{
   return res.send("HOD ONLY")
}
})

///////////
app.post('/viewCoverageOfAssignedCourse', async(req,res)=>{
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
   return res.send("Coverage" +"="+ Coverage +"%")
}
else{
    return res.send("INSTRUCTORS ONLY")
}
})


///////////zzz
app.post('/viewAssignedSlots',async(req,res)=>{
    const u = await user.findOne({Email:emailTest})
    console.log(req.body)
    const s = await slot.find({Email:req.body.Email})
    const s1 = await slot.findOne({Email:req.body.Email})

    if(s1){
        
    }
    else{
         res.send("not found")
    }
    if(u.type == "Instructor"||u.type == "HOD"||u.type == "HR"||u.type == "Coordinator"){
        res.send(s)
        }
        else{
            res.send("INSTRUCTORS ONLY")
        }

   
})


//////////////////////
app.post('/ViewAllStaffForInstructor',async(req,res)=>{
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
//////////////
app.post('/AssignUpdateDeleteTA',async(req,res)=>{//date:req.body.date,   time:  req.body.time,     no: req.body.no, 
    const u1 = await user.findOne({Email:emailTest})
   const u = await slot.findOne({ day: req.body.day, time:  req.body.time,     no: req.body.no ,date:req.body.date})

   if(u1.type == "Instructor"){
   if(u){
    
   }
   else{
     return  res.send("unavailable slot")
   }
   console.log(u)
   const x= await user.findOne({Email:req.body.Email});
   if(x){
   }
   else{
    return res.send("No TA with this Email")
   }
   u.Email = x.Email;
    u.save();
  return  res.send("DONE")
}
else{
    return res.send("INSTRUCTORS ONLY")
}

    
})
//////////
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




app.post('/accessAttendance' ,async(req,res)=>{
    const u =await user.findOne({Email: emailTest});
    const u2 =await user.findOne({Email: req.body.Email});
    const month=req.body.month;
    let v=[];
    if(u.type=="HR"){
        for(let i =0; i<30; i++){
            //input month
            //compared with first or second elemnts of date string (u.attendance[i].date)
            var m = (u2.attendance[i].date); //month in array
            //console.log(m);
            var d = new Date(u2.attendance[i].date).getMonth();
            d=d+1;
            //console.log(d);

             //month we want
           

            if(d==month){
               // console.log(x);
            v[i]=u2.attendance[i].date;
                //console.log(u.attendance[i].minsspent)

                var num = u2.attendance[i].minsspent; 
                var hours = Math.floor(num / 60);  
                var minutes = num % 60;
                //return hours + ":" + minutes;     
                console.log("hours: " + hours + " minutes: " + minutes);

            }

           
            
        }
            res.send(v);
        
    }
    else
        res.send(v);
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
           // console.log("missing hours: " + hours + " missing minutes: " + minutes);  

        }
        let s="missing hours: " + hours + " missing minutes: " + minutes

        res.send(s);

    }
    else
        res.send('Only HR members can acceess missing hours!');
    })
    app.post('/accessMissingDays' ,async(req,res)=>{
        const u = await user.findOne({Email: emailTest});
        const u2 = await user.findOne({Email: req.body.Email});
        let v=[];
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
                        v[i]=u2.attendance[i].date;
                        //console.log('Absent');
                    }
    
    
            }
    
            res.send(v);

    }
    else
        res.send('Only HR members can acceess missing days!');
    })


//--NOT DONE
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
            res.send('Only HR members can update salary!');

    })
//--USELESS    
   
//ZOZZA__________________________________________________________________________________


    app.post('/createSlot',async(req,res)=>{
        try{
        const u =await user.findOne({Email: emailTest}); //HR User
        
        if(u.type=="Coordinator"){
            console.log("creating")
            //var emailz=req.body.Email;
            var dayz=req.body.day;
            var coursez=req.body.course;

            /*if(emailz!=null){
            const u1=await user.findOne({Email: emailz});
            var dayoffz=u1.dayoff; 
            if(dayz==dayoffz){
                res.send("you cant schedule a slot on academic member's day off")
            }        
            var numero=0;
                            }*/

   /* else{
               
            }*/
        
            var numero=1;
       
            var noz=req.body.no;
            var locationz=req.body.location;

            const p =await slot.find({
             location:locationz, day:dayz, no:noz,course:coursez
            })

            console.log(p);

            if(p.length>0){

                res.send("this slot is already scheduled");
            }
            else if(noz>5){
                res.send("you have maximum of 5 slots to choose from")
            }
            
    
            else if(p.length==0 && noz<=5 ){
            
            const s=new slot({
                //Email:emailz,
                day:dayz,
                no:noz,
                available:numero,
                time:req.body.time,
                location:req.body.location,
                course:coursez,
                date:req.body.date



            })
            //console.log("creating"+s.Email)

            s.save();

            res.send("slot created");
        }
        }
        else{
    res.send("you should be a course coordinator to be able to create an academic member's slot")}
        }
        catch(error){
            console.log("err")
        }
    }) //front end done
    }) 


    app.get('/viewSlot',async(req,res)=>{
    const o =await user.findOne({Email:emailTest})
    console.log(req.body);
    if(o.type=="HR" || o.type=="Coordinator"){
    const u =await slot.find({Email: req.body.Email}); //HR User
    let x=u.Email;
    console.log(u);
   
    }
    


    })//front end done
    

    app.get('/viewMySlots',async(req,res)=>{
        const o =await user.findOne({Email:emailTest})
        if(o.type=="TA"){

        const u =await slot.find({Email: emailTest}); 
        let x=u.Email;
        res.send(u)
        console.log(u);
        }
      
        
    })//front end done

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
const u1=await user.findOne({Email:mail});
if(o.type=="Coordinator"){
   if(newday!=null && u1.dayoff!=newday){
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
    if(newday==u1.dayoff){
        res.send("couldnt update the day to be on TA's day")
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
})//front end done



//--NOT DONE
    app.delete('/deleteSlot',async(req,res)=>{
    const c =await user.findOne({Email: emailTest});
    if(c.type=="Coordinator"){

        var mail=req.body.Email;
        var dayz=req.body.day;
        var noz=req.body.no;
    const u1=await slot.find({Email:mail,day:dayz,no:noz})
    if(u1.length==0){
        res.send("slot already doesnt exist")
    }
    else{
    const u =await slot.findOneAndDelete({Email: mail,day:dayz,no:noz})
       

            u.save();
            res.send("deleted")
            //console.log(d);
    }}
    else{
        res.send("you should be a course coordinator to be granted this privilege")
    }

        })


   app.post('/viewAvailableSlots',async(req,res)=>{
    try{
    const g=await user.findOne({Email:emailTest});
    if(g.type=="TA"){
    var x=req.body.course;
    const s= await slot.find({course:x,available:1})
    console.log("sub"+x);
    console.log(s);

    res.send(s);
    }}
    catch(error){
        console.log("err");

    }
   })//front end done


   app.post('/sendslotlinkingrequest',async(req,res)=>{
    const u =await user.findOne({Email: emailTest});
    var CourseCoordinatorEmailTest=req.body.CourseCoordinatorEmail;
    var dayTest=req.body.day;
    var slotTest=req.body.slot;
    var courseTest=req.body.course;

        if(u.type=="TA"){
        const availableSlot=await slot.findOne({day:dayTest,no:slotTest,course:courseTest})

        if(availableSlot==null){
            res.send("slot not found")


        }
        else{
            var availabletest=availableSlot.available;

        }     
        if(availabletest==0){
            res.send("slot unavailable for you to teach")
        } 
        var flag=0;
        for(let i=0;i<u.courses.length;i++){
            if(u.courses[i]==courseTest){
                flag=1;
                break;
            }

        }
        if(flag==0){
            res.send("you dont teach this course!")
        }


        const s = new slotlinkingrequest({
        Email:emailTest,
        CourseCoordinatorEmail:CourseCoordinatorEmailTest,
        day:dayTest,
        slot:slotTest,
        course:courseTest,
        accepted:0,
        status:"pending"
        
    })
    
    s.save();
    res.send("slot linking request sent")}
    else{
        res.send("you have to be an academic member to be able to send a slot linking request")}

    
    



   })//front end done 
   

   //--NOT DONE
   app.get('/viewslotlinkingrequest',async(req,res)=>{
    const u =await user.findOne({Email: emailTest});

    if(u.type=="Coordinator"){

        const u1 =await slotlinkingrequest.find({CourseCoordinatorEmail: emailTest});
        res.send(u1);
    }

    res.send("you should be a course coordinator to be able to view slot linking requests")
   })//front end done

//--NOT DONE
   app.post('/acceptslotlinkingrequest',async(req,res)=>{
try{
    const u =await user.findOne({Email: emailTest});
    ///getting course coordinator after logging in


    if(u.type=="Coordinator"){
    //getting slot linking request
    const u1 =await slotlinkingrequest.findById(req.body.id);


    var mailz= u1.Email; //ta mail
    var dayz=u1.day;//day of slot
    var slotz=u1.slot;//slot no
    var coursez=u1.course;//course
    var ax=req.body.accepted;


    //getting day off
    const u2= await user.findOne({Email:mailz})
    var userdayoff=u2.dayoff; 


    
    //checking to see if we have a slot at the sametime of the request     
    const u3 =await slot.findOne({day:dayz,no:slotz,course:coursez})
    console.log("bakrah acl  "+u3);
    //checking to see if we have a slot on dayoff  
        if(dayz==userdayoff){
            u1.accepted=0;
            u1.status="rejected";
            const n=new notification({
            Email:mailz,
            Message:"your slot linking request has been rejected by your course coordinator",
            courseCoordinatorEmail:emailTest
           // headOfDepartementEmail:String

        })
        u1.save()
        n.save();

        res.send("slot cant be added on a day off")

    }

   else if(u3.available==0){
        u1.accepted=0;
        u1.status="rejected";
        const n=new notification({
            Email:mailz,
            Message:"your slot linking request has been rejected by your course coordinator",
            courseCoordinatorEmail:emailTest
           // headOfDepartementEmail:String
        })
        u1.save();
        n.save();
        res.send(" this slot is already scheduled");
        
    }
//u3.length==0 || 
    //checking to see if we have a slot at the sametime of the request  
    


    
    //u3.length==0
else if( u3.available==1 && dayz!=userdayoff && ax==1){
        
    //u1.accepted=ax;
    console.log(ax);
    console.log(mailz);
        
            u1.accepted=ax;
            u1.status="accepted";
            u3.available=0;
            

            const s=await slot.findOne({day:dayz,no:slotz,course:coursez})
            s.available=0;
            s.Email=mailz;

            /*const s=new slot({
                Email:mailz,
                day:dayz,
                no:slotz,
                time:req.body.time,
                location:req.body.location,
                course:coursez



            })*/


            
            const n=new notification({
                Email:mailz,
                Message:"your slot linking request has been accepted by your course coordinator and has been added to your slots",
                courseCoordinatorEmail:emailTest
               // headOfDepartementEmail:String

            })
            n.save();
            s.save();
            u1.save();
            u3.save();
            res.send("viewed and accepted")


        }




   if(ax==0){     
        u1.status="rejected";
        const n=new notification({
            Email:mailz,
            Message:"your slot linking request has been rejected by your course coordinator",
            courseCoordinatorEmail:emailTest
           // headOfDepartementEmail:String

        })
        n.save();
        u1.save();
        res.send("viewed and rejected ")

    }
    }
    else{
        res.send("you should be a course coordinator to be granted this privilege")
        
    }

        
    



   }
   catch(error){

    console.log("err");
   }

    })//front end done bas bethaneg sa3at double check 3aleiha 

//--NOT DONE
   app.post('/submitdayoffrequest',async(req,res)=>{
    
    const u =await user.findOne({Email: emailTest});
        if(u.type=="TA"){
        var Head=req.body.headOfDepartementEmail;
        var reqD=req.body.requestedDayOff;
        var resD=req.body.reasonOfrequest;
        console.log(Head  +reqD  +resD);
        const u1 =await user.findOne({Email: Head});
        if(u1.department!=u.department){
            res.send("This HOD is not responsible for your department!")

        }
        else{

        const d = new dayoffrequest({
        Email:emailTest,
        headOfDepartementEmail:Head,
        requestedDayOff:reqD,
        reasonOfrequest:resD,
        accepted:0,
        status:"pending"
        
    })
    d.save();
    res.send("day off request submitted")}}
    else{
        res.send("you should be an academic member to be granted this privilege")

    }


   })//front end done
   

//--NOT DONE
   app.get('/viewdayoffrequests',async(req,res)=>{
    const u =await user.findOne({Email: emailTest});
    if(u.type=="HOD"){
        const u1 =await dayoffrequest.find({headOfDepartementEmail: emailTest});

        res.send(u1);


    }
   

   })

   //--NOT DONE
   app.post('/acceptdayoffrequests',async(req,res)=>{
   try{    
    const u =await user.findOne({Email: emailTest});
    let e=u.Email;
    console.log(e);


    if(u.type=="HOD"){
//getting slot linking request
    const u1 =await dayoffrequest.findById(req.body.id);     
    
    ////got the day of request by ID


    var mailz=u1.Email; 
    var dayoffz=u1.requestedDayOff;
    var accept=req.body.accepted;


    console.log("ta mail: "+mailz+"dayoff: "+dayoffz+"accept:  "+accept);
    if(accept==1){
        const ta =await user.findOne({Email:mailz});     
        u1.accepted=accept;
        u1.status="accepted"
        ta.dayoff=dayoffz;
        u1.save();
        ta.save();
        const n=new notification({
            Email:mailz,
            Message:"your request to change your day off has been accepted by the head of the departement",
            headOfDepartementEmail:emailTest
           // headOfDepartementEmail:String

        })
        n.save();
        res.send("TA's day off has been accepted successfully")
    }
    else{
        u1.accepted=0;
        u1.status="rejected";

    console.log(u1.status);


        var r=req.body.reasonOfRejection;
        u1.reasonOfRejection=r;
        u1.save();
        const n=new notification({
            Email:mailz,
            Message:"your request to change your day off has been rejected by the head of the departement",
            headOfDepartementEmail:emailTest,
            reasonOfRejection:r
           // headOfDepartementEmail:String

        })
        n.save();
    res.send("TA's day off has been rejected successfully")
    }


    }}




















    catch(error){
        console.log("err");
    }

   })//front end done


   app.post('/sendLeaveRequest', async (req,res)=>{

        //Email , type, startDate, endDate, courseName, replacementDay, replacementStaffMember, replacementStaffEmail, document, skippedDay

    const u =await user.findOne({Email: req.body.Email});
    const HOD =await user.findOne({department: u.department , type: "HOD"});
    const StaffMember =await user.findOne({department: u.department , Email: req.body.replacementStaffEmail});
    var leaveType = req.body.type;
    var sDate=new Date(req.body.startDate);
    var subDate=new Date();//.toLocaleDateString();
    var l;

    var olddate=new Date();
   // olddate.setDate(olddate.getDate()+3);
    olddate.setDate(olddate.getDate()); //current date
    var dates=olddate.toLocaleDateString();
    

    var go = false;

    //u.annualLeaveBalance to be updated
    //console.log(subDate);
    //console.log(dates);

    //console.log(sDate.getTime());
    //console.log(subDate.getTime());

   // if(subDate == dates){
     //   console.log('true');
    //}


    

//------------------------------------------------------------------------------------------------------

    if(leaveType == "Annual"){  //Annual Leave
        var diff = sDate.getTime()- subDate.getTime() ;
       

        
        if (diff>0){
           
           
            if(u.annualLeaveBalance>=1){
               

                var l = new leaves({
                    Email: req.body.Email,
                    ID: u.ID,
            
                    type:leaveType,
            
                    startDate:req.body.startDate, 
                    endDate:req.body.endDate,
            
                    courseName:req.body.course,
                    departmentName:u.department,
                    submissionDate:subDate,
            
            
                    replacementDay:req.body.replacementDay, //in Case of annual leave 
                    replacementStaffMember:req.body.replacementStaffMember, //in Case of annual leave 
                    replacementStaffEmail:req.body.replacementStaffEmail, //in Case of annual leave 
            
                    
                   // HODemail:HOD.Email (when replacementStatus == accepted)
            
            
                })

                // Request is sent to the Staff Member Chosen and replacementStatus is awaiting to be updated
                //Request sent to HOD if replacementStatus == True
                // if status == true (HOD Accepeted)
                //Update annualLeaveBalance accordingly
                await  l.save();
            }
            
        }
    }

    //------------------------------------------------------------------------------------------------------

    if(leaveType == "Sick"){
        console.log('sick leave');
       // console.log(subDate.getTime() - sDate.getTime());
        var diff = subDate.getTime() - sDate.getTime();
        if(diff < 86400000 *3){
            
        
        //console.log(new Date(subDate.getTime() - sDate.getTime()));
        //1 Day == 86400000ms
        //decrement date by 3 and compare using ==

        
           
             l = new leaves({
                Email: req.body.Email,
                ID: u.ID,
        
                type:leaveType,
        
                startDate:req.body.startDate, 
                endDate:req.body.endDate,
        
                courseName:req.body.course,
                departmentName:u.department,
                submissionDate:subDate,
                    
                document: req.body.document,  // In case of maternity or sick leaves
        
                HODemail:HOD.Email
        
        
            })

            await l.update();
            await  l.save();
            //Send to HOD
        }
        

    }

    //------------------------------------------------------------------------------------------------------

    if(leaveType == "Maternity"){
        if( (u.gender == "female") ){
             l = new leaves({
                Email: req.body.Email,
                ID: u.ID,
        
                type:leaveType,
        
                startDate:req.body.startDate, 
                endDate:req.body.endDate,
        
                courseName:req.body.course,
                departmentName:u.department,
                submissionDate:new Date().toLocaleDateString(),
        
                
                document: req.body.document,  // In case of maternity or sick leaves
        
                HODemail:HOD.Email
        
        
            })
            //Send to HOD
        }
        await  l.save();

    }

    //------------------------------------------------------------------------------------------------------

    if(leaveType == "Accidental"){
        
            if(endDate - startDate <=6){
                //Send to HOD
                //Update annualLeaveBalance accordingly
                 l = new leaves({
                    Email: req.body.Email,
                    ID: u.ID,
            
                    type:leaveType,
            
                    startDate:req.body.startDate, 
                    endDate:req.body.endDate,
            
                    courseName:req.body.course,
                    departmentName:u.department,
                    submissionDate:new Date().toLocaleDateString(),
            
                    document: req.body.document,  // In case of maternity or sick leaves
                    
            
                    HODemail:HOD.Email
            
            
                })
            }
            await  l.save();

    }


    //------------------------------------------------------------------------------------------------------


    if(leaveType == "Compensation"){
       var startDate1=req.body.startDate;
        if(u.dayOff == startDate1.getDay){

             l = new leaves({
                Email: req.body.Email,
                ID: u.ID,
        
                type:leaveType,
        
                startDate:startDate1,
                endDate:req.body.endDate,
        
                courseName:req.body.course,
                departmentName:u.department,
                submissionDate:new Date().toLocaleDateString(),
     
                HODemail:HOD.Email
        
        
            })
            
            //Send request to HOD
            //Update status (usually accepted (logically))
            //Adjust Salary to avoid deduction (Loop on days off to find if there are any hours, if found add them to total hours in the month (global variable))
                //By updating signintime and signouttime for that day (will auto adjust salary calculation at the end of the month)
                //Also remember that updated salary needs to run automatically at the end of the month
        }
        await  l.save();
            
    }

    
    

    res.send('leave sent successfuly');
   })//amr


   app.post('/viewAllLeaves',async(req,res)=>{ //HOD app.get(ViewLeaveRequests)
    const u = await user.findOne({Email:emailTest})
    const s = await leaves.find()
  
   
        return res.send(s)
        
       
   })//amr



//--ALMOST DONE (just display the shit)
   app.post('/viewLeaveRequests',async(req,res)=>{ //HOD app.get(ViewLeaveRequests)
    const u = await user.findOne({Email:emailTest})
    console.log(req.body)
    const s = await leaves.find({Email:req.body.Email})
    const s1 = await leaves.findOne({Email:req.body.Email})

    if(s1){
        
    }
    else{
         res.send("not found")
    }
    if(u.type == "HR"){
        res.send(s)
        }
        else{
            res.send("HR ONLY")
        }
   })//amr

   //Clash with zeina
   app.get('/viewReplacementRequests',async(req,res)=>{ //Staff app.get(ViewReplacementRequests)
    //View all replacement requests sent to this staff member (in case of annual leaves)
    var x = await leaves.find({replacementStaffEmail: emailTest});
    for(let i =0; i<x.length; i++){
        if(x[i].replacementStaffEmail==emailTest){
            console.log(x[i]);

        }
        
    }
    res.send('here are your replacement requests')
   })

   //--ALMOST DONE
   app.post('/leaveRequestResponse',async(req,res)=>{ //HOD app.post(LeaveRequestResponse)
    //change status (accept/reject) requests sent to this HOD
    //Email of requester
    //status

    var x = await leaves.find({Email: req.body.Email});
    var u = await user.findOne({Email: req.body.Email});

    for(let i =0; i<x.length; i++){

        if(x[i].HODemail==emailTest){
        
            x[i].status = req.body.status;
            console.log('status updated');

            if(req.body.status == "accepted" && x[i].type == "Annual"){
                u.annualLeaveBalance = u.annualLeaveBalance-1;
                console.log("Annual Leave Accepted");
            }
            if(req.body.status == "accepted" && x[i].type == "Compensation"){
                //Update salary
                console.log("Compensation Accepted");
            }

            if(req.body.status == "accepted" && x[i].type == "Accidental"){
                u.annualLeaveBalance = u.annualLeaveBalance - (x[i].endDate - x[i].startDate);
                u.accidentalLeaveBalance= u.accidentalLeaveBalance - (x[i].endDate - x[i].startDate);
                console.log("Accidental Leave Accepted");
            }

            if(req.body.status == "accepted" && x[i].type == "Sick"){
               // u.annualLeaveBalance = u.annualLeaveBalance-1;
                console.log("Sick Leave Accepted");
            }

            if(req.body.status == "accepted" && x[i].type == "Maternity"){
                // u.annualLeaveBalance = u.annualLeaveBalance-1;
                 console.log("Maternity Leave Accepted");
             }

            
            x[i].update();
            x[i].save();
            u.update();
            u.save();
            res.send('Thank you');

        
        
    }
    else {
        res.send('Not found/Not Authorized');
    }
}

   })//amr

   //--ALMOST DONE
   app.post('/replacementRequestResponse',async(req,res)=>{ //Staff app.post(ReplacementRequestResponse)
    //change replacementStatus (accept/reject) requests sent to this Staff Member
    //Email of requester
    //replacementStatus
    var x = await leaves.find({Email: req.body.Email});
    var u = await user.findOne({Email: req.body.Email});
    var HOD =await user.findOne({department: u.department , type: "HOD"});

    for(let i =0; i<x.length; i++){
        if(x[i].Email==req.body.Email && x[i].type == "Annual"){
            x[i].replacementStatus = req.body.replacementStatus;

            if(req.body.replacementStatus == "accepted"){
                x[i].HODemail= HOD.Email;
            }

            x[i].update();
            x[i].save();
            u.update();
            u.save();
            res.send('Thank you');

        }
        
    }

  
   })//amr
   

//--NOT DONE
   app.get('/viewmynotification',async(req,res)=>{
    const u1 =await notification.find({Email: emailTest});
    res.send(u1);
   })//front end done

   app.post('/viewdayoffrequeststatus',async(req,res)=>{
    const u1 =await dayoffrequest.findOne({Email: emailTest,requestedDayOff:req.body.requestedDayOff});
    var stats=u1.status;
    res.send(stats);


   })//done front end


   app.post('/viewslotlinkingstatus',async(req,res)=>{
    const u1 =await slotlinkingrequest.findOne({Email: emailTest,course:req.body.course,day:req.body.day,slot:req.body.slot});
    var stats=u1.status;
    res.send(stats);


   })//done front end


   app.post('/sendReplacementRequest',async(req,res)=>{

    const u = await user.findOne({Email:emailTest});
    if(u.type=="TA"){
        const d = new replacementrequest({
        Email:emailTest,
        replacingTAEmail:req.body.replacingTAEmail,
        date:req.body.date,
        slot:req.body.slot,
        course:req.body.course,
        time:req.body.time,
        location:req.body.location,
        accepted:0,
        status:"pending"
        
    })
    d.save();
    res.send("replacement request sent succesfully")
    }
    else{
        res.send("you are not an academic member")
    }


   })//done front end

   app.get('/viewReplacementRequests',async(req,res)=>{

    const u = await user.findOne({Email:emailTest});
    if(u.type=="TA"){
        const u1 = await replacementrequest.find({replacingTAEmail:emailTest});

        res.send(u1);
    }
    else{
        res.send("you are not an academic member")
    }

   })//done front end

   app.post('/viewReplacementRequestbyID',async(req,res)=>{
    
    const u = await user.findOne({Email:emailTest}); 
    if(u.type=="TA"){
        const u1 = await replacementrequest.findById(req.body.id);
        var x=req.body.accepted; //accepting boolean
        console.log("accepting boolean "+x);
        var e=u1.replacingTAEmail // email of recieving TA
        console.log("recieving TA "+e);

        var s=u1.Email //email of sending TA
        console.log("sending TA "+s);

        var reqCourse=u1.course;
        console.log("requested course "+reqCourse);


        const u2 = await user.findOne({Email:s});// getting the sending TA
        var b=0;//boolean that both TAs teach the same course in the request
        console.log(u2.courses.length);
        for(let i=0;i<u2.courses.length;i++){

            var f=u2.courses[i];
            console.log(f+" ")

            for(let j=0;j<u.courses.length;j++){
                console.log(f+" "+l+" "+b)

                var l=u.courses[j]
                console.log(f+" "+l+" "+b)
                if(f==l && f==reqCourse && l==reqCourse ){
                    b=1;
                    console.log(f+" "+l+" "+b)
                    break;
                }

            }
            if(b==1){
                break;
            }

        } //setting boolean b
    //if recieveing TA accepted & the logged in TA is the recieving TA and they share the same department and they teach the same course in the request
        if(x==1 && emailTest==e && u.department==u2.department && b==1){
        //set accepted bit to 1
        u1.accepted=x;
        var m=u.name;

        //change status to accepted
        u1.status="accepted by switching TA , HOD pending";
        //getting name of sending TA
        
        var z="you replacement request with "+m+" has been accepted"
        //sending notification to sending TA
        const n=new notification({
            Email:s,
            Message:z
        })
        u1.save();
        n.save();

        res.send("replacement request has been accepted successfully please contact HOD now!")
        }
        else{
            var m=u.name;
            u1.accepted=0;
            u1.status="rejected by switching TA, HOD pending"
            var z="you replacement request with "+m+" has been rejected"

            const n=new notification({
                Email:s,
                Message:z})
    
            n.save();

            res.send("replacement request has been rejected successfully")

        }

    }
    else{
        res.send("you are not an academic member")
    }

    
    



   })//done front end

   app.post('/ForwardReplacementReqtoHOD',async(req,res)=>{
    const u= await user.findOne({Email:emailTest});

    if(u.type=="TA" ){
        const u1 = await replacementrequest.findById(req.body.id);
        if(emailTest!=u1.Email){
            res.send("the request should be forwarded by the TA who created the request!")

        }
        if(u1.status=="accepted by switching TA , HOD pending"||u1.status=="rejected by switching TA, HOD pending"){
        var hod=req.body.HeadOfDepartmentEmail;
        u1.HeadOfDepartmentEmail=hod;
        u1.verifiedByHOD=0;
        u1.save();
        res.send("replacement request has been forwarded to HOD successfully")


    }
    else if(u1.status=="pending"){

        res.send("request should be viewed by replacing TA first");
    }


}
else{

    res.send("you are not a teacher's assistant")
}
   })//done front end

   app.get('/ViewReplacementRequestsAsHOD',async(req,res)=>{
    const u = await user.findOne({Email:emailTest}); 
    if(u.type=="HOD"){
        const k=await replacementrequest.find({HeadOfDepartmentEmail:emailTest})
        res.send(k);


    }
    else{
        res.send("You must be HOD to be granted this privilege")
   }


   })//done front end
   app.post('/HODReplacementRequestsVerify',async(req,res)=>{
    const u = await user.findOne({Email:emailTest}); 
    if(u.type=="HOD"){
        const k = await replacementrequest.findById(req.body.id); 
        var s=k.Email;
        var mailz=k.replacingTAEmail;
        var datez=k.date;
        var locationz=k.location;
        var timez=k.timez;
        var courze=k.course;
        var noz=k.slot;
        var v=req.body.verifiedByHOD;
        if(v==1){
            k.verifiedByHOD=v;
            k.status="accepted";
            const n=new notification({
                Email:s,
                Message:"your replacement request has been accepted by the Head of your department"
            })
            const sl=new slot({
                    Email:mailz,
                    date:datez,
                    type:"replacement slot",
                    no:noz,
                    time:timez,
                    location:locationz,
                    course:courze,
                    date:datez


            })
            sl.save();
            k.save();
            n.save();
            res.send("changes saved")
        }
        else{
            k.verifiedByHOD=v;
            k.status="rejected"
            const n=new notification({
                Email:s,
                Message:"your replacement request has rejected by the Head of your department"
            })
            k.save();
            n.save();
            res.send("changes saved")
        }


    }
    else{
        res.send("you must be head of department ")
    }


   })//done front end
   app.get('/viewAcceptedDayOffRequests',async(req,res)=>{
    const u =await user.findOne({Email:emailTest});
    if(u.type=="TA"){
    const u1= await dayoffrequest.find({Email:emailTest,status:"accepted"})
    const u2=await slotlinkingrequest.find({Email:emailTest,status:"accepted"})
    const u3=await dayoffrequest.find({Email:emailTest,status:"accepted"})
    let u4=[];
    for(let i=0;i<u1.length;i++){
        u4[i]=u1[i];

    }
    
    for(let i=0;i<u2.length;i++){
        u4[i+u1.length]=u2[i];

    }

    for(let i=0;i<u3.length;i++){
        u4[i+u1.length+u2.length]=u3[i];

    }
    console.log(u4);
    res.send(u1);}

   })//done front end

   app.get('/viewAcceptedSlotLinkingRequests',async(req,res)=>{
    const u =await user.findOne({Email:emailTest});
    if(u.type=="TA"){
    const u1= await dayoffrequest.find({Email:emailTest,status:"accepted"})
    const u2=await slotlinkingrequest.find({Email:emailTest,status:"accepted"})
    const u3=await dayoffrequest.find({Email:emailTest,status:"accepted"})
    let u4=[];
    for(let i=0;i<u1.length;i++){
        u4[i]=u1[i];

    }
    
    for(let i=0;i<u2.length;i++){
        u4[i+u1.length]=u2[i];

    }

    for(let i=0;i<u3.length;i++){
        u4[i+u1.length+u2.length]=u3[i];

    }
    console.log(u4);
    res.send(u2);}

   })//done front end

   app.get('/viewAcceptedReplacementRequests',async(req,res)=>{
    const u =await user.findOne({Email:emailTest});
    if(u.type=="TA"){
    const u1= await dayoffrequest.find({Email:emailTest,status:"accepted"})
    const u2=await slotlinkingrequest.find({Email:emailTest,status:"accepted"})
    const u3=await dayoffrequest.find({Email:emailTest,status:"accepted"})
    let u4=[];
    for(let i=0;i<u1.length;i++){
        u4[i]=u1[i];

    }
    
    for(let i=0;i<u2.length;i++){
        u4[i+u1.length]=u2[i];

    }

    for(let i=0;i<u3.length;i++){
        u4[i+u1.length+u2.length]=u3[i];

    }
    console.log(u4);
    res.send(u3);}

   })//done front end

   app.get('/viewRejectedDayOffRequests',async(req,res)=>{
    const u =await user.findOne({Email:emailTest});
    if(u.type=="TA"){
    const u1= await dayoffrequest.find({Email:emailTest,status:"rejected"})
    res.send(u1);}


   })//front end done

   app.get('/viewRejectedSlotLinkingRequests',async(req,res)=>{
    const u =await user.findOne({Email:emailTest});
    if(u.type=="TA"){
    const u2=await slotlinkingrequest.find({Email:emailTest,status:"rejected"})
    res.send(u2);}


   })//front end done

   app.get('/viewRejectedReplacementRequests',async(req,res)=>{
    const u =await user.findOne({Email:emailTest});
    if(u.type=="TA"){
    const u3=await dayoffrequest.find({Email:emailTest,status:"rejected"})
    res.send(u3);}
   


   })//front end done
   app.get('/viewPendingDayoffRequests',async(req,res)=>{
    const u =await user.findOne({Email:emailTest});
    if(u.type=="TA"){
    const u1= await dayoffrequest.find({Email:emailTest,status:"pending"})
    const u2=await slotlinkingrequest.find({Email:emailTest,status:"pending"})
    const u3=await dayoffrequest.find({Email:emailTest,status:"pending"})
    res.send(u1);
    }

   })//front end done
   app.get('/viewPendingSlotLinkingRequests',async(req,res)=>{
    const u =await user.findOne({Email:emailTest});
    if(u.type=="TA"){
    const u1= await dayoffrequest.find({Email:emailTest,status:"pending"})
    const u2=await slotlinkingrequest.find({Email:emailTest,status:"pending"})
    const u3=await dayoffrequest.find({Email:emailTest,status:"pending"})
    res.send(u2);
    }

   })//front end done
   app.get('/viewPendingReplacementRequests',async(req,res)=>{
    const u =await user.findOne({Email:emailTest});
    if(u.type=="TA"){
    const u1= await dayoffrequest.find({Email:emailTest,status:"pending"})
    const u2=await slotlinkingrequest.find({Email:emailTest,status:"pending"})
    const u3=await dayoffrequest.find({Email:emailTest,status:"pending"})
    res.send(u3);
    }

   })//front end done
   app.post('/cancelPendingSlotLinkingRequest',async(req,res)=>{
    const u =await user.findOne({Email:emailTest});
        if(u.type=="TA"){
            var y=req.body.id;
            const u1=await slotlinkingrequest.findById(y);
            var stats=u1.status
            if(stats=="pending"){
                const x=await slotlinkingrequest.findByIdAndDelete(y);
                res.send("your pending request has been canceled");
                x.save();
            }
            else{
                const z="this request is already "+u1.status
                res.send(z);
            }


        }





    })//front end done

    app.post('/cancelPendingDayOffRequest',async(req,res)=>{
        const u =await user.findOne({Email:emailTest});
            if(u.type=="TA"){
                var y=req.body.id;
                const u1=await dayoffrequest.findById(y);
                var stats=u1.status
                if(stats=="pending"){
                    const x=await dayoffrequest.findByIdAndDelete(y);
                    res.send("your pending request has been canceled");
                    x.save();
                }
                else{
                    const z="this request is already "+u1.status
                    res.send(z);
                }


            }

    


    })//front end done

    app.post('/cancelPendingReplacement',async(req,res)=>{
        const u =await user.findOne({Email:emailTest});
            if(u.type=="TA"){
                var y=req.body.id;
                const u1=await replacementrequest.findById(y);
                var stats=u1.status
                if(stats=="pending"){
                    const x=await replacementrequest.findByIdAndDelete(y);
                    res.send("your pending request has been canceled");
                    x.save();
                }
                else{
                    const z="this request is already "+u1.status
                    res.send(z);
                }


            }

    else{
        res.send("you're not a TA")
    }



    })//front end done
    app.post('/cancelUpcomingReplacementRequest',async(req,res)=>{

        const u =await user.findOne({Email:emailTest});
            if(u.type=="TA"){
                var y=req.body.id;
                const u1=await replacementrequest.findById(y);
                var upcomingdate=u1.date;
                if(upcomingdate>new Date().toLocaleDateString()){
                    const x=await replacementrequest.findByIdAndDelete(y);
                    res.send("your upcoming request has been canceled");
                    x.save();
                }
                else{
                    const z="this request is already "+u1.status
                    res.send(z);
                }


            }

    else{
        res.send("you're not a TA")
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
   app.use('api/items', items)
    if(proccess.env.NODE_ENV === 'production'){
        app.use(express.static('my-app/build'));
        app.get('*',(req, res)=>{
          res.sendFile(path.resolve(__dirname,'my-app','build','index.html'))

        });
    }

    app.listen(process.env.PORT || 3000, ()=>{
        console.log('server started at port 3000');
    })

/*
.catch((err)=>{
    console.log(err);
})*/