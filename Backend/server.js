const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const dbConnect = require('./config/dbConnet');
const authRouter = require('./routes/authRoute');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const userRoute = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');
const morgan = require('morgan')
const debug = require('debug');
const BlogRouter = require('./routes/blogRoute');
const categoryRouter = require('./routes/ProductCategoryRoute');

const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

debug(express)
app.use(morgan('dev'));



//db init



app.use(bodyParser.json(urlencoded({ extended: false })))
// Routes
app.use('/api/auth', authRouter)
app.use('/api/user', userRoute)
app.use('/api/product', productRouter)
app.use('/api/blog', BlogRouter)
app.use('/api/category', categoryRouter)



app.use('/', (req, res) => {
    res.send('iknowsaint')
})

app.use(errorHandler)
app.use(notFound)
//Listen
app.listen(PORT, () => {
    console.log(`running on ${PORT} 🌍🌍🌍🌍🌐`);
    dbConnect();
})