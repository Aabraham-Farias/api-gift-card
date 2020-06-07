const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  calle: {
    type: String,
    require: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  cp: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  pais: {
    type: String,
    required: true,
  },
});

const Addresses = mongoose.model('Addresses', addressSchema);

module.exports = Addresses;
