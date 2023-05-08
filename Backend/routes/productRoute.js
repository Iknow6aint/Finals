const express = require('express')

const { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct, addToWishlist } = require("../controllers/productController");
const { isAdmin, authMiddleware } = require('../middlewares/authMiddlewears');

const productRouter = express.Router();


productRouter.get('/', getAllProduct);
productRouter.post('/create', authMiddleware, isAdmin, createProduct)
productRouter.get('/:id', getaProduct)
productRouter.put('/update/:id', authMiddleware, isAdmin, updateProduct);
productRouter.put('/update/:id', authMiddleware, addToWishlist);
productRouter.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct);

module.exports = productRouter