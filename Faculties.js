const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const facultySchema = new schema({

    facultyName:String,
    departmentsInFaculties:[String],
    departmentsCount:Number
 

})
module.exports=mongoose.model('faculty', facultySchema)