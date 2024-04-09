import studentModel from "../models/studentModel.mjs";
const findStudent = async (req, res) => {
  // const students= await studentModel.find();
  const students = await studentModel.findOne();
  res.status(200).send({ status: true, message: students });
};
const createStudent = async (req, res) => {
    try {
    const data = req.body;
    const {rollNo,email}=req.body;
    const checkUser=await studentModel.findOne({email:email,rollNo:rollNo});
     if(checkUser){
        return res.status(200).send({status:"failed",message:"user already exits"});
     }
    const createdStudent = await studentModel.create(data);
    //    const createdStudent= await studentModel.insertMany([data,data,data]);
    return res.status(201).send({ status: true, message: createdStudent });
    } catch (error) {
        return res.status(500).send({status:"failed",message:error.message})
    }
        
  
};
const deleteStudent = async (req, res) => {
  // const data= await studentModel.deleteMany({name:'tiwari'});
  try {
    const data = await studentModel.deleteOne({"email":"abc@gmail.com"});
    return res.status(200).send({ status: true, message: data });
  } catch (error) {
    return res.status(500).send({status:'failed',message:error.message})
  }
};
const updateStudent = async (req, res) => {
  const newStudent = await studentModel.updateOne(
    { name: "raja" },
    { $set: { name: "praja" } }
  );
  return res.status(200).send({ status: true, message: newStudent });
};
const searchStudent=async (req,res)=>{
  try {
    const {minage,maxage,semester}=req.query;
    // and operation works when all condition are true and it's also default
    // const result= await studentModel.find({$and:[{age:{$gte:minage,$lte:maxage}},{semester:semester}]});
    // or operator works when any of the condition is true
    // const result= await studentModel.find({$or:[{age:{$gte:minage,$lte:maxage}},{semester:semester}]});
    // it's works for all the values which are not mached with condition
    // const result= await studentModel.find({$nor:[{age:{$gte:minage,$lte:maxage}},{semester:semester}]});
    // const result= await studentModel.find({age:{$not:{$gt:minage}}});
    const result=await studentModel.where('age').equals(minage);
    return res.status(200).send({status:"successful",message:result});
  } catch (error) {
    return res.status(500).send({status:"failed",message:error.message})
  }
}
export { findStudent, createStudent, deleteStudent, updateStudent,searchStudent };
