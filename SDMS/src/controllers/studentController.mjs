import studentModel from "../models/studentModel.mjs";
const findStudent= async (req,res)=>{
    // const students= await studentModel.find();
    const students= await studentModel.findOne();
    res.send({status:true,message:students});
}
const createStudent= async (req,res)=>{
   const data = req.body;
   const createdStudent= await studentModel.create(data);
//    const createdStudent= await studentModel.insertMany([data,data,data]);
   return res.send({status:true,message:createdStudent})
}
const deleteStudent= async (req,res)=>{
    // const data= await studentModel.deleteMany({name:'tiwari'});
    const data= await studentModel.findByIdAndDelete({_id:"660f84b9acf3cfc26243838e"});
    return res.send({status:true,message:data});
}
const updateStudent= async (req,res)=>{
const newStudent= await studentModel.updateOne({"name":"raja"},{$set:{"name":"praja"}});
return res.send({status:true,message:newStudent})
}
export {findStudent,createStudent,deleteStudent,updateStudent};