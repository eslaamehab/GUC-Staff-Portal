const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

//const attendance = require('./attendance.js');

var block = mongoose.Schema({
    date: String,
    hoursspent: Number
  });

const userSchema = new schema({
    Email: String,
    name: String,
    ID:String,
    type:String,
    password:String,
    signintime: String, //Check how to initialize properly
    signouttime: String,
    salary: Number,
    faculty: String,
    department: String,
    gender: String,
    officelocation: String,
    courses: [String], //check how to add array
    firstTime:0,
    newpassword: String,
    dayoff: String,
    hours: [block]



    //Day off
    
 

})
module.exports=mongoose.model('user', userSchema);