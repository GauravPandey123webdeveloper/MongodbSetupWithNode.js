import studentModel from "../models/studentModel.mjs";
const findStudent=async (req,res)=>{
    const students= await studentModel.findOne({name:"Arihant Singh Rana"});
    // const students= await studentModel.find({name:"Arihant Singh Rana"});
 return res.send({status:'ok',message:students});
}
const createStudent=async (req,res)=>{
const data= req.body;
const createdStudent=await studentModel.create(data);
return res.send({status:'ok',message:createdStudent})
}
export {findStudent,createStudent};