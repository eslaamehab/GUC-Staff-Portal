const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const dayoffSchema = new schema({
    Email:String,
    headOfDepartementEmail:String,
    requestedDayOff:String,
    accepted:Number,
    status:String,
    reasonOfrequest:String,
    reasonOfRejection:String
    
    //departmentsCount:Number
 

})
module.exports=mongoose.model('dayoffrequest', dayoffSchema)
