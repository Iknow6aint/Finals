const express = require('express')
const { createBlog } = require('../controllers/blogController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewears');
const { createCatgory, updateCategory } = require('../controllers/productCategory');

const categoryRouter = express.Router()


categoryRouter.post('/create', authMiddleware, isAdmin, createCatgory)
categoryRouter.put('/id', authMiddleware, isAdmin, updateCategory)




module.exports = categoryRouter;

