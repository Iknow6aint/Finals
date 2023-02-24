const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config();


const generateRefereshToken = (id) => {
    return jwt.sign({ id }, process.env.JWT, { expiresIn: '1h' })
}

module.exports = {
    generateRefereshToken
}