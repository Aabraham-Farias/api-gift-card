const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
<<<<<<< HEAD
  user: {
    type: Array,
    default: [],
  },
  data: {
    type: Array,
    default: [],
  },
  product: {
    type: Array,
    default: [],
  },


}, { timestamps: true });
=======
    user: {
        type: Array,
        default: []
    },
    data: {
        type: Array,
        default: []
    },
    product: {
        type: Array,
        default: []
    }


}, { timestamps: true })
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295


const Payment = mongoose.model('Payment', paymentSchema);

<<<<<<< HEAD
module.exports = { Payment };
=======
module.exports = { Payment }
>>>>>>> c7370140e49c537908e401e4c3f3ee0a7c265295
