import mongoose from "mongoose";
const authorSchema= new mongoose.Schema({
    name:String,
    password:{
        type:String,
        required:true
    }
},{timestamps:true});
// use the same collection name "Author" in ref in post model
export default mongoose.model('Author',authorSchema);