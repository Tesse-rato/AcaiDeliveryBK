const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  userName: {
    type: String,
    unique: true
  },
  name: String,
  password: String,
  city: String,
  district: String,
  street: String,
  number: String,
});

module.exports = model('User', UserSchema);