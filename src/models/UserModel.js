const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  token: { type: String },
  refreshToken: { type: String },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model('user', UserSchema);
module.exports = User;
