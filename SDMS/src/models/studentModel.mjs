import mongoose from "mongoose";
const studentShema= new mongoose.Schema({
    name:String,
    rollNo: String,
    dob:String,
    batch: String,
    course:String,
    semester: Number,
    phone:String,
    age:Number,
    email:String,
    password:String,
    gender:String
},{timestamps:true});
export default mongoose.model('StudentData',studentShema);