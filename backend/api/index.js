const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// ✅ CORS fix (acceptă orice origin)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// ✅ Body parser
app.use(express.json());

// ✅ MongoDB connect
const MONGO_URI = process.env.MONGO_URI;
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB error:', err));
}

// ✅ Routes
const authRoutes = require('../routes/auth');
app.use('/api', authRoutes);

// ✅ Default route (health check)
app.get('/api', (req, res) => {
  res.json({ message: 'API funcționează' });
});

module.exports = serverless(app);
