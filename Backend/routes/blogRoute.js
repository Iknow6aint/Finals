const express = require('express');
const { createBlog } = require('../controllers/blogController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewears');

const BlogRouter = express.Router();

BlogRouter.post('/create-blog', authMiddleware, isAdmin, createBlog)


module.exports = BlogRouter