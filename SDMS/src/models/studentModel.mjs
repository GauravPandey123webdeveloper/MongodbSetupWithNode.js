import mongoose from "mongoose";
const studentShema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        uppercase:true,
        default:"testing"
    },
    rollNo: String,
    dob:String,
    batch: String,
    course:String,
    semester: Number,
    phone:String,
    age:Number,
    email:String,
    password:String,
    gender:String,
    id:mongoose.Types.ObjectId
},{timestamps:true});
export default mongoose.model('StudentData',studentShema);