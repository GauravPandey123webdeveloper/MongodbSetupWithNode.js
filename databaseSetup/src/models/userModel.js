// import mongoose for mongoSchema and mongoosModel
const mongoose = require('mongoose');
const userSchema= new mongoose.Schema({
    name:String,
    password:String,
    phone:String
},{timestamps:true});
module.exports=mongoose.model('UserData',userSchema);