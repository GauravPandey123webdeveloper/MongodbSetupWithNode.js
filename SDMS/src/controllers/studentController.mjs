import studentModel from "../models/studentModel.mjs";
const findStudent = async (req, res) => {
  // const students= await studentModel.find();
  const students = await studentModel.findOne();
  res.status(200).send({ status: true, message: students });
};
const createStudent = async (req, res) => {
  const data = req.body;
  const createdStudent = await studentModel.create(data);
  //    const createdStudent= await studentModel.insertMany([data,data,data]);
  return res.status(201).send({ status: true, message: createdStudent });
};
const deleteStudent = async (req, res) => {
  // const data= await studentModel.deleteMany({name:'tiwari'});
  try {
    const data = await studentModel.findByIdAndDelete({
      _id: "660f8e593b4a8a4a0efc47d@",
    });
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
