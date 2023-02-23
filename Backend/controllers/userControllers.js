const User = require('../models/userModel')
const asyncHandler = require("express-async-handler");
const userModel = require('../models/userModel');

const createUser = asyncHandler(async (req, res) => {
    /**
     * TODO:Get the email from req.body
     */
    const email = req.body.email;
    /**
     * TODO:With the help of email find the user exists or not
     */
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
        /**
         * TODO:if user not found user create a new user
         */
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        /**
         * TODO:if user found then thow an error: User already exists
         */
        throw new Error("User Already Exists");
    }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const findUser = await User.findOne({ email })
    if (findUser && (await findUser.isPasswordMatched(password))) {
        res.json(findUser)
    } else {
        throw new Error("invalid credentials")
    }
});


module.exports = {
    createUser,
    loginUserCtrl
}