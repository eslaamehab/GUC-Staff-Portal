const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const slotSchema = new schema({
    Email:String,
    day:String,
    date:String,
    no:Number,
    time:String,
    location:String,
    course:String,
    newday:String,
    newno:Number,
    newtime:String,
    newlocation:String,
    newcourse:String

    //departmentsCount:Number
 

})
module.exports=mongoose.model('slot', slotSchema)