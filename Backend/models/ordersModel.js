const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema({
    products: [
        {
            products: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            count: Number,
        },
    ],
    paymentInent: {},
    orderStatus: {
        type: String,
        default: 'Not Processed',
        enum: [
            "Not Processed",
            "Cash on delivery",
            "Processing",
            "Dispatched",
            "Cancelled",
            "Delivered"
        ]
    },
    orderby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

});

//Export the model
module.exports = mongoose.model('Order', orderSchema);