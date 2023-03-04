const express = require('express');
const { createBlog, updateBlog } = require('../controllers/blogController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewears');

const BlogRouter = express.Router();

BlogRouter.post('/create', authMiddleware, isAdmin, createBlog)
BlogRouter.put('/update/:id', authMiddleware, isAdmin, updateBlog)


module.exports = BlogRouter