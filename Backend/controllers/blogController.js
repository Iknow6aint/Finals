const Blog = require('../models/blogModel')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require("../utills/validateMongodbid");

const createBlog = asyncHandler(async (req, res) => {
    try {
        const blog = await Blog.create(req.body)
        res.json(blog)
    } catch (error) {
        throw new Error(error)
    }
})


// update blog 
const updateBlog = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedBlog)
    } catch (error) {
        throw new Error(error)
    }
})

//get a blog
const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getBlog = await Blog.findById(id)
        // .populate("likes")
        // .populate("dislikes");

        /**
       * TODO:update View on request
    */
        const updateViews = await Blog.findByIdAndUpdate(
            id,
            {
                $inc: { numViews: 1 },
            },
            { new: true }
        );
        res.json(getBlog);
    } catch (error) {
        throw new Error(error);
    }
});

// get all blogs
const getAllBlogs = asyncHandler(async (req, res) => {
    try {
        const getBlogs = await Blog.find();
        res.json(getBlogs);
    } catch (error) {
        throw new Error(error);
    }
});



module.exports = {
    createBlog,
    updateBlog,
    getBlog,
    getAllBlogs
}