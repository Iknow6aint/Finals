const express = require('express')

const { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct, addToWishlist, ratings } = require("../controllers/productController");
const { isAdmin, authMiddleware } = require('../middlewares/authMiddlewears');
const { uploadPhoto, productIMgResize } = require('../middlewares/uploadimages');

const productRouter = express.Router();


productRouter.get('/', getAllProduct);
productRouter.post('/create', authMiddleware, isAdmin, createProduct)
productRouter.get('/:id', getaProduct)
productRouter.put('/update/:id', authMiddleware, isAdmin, updateProduct);
productRouter.put('/upload/:id', authMiddleware, isAdmin, uploadPhoto.array('images', 10), productIMgResize);
productRouter.put('/wishlist', authMiddleware, addToWishlist);
productRouter.put('/ratings', authMiddleware, ratings);
productRouter.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct);

module.exports = productRouter