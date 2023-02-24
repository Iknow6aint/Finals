const express = require('express')
const { createUser, loginUserCtrl, handleRefreshToken } = require('../controllers/authControllers')
const authRouter = express.Router()


authRouter.post('/register', createUser)
authRouter.post('/login', loginUserCtrl)
authRouter.get('/refresh', handleRefreshToken)

module.exports = authRouter