const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv').config();

const dbConnect = () => {
    try {
        mongoose.set('strictQuery', true);
        const conn = mongoose.connect(process.env.Mongo, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('db connected');
    } catch (error) {
        console.log("db error");
    }
}

module.exports = dbConnect;