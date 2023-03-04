const express = require('express');
const { createBlog, updateBlog, getAllBlogs, getBlog } = require('../controllers/blogController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewears');

const BlogRouter = express.Router();

BlogRouter.post('/create', authMiddleware, isAdmin, createBlog)
BlogRouter.put('/update/:id', authMiddleware, isAdmin, updateBlog)
BlogRouter.get('/', getAllBlogs);
BlogRouter.get('/:id', getBlog);


module.exports = BlogRouter