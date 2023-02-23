const express = require('express')
const { createUser } = require('../controllers/userControllers')
const authRouter = express.Router()


authRouter.post('/register', createUser)

module.exports = authRouter