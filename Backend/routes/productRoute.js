const express = require('express')

const { createProduct, getaProduct, getAllProduct } = require("../controllers/productController");
const { isAdmin } = require('../middlewares/authMiddlewears');

const productRouter = express.Router();


productRouter.post('/create-product', createProduct)
productRouter.get('/:id', getaProduct)
productRouter.get('/', getAllProduct);

module.exports = productRouter