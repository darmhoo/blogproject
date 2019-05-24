const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: String,
  hash: String,
  password: String,
  role: String,
  firstname: String,
  lastname: String
},{
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);