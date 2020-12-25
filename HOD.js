const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const HODSchema = new schema({


    HODname:String,
    HODdepartment:String
   
    
 

})
module.exports=mongoose.model('HOD',HODSchema )