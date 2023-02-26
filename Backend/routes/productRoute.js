const express = require('express')

const { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const { isAdmin } = require('../middlewares/authMiddlewears');

const productRouter = express.Router();


productRouter.post('/create-product', createProduct)
productRouter.get('/:id', getaProduct)
productRouter.get('/', getAllProduct);
productRouter.put('/update/:id', updateProduct);
productRouter.delete('/delete/:id', deleteProduct);

module.exports = productRouter