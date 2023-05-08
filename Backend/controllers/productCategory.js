const expressAsyncHandler = require("express-async-handler");
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require("../utills/validateMongodbid");
const category = require("../models/ProductCategory");


const createCatgory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await category.create(req.body);
        res.json(newCategory)
    } catch (error) {
        throw new Error(error);
    }
})

// update blog 
const updateCategory = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        const updatedCategory = await category.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedCategory)
    } catch (error) {
        throw new Error(error)
    }
})

//delete category
const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deletedCategory = await category.findByIdAndDelete(id);
        res.json(deleteCategory);
    } catch (error) {
        throw new Error(error);
    }
});
module.exports = {
    createCatgory,
    updateCategory,
    deleteCategory,
}