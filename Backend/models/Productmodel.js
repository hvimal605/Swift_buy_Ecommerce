const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true }, // Unique identifier for the product
    Title: { type: String, required: true },            // Title of the product
    Description: { type: String, required: true },      // Description of the product
    Category: { type: String, required: true },         // Category of the product
    stemmedTokens: [String],                            // Array of preprocessed tokens
},);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
  