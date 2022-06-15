const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true },
        productName: { type: String, required: true},
        productType: { type: String, required: true},
        productPrice: {type: Number, required: true},
        productImage: {type: String, required: true},
        productRating: {type: Number, required: true},
        productQuantity: {type: String, required: true},
        productCategory: { type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;