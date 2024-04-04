import studentModel from "../models/studentModel.mjs";
const findStudent=async (req,res)=>{
 return res.send('hello class');
}
const createStudent=async (req,res)=>{
const data= req.body;
const createdStudent=await studentModel.create(data);
return res.send({status:'ok',message:createdStudent})
}
export {findStudent,createStudent};