const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGODB_URI || "your_mongo_db_connection_string";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Define Schema and Model
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

// Routes
app.post('/api/orders', (req, res) => {
  console.log('Received order request:', req.body); // Log the request body received
  
  const { name, address, phone, items } = req.body;

  const newOrder = new Order({
    name,
    address,
    phone,
    items
  });

  newOrder.save()
    .then(() => {
      console.log('Order saved successfully');
      res.status(200).json({ message: 'Order placed successfully' });
    })
    .catch(err => {
      console.error('Error saving order:', err);
      res.status(500).json({ message: 'Failed to place order' });
    });
});

// Route to get all orders (Admin Route)
app.get('/api/admin/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
});


// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
