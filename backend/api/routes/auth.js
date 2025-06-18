const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'secret'; // fallback pt test local

// ✅ Register
router.post('/register', async (req, res) => {
  const { nume, email, parola } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email deja folosit' });

    const hashedPassword = await bcrypt.hash(parola, 10);
    const newUser = new User({ nume, email, parola: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Utilizator creat cu succes' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Eroare la înregistrare' });
  }
});

// ✅ Login
router.post('/login', async (req, res) => {
  const { email, parola } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Email greșit' });

    const isMatch = await bcrypt.compare(parola, user.parola);
    if (!isMatch) return res.status(400).json({ message: 'Parolă greșită' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, user: { id: user._id, nume: user.nume, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Eroare la login' });
  }
});

module.exports = router;
