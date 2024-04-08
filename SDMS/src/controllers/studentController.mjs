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
    console.log(checkUser);
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
export { findStudent, createStudent, deleteStudent, updateStudent };
