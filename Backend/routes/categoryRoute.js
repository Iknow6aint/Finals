const express = require('express')
const { createBlog } = require('../controllers/blogController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewears');
const { createCatgory } = require('../controllers/Category');

const categoryRouter = express.Router()


categoryRouter.post('/create', authMiddleware, isAdmin, createCatgory)




module.exports = categoryRouter;

