const mongoose = require('mongoose');

const OderProduct = mongoose.Schema({
  orderItem: [
    {
      quantity: { type: Number, default: 1, required: true },
      total: {
        type: Number,
        required: true,
      },
      products: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
      ],
    },
  ],
});
const shoppingCard = mongoose.model('shoppingCard', OderProduct);

module.exports = shoppingCard;
