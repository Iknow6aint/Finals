const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./config/dbConnet');
const authRouter = require('./routes/authRoute');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const userRoute = require('./routes/userRoute');


const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;


//db init
dbConnect();


app.use(bodyParser.json(urlencoded({ extended: false })))
// Routes
app.use('/api/user', authRouter)
app.use('/api/user', userRoute)


app.use('/', (req, res) => {
    console.log('hello world');
})

app.use(errorHandler)
app.use(notFound)
//Listen
app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
})