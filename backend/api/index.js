// /api/index.js

import express from 'express';
import serverless from 'serverless-http';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from '../routes/auth.js'; // Ajustează dacă e alt path

const app = express();

// CORS
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

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection
let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  isConnected = true;
}

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Rutele
app.use('/', authRoutes);

// Export Express as serverless function
export default serverless(app);
