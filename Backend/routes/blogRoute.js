const express = require('express');
const { createBlog, updateBlog, getAllBlogs, getBlog, deleteBlog, likeBlog, disliketheBlog, uploadImages } = require('../controllers/blogController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewears');
const { blogImgResize } = require('../middlewares/uploadimages');
const { uploadPhoto, productIMgResize } = require('../middlewares/uploadimages');

const BlogRouter = express.Router();

BlogRouter.post('/create', authMiddleware, isAdmin, createBlog)
BlogRouter.put('/update/:id', authMiddleware, isAdmin, updateBlog)
BlogRouter.delete('/delete/:id', authMiddleware, isAdmin, deleteBlog)
BlogRouter.get('/', getAllBlogs);
BlogRouter.put('/upload/:id', authMiddleware, isAdmin, uploadPhoto.array('images', 10), blogImgResize, uploadImages);

BlogRouter.get('/:id', getBlog);
BlogRouter.get('/likes', authMiddleware, likeBlog);
BlogRouter.get('/dislike', authMiddleware, disliketheBlog);


module.exports = BlogRouter