const express = require('express')
const { createUser, loginUserCtrl } = require('../controllers/authControllers')
const authRouter = express.Router()


authRouter.post('/register', createUser)
authRouter.post('/login', loginUserCtrl)

module.exports = authRouter