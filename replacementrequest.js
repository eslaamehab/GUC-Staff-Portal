const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const replacementrequestschema = new schema({
    
    Email:String,
    replacingTAEmail:String,
    HeadOfDepartmentEmail:String,
    date:String,
    slot:Number,
    course:String,
    location:String,
    time:String,
    accepted:Number,
    verifiedByHOD:Number,
    status:String,
    reasonOfrejection:String
 

})
module.exports=mongoose.model('replacementrequest', replacementrequestschema)