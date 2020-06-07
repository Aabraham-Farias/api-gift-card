const Pyme = require('../models/Pyme');
const bcrypt = require('bcrypt');

module.exports = {
    create: (body) => {
        const newUser = new Pyme(body);
        return newUser.save();
    },
    find: () => Pyme.find(),
    findById: (id) => Pyme.findById(id),
    findByEmail: (email) => Pyme.findOne({ email }),
    update: (user, body) => {
        Object.assign(user, body);
        return user.save();
    },
    addGiftcard: (pyme, giftcard) => {
        pyme.giftcard.push(giftcard._id);
        return user.save();
    },
    findGiftcard: (pyme, getcart) => {
        const idGetcart = getcart._id;
        const getPyme = pyme;
        console.log('✅', pyme);
        console.log('✅', getPyme);
        console.log(`id del product:${idGetcart}`);
        return idGetcart;
    },
}