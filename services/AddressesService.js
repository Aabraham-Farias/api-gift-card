const { Addresses } = require('../models/Addresses');

module.exports = {
  create: (body) => {
    const newAddress = new Addresses(body);
    return newAddress.save();
  },
  find: () => Addresses.find(),
  findById: (id) => Addresses.findById(id),
  update: (address, body) => {
    Object.assign(address, body);
    return address.save();
  },
};
