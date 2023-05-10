const User = require('../models/userModel')
const Product = require('../models/productModel')
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require('../utills/validateMongodbid');
const cartModel = require('../models/cartModel');

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
    validateMongoDbId(id);

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
    validateMongoDbId(id);

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
    validateMongoDbId(_id);
    /**
       * TODO:update user
       */
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

//block user
const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    //console.log(id);

    try {
        const blockusr = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: true,
            },
            {
                new: true,
            }
        );
        res.json({
            msg: 'user blocked'
        });
    } catch (error) {
        throw new Error(error);
    }
});
// unblock user
const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    /**
       * TODO:block users
     */
    try {
        const unblock = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: false,
            },
            {
                new: true,
            }
        );
        res.json({
            message: "User UnBlocked",
        });
    } catch (error) {
        throw new Error(error);
    }
});

const getWishList = asyncHandler(async (req, res) => {
    const { _id } = req.user;

    try {
        const findUser = User.findById(_id).populate('wishlist')
        res.json(findUser)
    } catch (error) {
        throw new Error(error)
    }
})

const saveUserAdddress = asyncHandler(async (req, res, next) => {
    const { _id } = req.user;
    const { address, city, state, country, zip } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            {
                address: address,
            },
            {
                new: true,
            }
        );
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
})

const userCart = asyncHandler(async (req, res) => {
    const { cart } = req.body;
    const { _id } = req.user;

    validateMongoDbId(_id)
    try {
        let products = []
        const user = await User.findById(_id)

        const prevCart = await cartModel.findOne({ orderby: user.id })

        if (prevCart) {
            prevCart.remove()
        }

        for (let i = 0; i < cart.length; i++) {
            const object = {};
            object.product = cart[i]._id;
            object.count = cart[i]._id;

            let getPrice = await Product.findById(cart[i]._id).select('price').exec()
            object.price = getPrice.price;
            products.push[object];
        }
        let cartTotal = 0
        for (let i = 0; i < array.length; i++) {
            cartTotal = cartTotal + products[i].price * products[i].count
        }
        const newCart = await new cartModel({
            products,
            cartTotal,
            orderby: user?._id
        }).save()
        res.json(newCart)
    } catch (error) {
        throw new Error(error)
    }
})

const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user
    try {
        const cart = await cartModel.findById({ orderby: _id }).populate(
            'products.product', "_id title price totalAfterDiscount"
        )
    } catch (error) {
        throw new Error(error)
    }
})

const emptyCart = asyncHandler(async (req, res) => {
    const { _id } = req.user
    try {
        const user = await User.findOne({ _id })

        const cart = await cartModel.findOneAndRemove({ orderby: user._id })
        res.json()
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    getallUser,
    getaUser,
    deleteaUser,
    updatedUser,
    blockUser,
    unblockUser,
    getWishList,
    saveUserAdddress,
    userCart,
    getUserCart,
    emptyCart
}