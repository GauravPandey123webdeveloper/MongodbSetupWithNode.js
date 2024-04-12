import mongoose from "mongoose";
const postSchema= new mongoose.Schema({
    name:String,
    price:Number,
    // this author field will use in populate
    author:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"Author"
    }
},{timestamps:true});
// use the same collection name "post" in ref in post model
export default mongoose.model('post',postSchema);