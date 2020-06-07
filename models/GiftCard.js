const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const giftCardSchema = mongoose.Schema({
    numero: {
        type: Number,
        default: 0,
    },
    monto: {
        type: Number,
        default: 0,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    fechaemitida: {
        type: String,
    },
    fechavencimiento: {
        type: String,
    },
    pyme: [
        { type: Schema.Types.ObjectId, ref: 'Pyme' }
    ],
})

const GiftCard = mongoose.model('GiftCard', giftCardSchema);

module.exports = GiftCard;