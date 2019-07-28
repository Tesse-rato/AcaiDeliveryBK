const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const OrderSchema = new Schema({
  amountOrders: Number,
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  adress: {
    street: { type: String, required: true },
    district: { type: String, required: true },
    number: { type: String, required: true },
    city: { type: String, required: true },
  },
  payment: {
    type: { type: String, required: true },
    value: String,
  },
  cups: [
    {
      price: { type: Number, required: true },
      size: { type: Number, required: true },
      category: { type: String, required: true },
      owner: { type: String, required: true },
      additionals: { type: Array },
    }
  ]
});

module.exports = model('Order', OrderSchema);