const express = require('express');
const { createBlog, updateBlog, getAllBlogs, getBlog, deleteBlog } = require('../controllers/blogController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewears');

const BlogRouter = express.Router();

BlogRouter.post('/create', authMiddleware, isAdmin, createBlog)
BlogRouter.put('/update/:id', authMiddleware, isAdmin, updateBlog)
BlogRouter.delete('/delete/:id', authMiddleware, isAdmin, deleteBlog)
BlogRouter.get('/', getAllBlogs);
BlogRouter.get('/:id', getBlog);


module.exports = BlogRouter