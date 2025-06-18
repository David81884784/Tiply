const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'https://frontend-p57dl0eab-davids-projects-a9354ccb.vercel.app',
  credentials: true
}));

// Conectare MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB conectat'))
  .catch((err) => console.error('❌ MongoDB eroare:', err));

// Import și montare rute
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

// Rută test
app.get('/api', (req, res) => {
  res.json({ message: 'API funcționează!' });
});

module.exports = app;
