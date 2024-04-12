import authorModel from "../models/authorModel.mjs"
const createAuthor= async (req,res)=>{
    try {
        const data= await authorModel.create(req.body);
        return res.status(201).send({status:true,message:data})
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}
export {createAuthor};