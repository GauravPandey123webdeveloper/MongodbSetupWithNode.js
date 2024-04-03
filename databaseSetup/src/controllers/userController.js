const userModel=require('../models/userModel');
const user= async (req,res)=>{
    const data= req.body;
    const createdUser= await userModel.create(data);
    return res.send({status:'ok',message:createdUser});
}
module.exports=user;