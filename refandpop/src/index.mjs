import express from 'express';
import mongoose from 'mongoose'
import router from './routes/route.mjs'
const app= express();
app.use(express.json());
mongoose.connect('mongodb+srv://gauravpandey:0gjbUrZLA2gVWIWC@cluster0.4o0ukju.mongodb.net/').then(()=>console.log('database connected')).catch((err)=>console.log(err));
app.use('/',router);
app.listen(8000,function(){
    console.log('server started on port',8000);
})