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
}