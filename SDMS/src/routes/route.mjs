import express from "express";
import { findStudent,createStudent, deleteStudent, updateStudent } from "../controllers/studentController.mjs";
const router= express.Router();
router.get('/students',findStudent);
router.post('/addstudent',createStudent);
router.delete('/deletestudent',deleteStudent);
router.post('/updatestudent',updateStudent);
export default router;