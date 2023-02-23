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

//delete user
const deleteaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    //validateMongoDbId(id);

    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json({
            deleteaUser,
        });
    } catch (error) {
        throw new Error(error);
    }
});

// update user
const updatedUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    //validateMongoDbId(_id);

    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            {
                firstname: req?.body?.firstname,
                lastname: req?.body?.lastname,
                email: req?.body?.email,
                mobile: req?.body?.mobile,
            },
            {
                new: true,
            }
        );
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    getallUser,
    getaUser,
    deleteaUser,
    updatedUser
}