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
          u.hours[0] = {date: stringg, hoursspent: 0};
          console.log(u.hours[0].date);
          console.log(u.hours[0].hoursspent);
  
          var datecount=1;
  
          for(let i =1; i<30; i++){
              var olddate=new Date();
              olddate.setDate(olddate.getDate()+datecount); // .toString().substring(1, 10);;
              //var dates=olddate.toString();
              var dates=olddate.toLocaleDateString();
  
              u.hours[i] =  {date: dates, hoursspent: 0}; // new Date(u.hours[i-1].date +1);
              datecount=datecount+1;
              
              console.log(u.hours[i].date);
              console.log(u.hours[i].hoursspent);
  
              
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
        u.firstTime=1;
        console.log('update')
        const salt = await bcrypt.genSalt(12);
        const hashedPassword= await bcrypt.hash(req.body.newpassword,salt);
        u.password=hashedPassword;
        res.send("your password has been updated successfully, please try to login with your new password");
        u.save();

    
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
            //compared with first or second elemnts of date string (u.hours[i].date)
            var m = (u.hours[i].date); //month in array
            var d = new Date(u.hours[i].date).getMonth();
            d=d+1;

            var month = req.body.month; //month we want
           

            if(d==month){
               // console.log(x);
                console.log(u.hours[i].date)
                console.log(u.hours[i].hoursspent)

            }

           
            
        }
        
        res.send(u.hours);
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
            var x = new Date(u.hours[i].date).getDay();
            if(u.hours[i].hoursspent == 0 )
                if( day != x){
                    console.log(u.hours[i].date);
                    console.log('Absent');
                }


        }

        res.send('These are your missing days');
    })

    app.get('/hours', async(req,res)=>{

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
        const u =await user.findOne({Email: req.body.Email})
        if (!u)
        return res.status(403).send('Not found')

        await user.findOne({Email: req.body.Email}).update({$set:
            {signintime: timestamp}});

            inhour = new Date().getHours();
            inmin = new Date().getMinutes();

        

        u.save; 
        signedin=true;
        res.send(`Signin successful ${u.signintime}`);   

    })

    app.post('/signout', async(req,res)=>{
        if(signedin==false){
        res.send('You need to sign in first')
        }
        const u =await user.findOne({Email: req.body.Email});

        timestamp=(new Date()).toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

        await user.findOne({Email: req.body.Email}).update({$set:
            {signouttime: timestamp}});

        outhour = new Date().getHours();
        outmin = new Date().getMinutes();
            
        diffhour = outhour-inhour;
        diffmin=outmin-inmin;
        totalmin=(diffhour*60) + diffmin;
        
        //To fill attendance
        for(let i =0; i<30; i++){
            var stringd = u.hours[i].date;//.toLocaleDateString(); //Date in index i
            var stringt = new Date().toLocaleDateString(); //Todays date

            //console.log(stringd);
            //console.log(stringt);

           
            if (stringd == stringt){ //if date in index i == todays date
               // u.hours[i] = {date: new Date().toLocaleDateString(), hoursspent: u.hours[i].hoursspent+totalmin};
               //u.hours[i] = {date: stringt, hoursspent: 5};
               //u.hours[i].hoursspent=5;
               u.hours[i].hoursspent = u.hours[i].hoursspent+totalmin
                u.update();
                u.save();
               
               
            } 
        }
        //console.log(u.hours[x].date);
        //console.log(u.hours[x].hoursspent);
              
        
         u.save;
        signedin=false;
       // console.log(diffhour);
       // res.send(`signout successful ${diffmin}`);
        res.send(`signout successful ${u.signouttime}`);

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

        app.delete('/DeleteLocation', async(req,res)=>{
            const u =await user.findOne({Email: emailTest}); //HR User
             //User to be deleted
            if(u.type=="HR"){
                const l =await location.deleteOne({roomName: req.body.roomName});
                res.send('Deleted')
            }
            res.send('Not Deleted')
        }
            )

   app.post('/LocationDetails',async(req,res)=>{
        const u=new location({

            

            roomName:req.body.roomName,
            Capacity:req.body.Capacity,

           Count:req.body.Count,
            type:req.body.type
            

        })
        await u.save();
        res.send('location has been created ');


    }) 

    app.delete('/DeleteLocation', async(req,res)=>{
        const u =await user.findOne({Email: emailTest}); //HR User
         //User to be deleted
        if(u.type=="HR"){
            const l =await location.deleteOne({roomName: req.body.roomName});
            res.send('Deleted')
        }
        res.send('Not Deleted')
    }
        )
        
            
        app.post('/AddFaculty', async(req,res)=>{
            const u =await user.findOne({Email: emailTest}); //HR User
                if(u.type=="HR"){
                const u = new faculty({
                facultyName:req.body.facultyName,
                departmentsInFaculties:req.body.departmentsInFaculties,
               //{$push{departmentsInfaculties:name}} ,
                departmentsCount:req.body.departmentsCount
                })
                res.send("faculty created");
                await u.save();
            }
            else{
                res.send("HR ONLY");
            }
            }) 
    
             //updateMany
        app.delete('/deleteFaculty', async(req,res)=>{
                const u =await user.findOne({Email: emailTest}); //HR User
                if(u.type=="HR"){
                    console.log("aho ha delete aho");
                    const l =await faculty.findByIdAndDelete({id: req.body.departmentName});
                    res.send('Deleted')
                }
                res.send('Not Deleted')
              })
               
    
        app.post('/UpdateFaculty', async(req,res)=>{
                const u =await user.findOne({Email: emailTest}); //HR User
                if(u.type=="HR"){
                 await faculty.findByIdAndUpdate(
                    req.body.id,
                    {
                        $push : {
                        departmentsInFaculties : req.body.departmentName
                    }}
                )
                res.send("faculty Updated") ;
                }
                else{
                    res.send("HR ONLY") ;
                }
            }) 
    
        app.post('/addDepartments' ,async(req,res)=>{
            const u =await user.findOne({Email: emailTest}); //HR User
            if(u.type=="HR"){
                let fId = await faculty.findById( req.body.Facultyid)
                if( fId){
               
                }
                else{
                    res.send("faculty msh mwgooda")
                }
                const d = new departments({
                    DepartmentName:req.body.DepartmentName,
                    FacultyName:req.body.FacultyName,
                    Facultyid:req.body.Facultyid
                    
            })
            res.send("Department Added")
            await  d.save()
        }
            else{
                res.send("HR ONLY")
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