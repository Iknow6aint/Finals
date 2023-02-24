const User = require('../models/userModel')
const asyncHandler = require("express-async-handler");
const userModel = require('../models/userModel');
const { generateToken } = require('../config/jwtToken');
const { generateRefereshToken } = require('../config/refreshToken');



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
        /**
        * TODO:affter user Login
        */
        const refreshToken = await generateRefereshToken(findUser?.id);
        /**
       * TODO:update refreshtoken
       */
        const updateuser = await User.findByIdAndUpdate(
            /**
       * TODO:update refreshtoken
       */
            findUser.id,
            {
                refreshToken: refreshToken,
            },
            { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        });
    } else {
        throw new Error("invalid credentials")
    }
});
// handle refersh token
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    /**
       * TODO:check for cookies
    */
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error(" No Refresh token present in db or not matched");
    /**
       * TODO:verify tokek
     */
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error("There is something wrong with refresh token");
        }
        const accessToken = generateToken(user?._id);
        res.json({ accessToken });
    });
});

// logout
const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });

    /**
       * TODO:check user
    */

    if (!user) {
        /**
       * TODO:clear cookies
       */
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
        });
        return res.sendStatus(204); // forbidden
    }
    await User.findOneAndUpdate(refreshToken, {
        refreshToken: "",
    });

    /**
       * TODO:update refreshtoken
    */
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    });
    res.sendStatus(204); // forbidden
});

module.exports = {
    createUser,
    loginUserCtrl,
    handleRefreshToken,
    logout
}