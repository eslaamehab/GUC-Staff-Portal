const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

//const attendance = require('./attendance.js');

var block = mongoose.Schema({
    date: String,
    minsspent: Number
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
    course:String,
    firstTime:0,
    newpassword: String,
    dayoff: String,
    attendance: [block],
    updatedSalary: Number




    //Day off
    
 

})
module.exports=mongoose.model('user', userSchema);