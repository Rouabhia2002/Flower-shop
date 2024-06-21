const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  items: [
    {
      title: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ]
}, { collection: 'coliers' });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
