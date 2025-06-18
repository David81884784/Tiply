const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// 🔓 CORS complet deschis - acceptă cereri de la ORICE origine
app.use(cors()); // <–– fără nicio opțiune, permite tot

// Body parser
app.use(express.json());

// Conectare MongoDB
const MONGO_URI = process.env.MONGO_URI;
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB error:', err));
}

// Rute
const authRoutes = require('../routes/auth');
app.use('/api', authRoutes);

// Rută de test
app.get('/api', (req, res) => {
  res.json({ message: 'API funcționează!' });
});

module.exports = serverless(app);
