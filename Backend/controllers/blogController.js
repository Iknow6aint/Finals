const Blog = require('../models/blogModel')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

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
    getAllBlogs
}