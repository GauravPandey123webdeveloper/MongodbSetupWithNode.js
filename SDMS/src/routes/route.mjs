import express from "express";
import { findStudent,createStudent, deleteStudent, updateStudent, searchStudent } from "../controllers/studentController.mjs";
const router= express.Router();
router.get('/students',findStudent);
router.post('/addstudent',createStudent);
router.delete('/deletestudent',deleteStudent);
router.post('/updatestudent',updateStudent);
router.get('/search',searchStudent);
export default router;