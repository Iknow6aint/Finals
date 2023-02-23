const express = require('express');
const { getallUser, getaUser, deleteaUser, updatedUser } = require('../controllers/userController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddlewears');
const userRoute = express.Router();

userRoute.get('/all-users', getallUser)
userRoute.get("/:id", authMiddleware, isAdmin, getaUser);
userRoute.get("/:id", deleteaUser);
userRoute.get("/:id", updatedUser);

module.exports = userRoute;