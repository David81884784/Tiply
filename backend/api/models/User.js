const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nume: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  parola: { type: String, required: true },
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
