const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: Buffer || string, contentType: String },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;
