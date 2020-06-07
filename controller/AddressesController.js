const { AddressesService } = require('../services');
const utils = require('../utils');

module.exports = {
  create: async (req, res) => {
    try {
      const addresses = await AddressesService.create(req.body);
      res.status(201).send(addresses);
    } catch (error) {
      res.status(400).send({ message: 'Error creating addresses' });
    }
  },
  find: async (req, res) => {
    try {
      const addresses = await AddressesService.find();
      res.status(200).send(addresses);
    } catch (error) {
      res.status(404).send({ message: 'Addresses not found', error });
    }
  },
  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const addresses = await AddressesService.findById(id);
      res.status(200).send(addresses);
    } catch (error) {
      res.status(404).send({ message: 'Product not found', error });
    }
  },
  findByIdAndUpdate: async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
      const addresses = await AddressesService.findByIdAndUpdate(id);
      const AddressesInfo = await AddressesService.update(addresses, body);
      res.status(200).send(AddressesInfo);
    } catch (error) {
      res.status(404).send({ message: 'Product no found', error });
    }
  },
  findByIdAndDelete: async (req, res) => {
    const { id } = req.params;

    try {
      const addresses = await AddressesService.findById(id);
      await AddressesService.update(addresses, { is_active: false });
      res.status(204).send();
    } catch (error) {
      res.status(404).send({ message: 'Error deleting addresses' });
    }
  },
};
