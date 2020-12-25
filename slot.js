const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const slotSchema = new schema({

   Email:String,
    day:String,
    type:String,
    no:Number,
    time:String,
    location:String,
    course:String,
    available:Number,
    newday:String,
    newno:Number,
    newtime:String,
    newlocation:String,
    newcourse:String,
    date:String

    //departmentsCount:Number
 

})
module.exports=mongoose.model('slot', slotSchema)