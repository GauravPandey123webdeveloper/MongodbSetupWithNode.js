import postModel from "../models/postModel.mjs"
const createPost= async (req,res)=>{
    try {
        const data= await postModel.create(req.body);
        return res.status(201).send({status:true,message:data})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}
const findPost= async (req,res)=>{
    try {
        const data=  await postModel.find().populate("author");
        return res.status(200).send({status:true,message:data});
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}
export {createPost,findPost};