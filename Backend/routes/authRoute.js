const express = require('express')
const { createUser, loginUserCtrl, handleRefreshToken, logout, updatePassword, loginAdminCtrl } = require('../controllers/authControllers')
const { authMiddleware } = require('../middlewares/authMiddlewears')
const authRouter = express.Router()


authRouter.post('/register', createUser)
authRouter.post('/login', loginUserCtrl)
authRouter.post('/admin-login', loginAdminCtrl)
authRouter.get('/refresh', handleRefreshToken)
authRouter.get('/logout', logout)
authRouter.post('/password', authMiddleware, updatePassword)

module.exports = authRouter