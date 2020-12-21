const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const scheduleSchema = new schema({
    Email:String,
    saturday:[String],
    sunday:[String],
    monday:[String],
    tuesday:[String],
    wednesday:[String],
    thursday:[String],
    day:String,
    slot:Number,
    course:String
    
    //departmentsCount:Number
 

})
module.exports=mongoose.model('schedule', scheduleSchema)