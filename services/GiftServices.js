const GiftCard = require('../models/GiftCard');
const bcrypt = require('bcrypt');

module.exports = {
    create: (body) => {
        const newUser = new GiftCard(body);
        return newUser.save();
    },
    find: () => GiftCard.find(),
    findById: (id) => GiftCard.findById(id),
    findByEmail: (email) => GiftCard.findOne({ email }),
    update: (user, body) => {
        Object.assign(user, body);
        return user.save();
    },
}