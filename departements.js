
const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const departmentSchema = new schema({

    DepartmentName:String,
    FacultyName:String,
    Facultyid:{ type:mongoose.Schema.ObjectId,
                ref:'faculty'
      }
   //courses:

   // coursesInDepartments:[String]
 

})
module.exports=mongoose.model('departements', departmentSchema)
