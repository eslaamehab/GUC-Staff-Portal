
const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const departmentsSchema = new schema({

    DepartmentName:String,
    FacultyName:String,
    Facultyid:{ type:mongoose.Schema.ObjectId,
                ref:'faculty'
      }
   //courses:

   // coursesInDepartments:[String]
 

})
module.exports=mongoose.model('departments', departmentsSchema)
