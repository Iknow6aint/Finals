const express = require('express');

/**
 * TODO:import controllers
*/
const { getallUser, getaUser, deleteaUser, updatedUser, blockUser, unblockUser, getWishList, saveUserAdddress, userCart, getUserCart, emptyCart, applyCoupon } = require('../controllers/userController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewears');
const userRoute = express.Router();


/**
  * TODO: Routes
*/
userRoute.get('/all-users', getallUser)
userRoute.get("/:id", authMiddleware, isAdmin, getaUser);
userRoute.get("/wishlist", authMiddleware, getWishList);
userRoute.delete("/:id", deleteaUser);
userRoute.post("/cart", userCart);
userRoute.post("/cart/applycoupon", authMiddleware, applyCoupon);
userRoute.get("/cart", authMiddleware, getUserCart);
userRoute.get("/empty-cart", authMiddleware, emptyCart);
userRoute.put("/edit-user", authMiddleware, saveUserAdddress);
userRoute.put("/save-user-address", authMiddleware, updatedUser);
userRoute.put("/block-user/:id", authMiddleware, blockUser);
userRoute.put("/unblock-user/:id", authMiddleware, unblockUser);

module.exports = userRoute;