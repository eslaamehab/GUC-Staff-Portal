const express= require('express')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('./user.js');
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


var emailTest='';

let ACcounter =1;
let HRcounter =1; 

const app= express();

//app.use(express.json());

//test2

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
        


        const u = new user({
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
        if(u.type=="HR"){
            // await user.findOne({Email: req.body.Email}).update({$set:{signintime: timestamp}});
           // u2.update({$set:{officelocation: req.body.officelocation}})
            u2.officelocation=req.body.officelocation;
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

    app.get('/attendance', async(req,res)=>{

        res.send('This is your attendance');
    })

    app.get('/missingdays', async(req,res)=>{

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

        //new Date().getDay()
        //new Date().getMonth()
       // new Date().getYear()

      // let todaysdate= new Date().toLocaleDateString();
        //console.log(todaysdate);

        for(let i =0; i<150; i++){
            u.hours[i] = {date: '', hoursspent: 0};
        }  //initialize array needs to be on top of code

        //for(let i =0; i<150; i++){
          //  u.hours[i] = {date: '', hoursspent: 0};
        //}


        for(let i =0; i<150; i++){
            if (u.hours[i]==undefined){
                u.hours[i] = {date: new Date().toLocaleDateString(), hoursspent: totalmin};
               // u.hours[i].hoursspent=totalmin;
            } //fill array need to azabat el conditions
        
            u.hours[i] = {date: new Date().toLocaleDateString(), hoursspent: u.hours[i].hoursspent+totalmin};
        }
               // u.hours[0]={date:'fuc2k', hoursspent: 0};
                console.log(u.hours[0].date);
                console.log(u.hours[0].hoursspent);

               
               // var myDate=u.hours[0].date;
               // myDate.setDate(myDate.setDate() + 1);
             //  var myDate = new Date(todaysdate);
               //myDate.setDate(myDate.getDate()+1);
                //console.log(myDate);

            //}

        //}
       
        

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