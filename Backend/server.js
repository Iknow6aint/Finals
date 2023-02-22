const express = require('express');
const dbConnect = require('./config/dbConnet');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;


dbConnect();

app.use('/', (req, res) => {
    console.log('hello world');
})
app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
})