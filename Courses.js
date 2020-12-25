const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const coursesSchema = new schema({

   courseName:String,
   DepartmentName:String,
   CourseInstructor:String,
   Departmentid:{ type:mongoose.Schema.ObjectId,
        ref:'departements'},
 
    
    
 

})
module.exports=mongoose.model('courses', coursesSchema)