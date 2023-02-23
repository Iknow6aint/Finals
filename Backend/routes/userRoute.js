const express = require('express');
const { getallUser, getaUser } = require('../controllers/userController');
const userRoute = express.Router();

userRoute.get('/all-users', getallUser)
userRoute.get("/:id", getaUser);

module.exports = userRoute;