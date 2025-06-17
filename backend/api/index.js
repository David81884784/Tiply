const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const serverless = require('serverless-http'); // ✅ OBLIGATORIU pentru Vercel
const User = require('../models/User');
require('dotenv').config();

const app = express();

// ✅ CORS fix pentru frontend-ul de pe Vercel
const allowedOrigins = ['https://tiply-flame.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'test';
const MONGODB_URI = process.env.MONGO_URI;

let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
}

app.post('/api/register', async (req, res) => {
  await connectDB();

  const { nume, email, parola } = req.body;
  if (!nume || !email || !parola)
    return res.status(400).json({ message: 'Toate câmpurile sunt obligatorii' });

  const userExist = await User.findOne({ email });
  if (userExist)
    return res.status(400).json({ message: 'Emailul este deja folosit' });

  const hashedPassword = await bcrypt.hash(parola, 10);
  const user = new User({ username: nume, email, password: hashedPassword });
  await user.save();

  res.status(201).json({ message: 'Utilizator înregistrat cu succes' });
});

app.post('/api/login', async (req, res) => {
  await connectDB();

  const { email, parola } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Email greșit' });

  const isMatch = await bcrypt.compare(parola, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Parolă greșită' });

  const token = jwt.sign(
    { userId: user._id, username: user.username },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
});

app.get('/', (req, res) => {
  res.send('✅ Backend funcționează pe Vercel');
});

// ✅ Export corect pentru Vercel
module.exports = serverless(app);
