const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const transferSchema = mongoose.Schema({
    monto: {
        type: Number,
        default: 0,
    },

    /* Giftcard: [
        { type: Schema.Types.ObjectId, ref: 'Giftcard' }
    ],
    Pyme: [
        { type: Schema.Types.ObjectId, ref: 'Pyme' }
    ] */

})

const Transfer = mongoose.model('Transfer', transferSchema);

module.exports = Transfer;