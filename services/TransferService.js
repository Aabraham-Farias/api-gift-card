const Transfers = require('../models/Transfers');
const bcrypt = require('bcrypt');

module.exports = {
    create: (body) => {
        const newUser = new Transfers(body);
        return newUser.save();
    },
    find: () => Transfers.find(),
    findById: (id) => Transfers.findById(id),
    findByEmail: (email) => Transfers.findOne({ email }),
    update: (user, body) => {
        Object.assign(user, body);
        return user.save();
    },
}