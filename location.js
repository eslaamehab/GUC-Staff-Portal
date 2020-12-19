const { Double } = require('bson');
const { time } = require('console');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const locationSchema = new schema({
    roomName:String,
    Capacity:Number,
    Count:Number,
    type:String //
 

})
module.exports=mongoose.model('location', locationSchema)