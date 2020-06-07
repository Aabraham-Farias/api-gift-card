// Model
const pymeModel = require('../models/Users');
// Encrypt
const bcrypt = require('bcrypt');

module.exports = {
    create: (body) => {
        const newPyme = new pymeModel(body);
        return newPyme.save();
    },
    find: () => pymeModel.find(),
    findById: (id) => pymeModel.findById(id),
    findByEmail: (email) => pymeModel.findOne({ email }),
    update: (pyme, body) => {
        Object.assign(pyme, body);
        return pyme.save();
    },
    comparePasswords: (candidatePassword, password) => {
        return bcrypt.compareSync(candidatePassword, password);
    }
}