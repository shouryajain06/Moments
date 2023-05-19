import express from "express";
import { likePost,createPost, getPost, updatePost, deletePost } from "../controllers/posts.js";
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/', getPost);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/like',auth, likePost);
export default router;

