import express from "express";
import { findStudent } from "../controllers/fstController.mjs";
const router=express.Router();
router.get('/',findStudent);
export default router;