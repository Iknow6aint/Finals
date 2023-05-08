const expressAsyncHandler = require("express-async-handler");
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require("../utills/validateMongodbid");
const category = require("../models/category");


const createCatgory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await category.create(req.body);
        res.json(newCategory)
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = {
    createCatgory
}