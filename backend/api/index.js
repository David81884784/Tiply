const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const serverless = require('serverless-http');
require('dotenv').config();

const authRoutes = require('../routes/auth');

const app = express();

const allowedOrigins = [
  'https://tiply-qog1.vercel.app',
  'https://tiply-flame.vercel.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS']
};

// ✅ important: asta trebuie să vină PRIMA!
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // pentru preflight

app.use(express.json());

let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
}

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.use('/api', authRoutes);

module.exports = serverless(app);
