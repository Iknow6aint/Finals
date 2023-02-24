const express = require('express')
const { createUser, loginUserCtrl, handleRefreshToken, logout } = require('../controllers/authControllers')
const authRouter = express.Router()


authRouter.post('/register', createUser)
authRouter.post('/login', loginUserCtrl)
authRouter.get('/refresh', handleRefreshToken)
authRouter.get('/logout', logout)

module.exports = authRouter