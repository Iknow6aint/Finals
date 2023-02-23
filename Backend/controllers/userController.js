const User = require('../models/userModel')
const asyncHandler = require("express-async-handler");

// get all  users
const getallUser = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error);
    }
});

// get single user 
const getaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    //validateMongoDbId(id);

    try {
        const getaUser = await User.findById(id);
        res.json({
            getaUser,
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    getallUser,
    getaUser
}