const express = require('express');
const { getallUser, getaUser, deleteaUser, updatedUser, blockUser, unblockUser } = require('../controllers/userController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewears');
const userRoute = express.Router();

userRoute.get('/all-users', getallUser)
userRoute.get("/:id", authMiddleware, isAdmin, getaUser);
userRoute.delete("/:id", deleteaUser);
userRoute.put("/edit-user", authMiddleware, updatedUser);
userRoute.put("/block-user/:id", authMiddleware, blockUser);
userRoute.put("/unblock-user/:id", authMiddleware, unblockUser);

module.exports = userRoute;