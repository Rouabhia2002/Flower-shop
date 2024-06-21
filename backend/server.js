const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
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

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);



// Create a test user (only for demo, manage users properly in production)
const createTestUser = async () => {
  const existingUser = await User.findOne({ username: 'admin' });
  if (!existingUser) {
    const hashedPassword = await bcrypt.hash('admin', 10);
    const user = new User({ username: 'admin', password: hashedPassword });
    await user.save();
  }
};
createTestUser();

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Register route
app.post('/api/register', async (req, res) => {
  try {
    // Save user to MongoDB (already implemented)

    // Respond with a token upon successful registration
    const token = jwt.sign({ id: user._id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ token });

  } catch (error) {
    console.error('Registration failed:', error);
    res.status(400).json({ message: 'Registration failed' }); // Ensure proper error response
  }
});


// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Protect admin orders route with middleware
app.get('/api/admin/orders', verifyToken, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
});

// 

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});



