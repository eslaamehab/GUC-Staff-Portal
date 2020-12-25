const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const notificationSchema = new schema({
    Email:String,
    Message:String,
    courseCoordinatorEmail:String,
    headOfDepartementEmail:String,
    reasonOfRejection:String


    
    //departmentsCount:Number
 

})
module.exports=mongoose.model('notification', notificationSchema)
