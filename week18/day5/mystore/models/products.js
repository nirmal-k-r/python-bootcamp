const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: true,
        unique: true
    },
    "price": {
        type: Number,
    },
    "description": {
        type: String,
    },
    "category": {
        type: String,
    },
    "quantity": {
        type: Number,
    }
});  

const Product = mongoose.model('Product', productSchema);
mongoose.model = Product;

