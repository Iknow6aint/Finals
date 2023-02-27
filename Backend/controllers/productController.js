const Product = require('../models/productModel')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const slugify = require("slugify");
const validateMongoDbId = require("../utills/validateMongodbid");


// create product
const createProduct = asyncHandler(async (req, res) => {

    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }
})

const updateProduct = asyncHandler(async (req, res) => {
    /**
       * TODO:validate params
    */
    const id = req.params;
    validateMongoDbId(id);
    try {

        /**
       * TODO:slugify title
    */
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }


        /**
       * TODO:update oriduct
    */
        const updateProduct = await Product.findOneAndUpdate({ id }, req.body, {
            new: true,
        });
        res.json(updateProduct);
    } catch (error) {
        throw new Error(error);
    }
});


const getaProduct = asyncHandler(async (req, res) => {
    /**
       * TODO:validate params
    */
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteProduct = asyncHandler(async (req, res) => {
    /**
       * TODO:validate params
    */
    const id = req.params;
    validateMongoDbId(id);
    try {
        /**
       * TODO:delete product
    */
        const deleteProduct = await Product.findOneAndDelete(id);
        res.json(deleteProduct);
    } catch (error) {
        /**
       * TODO:return error
    */
        throw new Error(error);
    }
});


const getAllProduct = asyncHandler(async (req, res) => {
    try {
        // Filtering
        const queryObj = { ...req.query };
        const excludeFields = ["page", "sort", "limit", "fields"];
        excludeFields.forEach((el) => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

        let query = Product.find(JSON.parse(queryStr));
        // res.json(getAllProducts)
    } catch (error) {
        throw new Error(error)
    }
});


module.exports = {
    createProduct,
    getaProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
}