const mongoose = require('mongoose');
<<<<<<< HEAD

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
=======
const Schema = mongoose.Schema;

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
    }
}, { timestamps: true })

>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295


const Products = mongoose.model('Product', productSchema);

<<<<<<< HEAD
module.exports = { Products, productSchema };
=======
module.exports = { Products, productSchema };
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
