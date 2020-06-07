const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const PymeSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
    },
    giro: {
        type: String,
        require: true,
    },
    monto: {
        type: Number,
        default: 0,
    },
    correo: {
        type: String,
        require: true,
    },

    is_active: {
        type: Boolean,
        default: true,
    },
    cuentabancaria: {
        type: Number,
        default: 0,
        require: true,
    },
    telefono: {
        type: String,
    },
    gifcard: [
        { type: Schema.Types.ObjectId, ref: 'GiftCard' }
    ],
})

const Pyme = mongoose.model('Pyme', PymeSchema);

module.exports = Pyme;