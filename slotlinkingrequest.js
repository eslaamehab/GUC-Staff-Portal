
const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const slotlinkingSchema = new schema({
    Email:String,
    CourseCoordinatorEmail:String,
    day:String,
    slot:Number,
    course:String,
    accepted:Number,
    status:String
    
    //departmentsCount:Number
 

})
module.exports=mongoose.model('slotlinkingrequest', slotlinkingSchema)
