import express from 'express';
import { createAuthor } from '../controllers/authorController.mjs';
import { createPost, findPost } from '../controllers/postController.mjs';
const router= express.Router();
router.post('/createauthor',createAuthor)
router.post('/createpost',createPost);
router.get('/posts',findPost)
export default router;