const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  img: {
    type: String,
  },
}, { timestamps: true });


const Products = mongoose.model('Product', productSchema);

module.exports = { Products, productSchema };
