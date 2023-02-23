const express = require('express');
const { getallUser, getaUser, deleteaUser, updatedUser } = require('../controllers/userController');
const userRoute = express.Router();

userRoute.get('/all-users', getallUser)
userRoute.get("/:id", getaUser);
userRoute.get("/:id", deleteaUser);
userRoute.get("/:id", updatedUser);

module.exports = userRoute;