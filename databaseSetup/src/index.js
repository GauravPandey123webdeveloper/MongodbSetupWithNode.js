const express= require('express');
const mongoose= require('mongoose');
//imported route file
const router=require('./routes/route')
const app= express();
app.use(express.json());
// moved to route.js
// const router= express.Router();
// router.get('/',function(req,res){
//     res.send('testing');
// })
mongoose.connect('mongodb+srv://gauravpandey:0gjbUrZLA2gVWIWC@cluster0.4o0ukju.mongodb.net/').then(()=>console.log('database connected')).catch((err)=>console.log(err));
app.use('/',router);
app.listen(8000,function(){
    console.log('server started on port',8000);
})