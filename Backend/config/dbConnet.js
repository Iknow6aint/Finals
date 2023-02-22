const { default: mongoose } = require("mongoose");

const dbConnect = () => {
    try {
        mongoose.set('strictQuery', true);
        const conn = mongoose.connect('mongodb://127.0.0.1:27017/finals', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('db connected');
    } catch (error) {
        console.log("db error");
    }
}

module.exports = dbConnect;