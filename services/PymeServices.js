const Pyme = require('../models/Pyme');

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
        pyme.gifcard.push(giftcard._id);
        return pyme.save();
    },
    findGiftcard: (pyme, getcart) => {
        const idGetcart = getcart._id;
        const getPyme = pyme;
        console.log('✅', pyme);
        console.log('✅', getPyme);
        console.log(`id del gitfcart:${idGetcart}`);
        return idGetcart;
    },
    updateAmount: (pyme, amount) => {
      const pymeAmount = pyme.monto;
      const newPymeTotalAmount = pymeAmount + amount;
      pyme.monto = newPymeTotalAmount;
      return pyme.save();
    },
}