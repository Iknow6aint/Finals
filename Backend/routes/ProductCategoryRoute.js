const express = require('express')
const { createBlog } = require('../controllers/blogController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewears');
const { createCatgory, updateCategory, deleteCategory, getAllCategory } = require('../controllers/productCategory');

const categoryRouter = express.Router()


categoryRouter.post('/create', authMiddleware, isAdmin, createCatgory)
categoryRouter.put('/:id', authMiddleware, isAdmin, updateCategory)
categoryRouter.delete('/:id', authMiddleware, isAdmin, deleteCategory)
categoryRouter.get('/:id', authMiddleware, isAdmin, deleteCategory)
categoryRouter.get('/', authMiddleware, isAdmin, getAllCategory)

module.exports = categoryRouter;

