const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const serverless = require('serverless-http');
require('dotenv').config();

const authRoutes = require('../routes/auth');

const app = express();

const allowedOrigins = [
  'https://tiply-flame.vercel.app',
  'https://tiply-qog1.vercel.app'
];

// ✅ CORS trebuie aplicat global și corect
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
};

app.use(cors(corsOptions));

// ✅ Răspuns la preflight requests (OPTIONS)
app.options('*', cors(corsOptions));

// JSON parser
app.use(express.json());

// ✅ Mongo connect o singură dată
let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
}

// Middleware de conexiune Mongo
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Rutele API
app.use('/api', authRoutes);

// Export pentru Vercel
module.exports = serverless(app);
