const express = require('express')

const { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const { isAdmin, authMiddleware } = require('../middlewares/authMiddlewears');

const productRouter = express.Router();


productRouter.post('/create-product', authMiddleware, isAdmin, createProduct)
productRouter.get('/:id', isAdmin, getaProduct)
productRouter.get('/', getAllProduct);
productRouter.put('/update/:id', authMiddleware, isAdmin, updateProduct);
productRouter.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct);

module.exports = productRouter